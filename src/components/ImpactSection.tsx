"use client";

import { motion } from "framer-motion";

export default function ImpactSection() {
  return (
    <section className="py-12 bg-surface-container-low border-y border-outline-variant/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
          viewport={{ once: true }}
          className="p-12 md:p-16 bg-surface border border-outline-variant/20 rounded-[3rem] text-center relative overflow-hidden group shadow-2xl shadow-primary/5"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-primary/10 transition-colors duration-1000"></div>
          <p className="text-3xl md:text-6xl font-headline text-on-surface leading-tight relative z-10 max-w-4xl mx-auto">
            "धर्म एव हतो हन्ति <span className="text-primary">धर्मो रक्षति रक्षितः</span>।"
          </p>
          <p className="mt-8 text-on-surface font-body text-xl relative z-10 max-w-3xl mx-auto">
            Dharma, when destroyed, destroys; Dharma, when protected, protects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
