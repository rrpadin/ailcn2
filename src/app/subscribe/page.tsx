import type { Metadata } from 'next';

import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { SubscribeLeadForm } from '@/components/SubscribeLeadForm';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Subscribe — AILCN',
  description: 'Subscribe to AILCN updates and add the contact to the lead workspace.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SubscribePage() {
  return (
    <>
      <Hero
        eyebrow="Subscribe"
        headline="Get a monthly read on what AILCN consultants are seeing in the field."
        subhead={
          <p>
            Use this form to capture a subscriber and send that contact straight into the lead
            workspace.
          </p>
        }
      />
      <Section background="off-white" narrow>
        <SectionHeading headline="Add a subscriber" />
        <SubscribeLeadForm />
      </Section>
    </>
  );
}
