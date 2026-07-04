type BibCardProps = {
  runNumber: string;
  label: string;
  headline: string;
  location: string;
};

export default function BibCard({ runNumber, label, headline, location }: BibCardProps) {
  return (
    <article className="rotate-[-1.5deg] border-2 border-dashed border-ink bg-white p-5 text-ink sm:p-7">
      <div className="mb-5 flex items-center justify-between border-b border-line pb-3 font-mono text-xs uppercase tracking-[0.2em]">
        <span>{label}</span>
        <span>{runNumber}</span>
      </div>
      <p className="font-mono text-3xl font-bold leading-none tracking-tight sm:text-5xl">{headline}</p>
      <p className="mt-4 text-base font-semibold sm:text-lg">{location}</p>
    </article>
  );
}
