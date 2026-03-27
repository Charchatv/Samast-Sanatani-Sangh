"use client";

import { motion } from "framer-motion";

const roadmapItems = [
  {
    title: "Modern Gurukuls",
    description: "Establishing digital-first learning centers for global accessibility.",
  },
  {
    title: "Ecological Stewardship",
    description: "Applying Vedic principles of nature worship to environmental conservation.",
  },
  {
    title: "Global Cultural Exchange",
    description: "Promoting Sanatan philosophy as a universal tool for mental peace.",
  },
];

export default function PathForwardSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-primary font-label uppercase tracking-[0.4em] text-xs font-bold">The Vision</span>
          <h2 className="text-5xl md:text-7xl font-headline leading-tight">
            The Path <br /> Forward
          </h2>
          <p className="text-xl text-secondary leading-relaxed font-light border-l border-primary/20 pl-8">
            Our vision for the modern world is not to return to the past, but to bring the eternal values of Sanatan Dharma into the future. We envision a society where Vedic wisdom guides technology, where spirituality fuels progress, and where every individual lives in harmony with the cosmic order.
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold tracking-tight hover:scale-105 transition-transform shadow-lg shadow-primary/20 font-label uppercase tracking-widest text-xs">
              View Our Roadmap
            </button>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 gap-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              viewport={{ once: true }}
              className="p-6 bg-surface border-l-4 border-primary shadow-sm hover:shadow-xl hover:translate-x-2 transition-all duration-500"
            >
              <h4 className="font-headline text-2xl mb-2">{item.title}</h4>
              <p className="text-secondary text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
