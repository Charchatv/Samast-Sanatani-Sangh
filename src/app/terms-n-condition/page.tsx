"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
  const sections = [
    {
      title: "1. ACCEPTANCE OF TERMS",
      content: "By accessing or using Pushkarna Brahmin App (the “Platform”), You agree to be bound by these Terms and Conditions (“Terms”). If You do not agree, You must not use the Platform."
    },
    {
      title: "2. ELIGIBILITY",
      content: "You must be at least 18 years of age and legally competent to enter into a binding agreement under applicable law."
    },
    {
      title: "3. USER ACCOUNT",
      content: "You are responsible for maintaining the confidentiality of Your account credentials and for all activities conducted under Your account."
    },
    {
      title: "4. PLATFORM SERVICES",
      content: "The Platform provides a community-based environment including:\n\n* Sharing of news (positive or negative)\n* Matrimonial listings and profile browsing\n* Job-related postings and assistance\n\nWe act solely as an intermediary and do not guarantee outcomes (e.g., marriage matches or job placements)."
    },
    {
      title: "5. USER CONDUCT",
      content: "You agree not to:\n\n* Post false, misleading, defamatory, obscene, or unlawful content\n* Harass, threaten, or harm other users\n* Impersonate any person or entity\n* Violate any applicable laws or regulations\n* Share sensitive or private information without consent"
    },
    {
      title: "6. MATRIMONIAL AND COMMUNITY CONTENT DISCLAIMER",
      content: "We do not verify the accuracy, authenticity, or intentions of users or their profiles. Users interact at their own risk. The Company shall not be liable for any disputes, damages, or consequences arising from such interactions."
    },
    {
      title: "7. JOB SECTION DISCLAIMER",
      content: "The Platform does not guarantee job opportunities or verify all job postings. Users must exercise due diligence before engaging with any opportunity."
    },
    {
      title: "8. CONTENT OWNERSHIP AND LICENSE",
      content: "By posting content, You grant the Company a non-exclusive, worldwide, royalty-free license to use, display, and distribute such content for platform operation."
    },
    {
      title: "9. TERMINATION",
      content: "We reserve the right to suspend or terminate accounts without prior notice for violation of these Terms or applicable laws."
    },
    {
      title: "10. LIMITATION OF LIABILITY",
      content: "To the maximum extent permitted by law, the Company shall not be liable for any indirect, incidental, consequential, or punitive damages arising from use of the Platform."
    },
    {
      title: "11. INDEMNIFICATION",
      content: "You agree to indemnify and hold harmless the Company from any claims, damages, liabilities, or expenses arising out of Your use of the Platform or violation of these Terms."
    },
    {
      title: "12. GOVERNING LAW AND JURISDICTION",
      content: "These Terms shall be governed by and construed in accordance with the laws of India. Courts located in [Insert City] shall have exclusive jurisdiction."
    },
    {
      title: "13. MODIFICATIONS",
      content: "We reserve the right to modify these Terms at any time. Continued use constitutes acceptance of updated Terms."
    },
    {
      title: "14. CONTACT INFORMATION",
      content: "For any queries regarding these Terms:\nhelp@sugamaya.in"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      <main className="pt-20 pb-24 px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-label uppercase tracking-[0.4em] text-xs font-bold block mb-4">
            Legal
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-light tracking-tight text-on-background uppercase">
            Terms & Conditions
          </h1>
          <div className="w-12 h-[1px] bg-primary mx-auto mt-8 opacity-30"></div>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <h2 className="text-xl font-headline text-primary mb-6 transition-colors group-hover:text-primary-container">
                {section.title}
              </h2>
              <div className="bg-surface-container-low/40 p-8 rounded-2xl border border-outline-variant/10">
                <p className="text-secondary leading-relaxed whitespace-pre-wrap font-light text-justify">
                  {section.content}
                </p>
              </div>
            </motion.section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
