import Image from 'next/image';
import BibCard from '@/components/BibCard';

const stats = [
  ['40+', 'runners at launch'],
  ['5K', 'social loop'],
  ['Every other Sunday', 'morning meet-up'],
];

const photos = [
  { label: 'Kharadi crew', src: '/photos/kharadi_crew.JPG' },
  { label: 'Warmup roll call', src: '/photos/warmup.png' },
  { label: 'Run | Coffee | Games', src: '/photos/Frame 3.png' },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <div>
          <p className="font-mono text-sm font-bold uppercase tracking-[0.24em] text-signal">Before inbox. Before standup.</p>
          <h1 className="mt-4 font-display text-7xl uppercase leading-[0.86] tracking-wide sm:text-8xl lg:text-9xl">
            Clock out. Run in.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/75">
            Out of Office is a city run club for early miles, steady loops, and coffee after the last split.
          </p>
        </div>
        <BibCard runNumber="RUN #12" label="Next run" headline="SUN · 7:00 AM" location="The Other Side, Kharadi" />
      </section>

      <div className="lane-divider h-2" />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <h2 className="font-display text-5xl uppercase tracking-wide sm:text-6xl">A standing invite to move</h2>
            <p className="mt-4 text-lg leading-8 text-ink/75">
              Twice a month, we swap inboxes for fresh air. Join us for an easy Sunday morning 5K, good conversations, and coffee after the last kilometre. Come once or make it part of your routine.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map(([value, label], index) => (
              <div key={label} className={`border border-line p-5 ${index === 0 ? 'bg-signal text-ink' : 'bg-white'}`}>
                <p className="font-mono text-4xl font-bold">{value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-16 sm:grid-cols-3 sm:px-6">
        {photos.map(({ label, src }) => (
          <div key={label} className="overflow-hidden border border-line bg-white">
            <div className="aspect-[4/3] overflow-hidden">
              <Image src={src} alt={label} width={1200} height={900} className="h-full w-full object-cover" />
            </div>
            <span className="block bg-white px-5 py-4 font-mono text-sm font-bold uppercase tracking-[0.18em] text-ink">
              {label}
            </span>
          </div>
        ))}
        
      </section>

      <section className="bg-navy px-5 py-14 text-paper sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-5xl uppercase tracking-wide">Bring shoes. We bring the route.</h2>
            <p className="mt-2 text-paper/70">Join the next Out of Office run and get the weekly meet point.</p>
          </div>
          <a href="https://chat.whatsapp.com/D3fLnjifI1zAfolvWspDtc?mode=gi_t" className="inline-flex rounded-full bg-signal px-6 py-3 font-bold text-ink hover:bg-signalDark hover:text-paper">
            Join on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
