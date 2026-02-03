export default function BokaPage() {
  return (
    <section className="flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#6b6b6b]">
          Bokning
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Boka visning
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[#4e4e4e]">
          En lugn bokningsyta för seriösa spekulanter och tydliga tider.
        </p>
      </header>

      <div className="grid gap-6 border-t border-[#e4e2dc] pt-8">
        <div className="grid gap-2 text-sm text-[#4e4e4e]">
          <p>Välj bostad och föreslå önskad tid.</p>
          <p>Bekräftelse skickas när mäklaren har godkänt bokningen.</p>
        </div>
        <div className="border-t border-[#e4e2dc] pt-6 text-sm text-[#6b6b6b]">
          Avbokning ska ske senast 24 timmar före visning. Sena avbokningar kan inte
          garanteras en ny tid samma vecka.
        </div>
      </div>
    </section>
  );
}
