import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gayatri Mata & Havan Mahotsav | Samast Sanatani Sangh",
  description: "Divine Mother of Vedas and the Sacred Havan Mahotsav event.",
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12 bg-background">
        {/* Gayatri Mata Section */}
        <section className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
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
              <p className="font-headline text-2xl text-primary leading-tight">"Om Bhur Bhuvah Svah..."</p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary">Divine Mother of Vedas</span>
              <h1 className="font-headline text-5xl md:text-7xl text-on-background mt-4 leading-[1.1]">Gayatri Mata</h1>
            </div>
            <div className="space-y-4 text-on-surface-variant leading-relaxed text-lg">
              <p>
                Gayatri Mata is revered as the Veda Mata, the celestial mother of all sacred scriptures. She represents the infinite energy of the sun and the spiritual illumination of the intellect.
              </p>
               <div className="p-8 bg-surface-container-low rounded-xl border-l-2 border-primary/20 font-headline text-2xl text-on-surface">
                 "The Gayatri Mantra is the protector of those who chant it. It is the essence of all knowledge and the light that dispels darkness."
               </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="flex flex-col gap-2">
                  <span className="material-symbols-outlined text-primary">auto_awesome</span>
                  <h4 className="font-bold text-on-surface">Purification</h4>
                  <p className="text-sm">Cleansing the mind and soul of negative impressions.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="material-symbols-outlined text-primary">lightbulb</span>
                  <h4 className="font-bold text-on-surface">Knowledge</h4>
                  <p className="text-sm">Awakening the intellect and spiritual wisdom.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="material-symbols-outlined text-primary">self_improvement</span>
                  <h4 className="font-bold text-on-surface">Peace</h4>
                  <p className="text-sm">Establishing inner tranquility and cosmic harmony.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Havan Mahotsav Section */}
        <section className="bg-surface-container-low py-16">
          <div className="max-w-7xl mx-auto px-8 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
              <div className="lg:col-span-8">
                <span className="font-label text-sm uppercase tracking-[0.2em] text-primary">Sacred Gathering</span>
                <h2 className="font-headline text-5xl md:text-6xl text-on-background mt-4">Havan Mahotsav</h2>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <div className="inline-flex items-center gap-4 bg-surface-bright px-8 py-4 rounded-full shadow-sm">
                  <span className="material-symbols-outlined text-primary">calendar_today</span>
                  <span className="font-label font-bold text-on-surface uppercase tracking-widest">28th & 29th March</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-surface-bright p-8 rounded-xl shadow-sm border-t-4 border-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="relative z-10 space-y-6">
                   <h3 className="font-headline text-3xl">A Journey of Purification</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
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
                   <p className="font-headline text-xl text-primary pt-4">
                     We warmly invite all Sanatanis to participate, offer their prayers, and receive the divine blessings of the sacred fire.
                   </p>
                </div>
              </div>
              <div className="bg-primary-container p-1 flex flex-col justify-between rounded-xl overflow-hidden group">
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt="Sacred Fire"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLRao55plDtAZHhdwQnCLhunD_dttnJh_hs3tzPdJ-BPhWokPDvVFO2rQZMPeUeIMSrm_kbAsASPY5pE-TkJtyQ2dPAw1xo0CG4RUt8VYkHit0WBZBPOhR6jAIdwkAMGvNWUdI1lGLDuD8-zd0miQGe9XFo8qcYTglusSMIGB6cmuhOVjM1WDhFx_nBUJ0tDpJyWkXseCRI9l1IHY4n6ZiWtxENHPdsynJE34krccDYFOgc8hjG5EO39zwSc2orFD8ViuzQeo"
                  />
                </div>
                <div className="p-8 text-on-primary-container">
                  <h4 className="font-headline text-2xl mb-4">Positive Energy</h4>
                  <p className="text-sm opacity-90 leading-relaxed mb-6">
                    Experience the profound impact of collective chanting and the purifying properties of the sacred Yajna.
                  </p>
                  <Link 
                    href="/download"
                    className="w-full py-4 bg-white text-primary rounded-lg font-label text-xs uppercase tracking-[0.2em] hover:bg-on-primary-container hover:text-white transition-all duration-300 block text-center shadow-lg shadow-black/5"
                  >
                    Download our app
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
