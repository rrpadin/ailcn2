import type { Metadata } from 'next';

import { CTAButton } from '@/components/CTAButton';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { LINKS } from '@/lib/links';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Contact — AILCN',
  description: 'Contact AILCN.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        headline="Talk to a founder."
        subhead={
          <p>
            Questions about fit, timing, pricing, or how the network works? Send a note and we&apos;ll
            route it directly.
          </p>
        }
        primaryCta={{
          href: LINKS.contactEmail,
          label: 'Email the founder →',
        }}
        secondaryCta={{
          href: '/pricing',
          label: 'See pricing',
        }}
      />

      <Section background="off-white" narrow>
        <SectionHeading headline="Best reasons to reach out." />
        <div className="space-y-6 text-lg leading-8 text-navy/85">
          <p>You&apos;re deciding between Fast-Track and Earn-As-You-Grow.</p>
          <p>You want to sanity-check fit before applying.</p>
          <p>You have a pipeline question and want to talk through timing.</p>
        </div>
      </Section>
    </>
  );
}
