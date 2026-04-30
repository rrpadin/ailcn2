export type LeadItem = {
  id: string;
  name: string;
  email: string;
  company: string;
  source: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Won';
  notes: string;
  createdAt: string;
};

export type AdminStore = {
  resources: unknown[];
  leads: LeadItem[];
  appointments: unknown[];
};

export const ADMIN_STORAGE_KEY = 'ailcn-admin-store';

export const emptyAdminStore: AdminStore = {
  resources: [],
  leads: [],
  appointments: [],
};

export function createAdminId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function loadAdminStore() {
  try {
    const storedValue = window.localStorage.getItem(ADMIN_STORAGE_KEY);

    if (!storedValue) {
      return emptyAdminStore;
    }

    const parsedValue = JSON.parse(storedValue) as Partial<AdminStore>;

    return {
      resources: parsedValue.resources ?? [],
      leads: parsedValue.leads ?? [],
      appointments: parsedValue.appointments ?? [],
    };
  } catch {
    return emptyAdminStore;
  }
}

export function saveAdminStore(store: AdminStore) {
  window.localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(store));
}

export function createLead(input: {
  name: string;
  email: string;
  company: string;
  source: string;
  notes: string;
  status?: LeadItem['status'];
}): LeadItem {
  return {
    id: createAdminId('lead'),
    name: input.name.trim(),
    email: input.email.trim(),
    company: input.company.trim(),
    source: input.source.trim(),
    status: input.status ?? 'New',
    notes: input.notes.trim(),
    createdAt: new Date().toISOString(),
  };
}
