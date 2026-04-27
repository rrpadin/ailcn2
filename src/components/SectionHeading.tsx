type SectionHeadingProps = {
  headline: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  headline,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`mb-10 flex flex-col gap-4 ${alignment}`}>
      <h2 className="text-3xl font-bold leading-tight md:text-5xl">{headline}</h2>
      <span className="h-1 w-16 bg-blue" aria-hidden="true" />
    </div>
  );
}
