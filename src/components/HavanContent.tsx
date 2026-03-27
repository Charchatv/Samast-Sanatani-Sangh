"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HavanContent() {
  return (
    <div id="havan" className="bg-background pt-10">
      {/* Gayatri Mata Section */}
      <section className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
          <div className="relative aspect-[4/5] bg-surface-container-low overflow-hidden rounded-xl shadow-sm">
            <img
              alt="Divine Mother"
              className="w-full h-full object-cover mix-blend-multiply opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvRsIG0ceIfmGZpYTxnaAqtUTAYRHW1dY0WcFS37z9mGL3mTKvqnuwmhikIZAFaNJhBTs7umg6wBFYFr1Xy21V4TZQUhstG58Tnjc_Zx76ySPbpNETrPgqS8MD0f9JnRQb66Y4pnFEng8Eke1DsFZDgByMsXniJ-G570knqEoMi0lLKBQ3tJnY1ctqecNQUnFXbNGrxLitWhKoZU7TiIb5vrP4E7b9_TuIskP4UYz2EO1g9ChM02kK5TJuhosm7v4vvyAUgTY"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
          </div>
          <div className="absolute bottom-8 -left-8 bg-surface-bright p-6 shadow-xl max-w-xs border-l-4 border-primary">
            <p className="font-headline text-3xl text-primary leading-tight">"ॐ भूर्भुवः स्वः..."</p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary">Divine Mother of Vedas</span>
            <h1 className="font-headline text-5xl md:text-8xl text-on-background mt-4 leading-[1.1]">गायत्री माता</h1>
          </div>
          <div className="space-y-4 text-on-surface-variant leading-relaxed text-lg">
            <p>
              Gayatri Mata is revered as the Veda Mata, the celestial mother of all sacred scriptures. She represents the infinite energy of the sun and the spiritual illumination of the intellect.
            </p>
            <div className="p-8 bg-surface-container-low rounded-xl border-l-2 border-primary/20 font-headline text-2xl text-on-surface">
              "The Gayatri Mantra is the protector of those who chant it. It is the essence of all knowledge and the light that dispels darkness."
            </div>
            <div className="flex flex-col gap-8 pt-4">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary flex-shrink-0 mt-1">auto_awesome</span>
                <div className="space-y-1">
                  <h4 className="font-bold text-on-surface text-xl">पवित्रीकरण</h4>
                  <p className="text-sm opacity-80 text-justify">मन और आत्मा को नकारात्मकता से मुक्त करना।</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary flex-shrink-0 mt-1">lightbulb</span>
                <div className="space-y-1">
                  <h4 className="font-bold text-on-surface text-xl">दिव्य ज्ञान</h4>
                  <p className="text-sm opacity-80 text-justify">बुद्धि और आध्यात्मिक विवेक को जागृत करना।</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary flex-shrink-0 mt-1">self_improvement</span>
                <div className="space-y-1">
                  <h4 className="font-bold text-on-surface text-xl">परम शांति</h4>
                  <p className="text-sm opacity-80 text-justify">भीतर की स्थिरता और ब्रह्मांडीय सामंजस्य स्थापित करना।</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Havan Mahotsav Section */}
      <section className="bg-surface-container-low py-12">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
            <div className="lg:col-span-8">
              <span className="font-label text-sm uppercase tracking-[0.2em] text-primary">Sacred Gathering</span>
              <h2 className="font-headline text-5xl md:text-6xl text-on-background mt-4">51 Kundi Maa Gayatri Bhavya Yagya</h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <div className="inline-flex items-center gap-4 bg-surface-bright px-8 py-4 rounded-full shadow-sm">
                <span className="material-symbols-outlined text-primary">calendar_today</span>
                <span className="font-label font-bold text-on-surface uppercase tracking-widest">28th & 29th March</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-3 bg-surface-bright p-8 rounded-xl shadow-sm border-t-4 border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
              <div className="relative z-10 space-y-6">
                <h3 className="font-headline text-3xl">A Journey of Purification</h3>
                <p className="text-secondary leading-relaxed text-lg font-light mb-8 text-justify">
                   Join us for two days of sacred Yajna, where the divine fire becomes a medium for our offerings to the cosmos. This Havan is dedicated to universal peace and individual spiritual growth. Through the chanting of ancient mantras and the offering of sacred herbs, we invite positive vibrations into our lives and surroundings.
                </p>
                <div className="flex flex-wrap gap-8 py-6 border-y border-outline-variant/30">
                  <div>
                    <span className="block font-label text-xs text-secondary uppercase tracking-widest mb-1">Time</span>
                    <span className="text-on-surface font-medium">08:00 AM - 12:00 PM</span>
                  </div>
                  <div>
                    <span className="block font-label text-xs text-secondary uppercase tracking-widest mb-1">Participation</span>
                    <span className="text-on-surface font-medium">Open to All Devotees</span>
                  </div>
                  <div>
                    <span className="block font-label text-xs text-secondary uppercase tracking-widest mb-1">Ritual</span>
                    <span className="text-on-surface font-medium">Samuhik Gayatri Yajna</span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
                  <p className="font-headline text-xl text-primary text-justify">
                    We warmly invite all Sanatanis to participate, offer their prayers, and receive the divine blessings of the sacred fire.
                  </p>
                  <Link 
                    href="/download"
                    className="px-10 py-4 bg-primary text-on-primary rounded-full font-label text-xs uppercase tracking-[0.2em] hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 block text-center shadow-lg shadow-primary/10"
                  >
                    Download our app
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
