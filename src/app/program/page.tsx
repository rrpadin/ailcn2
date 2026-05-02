import type { Metadata } from 'next';

import { Card } from '@/components/Card';
import { CTAButton } from '@/components/CTAButton';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { LINKS } from '@/lib/links';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Program — AILCN Certification',
  description:
    'AILCN-certified consultants close engagements at higher prices, deliver work that holds up against firm-quality benchmarks, and access a peer network nobody outside the program can replicate.',
};

const programFeatures = [
  'A working definition every certified consultant uses identically.',
  'Measurement methods that hold up to scrutiny — what data, from what source, at what cadence.',
  'Benchmark ranges by company size, industry, and growth stage.',
  "Intervention playbooks — what works, what doesn't, and why, drawn from research and from the network's collected engagements.",
];

const pathDetails = [
  {
    eyebrow: 'FAST-TRACK',
    title: 'For consultants with active pipeline and the capital to move now.',
    items: [
      '$3,500 first year.',
      'Immediately CERTIFIED — 70% deal share from Day 1.',
      'Full platform features unlock at enrollment and all three AI agents are active immediately.',
      'Complete the 60-day program in parallel.',
      'Annual renewal: $1,495.',
    ],
    href: LINKS.apply,
    cta: 'Apply to the network →',
  },
  {
    eyebrow: 'EARN-AS-YOU-GROW',
    title: 'For consultants building toward it.',
    items: [
      '$495 entry to start.',
      '60 days to close your first engagement and reach ACTIVATED.',
      '12 months total to reach CERTIFIED — through deals closed or by paying the $3,005 difference.',
      'Deal share climbs as you do: 40% → 50% → 60% → 70%.',
      'Full platform access from Day 1 — same agents, same methodology.',
      'Annual renewal: $1,495.',
    ],
    href: LINKS.apply,
    cta: 'Apply to the network →',
  },
];

export default function ProgramPage() {
  return (
    <>
      <Hero
        eyebrow="AILCN Certification"
        headline="Sixty days. One credential. A different practice."
        subhead={
          <p>
            AILCN-certified consultants close engagements at higher prices, deliver work that holds
            up against firm-quality benchmarks, and access a peer network nobody outside the program
            can replicate.
          </p>
        }
        primaryCta={{
          href: LINKS.apply,
          label: 'Apply to the network →',
        }}
      />

      <Section background="off-white" narrow>
        <SectionHeading headline="Methodology, not theory." />
        <p className="text-lg leading-8 text-navy/85">
          AILCN certification is built on a 10-KPI framework that covers the operational territory
          of HR consulting — turnover, engagement, succession, capability, performance,
          compensation, learning, leadership, culture, and organizational health. For each KPI, you
          get:
        </p>
        <ul className="mt-8 space-y-4 border-l border-blue pl-6 text-lg leading-8 text-navy/85">
          {programFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <p className="mt-8 text-lg leading-8 text-navy/85">
          Nothing taught is invented for the program. Every claim links to a source.
        </p>
      </Section>

      <Section background="navy" narrow>
        <SectionHeading headline="Daily microlearning, designed around your practice." />
        <div className="space-y-6 text-lg leading-8 text-white/80">
          <p>
            Twenty to thirty minutes a day. AI-generated modules that adapt to your pace and prior
            experience. No synchronous classes. No required cohort timing — start when you start,
            finish on your schedule.
          </p>
          <p>
            Most modules end with a working artifact you can use in a real engagement: a
            measurement plan, a benchmark comparison, a recommendation memo template. The
            certification produces tools, not just knowledge.
          </p>
        </div>
      </Section>

      <Section background="off-white" narrow>
        <SectionHeading headline="A credential that stays current." />
        <div className="space-y-6 text-lg leading-8 text-navy/85">
          <p>
            AILCN consultants renew annually at $1,495. Renewal keeps your methodology aligned
            with the current state of the network — new benchmarks, new playbooks, new patterns
            the data has surfaced over the past year — while maintaining platform access.
          </p>
          <p>
            A credential that doesn&apos;t evolve is a credential that decays. AILCN doesn&apos;t do decayed
            credentials.
          </p>
        </div>
      </Section>

      <Section background="navy" id="paths">
        <SectionHeading headline="Two paths, both end at the same standard." />
        <div className="grid gap-6 md:grid-cols-2">
          {pathDetails.map((path) => (
            <Card
              key={path.eyebrow}
              eyebrow={path.eyebrow}
              title={path.title}
              body={
                <>
                  <ul className="space-y-4 text-base leading-8 text-white/85">
                    {path.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <CTAButton href={path.href} variant="primary" ariaLabel={path.cta}>
                      {path.cta}
                    </CTAButton>
                  </div>
                </>
              }
              variant="on-navy"
            />
          ))}
        </div>
      </Section>

      <Section background="off-white">
        <SectionHeading headline="Choose your path. Start the work." />
        <div>
          <CTAButton href={LINKS.apply} variant="primary" ariaLabel="Apply to the network">
            Apply to the network →
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
