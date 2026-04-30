'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

import { createLead, loadAdminStore, saveAdminStore } from '@/lib/adminStore';

type SubscribeFormState = {
  name: string;
  email: string;
  company: string;
  notes: string;
};

const emptyForm: SubscribeFormState = {
  name: '',
  email: '',
  company: '',
  notes: '',
};

function inputClasses() {
  return 'w-full rounded-2xl border border-navy/15 bg-white px-4 py-3 text-base text-navy outline-none transition-colors duration-200 placeholder:text-navy/35 focus:border-blue focus-visible:ring-2 focus-visible:ring-blue';
}

export function SubscribeLeadForm() {
  const router = useRouter();
  const [form, setForm] = useState<SubscribeFormState>(emptyForm);
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      setError('Name and email are required.');
      return;
    }

    const currentStore = loadAdminStore();
    const lead = createLead({
      name: form.name,
      email: form.email,
      company: form.company,
      source: 'Newsletter subscribe',
      notes: form.notes || 'Captured from the public subscribe form.',
    });

    saveAdminStore({
      ...currentStore,
      leads: [lead, ...currentStore.leads],
    });

    setForm(emptyForm);
    router.push('/ailcn-admin-rrp-1990#leads');
  }

  return (
    <form className="rounded-2xl border border-navy/10 bg-white p-8" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-navy/65">
            Name
          </span>
          <input
            className={inputClasses()}
            placeholder="Jordan Lee"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-navy/65">
            Email
          </span>
          <input
            className={inputClasses()}
            placeholder="jordan@company.com"
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
          />
        </label>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-navy/65">
            Company
          </span>
          <input
            className={inputClasses()}
            placeholder="PeopleWorks"
            value={form.company}
            onChange={(event) =>
              setForm((current) => ({ ...current, company: event.target.value }))
            }
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-navy/65">
            Notes
          </span>
          <input
            className={inputClasses()}
            placeholder="What they want to hear more about"
            value={form.notes}
            onChange={(event) => setForm((current) => ({ ...current, notes: event.target.value }))}
          />
        </label>
      </div>
      {error ? (
        <p className="mt-4 text-sm font-medium text-red-700">{error}</p>
      ) : null}
      <button
        type="submit"
        className="mt-6 rounded-2xl bg-blue px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
      >
        Subscribe
      </button>
    </form>
  );
}
