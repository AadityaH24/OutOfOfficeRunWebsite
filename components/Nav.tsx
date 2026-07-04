import Link from 'next/link';

export default function Nav() {
  return (
    <header className="bg-navy text-paper">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
        <Link href="/" className="font-display text-3xl tracking-wide">
          Out of Office
        </Link>
        <div className="flex items-center gap-4 text-sm font-semibold sm:gap-7">
          <Link href="/" className="hover:text-signal">
            Home
          </Link>
          <Link href="/schedule" className="hover:text-signal">
            Schedule
          </Link>
          <a
            href="https://chat.whatsapp.com/D3fLnjifI1zAfolvWspDtc?mode=gi_t"
            className="hidden rounded-full bg-signal px-4 py-2 text-ink transition hover:bg-signalDark hover:text-paper sm:inline-flex"
          >
            Join Run
          </a>
        </div>
      </nav>
    </header>
  );
}
