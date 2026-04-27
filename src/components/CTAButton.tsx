import Link from 'next/link';
import { ReactNode } from 'react';

type CTAButtonProps = {
  href: string;
  variant: 'primary' | 'secondary';
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
};

const variantClasses: Record<CTAButtonProps['variant'], string> = {
  primary:
    'bg-blue text-white hover:bg-blue/90 border border-blue',
  secondary:
    'border border-current bg-transparent text-current hover:bg-current/10',
};

export function CTAButton({
  href,
  variant,
  children,
  ariaLabel,
  className = '',
}: CTAButtonProps) {
  const classes = [
    'inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy',
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const isExternal = href.startsWith('http://') || href.startsWith('https://');

  if (isExternal) {
    return (
      <a className={classes} href={href} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
