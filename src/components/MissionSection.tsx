"use client";

import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-8 md:px-12 text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          viewport={{ once: true }}
          className="inline-block px-6 py-1.5 border border-outline-variant rounded-full text-[10px] font-label uppercase tracking-[0.4em] text-secondary"
        >
          Our Calling
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-headline leading-tight"
        >
          A bridge between the <br />
          <span className="text-primary font-headline">eternal past</span> and an <br />
          <span className="font-headline">awakened future</span>.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-8 sm:gap-16 pt-10 text-center sm:text-left"
        >
          <div className="space-y-4">
            <div className="text-primary font-headline text-4xl">Dharma</div>
            <p className="text-sm text-secondary max-w-[200px] mx-auto sm:mx-0 font-light leading-relaxed">
              Upholding the cosmic order through righteous living and duty.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-primary font-headline text-4xl">Satsang</div>
            <p className="text-sm text-secondary max-w-[200px] mx-auto sm:mx-0 font-light leading-relaxed">
              Coming together in truth to elevate collective consciousness.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
