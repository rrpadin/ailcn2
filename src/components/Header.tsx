'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { CTAButton } from '@/components/CTAButton';
import { LINKS } from '@/lib/links';

const navLinks = [
  { href: '/program', label: 'Program' },
  { href: '/platform', label: 'Platform' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const linkClass = (href: string) =>
    [
      'text-base text-white/80 transition-colors duration-200 hover:text-white',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy',
      pathname === href ? 'text-white' : '',
    ]
      .filter(Boolean)
      .join(' ');

  return (
    <header
      className={[
        'sticky top-0 z-50 bg-navy/95 px-6 backdrop-blur',
        isScrolled ? 'border-b border-white/10' : 'border-b border-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
        <Link
          className="text-2xl font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          href="/"
        >
          AILCN
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} className={linkClass(link.href)} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <CTAButton
            href={LINKS.startCertification}
            variant="primary"
            ariaLabel="Start your certification"
            className="px-5 py-2.5 text-sm"
          >
            Start your certification
          </CTAButton>
        </div>
        <button
          type="button"
          className="inline-flex rounded-2xl border border-white/10 p-3 text-white transition-colors duration-200 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isOpen ? (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[73px] bg-navy px-6 py-10 md:hidden"
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-6"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="text-3xl font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <CTAButton
                href={LINKS.startCertification}
                variant="primary"
                ariaLabel="Start your certification"
              >
                Start your certification
              </CTAButton>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
