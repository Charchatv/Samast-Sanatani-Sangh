"use client";

import { motion, Variants } from "framer-motion";

export default function PhilosophySection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] as any 
      } 
    },
  };

  return (
    <section className="py-10 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full"
        >
          <motion.div variants={itemVariants} className="md:col-span-8 bg-surface-container-low p-8 rounded-xl flex flex-col justify-between min-h-[400px] border border-outline-variant/20">
            <span className="material-symbols-outlined text-primary text-4xl">auto_awesome</span>
            <div>
              <h3 className="text-4xl font-headline mb-4">Spiritual Awareness</h3>
              <p className="text-secondary max-w-md text-justify">Illuminating the path of consciousness through the study of sacred texts and the practice of meditation.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 bg-primary p-8 rounded-xl text-on-primary flex flex-col justify-center items-center text-center shadow-2xl shadow-primary/20">
            <h4 className="text-6xl font-headline mb-4">Unity</h4>
            <p className="font-label uppercase tracking-widest text-sm opacity-80">One Dharma, One Family</p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 bg-surface-container-highest p-8 rounded-xl min-h-[300px] flex flex-col justify-end">
            <h3 className="text-2xl font-headline mb-2 text-primary">Sacred Rituals</h3>
            <p className="text-secondary text-sm text-justify">Honoring the traditions passed down through millennia with precision and devotion.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-8 relative rounded-xl overflow-hidden min-h-[300px] group">
            <img
              alt="Spiritual landscape"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmUyDEbwgQdASBKP72a20jFW5Ql7_TrOp4M6eF0OdGI9zwKXxHKkVTNocOhFT9qZXUnxMJCX-O8gFQ-1ECPcuk8krk-WYw9rF7juUlC4Bf6w_5elfCtqe1D940IB9UCZcuL5VmK7nEwD2a5VotYUxhVl-MIs5-jxXy8M9sJnI8sIZF9wM64DiUPySFwwmJRejwdRwGkH_ooPrY-t3bG3VvAlR738nK7_CxNpQIf9PAu8-gn4gIX_0XMBelm8wDuguW6DX1hps"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-8">
              <h3 className="text-3xl font-headline text-white">Community Unity in Diversity</h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
