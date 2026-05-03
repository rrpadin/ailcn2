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

const deliverables = [
  'Performance Diagnostic — free. The top-of-funnel intake every prospect should run.',
  'Deep-Dive KPI Assessment — $1.5K-$5K per KPI. The small first engagement that converts prospects into clients.',
  'Comprehensive Engagement — $12K-$75K flat. The flagship deliverable: full 10-KPI assessment with executive summary and intervention recommendations.',
  'ExpandPro Platform subscription — $500-$8K/month. Continuous measurement for clients who want their KPIs tracked between engagements.',
  'Health Metrics Assessment — $3K-$8K. Standalone organizational health time-series baseline.',
];

const pathCards = [
  {
    title: 'FAST-TRACK',
    subhead: 'For consultants with active pipeline and the capital to move now.',
    items: [
      '$3,500 first year',
      'Immediately CERTIFIED — 70% deal share from Day 1',
      'Full platform features unlock at enrollment',
      'All three AI agents active immediately',
      'Complete the 60-day program in parallel',
      'Annual renewal: $1,495',
    ],
  },
  {
    title: 'EARN-AS-YOU-GROW',
    subhead: 'For consultants building toward it.',
    items: [
      '$495 entry to start',
      '60 days to close your first engagement and reach ACTIVATED',
      '12 months total to reach CERTIFIED — through deals closed or by paying the $3,005 difference',
      'Deal share climbs as you do: 40% → 50% → 60% → 70%',
      'Full platform access from Day 1 — same agents, same methodology',
      'Annual renewal: $1,495',
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="THE AI LEARNING CONSULTANT NETWORK"
        headline="The standard for independent HR consulting."
        subhead={
          <p>
            AILCN is the certification, the platform, and the network behind a new generation of
            HR consultants — solo operators delivering work that used to require a full firm.
          </p>
        }
        primaryCta={{
          href: LINKS.apply,
          label: 'Apply to the network →',
        }}
        secondaryCta={{
          href: '#how-it-works',
          label: 'See how it works',
        }}
      />

      <Section background="off-white">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue">
              FOR INDEPENDENT AND BOUTIQUE L&amp;D CONSULTANTS
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
            <div className="mt-8">
              <CTAButton
                href="/for-practitioners"
                variant="primary"
                ariaLabel="Read the practitioner brief"
              >
                Read the practitioner brief →
              </CTAButton>
            </div>
          </div>
          <PullQuote
            quote='"The independent HR consultant has been structurally outmatched for thirty years. The platform changes the math."'
            attribution="Dr. Reggie Padin · Founder, AILCN"
          />
        </div>
      </Section>

      <Section background="navy" id="how-it-works">
        <SectionHeading headline="Three things, working together." />
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            eyebrow="CERTIFICATION"
            title="The standard your client can recognize."
            body={
              <p>
                A 60-day program built around the AILCN methodology — the 10-KPI framework plus 5
                Health Dimensions that defines how AILCN consultants measure, diagnose, and
                recommend. The credential tells the market your output is defensible.
              </p>
            }
            variant="on-navy"
          />
          <Card
            eyebrow="PLATFORM"
            title="The analyst pool behind your practice."
            body={
              <>
                <p>
                  ExpandPro gives you three AI agents that do the work an analyst pool would do at
                  a Tier-1 consultancy. Decision-grade diagnostics, CFO-ready investment memos, and
                  meeting prep that keeps you ahead — continuously, on every client.
                </p>
                <Link
                  className="inline-flex font-semibold text-blue transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                  href="/for-practitioners#agents"
                >
                  See what the platform does →
                </Link>
              </>
            }
            variant="on-navy"
          />
          <Card
            eyebrow="NETWORK"
            title="The evidence you can cite."
            body={
              <p>
                Cross-engagement benchmarks. Peer review of hard cases. Shared patterns. Referrals
                between consultants. The network compounds — and your work gets stronger because
                the network is in it.
              </p>
            }
            variant="on-navy"
          />
        </div>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-white/80">
          Underneath those agents sit quarterly ExpandIntelligence briefs, predictive models, lead
          magnets, and AILCN Connect — the platform layer that makes the output repeatable.
        </p>
      </Section>

      <Section background="off-white">
        <SectionHeading headline="What you deliver to clients." />
        <p className="mb-8 max-w-4xl text-lg leading-8 text-navy/85">
          Five engagement types. One platform. Your deal share applies to all of them.
        </p>
        <ul className="space-y-4 border-l border-blue pl-6 text-lg leading-8 text-navy/85">
          {deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-8">
          <CTAButton href="/pricing" variant="primary" ariaLabel="See full pricing">
            See full pricing →
          </CTAButton>
        </div>
      </Section>

      <Section background="navy">
        <SectionHeading headline="Two ways to start. One credential." />
        <p className="max-w-4xl text-lg leading-8 text-white/80">
          You decide how you join. Both paths end at the same destination: AILCN-certified, on the
          directory, earning the top deal-share rate the network supports. The difference is timing
          and economics.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pathCards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              body={
                <>
                  <p className="font-semibold text-white">{card.subhead}</p>
                  <ul className="space-y-4 text-white/85">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              }
              variant="on-navy"
            />
          ))}
        </div>
        <p className="mt-8 max-w-5xl text-lg leading-8 text-white/80">
          The same credential. The same platform. The same network. The same renewal rate. Choose
          the path that fits where you are right now.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <CTAButton href={LINKS.apply} variant="primary" ariaLabel="Apply to the network">
            Apply to the network →
          </CTAButton>
          <CTAButton href="/pricing" variant="secondary" ariaLabel="See full pricing">
            See full pricing →
          </CTAButton>
        </div>
      </Section>

      <Section background="off-white">
        <SectionHeading headline="Why the independent consultant loses deals they should win." />
        <p className="max-w-4xl text-lg leading-8 text-navy/85">
          It&apos;s not skill. It&apos;s not effort. It&apos;s not even pricing. The independent
          consultant loses to enterprise consultancies because of structural asymmetries in what
          they can produce. AILCN closes those asymmetries — without making you work for a firm.
        </p>
        <div className="mt-8">
          <CTAButton href="/for-practitioners" variant="primary" ariaLabel="See the four asymmetries">
            See the four asymmetries →
          </CTAButton>
        </div>
      </Section>

      <Section background="navy">
        <div className="max-w-4xl">
          <SectionHeading headline="The standard for independent HR consulting is being written right now." />
          <p className="text-xl leading-8 text-white/80">
            Decide whether you&apos;re writing it or watching it.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton href={LINKS.apply} variant="primary" ariaLabel="Apply to the network">
              Apply to the network →
            </CTAButton>
            <CTAButton href={LINKS.contact} variant="secondary" ariaLabel="Talk to a founder">
              Talk to a founder
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
