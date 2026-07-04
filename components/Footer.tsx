export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-ink/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-mono uppercase tracking-[0.18em]">Meet point: The Other Side Cafe, Kharadi</p>
        <div className="flex gap-5 font-semibold text-ink">
          <a href="https://www.instagram.com/outofoffice_runclub/" className="hover:text-signal">
            Instagram
          </a>
          <a href="https://chat.whatsapp.com/D3fLnjifI1zAfolvWspDtc?mode=gi_t" className="hover:text-signal">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
