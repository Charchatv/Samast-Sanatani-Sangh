"use client";

import { motion, Variants } from "framer-motion";

const pillars = [
  {
    icon: "menu_book",
    title: "संरक्षण",
    description: "Dedicated to the meticulous archiving and study of Vedic texts, ensuring the sacred words of our ancestors remain untarnished for generations to come.",
    subItems: ["Manuscript Restoration", "Digital Libraries"],
  },
  {
    icon: "school",
    title: "शिक्षा",
    description: "Imparting Sanskara through traditional learning methods, bridging the gap between ancient philosophy and contemporary living for the youth.",
    subItems: ["Vedic Schools", "Youth Mentorship"],
  },
  {
    icon: "groups",
    title: "समुदाय",
    description: "Fostering a sense of global unity among Sanatanis, providing a support system that transcends geographical boundaries through shared faith.",
    subItems: ["Global Satsangs", "Social Welfare"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1] as any 
    } 
  },
};

export default function DharmaPillarsSection() {
  return (
    <section className="py-4 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8 space-y-3"
        >
          <span className="text-primary font-label uppercase tracking-[0.4em] text-xs font-bold">The Foundation</span>
          <h2 className="text-5xl md:text-7xl font-headline font-light leading-[1.2] tracking-tight text-on-background">
            Our Pillars of <br className="md:hidden" />
            <span className="text-primary inline-block mt-1 md:mt-0">धर्म</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16"
        >
          {pillars.map((pillar, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-6 group">
              <div className="flex items-center md:block gap-6">
                <div className="w-20 h-20 bg-primary/5 flex items-center justify-center rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-4xl">{pillar.icon}</span>
                </div>
                <h3 className="text-4xl font-headline text-primary group-hover:opacity-80 transition-opacity duration-300 md:mt-6">{pillar.title}</h3>
              </div>
              <div className="space-y-6 p-7 bg-surface-container-low rounded-2xl border border-primary/10 shadow-sm relative overflow-hidden group/box hover:shadow-md transition-shadow duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover/box:bg-primary/10 transition-colors duration-500"></div>
                <div className="space-y-3 relative z-10">
                  <p className="text-secondary leading-relaxed text-lg font-light text-justify">{pillar.description}</p>
                </div>
                <ul className="space-y-4 text-xs font-label uppercase tracking-[0.2em] text-outline relative z-10">
                  {pillar.subItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-[1px] bg-primary"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

