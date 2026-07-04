const runs = [
  ['001', 'Done', 'Sunday, 14 June', '5K from The Other Side Cafe, Kharadi'],
  ['002', 'Tomorrow', 'Sunday, 5 July', '5K from The Other Side Cafe, Kharadi'],
  ['003', 'Coming soon', '', 'Details to be announced'],
];

const routes = [
  ['Social 5K', '5K', 'Easy pace'],
  ['More routes', 'Soon', 'Coming soon'],
];

export default function Schedule() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-20">
        <p className="font-mono text-sm font-bold uppercase tracking-[0.24em] text-signal">Run calendar</p>
        <h1 className="mt-4 font-display text-7xl uppercase leading-[0.9] tracking-wide sm:text-8xl">Two Sundays in motion</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/75">
          We are just getting started: one launch run behind us, one easy 5K coming up tomorrow, and more Sunday meet-ups to follow.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-6">
        <div className="space-y-4">
          {runs.map(([number, status, date, place]) => (
            <article key={number} className="grid gap-4 border border-line bg-white p-5 sm:grid-cols-[90px_1fr_auto] sm:items-center">
              <p className="font-mono text-3xl font-bold text-signal">#{number}</p>
              <div>
                <h2 className="font-display text-4xl uppercase tracking-wide">{date}</h2>
                <p className="text-ink/70">{place}</p>
              </div>
              <p className="font-mono text-xl font-bold">{status}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="lane-divider h-2" />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <h2 className="font-display text-5xl uppercase tracking-wide sm:text-6xl">Current route</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {routes.map(([name, distance, difficulty]) => (
            <article key={name} className="border border-line bg-white p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-4xl uppercase tracking-wide">{name}</h3>
                <span className="bg-navy px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.16em] text-paper">{difficulty}</span>
              </div>
              <p className="mt-8 font-mono text-5xl font-bold text-signal">{distance}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy px-5 py-14 text-paper sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-5xl uppercase tracking-wide">Join the next 5K.</h2>
            <p className="mt-2 text-paper/70">Meet at The Other Side Cafe, Kharadi. Easy pace, coffee after.</p>
          </div>
          <a href="https://chat.whatsapp.com/D3fLnjifI1zAfolvWspDtc?mode=gi_t" className="inline-flex rounded-full bg-signal px-6 py-3 font-bold text-ink hover:bg-signalDark hover:text-paper">
            Join on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
