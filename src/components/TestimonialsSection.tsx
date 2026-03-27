"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The Sangh is not just an organization; it is a movement to reclaim our spiritual identity in a world that often feels lost. Their work with the youth is particularly inspiring.",
    author: "Swami Dayananda Saraswati",
    role: "Spiritual Scholar & Mentor",
  },
  {
    quote: "By preserving the rituals and the language of our Vedas, Samast Sanatani Sangh is ensuring that the flame of eternal truth never goes out.",
    author: "Dr. Anjali Sharma",
    role: "Historian & Community Elder",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-surface-container-high/20 relative">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-3"
        >
          <span className="text-primary font-label uppercase tracking-[0.4em] text-[10px] font-bold">Reflections</span>
          <h2 className="text-5xl md:text-8xl font-headline text-on-background">Voices of the Sangh</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] as any }}
              viewport={{ once: true }}
              className="relative group"
            >
              <span className="material-symbols-outlined text-[10rem] text-primary/5 absolute -top-20 -left-12 pointer-events-none group-hover:text-primary/10 transition-colors duration-700">format_quote</span>
              <blockquote className="relative z-10 space-y-6">
                 <p className="text-3xl md:text-4xl font-headline leading-[1.4] text-on-surface font-light">"{t.quote}"</p>
                <footer className="flex items-center gap-6 pt-6 border-t border-outline-variant/10">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-headline text-2xl">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-primary font-label uppercase tracking-[0.2em] text-xs leading-none mb-2">{t.author}</div>
                    <div className="text-secondary text-[10px] uppercase tracking-widest font-body opacity-60">{t.role}</div>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
