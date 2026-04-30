import type { Metadata } from 'next';
import Link from 'next/link';

import { Card } from '@/components/Card';
import { CTAButton } from '@/components/CTAButton';
import { Hero } from '@/components/Hero';
import { PullQuote } from '@/components/PullQuote';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { LINKS } from '@/lib/links';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'AILCN — The Standard for Independent HR Consulting',
  description:
    'AILCN is the certification, the platform, and the network behind a new generation of HR consultants — solo operators delivering work that used to require a full firm.',
  openGraph: {
    title: 'AILCN — The Standard for Independent HR Consulting',
    description:
      'AILCN is the certification, the platform, and the network behind a new generation of HR consultants — solo operators delivering work that used to require a full firm.',
    url: SITE_URL,
    siteName: 'AILCN',
    images: [
      {
        url: '/og-image.png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const asymmetryCards = [
  {
    eyebrow: 'Asymmetry I',
    title: "You can't produce the artifacts.",
    body: 'A solo consultant cannot generate a 60-page diagnostic with documented causal inference, Monte Carlo simulations, and CFO-ready investment memos in two weeks. The big firms can — they have analysts. So you compete on charm and fees. They compete on artifacts the buyer\'s CFO actually trusts.',
  },
  {
    eyebrow: 'Asymmetry II',
    title: "You can't cite the network.",
    body: 'When the client asks "how do we know this will work for us?" the big firm says "we\'ve done this 47 times across comparable companies and the average effect size was 0.42sigma." You say "in my experience..." which is, however hard-earned, not the same answer.',
  },
  {
    eyebrow: 'Asymmetry III',
    title: "You can't speak CFO fluently.",
    body: 'Your work gets stuck at the CHRO. The CFO kills the renewal because nobody translated the program outcomes into NPV, IRR, and risk-adjusted return. You know it should be funded. You can\'t make the financial case the way it needs to be made.',
  },
  {
    eyebrow: 'Asymmetry IV',
    title: "You're spending 40% of your time on undifferentiated work.",
    body: 'Diagnostic intake, KPI calculation, benchmark research, measurement design. None of this differentiates you. All of it is necessary. The big firms have analysts doing it for them so the principals can spend 100% of their time on the work that actually wins. You don\'t have that.',
  },
];

const agentCards = [
  {
    eyebrow: 'Agent 01 - Diagnostic',
    title: 'Decision-grade evidence on every client.',
    body: 'Causal inference across the 10 KPIs. 12-month forecasts under three scenarios. Bottleneck identification grounded in the network. Anomaly detection. Benchmark stratification by industry and size. Continuously, on every client you serve.',
  },
  {
    eyebrow: 'Agent 02 - Prescriptive',
    title: 'Investment memos in your voice.',
    body: 'Full Program Architecture Documents with measurement blueprints, manager enablement tracks, pre-mortem risk analysis, and Capital Investment Memos with NPV, IRR, and Monte Carlo simulation. Generated in hours, not weeks.',
  },
  {
    eyebrow: 'Agent 03 - Strategic',
    title: 'Meeting prep that keeps you ahead.',
    body: 'Monday morning 90-day outlooks. Stakeholder strategy briefs. Competitive intelligence on the firms you\'re up against. Objection pre-loaders. Credibility artifacts designed to survive forwarding. The meeting prep you wish you had time for.',
  },
];

const networkPillars = [
  {
    eyebrow: 'Certification',
    title: 'The standard your client can recognize.',
    body: 'A 60-day program built around the AILCN methodology so the work behind your engagements meets a real bar. The credential is what tells the market your output is defensible.',
  },
  {
    eyebrow: 'Platform',
    title: 'The analyst pool behind your practice.',
    body: 'ExpandPro handles intake, diagnostics, benchmark comparisons, reporting, and ongoing measurement so you can show up with the firepower of a firm without working for one.',
  },
  {
    eyebrow: 'Network',
    title: 'The evidence you can cite.',
    body: 'Cross-engagement benchmarks, peer review of hard cases, shared patterns, and referrals between consultants. The network compounds — and your work gets stronger because the network is in it.',
  },
];

const pathCards = [
  {
    eyebrow: 'Path A - Paid track',
    title: 'Move fast.',
    body: 'Move fast. $2,500 self-paced or $4,500 with higher-touch coaching. Full CERTIFIED platform features unlock immediately while you complete the 60-day program in parallel.',
  },
  {
    eyebrow: 'Path B - Earned track',
    title: 'Start free.',
    body: 'Start free. Begin closing engagements at a 30% deal share, climb through 40%, 50%, and 60% as you build a track record, and complete the 60-day program to reach 70%.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="The AI Learning Consultant Network"
        headline="The standard for independent HR consulting."
        subhead={
          <p>
            AILCN is the certification, the platform, and the network behind a new generation of
            HR consultants — solo operators delivering work that used to require a full firm.
          </p>
        }
        primaryCta={{
          href: LINKS.startCertification,
          label: 'Start your certification',
        }}
        secondaryCta={{
          href: '/for-practitioners',
          label: 'For practitioners',
        }}
        supportingLine="For practitioners who want the analyst pool, benchmarks, and CFO-ready artifacts the big firms use to win."
      />

      <Section background="off-white">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue">
              For independent and boutique L&D consultants
            </p>
            <div className="mt-6">
              <SectionHeading headline="The honest assessment." />
            </div>
            <div className="space-y-6 text-lg leading-8 text-navy/85">
              <p>
                You&apos;re as smart as the McKinsey senior consultant on the other side of the
                table. You have deeper subject-matter expertise. But you can&apos;t produce a
                60-page diagnostic with Monte Carlo simulations in two weeks.
              </p>
              <p>AILCN exists so you can.</p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CTAButton
                href="/for-practitioners"
                variant="primary"
                ariaLabel="Read the practitioner brief"
              >
                Read the practitioner brief
              </CTAButton>
              <Link
                className="inline-flex text-base font-semibold text-navy transition-colors duration-200 hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                href="/pricing"
              >
                See pricing and tiers
              </Link>
            </div>
          </div>
          <PullQuote
            quote='"The independent L&D consultant has been structurally outmatched for thirty years. The platform changes the math."'
            attribution="Dr. Reggie Padin · Founder, ExpandPro"
          />
        </div>
      </Section>

      <Section background="navy">
        <SectionHeading headline="Why the independent consultant loses deals they should win." />
        <p className="mb-10 max-w-4xl text-lg leading-8 text-white/80">
          It&apos;s not skill. It&apos;s not effort. It&apos;s not even pricing. The independent
          consultant loses to enterprise consultancies because of structural asymmetries in what
          they can produce.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {asymmetryCards.map((card) => (
            <Card
              key={card.title}
              eyebrow={card.eyebrow}
              title={card.title}
              body={<p>{card.body}</p>}
              variant="on-navy"
            />
          ))}
        </div>
      </Section>

      <Section background="off-white">
        <SectionHeading headline="What changes when the platform is behind your work." />
        <p className="mb-10 max-w-4xl text-lg leading-8 text-navy/85">
          You retain your independence, your relationships, and your brand. You add three AI
          agents that do the work an analyst pool would do at a Tier-1 consultancy — except
          they&apos;re available continuously, on every client, at a fraction of the cost.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {agentCards.map((card) => (
            <Card
              key={card.title}
              eyebrow={card.eyebrow}
              title={card.title}
              body={<p>{card.body}</p>}
              variant="on-light"
            />
          ))}
        </div>
      </Section>

      <Section background="navy" id="how-it-works">
        <SectionHeading headline="The standard, the platform, and the network." />
        <div className="grid gap-6 md:grid-cols-3">
          {networkPillars.map((pillar) => (
            <Card
              key={pillar.title}
              eyebrow={pillar.eyebrow}
              title={pillar.title}
              body={<p>{pillar.body}</p>}
              variant="on-navy"
            />
          ))}
        </div>
      </Section>

      <Section background="off-white">
        <SectionHeading headline="Pay your way in — or earn it." />
        <p className="max-w-4xl text-lg leading-8 text-navy/85">
          You decide how you join. Both paths end in the same place: AILCN-certified, on the
          directory, earning at the top deal-share rate the network supports.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pathCards.map((card) => (
            <Card
              key={card.title}
              eyebrow={card.eyebrow}
              title={card.title}
              body={<p>{card.body}</p>}
              variant="on-light"
            />
          ))}
        </div>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-navy/85">
          Veterans tend to take the paid track. Emerging consultants tend to take the earned track.
          Both work. The only wrong choice is staying outside the network.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <CTAButton href={LINKS.startCertification} variant="primary" ariaLabel="Apply to the network">
            Apply to the network
          </CTAButton>
          <Link
            className="inline-flex text-base font-semibold text-navy transition-colors duration-200 hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
            href="/for-practitioners"
          >
            Read the full practitioner brief
          </Link>
        </div>
      </Section>

      <Section background="off-white" narrow>
        <SectionHeading headline="The first dozen are setting the standard." />
        <div className="space-y-6 text-lg leading-8 text-navy/85">
          <p>
            AILCN is in pilot. The founding cohort — twelve consultants — is closing real
            engagements with real mid-market clients right now. Their feedback shapes the platform.
            Their work calibrates the certification. Their results validate the model.
          </p>
          <p>Public certification opens later this year. If you&apos;re reading this, you&apos;re early.</p>
        </div>
        <div className="mt-8">
          <CTAButton
            href={LINKS.applyFoundingCohort}
            variant="primary"
            ariaLabel="Apply for the founding cohort"
          >
            Apply for the founding cohort
          </CTAButton>
        </div>
      </Section>

      <Section background="navy">
        <div className="max-w-4xl">
          <SectionHeading headline="The standard for independent HR consulting is being written right now." />
          <p className="text-xl leading-8 text-white/80">
            Decide whether you&apos;re writing it or watching it.
          </p>
          <div className="mt-10">
            <CTAButton
              href={LINKS.startCertification}
              variant="primary"
              ariaLabel="Start your certification"
            >
              Start your certification
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
