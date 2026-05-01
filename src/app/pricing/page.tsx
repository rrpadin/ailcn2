import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Check, X } from 'lucide-react';

import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Pricing — AILCN',
  description:
    'Compare the Fast-Track and Earn-As-You-Grow certification paths, annual renewal, tier progression, and AILCN service pricing.',
};

type PricingTableProps = {
  caption: string;
  columns: string[];
  rows: ReactNode[][];
  tone?: 'light' | 'dark';
};

const includedItems = [
  '60-day AILCN certification program (10-KPI + 5 Health Dimensions methodology)',
  'Access to ExpandPro platform (quarterly ExpandIntelligence briefs, predictive models, lead magnets)',
  'AILCN certification badge (LinkedIn, website, proposals)',
  'AILCN Connect community access',
  'Directory listing on ailcn.org',
  'Referral program ($500 credit toward renewal for each consultant you refer)',
];

const certificationRows: ReactNode[][] = [
  [
    <RowLabel key="upfront-cost">Upfront cost</RowLabel>,
    '$3,500',
    '$0',
  ],
  [
    <RowLabel key="deal-share">Deal share</RowLabel>,
    '70% from Day 1',
    '40% -> 50% -> 60% -> 70%',
  ],
  [
    <RowLabel key="first-deal">First deal (assume $50K)</RowLabel>,
    'Keep $35,000',
    'Keep $20,000 (40% tier)',
  ],
  [
    <RowLabel key="second-deal">Second deal (assume $60K)</RowLabel>,
    'Keep $42,000',
    'Keep $30,000 (50% tier)',
  ],
  [
    <RowLabel key="third-deal">Third deal (assume $65K)</RowLabel>,
    'Keep $45,500',
    'Keep $39,000 (60% tier)',
  ],
  [
    <RowLabel key="net-after-three">Net after 3 deals</RowLabel>,
    '$122,500 - $3,500 = $119,000',
    '$89,000',
  ],
  [
    <RowLabel key="you-keep">You keep</RowLabel>,
    <span key="fast-track-advantage" className="font-semibold text-navy">
      $30,000 more than free path
    </span>,
    'ExpandPro earns more from you',
  ],
  [
    <RowLabel key="live-qa">Live Q&amp;A</RowLabel>,
    <StatusText key="fast-track-live-qa" included>
      Weekly sessions
    </StatusText>,
    <StatusText key="earned-live-qa" included={false}>
      Recorded library only
    </StatusText>,
  ],
  [
    <RowLabel key="support">Support</RowLabel>,
    <StatusText key="fast-track-support" included>
      24-hour response
    </StatusText>,
    'Standard 5-day response',
  ],
  [
    <RowLabel key="best-for">Best for</RowLabel>,
    'Active pipeline, confident you will close 2+ deals in 90 days',
    'Building pipeline, want to de-risk',
  ],
];

const renewalRows: ReactNode[][] = [
  [
    <RowLabel key="annual-recertification">Annual recertification</RowLabel>,
    '$1,295/year',
    'Updated methodology, new benchmarks, network access continuation',
  ],
  [
    <RowLabel key="auto-renew">Auto-renew discount</RowLabel>,
    '$1,295/year (save $121)',
    'Same as above, billed automatically annually',
  ],
];

const tierRows: ReactNode[][] = [
  [
    <RowLabel key="prospect">PROSPECT</RowLabel>,
    'N/A',
    'Default starting tier — running diagnostics, registering leads',
  ],
  [
    <RowLabel key="activated">ACTIVATED</RowLabel>,
    '40%',
    'Auto-grants on first close. 30-day hold before next tier.',
  ],
  [
    <RowLabel key="activated-2">ACTIVATED-2</RowLabel>,
    '50%',
    'Second deal closed. 30-day hold before next tier.',
  ],
  [
    <RowLabel key="activated-3">ACTIVATED-3</RowLabel>,
    '60%',
    'Third deal closed. 14-day hold before next tier.',
  ],
  [
    <RowLabel key="certified">CERTIFIED</RowLabel>,
    '70%',
    'Reached by completing the AILCN 60-day program (paid or earned)',
  ],
];

const serviceRows: ReactNode[][] = [
  [
    <RowLabel key="performance-diagnostic">Performance Diagnostic</RowLabel>,
    'Free',
    'Top of funnel. Hand to every prospect.',
  ],
  [
    <RowLabel key="deep-dive">Deep-Dive KPI Assessment</RowLabel>,
    '$1.5K-$5K per KPI',
    'Small first engagement. Validate fit, prove value, expand.',
  ],
  [
    <RowLabel key="comprehensive">Comprehensive Engagement</RowLabel>,
    '$12K-$75K flat',
    'Full 10-KPI assessment. The flagship deliverable.',
  ],
  [
    <RowLabel key="subscription">ExpandPro Platform subscription</RowLabel>,
    '$500-$8K/month',
    'Continuous measurement. Recurring revenue you share with AILCN.',
  ],
  [
    <RowLabel key="health-metrics">Health Metrics Assessment</RowLabel>,
    '$3K-$8K',
    'Standalone organizational health time-series baseline.',
  ],
];

