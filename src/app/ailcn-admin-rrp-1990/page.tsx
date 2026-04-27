import type { Metadata } from 'next';

import { AdminWorkspace } from '@/components/AdminWorkspace';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Admin — AILCN',
  description:
    'Local-only admin workspace for AILCN resources, leads, and appointments.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <>
      <Hero
        eyebrow="Local Admin"
        headline="Manage resources, leads, and appointments."
        subhead={
          <p>
            This is a lightweight admin workspace inside the site. It stores data only in the
            current browser with local storage, so it is best treated as a fast internal prototype
            rather than a full back-office system.
          </p>
        }
        supportingLine="No auth, no backend, no shared sync. If you need multi-user access later, we can turn this into a real application."
      />
      <Section background="off-white">
        <AdminWorkspace />
      </Section>
    </>
  );
}
