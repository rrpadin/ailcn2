'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import {
  BookOpen,
  CalendarDays,
  Download,
  Mail,
  Trash2,
  Upload,
  Users,
} from 'lucide-react';

type ResourceItem = {
  id: string;
  title: string;
  type: string;
  url: string;
  summary: string;
  visibility: 'Draft' | 'Published';
  createdAt: string;
};

type LeadItem = {
  id: string;
  name: string;
  email: string;
  company: string;
  source: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Won';
  notes: string;
  createdAt: string;
};

type AppointmentItem = {
  id: string;
  contactName: string;
  email: string;
  company: string;
  scheduledFor: string;
  meetingType: string;
  status: 'Scheduled' | 'Completed' | 'Canceled';
  notes: string;
  createdAt: string;
};

type AdminStore = {
  resources: ResourceItem[];
  leads: LeadItem[];
  appointments: AppointmentItem[];
};

type ResourceFormState = {
  title: string;
  type: string;
  url: string;
  summary: string;
  visibility: 'Draft' | 'Published';
};

type LeadFormState = {
  name: string;
  email: string;
  company: string;
  source: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Won';
  notes: string;
};

type AppointmentFormState = {
  contactName: string;
  email: string;
  company: string;
  scheduledFor: string;
  meetingType: string;
  status: 'Scheduled' | 'Completed' | 'Canceled';
  notes: string;
};

const STORAGE_KEY = 'ailcn-admin-store';

const emptyStore: AdminStore = {
  resources: [],
  leads: [],
  appointments: [],
};

const emptyResourceForm: ResourceFormState = {
  title: '',
  type: 'Guide',
  url: '',
  summary: '',
  visibility: 'Draft',
};

const emptyLeadForm: LeadFormState = {
  name: '',
  email: '',
  company: '',
  source: 'Website inquiry',
  status: 'New',
  notes: '',
};

const emptyAppointmentForm: AppointmentFormState = {
  contactName: '',
  email: '',
  company: '',
  scheduledFor: '',
  meetingType: 'Discovery call',
  status: 'Scheduled',
  notes: '',
};

function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function formatTimestamp(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));
}

function PanelHeading({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof BookOpen;
  title: string;
  body: string;
}) {
  return (
    <div className="mb-6 flex items-start gap-4">
      <div className="rounded-2xl bg-navy p-3 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-navy">{title}</h2>
        <p className="mt-2 max-w-2xl text-base leading-7 text-navy/70">{body}</p>
      </div>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">{label}</p>
      <p className="mt-4 text-4xl font-bold text-navy">{value}</p>
      <p className="mt-3 text-sm leading-6 text-navy/65">{detail}</p>
    </div>
  );
}

function FieldLabel({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-navy/65">
        {label}
      </span>
      {children}
    </label>
  );
}

function inputClasses() {
  return 'w-full rounded-2xl border border-navy/15 bg-white px-4 py-3 text-base text-navy outline-none transition-colors duration-200 placeholder:text-navy/35 focus:border-blue focus-visible:ring-2 focus-visible:ring-blue';
}

