import Link from 'next/link';

import { CTAButton } from '@/components/CTAButton';
import { LINKS } from '@/lib/links';

const navLinks = [
  { href: '/', label: 'Homepage' },
  { href: '/program', label: 'Program' },
  { href: '/platform', label: 'Platform' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export function Footer() {
  return (
    <footer className="bg-navy px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-3xl font-bold">AILCN</p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue">
              The AI Learning Consultant Network
            </p>
            <p className="mt-4 max-w-md text-base leading-8 text-white/80">
              Building the standard for independent HR consulting, one engagement at a time.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">
              Navigate
            </h2>
            <nav className="mt-5">
              <ul className="space-y-3 text-base text-white/80">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">
              Connect
            </h2>
            <p className="mt-5 max-w-sm text-base leading-8 text-white/80">
              Get a monthly read on what AILCN consultants are seeing in the field.
            </p>
            <div className="mt-6">
              <CTAButton
                href={LINKS.newsletter}
                variant="primary"
                ariaLabel="Subscribe to the AILCN newsletter"
              >
                Subscribe
              </CTAButton>
            </div>
            <a
              className="mt-6 inline-block text-base text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              href={LINKS.talkToFounder}
            >
              Talk to a founder
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>© 2026 AILCN. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              href="/privacy"
            >
              Privacy
            </Link>
            <Link
              className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              href="/terms"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
