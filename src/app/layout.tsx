import type { Metadata } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { NoiseOverlay } from "@/components/ambient/NoiseOverlay";
import { Aurora } from "@/components/ambient/Aurora";
import { OrbitalRings } from "@/components/ambient/OrbitalRings";
import { CursorHalo } from "@/components/ambient/CursorHalo";
import { PageTransition } from "@/components/layout/PageTransition";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
const body = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ORBIT · Applied AI Engineering",
    template: "%s · ORBIT",
  },
  description:
    "A surreal six-month field guide from backend engineer to applied AI engineer. 180 days, 1–2 hours a day, three projects.",
  metadataBase: new URL("https://orbit-ai-roadmap.vercel.app"),
  openGraph: {
    title: "ORBIT · Applied AI Engineering",
    description:
      "A surreal six-month field guide from backend engineer to applied AI engineer.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="antialiased">
        <Aurora />
        <OrbitalRings />
        <NoiseOverlay />
        <div className="vignette" />
        <CursorHalo />
        <Nav />
        <main className="relative z-10">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}