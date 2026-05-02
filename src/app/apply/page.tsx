import type { Metadata } from 'next';

import { CTAButton } from '@/components/CTAButton';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { LINKS } from '@/lib/links';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Apply — AILCN',
  description: 'Apply to the AILCN network.',
};

export default function ApplyPage() {
  return (
    <>
      <Hero
        headline="Apply to the network."
        subhead={
          <p>
            Applications are handled through ExpandPro. Review the path that fits your business,
            then open the application when you&apos;re ready.
          </p>
        }
        primaryCta={{
          href: LINKS.externalApply,
          label: 'Open the application →',
        }}
        secondaryCta={{
          href: '/pricing',
          label: 'See pricing',
        }}
      />

      <Section background="off-white" narrow>
        <SectionHeading headline="What happens next." />
        <div className="space-y-6 text-lg leading-8 text-navy/85">
          <p>Submit the application through ExpandPro.</p>
          <p>We review fit, path, and timing, then respond within two business days.</p>
          <p>
            If it&apos;s a fit, we&apos;ll tell you whether Fast-Track or Earn-As-You-Grow makes the
            most sense right now.
          </p>
        </div>
        <div className="mt-8">
          <CTAButton
            href={LINKS.externalApply}
            variant="primary"
            ariaLabel="Open the AILCN application"
          >
            Open the application →
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