export function AdminWorkspace() {
  const [store, setStore] = useState<AdminStore>(emptyStore);
  const [resourceForm, setResourceForm] = useState<ResourceFormState>(emptyResourceForm);
  const [leadForm, setLeadForm] = useState<LeadFormState>(emptyLeadForm);
  const [appointmentForm, setAppointmentForm] =
    useState<AppointmentFormState>(emptyAppointmentForm);
  const [importText, setImportText] = useState('');
  const [statusMessage, setStatusMessage] = useState('Local data stays in this browser.');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedValue = window.localStorage.getItem(STORAGE_KEY);

      if (storedValue) {
        setStore(JSON.parse(storedValue) as AdminStore);
      }
    } catch {
      setStatusMessage('Saved admin data could not be loaded. Starting with an empty workspace.');
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }, [isLoaded, store]);

  const qualifiedLeads = store.leads.filter((lead) => lead.status === 'Qualified').length;
  const upcomingAppointments = store.appointments.filter(
    (appointment) => appointment.status === 'Scheduled',
  ).length;

  function addResource() {
    if (!resourceForm.title.trim() || !resourceForm.url.trim()) {
      setStatusMessage('Resources need at least a title and URL.');
      return;
    }

    const nextResource: ResourceItem = {
      id: createId('resource'),
      title: resourceForm.title.trim(),
      type: resourceForm.type.trim(),
      url: resourceForm.url.trim(),
      summary: resourceForm.summary.trim(),
      visibility: resourceForm.visibility,
      createdAt: new Date().toISOString(),
    };

    setStore((current) => ({
      ...current,
      resources: [nextResource, ...current.resources],
    }));
    setResourceForm(emptyResourceForm);
    setStatusMessage(`Added resource: ${nextResource.title}`);
  }

  function addLead() {
    if (!leadForm.name.trim() || !leadForm.email.trim()) {
      setStatusMessage('Leads need at least a name and email.');
      return;
    }

    const nextLead: LeadItem = {
      id: createId('lead'),
      name: leadForm.name.trim(),
      email: leadForm.email.trim(),
      company: leadForm.company.trim(),
      source: leadForm.source.trim(),
      status: leadForm.status,
      notes: leadForm.notes.trim(),
      createdAt: new Date().toISOString(),
    };

    setStore((current) => ({
      ...current,
      leads: [nextLead, ...current.leads],
    }));
    setLeadForm(emptyLeadForm);
    setStatusMessage(`Captured lead: ${nextLead.name}`);
  }

  function addAppointment() {
    if (!appointmentForm.contactName.trim() || !appointmentForm.scheduledFor.trim()) {
      setStatusMessage('Appointments need a contact name and scheduled time.');
      return;
    }

    const nextAppointment: AppointmentItem = {
      id: createId('appointment'),
      contactName: appointmentForm.contactName.trim(),
      email: appointmentForm.email.trim(),
      company: appointmentForm.company.trim(),
      scheduledFor: appointmentForm.scheduledFor,
      meetingType: appointmentForm.meetingType.trim(),
      status: appointmentForm.status,
      notes: appointmentForm.notes.trim(),
      createdAt: new Date().toISOString(),
    };

    setStore((current) => ({
      ...current,
      appointments: [nextAppointment, ...current.appointments],
    }));
    setAppointmentForm(emptyAppointmentForm);
    setStatusMessage(`Scheduled appointment: ${nextAppointment.contactName}`);
  }

  function updateLeadStatus(id: string, status: LeadItem['status']) {
    setStore((current) => ({
      ...current,
      leads: current.leads.map((lead) => (lead.id === id ? { ...lead, status } : lead)),
    }));
  }

  function updateAppointmentStatus(id: string, status: AppointmentItem['status']) {
    setStore((current) => ({
      ...current,
      appointments: current.appointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status } : appointment,
      ),
    }));
  }

  function updateResourceVisibility(id: string, visibility: ResourceItem['visibility']) {
    setStore((current) => ({
      ...current,
      resources: current.resources.map((resource) =>
        resource.id === id ? { ...resource, visibility } : resource,
      ),
    }));
  }

  function deleteResource(id: string) {
    setStore((current) => ({
      ...current,
      resources: current.resources.filter((resource) => resource.id !== id),
    }));
    setStatusMessage('Resource removed.');
  }

  function deleteLead(id: string) {
    setStore((current) => ({
      ...current,
      leads: current.leads.filter((lead) => lead.id !== id),
    }));
    setStatusMessage('Lead removed.');
  }

  function deleteAppointment(id: string) {
    setStore((current) => ({
      ...current,
      appointments: current.appointments.filter((appointment) => appointment.id !== id),
    }));
    setStatusMessage('Appointment removed.');
  }

  function exportSnapshot() {
    const blob = new Blob([JSON.stringify(store, null, 2)], {
      type: 'application/json',
    });
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `ailcn-admin-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(downloadUrl);
    setStatusMessage('Admin snapshot downloaded.');
  }

  function importSnapshot() {
    if (!importText.trim()) {
      setStatusMessage('Paste a JSON snapshot first.');
      return;
    }

    try {
      const parsedValue = JSON.parse(importText) as AdminStore;

      setStore({
        resources: parsedValue.resources ?? [],
        leads: parsedValue.leads ?? [],
        appointments: parsedValue.appointments ?? [],
      });
      setImportText('');
      setStatusMessage('Admin snapshot imported.');
    } catch {
      setStatusMessage('Snapshot import failed. Check that the JSON is valid.');
    }
  }

  return (
    <div className="space-y-10">
      <div className="rounded-2xl border border-blue/20 bg-blue/10 p-6 text-navy">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Local-only workspace</p>
        <p className="mt-3 max-w-4xl text-lg leading-8 text-navy/80">
          This admin page is a lightweight prototype. There is no login, no shared backend, and no
          cross-device sync yet. Everything here is saved only in this browser through local
          storage.
        </p>
        <p className="mt-4 text-sm leading-6 text-navy/65">{statusMessage}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <SummaryCard
          label="Resources"
          value={String(store.resources.length)}
          detail="Library entries saved for reuse in proposals, newsletters, or follow-up."
        />
        <SummaryCard
          label="Leads"
          value={String(store.leads.length)}
          detail="Inbound contacts captured directly inside this browser."
        />
        <SummaryCard
          label="Qualified"
          value={String(qualifiedLeads)}
          detail="Leads currently marked as qualified and ready for deeper follow-up."
        />
        <SummaryCard
          label="Scheduled"
          value={String(upcomingAppointments)}
          detail="Appointments that are still active on your calendar list."
        />
      </div>

      <div className="rounded-2xl border border-navy/10 bg-white p-8">
        <PanelHeading
          icon={Download}
          title="Snapshot tools"
          body="Export your local admin data as JSON or import a previous snapshot back into this browser."
        />
        <div className="grid gap-6 md:grid-cols-[auto,1fr]">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-navy px-6 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-navy-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
            onClick={exportSnapshot}
          >
            <Download className="h-5 w-5" />
            Download snapshot
          </button>
          <div className="space-y-3">
            <FieldLabel label="Import snapshot JSON">
              <textarea
                className={`${inputClasses()} min-h-32 resize-y`}
                placeholder="Paste a previous JSON snapshot here."
                value={importText}
                onChange={(event) => setImportText(event.target.value)}
              />
            </FieldLabel>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-navy/15 px-5 py-3 text-base font-semibold text-navy transition-colors duration-200 hover:bg-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              onClick={importSnapshot}
            >
              <Upload className="h-5 w-5" />
              Import snapshot
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-navy/10 bg-white p-8">
        <PanelHeading
          icon={BookOpen}
          title="Resource library"
          body="Add reusable links, guides, templates, or assets you want close at hand when following up with consultants or prospects."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr,1.4fr]">
          <div className="space-y-4">
            <FieldLabel label="Title">
              <input
                className={inputClasses()}
                placeholder="Founding cohort onboarding guide"
                value={resourceForm.title}
                onChange={(event) =>
                  setResourceForm((current) => ({ ...current, title: event.target.value }))
                }
              />
            </FieldLabel>
            <div className="grid gap-4 sm:grid-cols-2">
              <FieldLabel label="Type">
                <input
                  className={inputClasses()}
                  placeholder="Guide"
                  value={resourceForm.type}
                  onChange={(event) =>
                    setResourceForm((current) => ({ ...current, type: event.target.value }))
                  }
                />
              </FieldLabel>
              <FieldLabel label="Visibility">
                <select
                  className={inputClasses()}
                  value={resourceForm.visibility}
                  onChange={(event) =>
                    setResourceForm((current) => ({
                      ...current,
                      visibility: event.target.value as ResourceItem['visibility'],
                    }))
                  }
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </FieldLabel>
            </div>
            <FieldLabel label="URL">
              <input
                className={inputClasses()}
                placeholder="https://..."
                value={resourceForm.url}
                onChange={(event) =>
                  setResourceForm((current) => ({ ...current, url: event.target.value }))
                }
              />
            </FieldLabel>
            <FieldLabel label="Summary">
              <textarea
                className={`${inputClasses()} min-h-32 resize-y`}
                placeholder="What this resource is for and when to use it."
                value={resourceForm.summary}
                onChange={(event) =>
                  setResourceForm((current) => ({ ...current, summary: event.target.value }))
                }
              />
            </FieldLabel>
            <button
              type="button"
              className="rounded-2xl bg-blue px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              onClick={addResource}
            >
              Add resource
            </button>
          </div>

          <div className="space-y-4">
            {store.resources.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-navy/15 bg-off-white p-8 text-base leading-7 text-navy/65">
                No resources yet. Add the first one from the form and it will appear here.
              </div>
            ) : (
              store.resources.map((resource) => (
                <article
                  key={resource.id}
                  className="rounded-2xl border border-navy/10 bg-off-white p-6"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue">
                        {resource.type}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-navy">{resource.title}</h3>
                      <p className="mt-3 text-base leading-7 text-navy/75">{resource.summary}</p>
                      <a
                        className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-blue transition-colors duration-200 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                        href={resource.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Mail className="h-4 w-4" />
                        Open resource
                      </a>
                    </div>
                    <div className="flex flex-col gap-3 md:w-52">
                      <select
                        className={inputClasses()}
                        value={resource.visibility}
                        onChange={(event) =>
                          updateResourceVisibility(
                            resource.id,
                            event.target.value as ResourceItem['visibility'],
                          )
                        }
                      >
                        <option value="Draft">Draft</option>
                        <option value="Published">Published</option>
                      </select>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-red-200 px-4 py-3 text-base font-semibold text-red-700 transition-colors duration-200 hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                        onClick={() => deleteResource(resource.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-navy/55">
                    Saved {formatTimestamp(resource.createdAt)}
                  </p>
                </article>
              ))
            )}
          </div>
        </div>
      </div>

      <div id="leads" className="rounded-2xl border border-navy/10 bg-white p-8">
        <PanelHeading
          icon={Users}
          title="Lead capture"
          body="Track who has reached out, how they found AILCN, and where they are in your follow-up pipeline."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr,1.4fr]">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <FieldLabel label="Name">
                <input
                  className={inputClasses()}
                  placeholder="Jordan Lee"
                  value={leadForm.name}
                  onChange={(event) =>
                    setLeadForm((current) => ({ ...current, name: event.target.value }))
                  }
                />
              </FieldLabel>
              <FieldLabel label="Email">
                <input
                  className={inputClasses()}
                  placeholder="jordan@company.com"
                  value={leadForm.email}
                  onChange={(event) =>
                    setLeadForm((current) => ({ ...current, email: event.target.value }))
                  }
                />
              </FieldLabel>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <FieldLabel label="Company">
                <input
                  className={inputClasses()}
                  placeholder="PeopleWorks"
                  value={leadForm.company}
                  onChange={(event) =>
                    setLeadForm((current) => ({ ...current, company: event.target.value }))
                  }
                />
              </FieldLabel>
              <FieldLabel label="Source">
                <input
                  className={inputClasses()}
                  placeholder="Website inquiry"
                  value={leadForm.source}
                  onChange={(event) =>
                    setLeadForm((current) => ({ ...current, source: event.target.value }))
                  }
                />
              </FieldLabel>
            </div>
            <FieldLabel label="Status">
              <select
                className={inputClasses()}
                value={leadForm.status}
                onChange={(event) =>
                  setLeadForm((current) => ({
                    ...current,
                    status: event.target.value as LeadItem['status'],
                  }))
                }
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Won">Won</option>
              </select>
            </FieldLabel>
            <FieldLabel label="Notes">
              <textarea
                className={`${inputClasses()} min-h-32 resize-y`}
                placeholder="Context from the inquiry, follow-up timing, or next step."
                value={leadForm.notes}
                onChange={(event) =>
                  setLeadForm((current) => ({ ...current, notes: event.target.value }))
                }
              />
            </FieldLabel>
            <button
              type="button"
              className="rounded-2xl bg-blue px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              onClick={addLead}
            >
              Add lead
            </button>
          </div>

          <div className="space-y-4">
            {store.leads.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-navy/15 bg-off-white p-8 text-base leading-7 text-navy/65">
                No leads captured yet. Add the first contact from the form.
              </div>
            ) : (
              store.leads.map((lead) => (
                <article
                  key={lead.id}
                  className="rounded-2xl border border-navy/10 bg-off-white p-6"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-navy">{lead.name}</h3>
                      <p className="mt-2 text-base leading-7 text-navy/75">
                        {lead.company ? `${lead.company} · ` : ''}
                        {lead.email}
                      </p>
                      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-blue">
                        {lead.source}
                      </p>
                      {lead.notes ? (
                        <p className="mt-3 text-base leading-7 text-navy/75">{lead.notes}</p>
                      ) : null}
                    </div>
                    <div className="flex flex-col gap-3 md:w-52">
                      <select
                        className={inputClasses()}
                        value={lead.status}
                        onChange={(event) =>
                          updateLeadStatus(lead.id, event.target.value as LeadItem['status'])
                        }
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Qualified">Qualified</option>
                        <option value="Won">Won</option>
                      </select>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-red-200 px-4 py-3 text-base font-semibold text-red-700 transition-colors duration-200 hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                        onClick={() => deleteLead(lead.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-navy/55">
                    Added {formatTimestamp(lead.createdAt)}
                  </p>
                </article>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-navy/10 bg-white p-8">
        <PanelHeading
          icon={CalendarDays}
          title="Appointments"
          body="Keep a lightweight scheduling log for discovery calls, founder conversations, and follow-up sessions."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr,1.4fr]">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <FieldLabel label="Contact name">
                <input
                  className={inputClasses()}
                  placeholder="Jordan Lee"
                  value={appointmentForm.contactName}
                  onChange={(event) =>
                    setAppointmentForm((current) => ({
                      ...current,
                      contactName: event.target.value,
                    }))
                  }
                />
              </FieldLabel>
              <FieldLabel label="Email">
                <input
                  className={inputClasses()}
                  placeholder="jordan@company.com"
                  value={appointmentForm.email}
                  onChange={(event) =>
                    setAppointmentForm((current) => ({ ...current, email: event.target.value }))
                  }
                />
              </FieldLabel>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <FieldLabel label="Company">
                <input
                  className={inputClasses()}
                  placeholder="PeopleWorks"
                  value={appointmentForm.company}
                  onChange={(event) =>
                    setAppointmentForm((current) => ({ ...current, company: event.target.value }))
                  }
                />
              </FieldLabel>
              <FieldLabel label="Meeting type">
                <input
                  className={inputClasses()}
                  placeholder="Discovery call"
                  value={appointmentForm.meetingType}
                  onChange={(event) =>
                    setAppointmentForm((current) => ({
                      ...current,
                      meetingType: event.target.value,
                    }))
                  }
                />
              </FieldLabel>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <FieldLabel label="Scheduled for">
                <input
                  className={inputClasses()}
                  type="datetime-local"
                  value={appointmentForm.scheduledFor}
                  onChange={(event) =>
                    setAppointmentForm((current) => ({
                      ...current,
                      scheduledFor: event.target.value,
                    }))
                  }
                />
              </FieldLabel>
              <FieldLabel label="Status">
                <select
                  className={inputClasses()}
                  value={appointmentForm.status}
                  onChange={(event) =>
                    setAppointmentForm((current) => ({
                      ...current,
                      status: event.target.value as AppointmentItem['status'],
                    }))
                  }
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="Completed">Completed</option>
                  <option value="Canceled">Canceled</option>
                </select>
              </FieldLabel>
            </div>
            <FieldLabel label="Notes">
              <textarea
                className={`${inputClasses()} min-h-32 resize-y`}
                placeholder="Zoom link, agenda, or follow-up context."
                value={appointmentForm.notes}
                onChange={(event) =>
                  setAppointmentForm((current) => ({ ...current, notes: event.target.value }))
                }
              />
            </FieldLabel>
            <button
              type="button"
              className="rounded-2xl bg-blue px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              onClick={addAppointment}
            >
              Add appointment
            </button>
          </div>

          <div className="space-y-4">
            {store.appointments.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-navy/15 bg-off-white p-8 text-base leading-7 text-navy/65">
                No appointments logged yet. Add one from the form to start tracking your calendar.
              </div>
            ) : (
              store.appointments.map((appointment) => (
                <article
                  key={appointment.id}
                  className="rounded-2xl border border-navy/10 bg-off-white p-6"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-navy">
                        {appointment.contactName}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-navy/75">
                        {appointment.meetingType}
                      </p>
                      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-blue">
                        {appointment.company ? `${appointment.company} · ` : ''}
                        {formatTimestamp(appointment.scheduledFor)}
                      </p>
                      {appointment.email ? (
                        <p className="mt-3 text-base leading-7 text-navy/75">
                          {appointment.email}
                        </p>
                      ) : null}
                      {appointment.notes ? (
                        <p className="mt-3 text-base leading-7 text-navy/75">
                          {appointment.notes}
                        </p>
                      ) : null}
                    </div>
                    <div className="flex flex-col gap-3 md:w-52">
                      <select
                        className={inputClasses()}
                        value={appointment.status}
                        onChange={(event) =>
                          updateAppointmentStatus(
                            appointment.id,
                            event.target.value as AppointmentItem['status'],
                          )
                        }
                      >
                        <option value="Scheduled">Scheduled</option>
                        <option value="Completed">Completed</option>
                        <option value="Canceled">Canceled</option>
                      </select>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-red-200 px-4 py-3 text-base font-semibold text-red-700 transition-colors duration-200 hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                        onClick={() => deleteAppointment(appointment.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-navy/55">
                    Logged {formatTimestamp(appointment.createdAt)}
                  </p>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
