import type { Metadata } from 'next';
import Link from 'next/link';

import { Card } from '@/components/Card';
import { CTAButton } from '@/components/CTAButton';
import { Hero } from '@/components/Hero';
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

const valueCards = [
  {
    title: 'A credential clients recognize',
    body: 'AILCN certification is the proof that the work behind your engagements meets a standard — built on a 10-KPI methodology and a peer community that holds the line.',
  },
  {
    title: 'A platform that does the heavy lifting',
    body: 'ExpandPro turns your interviews and survey data into reports that look like a firm produced them. AI-generated, source-cited, ready to deliver.',
  },
  {
    title: 'A network you can name-check',
    body: "Independent doesn't mean alone. You're part of a network of certified consultants, sharing engagement patterns and benchmarks no solo operator could build alone.",
  },
];

const howItWorks = [
  {
    title: 'Certification',
    body: 'A 60-day program built around the 10-KPI framework — definitions, measurement methods, intervention playbooks, and the rigor a defensible engagement requires. Daily microlearning. Annual recertification keeps the credential current.',
  },
  {
    title: 'Platform',
    body: 'ExpandPro is the engine. Performance Diagnostic intakes, Deep-Dive KPI assessments, Comprehensive Engagement reports, and ongoing platform subscriptions for clients who want continuous measurement. AI-generated, source-cited, your-brand-or-ours.',
  },
  {
    title: 'Network',
    body: 'Cross-engagement benchmarks. Peer review of difficult cases. Referrals between consultants when an engagement is outside your wheelhouse. The network compounds — the more consultants in it, the more useful it gets to be in it.',
  },
];

const proofPillars = [
  {
    title: 'Source-cited everything.',
    body: 'Every benchmark, every recommendation, every claim in an AILCN-generated report links back to the study or dataset that supports it. No black-box AI. No "trust us."',
  },
  {
    title: 'A 10-KPI methodology, not a chatbot.',
    body: 'Engagement reports follow a structured framework that produces consistency across consultants. Your client gets the same rigor whether their engagement is with you or with another AILCN consultant.',
  },
  {
    title: 'Cross-engagement benchmarks — coming as the network grows.',
    body: 'As more AILCN consultants close more engagements, the benchmarks behind your reports get sharper. Your work gets better because the network is in it.',
  },
];

const audienceCards = [
  {
    title: 'Veteran consultant',
    body: "You've been independent five, ten, fifteen years. You have a portfolio of mid-market clients and a reputation that opens doors. What you don't have is a way to deliver firm-quality analysis on a solo schedule. AILCN closes that gap.",
  },
  {
    title: 'Emerging practitioner',
    body: "You're two to five years in, recently independent or thinking about it. You have one or two warm relationships and the start of a practice. AILCN is how you get to credible faster — without a firm name behind you and without a credential gap.",
  },
  {
    title: 'Not for',
    body: "AILCN isn't built for credential collectors, career-changers looking for a résumé bullet, or anyone who wants AI to do the consulting for them. The network exists to serve real consultants delivering real engagements to real clients.",
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
          href: '#how-it-works',
          label: 'See how the network works',
        }}
        supportingLine="Two paths in. Both lead to a credential clients trust and engagements priced like the work they actually are."
      />

      <Section background="off-white" narrow>
        <SectionHeading headline="Independent doesn't have to mean alone — or under-priced." />
        <div className="space-y-6 text-lg leading-8 text-navy/85">
          <p>You went independent for a reason. The work is better. The clients are better. The decisions are yours.</p>
          <p>
            But the economics tell a different story. You produce analysis-quality deliverables on
            Word and PowerPoint. You compete on price with consultants who do half the work. You
            watch the McKinsey deck for a similar engagement get sold for ten times what you charge
            — not because the work is ten times better, but because they have a brand behind them.
          </p>
          <p>AILCN is what changes that.</p>
        </div>
      </Section>

      <Section background="off-white" className="pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          {valueCards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              body={<p>{card.body}</p>}
              variant="on-light"
            />
          ))}
        </div>
      </Section>

      <Section background="navy" id="how-it-works">
        <SectionHeading headline="Three things, working together." />
        <div className="space-y-10">
          {howItWorks.map((pillar) => (
            <div key={pillar.title} className="border-t border-white/10 pt-8 first:border-t-0 first:pt-0">
              <h3 className="text-2xl font-bold">{pillar.title}</h3>
              <p className="mt-4 max-w-4xl text-lg leading-8 text-white/80">{pillar.body}</p>
            </div>
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
          <Card
            eyebrow="Path A — Paid track"
            title="Move fast."
            body={
              <p>
                $2,500 self-paced or $4,500 with higher-touch coaching. Full CERTIFIED platform
                features unlock immediately — full dashboards, KPI deep-dives, executive reports,
                the proposal builder, the client portal. Complete the 60-day program in parallel.
              </p>
            }
            variant="on-light"
          />
          <Card
            eyebrow="Path B — Earned track"
            title="Start free."
            body={
              <p>
                Start free. Begin closing engagements at a 30% deal share, climb the ladder to
                40%, 50%, 60% as you build a track record. Complete the 60-day program → reach
                70%. Slower start, no upfront cost, same destination.
              </p>
            }
            variant="on-light"
          />
        </div>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-navy/85">
          Veterans tend to take the paid track. Emerging consultants tend to take the earned track.
          Both work. The only wrong choice is staying outside the network.
        </p>
      </Section>

      <Section background="navy">
        <SectionHeading headline="The work has to defend itself in front of a CHRO. So that's the bar we built to." />
        <div className="grid gap-6 md:grid-cols-3">
          {proofPillars.map((pillar) => (
            <Card
              key={pillar.title}
              title={pillar.title}
              body={<p>{pillar.body}</p>}
              variant="on-navy"
            />
          ))}
        </div>
      </Section>

      <Section background="off-white">
        <SectionHeading headline="Built for the consultant who already knows what good looks like." />
        <div className="grid gap-6 md:grid-cols-3">
          {audienceCards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              body={<p>{card.body}</p>}
              variant="on-light"
            />
          ))}
        </div>
      </Section>

      <Section background="navy" narrow>
        <SectionHeading headline="Five revenue streams. One network." />
        <p className="text-lg leading-8 text-white/80">
          AILCN consultants earn from certification fees they pay (one time), from deal share on
          engagements they close, from recurring platform subscriptions their clients buy, and from
          continuing education the network offers. The economics are designed so the network grows
          by making consultants more successful — not by extracting from them.
        </p>
        <div className="mt-8">
          <Link
            className="inline-flex text-lg font-semibold text-blue transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            href="/pricing"
          >
            See full pricing
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
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton
              href={LINKS.startCertification}
              variant="primary"
              ariaLabel="Start your certification"
            >
              Start your certification
            </CTAButton>
            <CTAButton
              href={LINKS.talkToFounder}
              variant="secondary"
              ariaLabel="Talk to a founder"
            >
              Talk to a founder
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
