import { CTAButton } from '@/components/CTAButton';
import { LINKS } from '@/lib/links';

export const dynamic = 'force-static';

export default function NotFound() {
  return (
    <section className="bg-navy px-6 py-24 text-white md:py-32">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="h-1 w-16 bg-blue" aria-hidden="true" />
        <h1 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
          That page isn&apos;t built yet — but the network is.
        </h1>
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
    </section>
  );
}
