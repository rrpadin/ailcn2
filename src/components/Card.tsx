import { ReactNode } from 'react';

type CardProps = {
  eyebrow?: string;
  title: string;
  body: ReactNode;
  variant: 'on-navy' | 'on-light';
  className?: string;
};

export function Card({
  eyebrow,
  title,
  body,
  variant,
  className = '',
}: CardProps) {
  const variantClasses =
    variant === 'on-navy'
      ? 'border border-white/10 bg-navy-soft text-white'
      : 'border border-navy/10 bg-white text-navy';

  return (
    <article className={`rounded-2xl p-8 ${variantClasses} ${className}`.trim()}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="text-2xl font-bold leading-tight">{title}</h3>
      <div className="mt-4 space-y-4 text-base leading-8">{body}</div>
    </article>
  );
}
