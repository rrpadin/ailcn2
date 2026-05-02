import type { Metadata } from 'next';

import { Card } from '@/components/Card';
import { CTAButton } from '@/components/CTAButton';
import { Hero } from '@/components/Hero';
import { PullQuote } from '@/components/PullQuote';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { LINKS } from '@/lib/links';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'For Practitioners — AILCN',
  description:
    'For independent and boutique L&D consultants who want the firepower of a 50-person consultancy without giving up their independence.',
};

const asymmetries = [
  {
    eyebrow: 'ASYMMETRY I',
    title: "You can't produce the artifacts.",
    body: 'A solo consultant cannot generate a 60-page diagnostic with documented causal inference, Monte Carlo simulations, and CFO-ready investment memos in two weeks. The big firms can — they have analysts. So you compete on charm and fees. They compete on artifacts the buyer\'s CFO actually trusts.',
  },
  {
    eyebrow: 'ASYMMETRY II',
    title: "You can't cite the network.",
    body: 'When the client asks "how do we know this will work for us?" the big firm says "we\'ve done this 47 times across comparable companies and the average effect size was 0.42σ." You say "in my experience..." which is, however hard-earned, not the same answer.',
  },
  {
    eyebrow: 'ASYMMETRY III',
    title: "You can't speak CFO fluently.",
    body: 'Your work gets stuck at the CHRO. The CFO kills the renewal because nobody translated the program outcomes into NPV, IRR, and risk-adjusted return. You know it should be funded. You can\'t make the financial case the way it needs to be made.',
  },
  {
    eyebrow: 'ASYMMETRY IV',
    title: "You're spending 40% of your time on undifferentiated work.",
    body: 'Diagnostic intake, KPI calculation, benchmark research, measurement design. None of this differentiates you. All of it is necessary. The big firms have analysts doing it for them so the principals can spend 100% of their time on the work that actually wins. You don\'t have that.',
  },
];

const agents = [
  {
    eyebrow: 'AGENT 01 — DIAGNOSTIC',
    title: 'The analyst pool that produces decision-grade evidence.',
    body: 'Causal inference across the 10 KPIs. 12-month forecasts under three scenarios. Bottleneck identification grounded in the network. Anomaly detection. Benchmark stratification by industry and size. Continuously, on every client you serve.',
  },
  {
    eyebrow: 'AGENT 02 — PRESCRIPTIVE',
    title: 'The associate principal who writes investment memos in your voice.',
    body: 'Full Program Architecture Documents with measurement blueprints, manager enablement tracks, pre-mortem risk analysis, and Capital Investment Memos with NPV, IRR, and Monte Carlo simulation. Generated in hours, not weeks.',
  },
  {
    eyebrow: 'AGENT 03 — STRATEGIC',
    title: 'The chief of staff who keeps you ahead of every meeting.',
    body: 'Monday morning 90-day outlooks. Stakeholder strategy briefs. Competitive intelligence on the firms you\'re up against. Objection pre-loaders. Credibility artifacts designed to survive forwarding. The meeting prep you wish you had time for.',
  },
];

const underneathBlocks = [
  {
    eyebrow: 'THE 10-KPI FRAMEWORK',
    title: 'The operating framework behind every recommendation.',
    body: 'Every diagnostic, every benchmark, every recommendation runs through the same 10 KPIs that define the operational territory of HR consulting: turnover, engagement, succession, capability, performance, compensation, learning, leadership, culture, and organizational health. AILCN consultants measure to the same definitions. Your client gets the same rigor whether they engage with you or with another AILCN consultant.',
  },
  {
    eyebrow: 'THE 5 HEALTH DIMENSIONS',
    title: 'The time-series view of whether the organization is healthier.',
    body: 'Stacked on top of the 10 KPIs is a 5-dimension organizational health framework — the time-series baseline that tells a CHRO whether the org is getting healthier or sicker over time. The Health Metrics Assessment is the standalone product that uses this framework. It\'s also embedded in every Comprehensive Engagement.',
  },
  {
    eyebrow: 'THE NETWORK BENCHMARK LIBRARY',
    title: 'The benchmark moat a solo consultant cannot build alone.',
    body: 'AILCN consultants contribute anonymized engagement data to a shared benchmark library that grows with every closed engagement. Your reports cite cross-engagement patterns no solo consultant could build alone — and the more the network grows, the sharper your benchmarks get. This is the moat that competitors can\'t copy.',
  },
];

