import { ReactNode } from 'react';

import { CTAButton } from '@/components/CTAButton';

type HeroCta = {
  href: string;
  label: string;
  ariaLabel?: string;
};

type HeroProps = {
  eyebrow?: string;
  headline: string;
  subhead: ReactNode;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  supportingLine?: ReactNode;
};

export function Hero({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  supportingLine,
}: HeroProps) {
  return (
    <section className="bg-navy px-6 pb-20 pt-28 text-white md:pb-28 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            {headline}
          </h1>
          <div className="mt-6 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
            {subhead}
          </div>
          {primaryCta || secondaryCta ? (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {primaryCta ? (
                <CTAButton
                  href={primaryCta.href}
                  variant="primary"
                  ariaLabel={primaryCta.ariaLabel ?? primaryCta.label}
                >
                  {primaryCta.label}
                </CTAButton>
              ) : null}
              {secondaryCta ? (
                <CTAButton
                  href={secondaryCta.href}
                  variant="secondary"
                  ariaLabel={secondaryCta.ariaLabel ?? secondaryCta.label}
                >
                  {secondaryCta.label}
                </CTAButton>
              ) : null}
            </div>
          ) : null}
          {supportingLine ? (
            <p className="mt-6 max-w-3xl text-base leading-7 text-muted">
              {supportingLine}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
