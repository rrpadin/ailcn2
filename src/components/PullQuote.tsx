type PullQuoteProps = {
  quote: string;
  attribution?: string;
};

export function PullQuote({ quote, attribution }: PullQuoteProps) {
  return (
    <figure className="rounded-2xl border border-white/10 bg-navy-soft p-8 text-white">
      <blockquote className="font-serif text-2xl italic leading-relaxed md:text-3xl">
        {quote}
      </blockquote>
      {attribution ? (
        <figcaption className="mt-6 text-base text-muted">{attribution}</figcaption>
      ) : null}
    </figure>
  );
}
