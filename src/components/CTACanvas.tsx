"use client";

import { motion } from "framer-motion";

export default function CTACanvas() {
  return (
    <section className="pb-16">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
        className="max-w-7xl mx-auto bg-[#1a1c1a] rounded-[2.5rem] overflow-hidden relative p-12 md:p-16 flex flex-col items-center text-center group"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <span className="material-symbols-outlined text-[600px] absolute -top-40 -right-40 text-surface-bright group-hover:rotate-12 transition-transform duration-[3s]">settings_accessibility</span>
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl md:text-8xl font-headline mb-6 max-w-4xl relative z-10 text-[#faf9f6] leading-tight"
        >
          Ready to walk the <br /> <span className="font-headline text-primary">Sacred Path?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-stone-400 text-xl mb-10 max-w-2xl font-body font-light relative z-10 leading-relaxed"
        >
          Join a global brotherhood committed to the revival and protection of our ancient heritage and the eternal light of Dharma.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="flex flex-col md:flex-row gap-6 relative z-10"
        >
          <button className="bg-primary text-on-primary px-12 py-4 rounded-full font-label font-bold uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all shadow-2xl shadow-primary/20">
            Get Involved
          </button>
          <button className="border border-stone-700 text-[#faf9f6] px-12 py-4 rounded-full font-label font-bold uppercase tracking-[0.2em] text-xs hover:bg-stone-800 transition-colors">
            Our Initiatives
          </button>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
