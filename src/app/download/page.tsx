"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#faf9f6] pt-24 pb-4">
        <div className="max-w-4xl mx-auto px-8 md:px-12 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <span className="text-primary font-label uppercase tracking-[0.4em] text-xs font-bold block">
              Experience the Wisdom
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-light leading-tight tracking-tight text-on-background">
              Download <br />
              <span className="font-headline text-primary">Pushkarna</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center space-y-8"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary-container/50 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <a
                href="https://github.com/Charchatv/Samast-Sanatani-Sangh/releases/download/v1.0.0/app.apk"
                target="_blank"
                rel="noopener noreferrer"
                download="Samast-Sanatani-Sangh.apk"
                className="relative bg-primary text-on-primary px-16 py-6 rounded-full text-lg font-label font-bold uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all shadow-2xl shadow-primary/20 inline-block"
              >
                Download Now
              </a>
            </div>
          </motion.div>

          {/* Decorative background element */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full pointer-events-none -z-0"></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
