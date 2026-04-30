import type { Metadata } from 'next';

import { ComparisonTable } from '@/components/ComparisonTable';
import { CTAButton } from '@/components/CTAButton';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { LINKS } from '@/lib/links';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Pricing — AILCN',
  description:
    'AILCN economics are designed to compound the more engagements you close. The network gets better as you do.',
};

export default function PricingPage() {
  return (
    <>
      <Hero
        headline="Priced for operators, not credential collectors."
        subhead={
          <p>
            AILCN economics are designed to compound the more engagements you close. The network
            gets better as you do.
          </p>
        }
      />

      <Section background="off-white">
        <SectionHeading headline="Certification" />
        <ComparisonTable
          caption="Certification pricing"
          tone="light"
          columns={['Track', 'Cost', 'What it includes']}
          rows={[
            [
              'Paid — Self-paced',
              '$2,500 one-time',
              'Full 60-day program, async support, immediate CERTIFIED platform access',
            ],
            [
              'Paid — Higher-touch',
              '$4,500 one-time',
              'Adds direct coaching, priority artifact review, immediate CERTIFIED access',
            ],
            [
              'Earned',
              'Free to start',
              'Deal-share ladder 30% → 70%, platform features unlock progressively',
            ],
          ]}
        />
      </Section>

      <Section background="navy">
        <SectionHeading headline="Recertification" />
        <ComparisonTable
          caption="Recertification pricing"
          tone="dark"
          columns={['Plan', 'Cost', 'What it includes']}
          rows={[
            [
              'Annual recertification',
              '$995 / year',
              'Updated methodology, new benchmarks, network access continuation',
            ],
            [
              'Auto-renew discount',
              '$895 / year',
              'Same as above, billed automatically annually',
            ],
          ]}
        />
        <p className="mt-6 text-base italic leading-7 text-muted">
          Non-renewal triggers a 90-day grace period, then account suspension. AILCN consultants
          are AILCN-certified or they&apos;re not — there&apos;s no quiet middle.
        </p>
      </Section>

      <Section background="off-white">
        <SectionHeading headline="Deal share" />
        <p className="mb-8 max-w-4xl text-lg leading-8 text-navy/85">
          When an AILCN consultant closes an engagement on the platform, deal share splits the
          revenue between the consultant and AILCN. The split improves as the consultant climbs:
        </p>
        <ComparisonTable
          caption="Deal share tiers"
          tone="light"
          columns={['Tier', 'Consultant share', 'How to reach it']}
          rows={[
            ['PROSPECT', 'N/A', 'Default starting tier — running diagnostics, registering leads'],
            [
              'ACTIVATED',
              '30–60%',
              'Auto-grants on first close. Climbs the ladder with each subsequent close',
            ],
            [
              'CERTIFIED',
              '70%',
              'Reached by completing the AILCN 60-day program (paid or earned)',
            ],
          ]}
        />
      </Section>

      <Section background="navy">
        <SectionHeading headline="End-client pricing" />
        <p className="mb-8 max-w-4xl text-lg leading-8 text-white/80">
          What your clients pay, by service. Pricing scales by company size band. Use these as
          defaults — adjust for your specific engagement.
        </p>
        <ComparisonTable
          caption="End-client pricing"
          tone="dark"
          columns={['Service', 'Price', 'When to use it']}
          rows={[
            ['Performance Diagnostic', 'Free', 'Top of funnel. Hand to every prospect.'],
            [
              'Deep-Dive KPI Assessment',
              '$1.5K–$5K per KPI',
              'Small first engagement. Validate fit, prove value, expand.',
            ],
            [
              'Comprehensive Engagement',
              '$12K–$75K flat',
              'Full 10-KPI assessment. The flagship deliverable.',
            ],
            [
              'ExpandPro Platform subscription',
              '$500–$8K / month',
              'Continuous measurement. Recurring revenue you share with AILCN.',
            ],
            [
              'Health Metrics Assessment',
              '$3K–$8K one-time',
              'Standalone organizational health baseline.',
            ],
          ]}
        />
      </Section>

      <Section background="off-white">
        <SectionHeading headline="Ready to start?" />
        <div>
          <CTAButton
            href={LINKS.startCertification}
            variant="primary"
            ariaLabel="Start your certification"
          >
            Start your certification
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
