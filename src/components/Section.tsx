import { ReactNode } from 'react';

type SectionProps = {
  background: 'navy' | 'off-white';
  narrow?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({
  background,
  narrow = false,
  id,
  className = '',
  children,
}: SectionProps) {
  const backgroundClasses =
    background === 'navy' ? 'bg-navy text-white' : 'bg-off-white text-navy';
  const widthClass = narrow ? 'max-w-4xl' : 'max-w-6xl';

  return (
    <section
      id={id}
      className={`px-6 py-16 md:py-24 ${backgroundClasses} ${className}`.trim()}
    >
      <div className={`mx-auto w-full ${widthClass}`}>{children}</div>
    </section>
  );
}
