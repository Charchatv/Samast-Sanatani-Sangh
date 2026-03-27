"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section className="relative flex items-start pt-20 pb-12 md:pt-16 md:pb-8 overflow-hidden bg-[#faf9f6]">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            alt="Sacred fire ritual"
            className="w-full h-full object-cover filter grayscale-[0.2] opacity-[0.35] md:opacity-100"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWWUT93WaaWWE58BpIHj1Kr8ibqRIR3jBY1SCgfs0FDaNNPl8PQoOPueNySAPEKb4Se1XFdZJYS2PfoJbK-P8_Lw4zHpDlrESDWkIpGYghW8_DNjEN_2jCjiiISfpEoFb9xPuunwtiU3Yq9Rht5Z3ynUZliQzWSveL869ep7qrL56-K6IsZKOdBOWy5seZ6DAk7ALjixGVB93fGBOwwHx07CtGSWzqRMPs46TNW3coCvyQRo-weCROBOeRt9dAx-rKmRYPp-Q"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f6] via-[#faf9f6]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 space-y-3"
        >
          <motion.div variants={itemVariants} className="space-y-1">
            <h1 className="text-5xl md:text-8xl font-headline font-light leading-[1.2] md:leading-[1.1] tracking-tight text-on-background">
              सनातन <br />
              <span className="font-headline text-primary">धर्मः</span> <br />
              शाश्वत सत्यम्।
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants} 
            className="text-xl md:text-2xl text-secondary leading-relaxed max-w-xl font-body font-light border-l border-primary/20 pl-8"
          >
            Samast Sanatani Sangh is a global movement dedicated to the preservation, promotion, and practice of Sanatan Dharma through sacred rituals and community unity.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-4 flex flex-wrap gap-4">
            <Link href="/download" className="bg-primary text-on-primary px-10 py-4 rounded-full text-sm font-label font-bold uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all shadow-2xl shadow-primary/20 inline-block">
              Download our app
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-8 md:left-12 flex items-center gap-6 text-outline"
      >
      </motion.div>

      {/* Subtle decorative element */}
      <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] border border-primary/5 rounded-full pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 -right-48 w-[300px] h-[300px] border border-primary/5 rounded-full pointer-events-none -translate-y-1/2"></div>
    </section>
  );
}

