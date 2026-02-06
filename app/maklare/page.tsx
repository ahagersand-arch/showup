export default function MaklarePage() {
  return (
    <section className="flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#6b6b6b]">
          Mäklarvy
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Instrumentpanel
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[#4e4e4e]">
          En stillsam översikt för dagens arbete och kommande bokningar.
        </p>
      </header>

      <div className="grid gap-8 border-t border-[#e4e2dc] pt-8">
        <section className="grid gap-3">
          <h2 className="text-lg font-medium">Idag</h2>
          <div className="space-y-3 text-sm text-[#4e4e4e]">
            <p>Inga schemalagda visningar ännu.</p>
            <p>Fokusera på uppföljning och förberedelser.</p>
          </div>
        </section>

        <section className="grid gap-3 border-t border-[#e4e2dc] pt-6">
          <h2 className="text-lg font-medium">Kommande bokningar</h2>
          <div className="space-y-3 text-sm text-[#4e4e4e]">
            <p>Här samlas nästa steg när bokningar kommer in.</p>
            <p>Lägg till tider och tilldelningar när du är redo.</p>
          </div>
        </section>
      </div>
    </section>
  );
}
