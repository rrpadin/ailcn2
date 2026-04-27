type ComparisonTableProps = {
  columns: string[];
  rows: string[][];
  caption: string;
  tone?: 'light' | 'dark';
};

export function ComparisonTable({
  columns,
  rows,
  caption,
  tone = 'light',
}: ComparisonTableProps) {
  const borderClass = tone === 'dark' ? 'border-white/10' : 'border-navy/10';

  return (
    <div className={`overflow-hidden rounded-2xl border ${borderClass}`}>
      <table className="min-w-full border-collapse">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-navy text-left text-sm font-semibold uppercase tracking-[0.14em] text-white">
          <tr>
            {columns.map((column) => (
              <th key={column} className="px-5 py-4">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={`${caption}-${rowIndex}`}
              className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-off-white'}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`${caption}-${rowIndex}-${cellIndex}`}
                  className="px-5 py-4 align-top text-base leading-7 text-navy"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
