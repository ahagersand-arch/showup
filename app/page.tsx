import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#6b6b6b]">
          ShowUp
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Närvaro som känns självklar i varje uppdrag.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[#4e4e4e]">
          ShowUp ger mäklarteam en stillsam yta för fokus, bokningar och uppföljning i
          vardagen.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link
          className="inline-flex h-11 items-center justify-center border border-[#1b1b1b] bg-[#1b1b1b] px-6 text-sm font-medium text-[#f7f6f2]"
          href="/maklare"
        >
          Gå till mäklarvyn
        </Link>
        <Link
          className="inline-flex h-11 items-center justify-center border border-[#d8d6d0] px-6 text-sm font-medium text-[#1b1b1b]"
          href="/boka"
        >
          Boka visning
        </Link>
      </div>
      <div className="border-t border-[#e4e2dc] pt-8">
        <p className="text-sm text-[#6b6b6b]">
          En lugn grund för team som vill arbeta konsekvent, utan distraktioner.
        </p>
      </div>
    </section>
  );
}
