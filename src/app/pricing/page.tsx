import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Check, ChevronDown, X } from 'lucide-react';

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
    <RowLabel key="annual-license">Annual</RowLabel>,
    '$1,495/year',
    'Updated methodology, new benchmarks, network access continuation, billed automatically annually',
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

const faqItems = [
  {
    question: 'Will I become a "platform reseller" instead of a consultant?',
    answer:
      'No. AILCN is built so you remain the trusted advisor. ExpandPro helps you produce evidence, benchmarks, artifacts, and meeting prep faster, but the strategy, recommendation, and client relationship are still yours.',
  },
  {
    question: 'What happens if I stop renewing or leave the network?',
    answer:
      'Your client relationships remain yours. Non-renewal triggers a 90-day grace period, then platform access is suspended until you renew again.',
  },
  {
    question: 'Why would someone choose Fast-Track over the free path?',
    answer:
      'If you already have an active pipeline and expect to close multiple deals quickly, Fast-Track usually wins on economics. You start at 70% from Day 1 and add weekly live Q&A plus faster support.',
  },
  {
    question: 'What does the annual ExpandPro renewal actually cover?',
    answer:
      'The $1,495 annual renewal keeps your platform access active and keeps your methodology, benchmarks, and network access current for the year ahead.',
  },
  {
    question: 'How long does certification take before I can use it?',
    answer:
      'The certification is designed as a 60-day path. Both pricing options lead to the same AILCN certification and the same core platform access.',
  },
  {
    question: 'What kind of consultant is AILCN built for?',
    answer:
      'AILCN is built for serious independent consultants who already know how to run a real engagement and want stronger artifacts, better economics, and a defensible standard behind their work.',
  },
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

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-navy-soft">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 text-left text-lg font-semibold leading-7 text-white marker:content-none">
        <span>{question}</span>
        <ChevronDown
          className="h-5 w-5 shrink-0 text-blue transition-transform duration-200 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="px-6 pb-6 text-base leading-8 text-white/80">
        <p>{answer}</p>
      </div>
    </details>
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
        <SectionHeading headline="Annual ExpandPro renewal (Year 2+)" />
        <p className="mb-8 max-w-4xl text-lg leading-8 text-navy/85">
          Maintain platform access
        </p>
        <PricingTable
          caption="Annual renewal pricing"
          columns={['PLAN', 'COST', 'WHAT IT INCLUDES']}
          rows={renewalRows}
        />
        <p className="mt-6 text-base italic leading-7 text-navy/65">
          Non-renewal triggers a 90-day grace period, then account suspension.
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

      <Section background="navy">
        <SectionHeading headline="The straight answers." />
        <div className="grid gap-4">
          {faqItems.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </Section>
    </>
  );
}
