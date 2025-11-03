"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeInitializer } from "../components/ThemeToggle";
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const siteTitle = "DCU Athletics Club";
  const siteDesc = "Dublin City University Athletics Club – news, records, training, and community for student and alumni athletes.";
  const ogImage = "/images/Club%20Logo.PNG";
  const ogUrl = "https://athletics.dcu.ie/"; // update to live domain if needed
  return (
    <html lang="en" className="bg-white dark:bg-black" suppressHydrationWarning>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0056b3" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DCU Athletics" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDesc} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@DCUAthletics" />
        <meta name="twitter:creator" content="@DCUAthletics" />
        {/* Favicon & icon links if required */}
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var d=s?s==='dark':m;if(d)document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');}catch(e){}})();`,
          }}
        />
        <ThemeInitializer />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-blue-700 focus:text-white focus:px-4 focus:py-2 focus:rounded">Skip to content</a>
        <header className="sticky top-0 z-50 bg-white/95 dark:bg-black/85 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b border-blue-100 dark:border-blue-900/40 shadow-sm" role="banner">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3" aria-label="Primary">
            <a href="/" className="flex items-center gap-3 min-w-0">
              <Image src="/images/Club%20Logo.PNG" alt="DCU Athletics" width={36} height={36} priority={false} className="h-9 w-auto" />
              <span className="truncate text-lg sm:text-xl font-semibold tracking-tight text-blue-700 dark:text-yellow-300">DCU Athletics</span>
            </a>
            <div className="hidden md:block">
              <div className="rounded-full p-0.5 bg-gradient-to-r from-blue-700 to-yellow-400">
                <div className="rounded-full bg-white/90 dark:bg-black/60 px-3 py-1.5">
                  <div className="flex items-center gap-2 text-sm">
                    <Link href="/" className="px-3 py-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-700 dark:text-yellow-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Home</Link>
                    <Link href="/about" className="px-3 py-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-700 dark:text-yellow-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">About Us</Link>
                    <Link href="/training" className="px-3 py-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-700 dark:text-yellow-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Training</Link>
                    <Link href="/news" className="px-3 py-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-700 dark:text-yellow-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Latest News</Link>
                    <Link href="/records" className="px-3 py-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-700 dark:text-yellow-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Club Records</Link>
                    <Link href="/faqs" className="px-3 py-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-700 dark:text-yellow-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">FAQs</Link>
                    <Link href="/contact" className="px-3 py-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-700 dark:text-yellow-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Contact</Link>
                    <Link href="/admin/login" className="px-3 py-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-700 dark:text-yellow-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Admin Login</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:hidden flex items-center gap-2">
              <button aria-label="Toggle menu" className="rounded p-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-yellow-200 focus:outline-none" onClick={() => setMenuOpen(o => !o)}>
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="inline-block"><rect x="5" y="8" width="18" height="2.5" rx="1" fill="currentColor"/><rect x="5" y="13" width="18" height="2.5" rx="1" fill="currentColor"/><rect x="5" y="18" width="18" height="2.5" rx="1" fill="currentColor"/></svg>
              </button>
            </div>
            {/* Mobile drawer nav */}
            {menuOpen && (
              <div className="fixed inset-0 bg-black/50 z-[100]" role="dialog" aria-modal="true" onClick={() => setMenuOpen(false)}>
                <nav
                  className="absolute top-0 right-0 w-4/5 max-w-xs h-full bg-white dark:bg-gray-900 p-6 flex flex-col gap-3 text-lg shadow-xl z-[101]"
                  onClick={e => e.stopPropagation()}
                >
                  <button className="text-right mb-4 ml-auto text-3xl font-bold px-2" aria-label="Close menu" onClick={() => setMenuOpen(false)}>×</button>
                  <Link href="/" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded hover:bg-blue-50 dark:hover:bg-blue-900/40">Home</Link>
                  <Link href="/about" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded hover:bg-blue-50 dark:hover:bg-blue-900/40">About Us</Link>
                  <Link href="/training" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded hover:bg-blue-50 dark:hover:bg-blue-900/40">Training</Link>
                  <Link href="/news" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded hover:bg-blue-50 dark:hover:bg-blue-900/40">Latest News</Link>
                  <Link href="/records" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded hover:bg-blue-50 dark:hover:bg-blue-900/40">Club Records</Link>
                  <Link href="/faqs" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded hover:bg-blue-50 dark:hover:bg-blue-900/40">FAQs</Link>
                  <Link href="/contact" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded hover:bg-blue-50 dark:hover:bg-blue-900/40">Contact</Link>
                  <Link href="/admin/login" onClick={() => setMenuOpen(false)} className="py-2 px-3 rounded hover:bg-blue-50 dark:hover:bg-blue-900/40">Admin Login</Link>
                </nav>
              </div>
            )}
          </nav>
        </header>
        <main id="main-content" className="max-w-5xl mx-auto p-6" role="main">
        {children}
        </main>
        <footer className="border-t text-sm text-gray-600 dark:text-gray-400 py-6 mt-8" role="contentinfo">
          <div className="max-w-5xl mx-auto px-6">© {new Date().getFullYear()} DCU Athletics</div>
        </footer>
        <a
           href="https://chat.whatsapp.com/Hlcmh9SXWKyDFx4sjQF9lY?mode=wwt"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Join DCU Athletics WhatsApp Group"
           className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg bg-green-500 text-white text-base font-semibold hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 transition-transform"
        >
           <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor" className="inline-block"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.472.771 4.834 2.151 6.902L4 29l7.319-2.095A13.006 13.006 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.895 0-3.746-.49-5.374-1.415l-.384-.218-4.365 1.249 1.237-4.253-.251-.389C5.43 17.661 4.75 16.36 4.75 15c0-6.147 5.103-11.25 11.25-11.25S27.25 8.853 27.25 15C27.25 21.147 22.147 26.25 16 26.25zm5.846-7.86c-.248-.124-1.469-.725-1.697-.807-.227-.082-.393-.123-.559.123-.164.242-.631.807-.774.974-.143.164-.285.184-.533.062-.248-.125-1.048-.386-2.001-1.23-.739-.658-1.238-1.471-1.384-1.72-.143-.248-.015-.382.108-.504.112-.111.248-.286.372-.429.124-.143.164-.247.248-.411.082-.164.041-.307-.02-.43-.062-.125-.559-1.349-.77-1.847-.203-.487-.409-.422-.561-.428l-.477-.01c-.164 0-.43.062-.656.307-.226.244-.886.866-.886 2.11 0 1.245.907 2.448 1.034 2.617.124.17 1.788 2.734 4.34 3.717.606.21 1.079.336 1.447.43.607.152 1.16.131 1.599.079.488-.06 1.469-.601 1.677-1.183.207-.579.207-1.075.145-1.18-.06-.104-.225-.166-.473-.29z"/></svg>
           <span className="hidden sm:inline">Join WhatsApp</span>
        </a>
      </body>
    </html>
  );
}
