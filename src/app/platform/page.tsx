import type { Metadata } from 'next';

import { CTAButton } from '@/components/CTAButton';
import { Card } from '@/components/Card';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { LINKS } from '@/lib/links';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Platform — Powered by ExpandPro',
  description:
    "ExpandPro turns intake interviews and survey responses into firm-quality reports — source-cited, KPI-structured, ready to deliver under your brand or AILCN's.",
};

const engagementTypes = [
  {
    title: 'Performance Diagnostic',
    body: 'A free, ten-question intake any consultant can send to a prospect. AI-generated teaser report goes back inside 24 hours. Full report unlocks when the prospect signs an engagement. The single most effective top-of-funnel mechanic on the platform.',
  },
  {
    title: 'Deep-Dive KPI Assessment',
    body: `Pick a KPI. Eight questions. AI-generated report priced per-KPI in the $1,500–$5,000 range depending on company size. The "small first engagement" that turns prospects into clients.`,
  },
  {
    title: 'Comprehensive Engagement',
    body: 'Full 10-KPI assessment. Executive summary. Benchmark comparison. Intervention recommendations. Priced flat in the $12,000–$75,000 range. The flagship engagement type.',
  },
  {
    title: 'Platform subscription',
    body: 'Once a client is engaged, ExpandPro becomes their continuous measurement layer. Pulse surveys, KPI dashboards, alerts when metrics fall below benchmarks. Recurring revenue you split with AILCN.',
  },
];

const builtToday = [
  'Performance Diagnostic intake and AI report generation.',
  'Deep-Dive KPI Assessments across all 10 KPIs.',
  'Health Metrics Assessment for organizational baselines.',
  'Industry benchmarks across 9 verticals.',
  'Consultant CRM, engagement tracking, services and pricing catalog.',
  'Editable AI-generated email invites for prospects.',
];

const comingSoon = [
  'Client portal — separate logins for end clients to view their own reports and dashboards.',
  'Scheduled pulse surveys and automated quarterly reports.',
  'Alert system — notifications when a client KPI falls below industry benchmark.',
  'Stripe-powered platform billing for end-client subscriptions.',
];

export default function PlatformPage() {
  return (
    <>
      <Hero
        eyebrow="Powered by ExpandPro"
        headline="The platform behind every AILCN engagement."
        subhead={
          <p>
            ExpandPro turns intake interviews and survey responses into firm-quality reports —
            source-cited, KPI-structured, ready to deliver under your brand or AILCN&apos;s.
          </p>
        }
        primaryCta={{
          href: LINKS.seeSampleReport,
          label: 'See a sample report',
        }}
      />

      <Section background="off-white">
        <SectionHeading headline="Four engagement types. One workflow." />
        <div className="grid gap-6 md:grid-cols-2">
          {engagementTypes.map((type) => (
            <Card
              key={type.title}
              title={type.title}
              body={<p>{type.body}</p>}
              variant="on-light"
            />
          ))}
        </div>
      </Section>

      <Section background="navy" narrow>
        <SectionHeading headline="Hosted, exported, or both." />
        <p className="text-lg leading-8 text-white/80">
          Every report can be delivered two ways, your choice per engagement.
        </p>
        <div className="mt-8 space-y-6 text-lg leading-8 text-white/80">
          <div className="border-l border-blue pl-6">
            <p>
              <span className="font-bold text-white">Hosted:</span> client views the report inside
              ExpandPro. Branded with your name and logo (CERTIFIED tier and above).
            </p>
          </div>
          <div className="border-l border-blue pl-6">
            <p>
              <span className="font-bold text-white">Exported:</span> download as PDF or DOCX.
              Send it however you send things. The report doesn&apos;t mention ExpandPro at all.
            </p>
          </div>
        </div>
        <p className="mt-8 text-lg leading-8 text-white/80">
          You decide how visible the platform is to your clients. AILCN never inserts itself
          between you and your relationship.
        </p>
      </Section>

      <Section background="off-white">
        <SectionHeading headline="Honest about the roadmap." />
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold">Built today:</h3>
            <ul className="mt-6 space-y-4 border-l border-blue pl-6 text-lg leading-8 text-navy/85">
              {builtToday.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Coming soon:</h3>
            <ul className="mt-6 space-y-4 border-l border-blue pl-6 text-lg leading-8 text-navy/85">
              {comingSoon.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section background="navy">
        <div className="max-w-4xl">
          <SectionHeading headline="See the platform in action." />
          <p className="text-xl leading-8 text-white/80">
            Sample report from a real (anonymized) engagement.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton
              href={LINKS.seeSampleReport}
              variant="primary"
              ariaLabel="See a sample report"
            >
              See a sample report
            </CTAButton>
            <CTAButton
              href={LINKS.expandproSite}
              variant="secondary"
              ariaLabel="Visit ExpandPro.ai"
            >
              Visit ExpandPro.ai
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