const beforeItems = [
  'You spend 4 hours pulling data from your client\'s HRIS to build a baseline KPI table. The numbers are flat — no causal interpretation possible.',
  'You write a recommendation memo that says "based on my experience, I recommend X." The CHRO is convinced. The CFO isn\'t.',
  'You\'re going into a meeting with a procurement team Friday. You\'ll prepare for two hours the night before, like always.',
  'You don\'t know which competitors are in the consideration set. You\'ll find out in the room.',
  'You\'re doing the work yourself because you can\'t afford an analyst.',
  'Your average engagement size hasn\'t grown in three years.',
];

const afterItems = [
  'The Diagnostic Agent has already pulled the data. Your KPI table includes causal inference, benchmark percentiles, and 12-month forecasts under three scenarios.',
  'The Prescriptive Agent has drafted an investment memo with NPV $1.4M, IRR 38%, payback in 11 months, Monte Carlo 5th-95th percentile bounded. The CFO calls back same day.',
  'Your Friday meeting brief is in your inbox: stakeholder map, the seven likely objections, and three narrative framings calibrated to the room.',
  'You know Korn Ferry is in the RFP. You know their methodology weakness on this client\'s KPI profile. You know the trap question their salesperson is going to plant.',
  'You\'re doing the work that wins. The agents do everything else.',
  'Your average engagement size is 3x larger. Your renewal rate is above 90%.',
];

const featureCards = [
  {
    eyebrow: 'AI AGENTS',
    title: 'Three agents, one analyst pool.',
    body: 'Diagnostic, Prescriptive, and Strategic agents — running continuously on every client you serve.',
  },
  {
    eyebrow: 'EXPANDINTELLIGENCE BRIEFS',
    title: 'Quarterly research your clients can forward.',
    body: 'Quarterly intelligence briefs that synthesize cross-network patterns into trend analysis you can hand to clients. Original research, not regurgitated. Designed to be forwarded to prospects.',
  },
  {
    eyebrow: 'PREDICTIVE MODELS',
    title: 'Forecasting that travels into the room.',
    body: 'Workforce capability forecasts. Turnover risk modeling. Succession bench-strength projections. Used both inside engagements and as standalone deliverables.',
  },
  {
    eyebrow: 'LEAD MAGNETS',
    title: 'Prospecting assets that open the door.',
    body: 'Pre-built diagnostic intakes, benchmark snapshots, and one-pagers you can send to prospects to start conversations. Branded with your name, generated by the platform.',
  },
  {
    eyebrow: 'AILCN CONNECT',
    title: 'The network behind the credential.',
    body: 'The community of certified AILCN consultants — peer review on hard cases, referrals when an engagement is outside your wheelhouse, shared patterns across the network.',
  },
];

const principles = [
  {
    title: 'You are a licensed practitioner, not a sales rep.',
    body: 'Sales reps earn 10-20% on commission. Practitioners earn 40-70% on engagement work because they do the work and own the relationship. We frame the deal that way because that\'s what\'s true.',
  },
  {
    title: 'Your relationship with your client belongs to you.',
    body: 'AILCN doesn\'t insert itself between you and the client. The client knows you. They engage you. They renew you. The platform sits behind your work, not in front of it.',
  },
  {
    title: 'Higher tiers earn higher splits.',
    body: 'The opposite of every channel program you\'ve seen. Because as you scale, you contribute more to the network than you consume — and the math should reflect that.',
  },
  {
    title: 'Subscription trail commissions, paid for years.',
    body: 'Every subscription client you originate pays you a recurring percentage for 24 to 60 months depending on your tier. The math is designed so long-term client quality pays you back.',
  },
  {
    title: 'Tier metrics are objective and protected.',
    body: 'Promotion criteria are published. Downgrades require sustained underperformance, not a single bad quarter. If we approve a strategic discount, AILCN absorbs more of the cost than you do. The rules are written so you can plan against them.',
  },
];

