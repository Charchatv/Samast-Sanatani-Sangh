"use client";

import { motion, Variants } from "framer-motion";

const timelineData = [
  {
    icon: "sunny",
    hindiTitle: "पावन प्रारंभ",
    title: "The Sacred Beginning",
    description: "In the mystical aura of Pushkar, Lord Brahma performed a grand yajna. From the sacred ashes and divine intent, the Pushkarna Brahmins were created to serve as the pillars of cosmic order.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkkh6XF-UncsEOxB_vxddC5wsa7zoPRIdujSVqbGV98Mg6rq2wfeL-k4zAt4_kpKrVM5_hiq9rz-6X2iJ75qfc_PWAc3KHelicCBwaEODnLk6diOD6FT9w2nQmVV35_5l4xlRNv9O4Wf2sZ9OMQrELOME8CLbk2qUwjscZFIG4kAe7UVrERY_Rytmx8bN6i9uVDH2ouGWorl4wx8PQtw7w97RkUwDxcJTm8IEp48_SNfN-v8lAzal-aRB1yYOsUGZvxW6dyKk",
    alt: "Pushkar lake at dawn",
  },
  {
    icon: "temple_hindu",
    hindiTitle: "प्राचीन सभ्यताएँ",
    title: "Ancient Civilizations",
    description: "Settling along the fertile banks of the Sindhu (Indus) River, our ancestors thrived in Mohenjo-daro and Harappa, shaping the moral and social fabric of history's greatest civilizations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2vbtatetpHxrQQK8AvdcNyHkCL70iCU15YV4eZNRakFePh_rBUwyG0M20jy2w_TJhuRlVq2tASm10Kj4iX17KfkDNAi7ishztraVj3lNFJyODYr1XJagdkcxQU3Aj4N6GhplbCfdvpLJCGkTvDAVtvkX3BAd1WJTfbP0kGD8vxuY3VClGjsZgX2oE7vHzSGohMHL1MYbd8WpqCF2PunubwihOtrP3ua77cLGbQddHMsQIxPjazHymw_Cc97sJUVReF1knvkg",
    alt: "Ancient ruins",
  },
  {
    icon: "local_fire_department",
    hindiTitle: "पारंपरिक कथानक",
    title: "Traditional Narrative",
    description: "Fire worship became the center of life. The early Vedic roots took hold, establishing a direct connection between the earthly realm and the divine through meticulous rituals.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgjXdJycHlbh6Umh2eln4t-ECw1pXR3v7LUKgIkqWtZlqehWJS_eWrj1pYUKeXG7FlzcyYgYs-H3ZCv-Q5itHGlA-ivQ7Jd3kWysH9PPY_03YcK1QFVznyLr2VRZwaAsOYFuXIN_1nufESGxo3SPiKscaRT6Gqcw3GnmcRWODX5oZrQGPJ9wCAca7rsT8VTHO21Ngxi4WDaZD_8wVpFAtcpayQ3SjtRck6Ihc6CfNdsgrzsQ4wHDJrkwEOmcrUkUuSqqJ34OE",
    alt: "Vedic Havan",
  },
  {
    icon: "waves",
    hindiTitle: "सिंधु से सिंधी तक",
    title: "From Sindhu to Sindhi",
    description: "The evolution of identity began here. While the language and geography shifted, the preservation of rituals remained an immutable constant, bonding the community through centuries.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVzWisiPHZZzpQv69viXYXeEghovUKp-lHaRHbwbDlBz04Cd82JCQ81Ogeki6ZuKibm9ETdGTP5f18NyfIBA3nKsWc2xVh-iyzfcZHb4C9OONaoRCENquFLnLTMP72B3LNUZyLkuO_kWxa5m7cdXwV6TqCjhGjvWC52kAzJFfT9pzuAnsJoiAn3cvs26lRrDmBi_6Xj9OahEG07Lf1aWQvnAt5LcNFn3Bm3b_-e5cHRG7ObOsisKeO8ZJviZYwXRUE3duE1vE",
    alt: "River Indus",
  },
  {
    icon: "temple_buddhist",
    hindiTitle: "पलायन और जीवंतता",
    title: "Migration and Resilience",
    description: "The partition brought displacement, but not defeat. Carrying only their wisdom and sacred texts, the Pushkarna Brahmins rebuilt their lives, planting the seeds of dharma in new soil.",
    image: "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=800",
    alt: "Migration Journey",
  },
  {
    icon: "book_5",
    hindiTitle: "धर्म के रक्षक",
    title: "Guardians of Dharma",
    description: "Generations of scholars and priests have dedicated their lives to the study of the Vedas, ensuring that the eternal laws of Sanatana Dharma are passed down with absolute purity.",
    image: "https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?auto=format&fit=crop&q=80&w=800",
    alt: "Scholars of Dharma",
  },
  {
    icon: "fireplace",
    hindiTitle: "जीवंत परंपरा",
    title: "Living Tradition",
    description: "Today, the flame continues to burn. In modern homes and grand temples, the Pushkarna Brahmins continue to offer spiritual guidance and conduct Havans, bridging the ancient and the modern.",
    image: "/images/havan.jpg",
    alt: "The Sacred Flame",
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1] as any 
    } 
  },
};

export default function HistoryContent() {
  return (
    <div id="history" className="bg-background pt-10 pb-16">
      <header className="px-8 max-w-7xl mx-auto mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary mb-6 block font-bold">Our Eternal Heritage</span>
          <h1 className="font-headline text-6xl md:text-9xl text-on-background mb-8 leading-[0.9] tracking-tighter">
            The Pushkarna <br /> Chronicles
          </h1>
          <p className="text-secondary text-xl max-w-xl leading-relaxed font-light border-l border-primary/20 pl-8">
            Tracing the spiritual and cultural lineage of the Pushkarna Brahmins, from the sacred fires of Pushkar to the modern custodians of Vedic wisdom.
          </p>
        </motion.div>
      </header>

      <section className="relative max-w-7xl mx-auto px-8 md:px-12 overflow-hidden">
        {/* Vertical line with animation */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-outline-variant/30 md:-translate-x-1/2 origin-top"
        ></motion.div>

        <div className="space-y-12 md:space-y-16">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full z-20 border-4 border-background"></div>

              <div className={`flex-1 w-full flex flex-col ${index % 2 === 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
                <div className={`flex gap-6 items-start mb-6 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  <span className="material-symbols-outlined text-primary text-4xl opacity-80 mt-1 md:mt-3 flex-shrink-0">{item.icon}</span>
                  <div>
                    <span className="text-primary/60 font-headline text-lg block mb-1">{item.hindiTitle}</span>
                    <h2 className="font-headline text-3xl md:text-5xl text-primary leading-tight">{item.title}</h2>
                  </div>
                </div>
                <p className="text-secondary leading-relaxed text-base font-light text-justify">{item.description}</p>
              </div>

              <div className="flex-1 w-full flex justify-center">
                <div className="aspect-[4/3] w-full max-w-sm bg-surface-container-low overflow-hidden rounded-[2rem] shadow-xl shadow-stone-200/50 group border border-outline-variant/10">
                  <motion.img
                    src={item.image}
                    alt={item.alt}
                    initial={{ filter: "grayscale(100%)" }}
                    whileInView={{ filter: "grayscale(0%)" }}
                    viewport={{ once: false, amount: 0.7 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