function RowLabel({ children }: { children: ReactNode }) {
  return <span className="font-semibold text-navy">{children}</span>;
}

function StatusText({
  children,
  included,
}: {
  children: ReactNode;
  included: boolean;
}) {
  const Icon = included ? Check : X;

  return (
    <span className="inline-flex items-center gap-2 font-medium text-navy">
      <Icon
        className={`h-4 w-4 shrink-0 ${included ? 'text-blue' : 'text-navy/50'}`}
        aria-hidden="true"
      />
      <span>{children}</span>
    </span>
  );
}

function PricingTable({ caption, columns, rows, tone = 'light' }: PricingTableProps) {
  const borderClass = tone === 'dark' ? 'border-white/10' : 'border-navy/10';

  return (
    <div className={`overflow-x-auto rounded-2xl border ${borderClass}`}>
      <table className="min-w-[720px] w-full border-collapse">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-navy text-left text-sm font-semibold uppercase tracking-[0.14em] text-white">
          <tr>
            {columns.map((column, index) => (
              <th
                key={`${caption}-${column}-${index}`}
                className={`px-5 py-4 ${index === 0 ? 'w-[32%]' : 'w-[34%]'}`}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={`${caption}-${rowIndex}`}
              className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-off-white'}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`${caption}-${rowIndex}-${cellIndex}`}
                  className="px-5 py-4 align-top text-base leading-7 text-navy"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function IncludedItem({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-2xl border border-white/10 bg-navy-soft p-5">
      <div className="flex items-start gap-3">
        <Check className="mt-1 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
        <span className="text-base leading-7 text-white/85">{children}</span>
      </div>
    </li>
  );
}

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
        <SectionHeading headline="Two paths to AILCN certification" />
        <p className="mb-8 max-w-4xl text-lg leading-8 text-navy/85">
          Every consultant chooses the path that fits their business.
        </p>
        <PricingTable
          caption="Certification path comparison"
          columns={['', 'FAST-TRACK', 'EARN-AS-YOU-GROW']}
          rows={certificationRows}
        />
        <p className="mt-8 text-center text-lg leading-8 text-navy/85">
          Both paths earn the same AILCN certification. The difference is timing and economics.
        </p>
      </Section>

      <Section background="navy">
        <SectionHeading headline="What you get (both paths)" />
        <ul className="grid gap-4 md:grid-cols-2">
          {includedItems.map((item) => (
            <IncludedItem key={item}>{item}</IncludedItem>
          ))}
        </ul>
      </Section>

      <Section background="off-white">
        <SectionHeading headline="Annual renewal (Year 2+)" />
        <p className="mb-8 max-w-4xl text-lg leading-8 text-navy/85">
          Maintain your certification and platform access
        </p>
        <PricingTable
          caption="Annual renewal pricing"
          columns={['PLAN', 'COST', 'WHAT IT INCLUDES']}
          rows={renewalRows}
        />
        <p className="mt-6 text-base italic leading-7 text-navy/65">
          Non-renewal triggers a 90-day grace period, then account suspension. AILCN consultants
          are AILCN-certified or they&apos;re not — there&apos;s no quiet middle.
        </p>
      </Section>

      <Section background="navy">
        <SectionHeading headline="How the Earn-As-You-Grow ladder works" />
        <PricingTable
          caption="Earn-As-You-Grow ladder"
          columns={['TIER', 'CONSULTANT SHARE', 'HOW TO REACH IT']}
          rows={tierRows}
          tone="dark"
        />
        <p className="mt-6 text-sm leading-6 text-muted">
          Hold periods prevent gaming. Once you reach 70% tier, it&apos;s locked for life.
        </p>
      </Section>

      <Section background="off-white">
        <SectionHeading headline="What consultants deliver (and what clients pay)" />
        <p className="mb-8 max-w-4xl text-lg leading-8 text-navy/85">
          These are the engagements you&apos;ll deliver on ExpandPro. Deal share applies to all.
        </p>
        <PricingTable
          caption="Service catalog pricing"
          columns={['SERVICE', 'PRICE', 'WHEN TO USE IT']}
          rows={serviceRows}
        />
      </Section>
    </>
  );
}