export default function PractitionersPage() {
  return (
    <>
      <Hero
        eyebrow="FOR PRACTITIONERS"
        headline="Show up to every engagement with the firepower of a 50-person consultancy."
        subhead={
          <p>
            You&apos;re as smart as the McKinsey senior consultant on the other side of the table.
            You have deeper subject-matter expertise. But you can&apos;t produce a 60-page
            diagnostic with Monte Carlo simulations in two weeks. AILCN exists so you can.
          </p>
        }
        primaryCta={{
          href: LINKS.apply,
          label: 'Apply to the network →',
        }}
        secondaryCta={{
          href: '/pricing',
          label: 'See pricing and tiers',
        }}
      />

      <Section background="off-white" narrow>
        <PullQuote
          quote='"The independent L&D consultant has been structurally outmatched for thirty years. The platform changes the math."'
          attribution="Dr. Reggie Padin · Founder, AILCN"
        />
      </Section>

      <Section background="off-white">
        <SectionHeading headline="Why the independent consultant loses deals they should win." />
        <p className="mb-10 max-w-4xl text-lg leading-8 text-navy/85">
          It&apos;s not skill. It&apos;s not effort. It&apos;s not even pricing. The independent
          consultant loses to enterprise consultancies because of structural asymmetries in what
          they can produce. Four of them, specifically.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {asymmetries.map((card) => (
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

      <Section background="navy" id="agents">
        <SectionHeading headline="AILCN gives you what the big firms have. Without working for them." />
        <p className="mb-10 max-w-4xl text-lg leading-8 text-white/80">
          You retain your independence, your relationships, and your brand. You add three AI
          agents that do the work an analyst pool would do at a Tier-1 consultancy — except
          they&apos;re available continuously, on every client, at a fraction of the cost.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {agents.map((card) => (
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
        <SectionHeading headline="What's underneath the agents." />
        <p className="mb-10 max-w-4xl text-lg leading-8 text-navy/85">
          The agents only work because of what&apos;s underneath them. AILCN&apos;s methodology and
          network are what make the platform&apos;s outputs defensible — not just sophisticated.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {underneathBlocks.map((block) => (
            <Card
              key={block.title}
              eyebrow={block.eyebrow}
              title={block.title}
              body={<p>{block.body}</p>}
              variant="on-light"
            />
          ))}
        </div>
      </Section>

      <Section background="navy">
        <SectionHeading headline="What changes between Tuesday and the Tuesday after you join." />
        <p className="mb-10 max-w-4xl text-lg leading-8 text-white/80">
          Same week. Different practice.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            eyebrow="TUESDAY BEFORE"
            title="The way it currently works."
            body={
              <ul className="space-y-4 text-white/85">
                {beforeItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            }
            variant="on-navy"
          />
          <Card
            eyebrow="TUESDAY AFTER"
            title="The way it works on AILCN."
            body={
              <ul className="space-y-4 text-white/85">
                {afterItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            }
            variant="on-navy"
          />
        </div>
      </Section>

      <Section background="off-white">
        <SectionHeading headline="What ships with every account — both paths." />
        <p className="mb-10 max-w-4xl text-lg leading-8 text-navy/85">
          Whether you start on Fast-Track or Earn-As-You-Grow, the platform behind your practice is
          the same. The path is about timing and economics; the platform is about output.
        </p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((feature) => (
            <Card
              key={feature.title}
              eyebrow={feature.eyebrow}
              title={feature.title}
              body={<p>{feature.body}</p>}
              variant="on-light"
            />
          ))}
        </div>
      </Section>

      <Section background="navy">
        <SectionHeading headline="The principles AILCN is built on." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {principles.map((principle) => (
            <Card
              key={principle.title}
              title={principle.title}
              body={<p>{principle.body}</p>}
              variant="on-navy"
            />
          ))}
        </div>
      </Section>

      <Section background="off-white">
        <div className="max-w-4xl">
          <SectionHeading headline="See if you're ready." />
          <p className="text-xl leading-8 text-navy/85">
            Or three months from now, you can still be losing the same deals to firms that
            aren&apos;t actually better than you. Assessment takes a few minutes. We respond within
            two business days.
          </p>
          <div className="mt-10">
            <CTAButton href={LINKS.apply} variant="primary" ariaLabel="Apply to the network">
              Apply to the network →
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
