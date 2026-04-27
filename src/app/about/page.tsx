import type { Metadata } from 'next';

import { CTAButton } from '@/components/CTAButton';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { LINKS } from '@/lib/links';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About — AILCN',
  description: "Why we're building AILCN — the standard for independent HR consulting.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        headline="Why we're building AILCN."
        subhead={
          <p>
            There are tens of thousands of independent HR consultants doing extraordinary work for
            mid-market companies that can&apos;t afford McKinsey. They are under-credentialed,
            under-equipped, and under-priced — not because their work isn&apos;t worth it, but because
            the infrastructure to prove it doesn&apos;t exist yet. AILCN is that infrastructure.
          </p>
        }
      />

      <Section background="off-white" narrow>
        <SectionHeading headline="The premise." />
        <div className="space-y-6 text-lg leading-8 text-navy/85">
          <p>
            A solo HR consultant in 2026 is asked to deliver work that, ten years ago, required a
            five-person firm. The clients want analysis, benchmarks, source-cited recommendations,
            and follow-on measurement. The consultant has spreadsheets and a deadline.
          </p>
          <p>
            The gap between what clients want and what a solo operator can deliver in a reasonable
            time isn&apos;t a skill gap. It&apos;s an infrastructure gap. Firms have research libraries,
            junior analysts, methodology binders, and a brand. Solo consultants have themselves.
          </p>
          <p>
            AILCN is the infrastructure. The certification is the credential. The platform is the
            analyst pool. The network is the brand.
          </p>
        </div>
      </Section>

      <Section background="navy" narrow>
        <SectionHeading headline="What we are not." />
        <div className="space-y-6 text-lg leading-8 text-white/80">
          <p>
            We are not a course. We are not a software vendor selling AI to HR teams. We are not a
            marketplace introducing consultants to clients.
          </p>
          <p>
            AILCN is a professional standard with a platform and a network behind it. The work is
            real consulting, delivered to real clients, by real consultants. The credential is what
            tells the world the work meets a bar.
          </p>
        </div>
      </Section>

      <Section background="off-white" narrow>
        <SectionHeading headline="Where we are." />
        <div className="space-y-6 text-lg leading-8 text-navy/85">
          <p>
            AILCN is in pilot in 2026. A founding cohort of twelve consultants is using the
            platform with live mid-market clients, validating the certification, the methodology,
            and the deal-share economics. Public certification opens later this year.
          </p>
          <p>
            If you&apos;re a consultant who fits the profile and you&apos;re reading this before launch, the
            founding cohort is where you start.
          </p>
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
    </>
  );
}
