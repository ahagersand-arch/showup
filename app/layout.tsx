import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShowUp",
  description: "ShowUp för svenska mäklare.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="bg-[#f7f6f2] text-[#141414] antialiased">
        <div className="min-h-screen">
          <header className="border-b border-[#e4e2dc]">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
              <div className="text-sm font-medium tracking-[0.08em] uppercase">
                ShowUp
              </div>
              <nav className="flex items-center gap-6 text-sm">
                <Link className="text-[#1b1b1b] hover:text-[#0f0f0f]" href="/">
                  Start
                </Link>
                <Link
                  className="text-[#1b1b1b] hover:text-[#0f0f0f]"
                  href="/maklare"
                >
                  Mäklare
                </Link>
                <Link className="text-[#1b1b1b] hover:text-[#0f0f0f]" href="/boka">
                  Boka
                </Link>
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-5xl px-6 pb-20 pt-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
