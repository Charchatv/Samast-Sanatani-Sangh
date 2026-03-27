"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. INTRODUCTION",
      content: "This Privacy Policy (\"Policy\") governs the manner in which Pushkarna Brahmin App (\"Company\", \"We\", \"Us\", or \"Our\") collects, uses, stores, discloses, and protects the personal information of users (\"User\", \"You\", or \"Your\") accessing or using the platform, including mobile applications, websites, and related services (collectively, the \"Platform\").\n\nBy accessing or using the Platform, You expressly consent to the terms of this Policy."
    },
    {
      title: "2. INFORMATION WE COLLECT",
      content: "We may collect and process the following categories of information:\n\na) Personal Information:\nIncluding but not limited to name, contact number, email address, age, gender, location, community details, marital status, education, employment details, and photographs.\n\nb) Sensitive Personal Data (if applicable):\nAny information voluntarily provided in matrimonial profiles or community posts that may include personal preferences, beliefs, or other sensitive disclosures.\n\nc) User-Generated Content:\nContent shared on the Platform including news posts (good or bad), matrimonial profiles, job postings, messages, and comments.\n\nd) Technical Information:\nDevice information, IP address, browser type, operating system, usage data, and analytics."
    },
    {
      title: "3. PURPOSE OF COLLECTION",
      content: "The information collected is used for the following purposes:\n\n* To provide, operate, and maintain the Platform\n* To enable community interaction including news sharing, matrimonial connections, and job assistance\n* To verify user identity and ensure authenticity\n* To improve user experience and platform functionality\n* To communicate updates, notifications, or support responses\n* To comply with legal obligations"
    },
    {
      title: "4. DATA SHARING AND DISCLOSURE",
      content: "We do not sell personal data. However, we may share information:\n\n* With other users as part of profile visibility (especially in matrimonial and community sections)\n* With service providers assisting in platform operations\n* When required by law, regulation, or legal process\n* To protect rights, safety, and integrity of the Platform or its users"
    },
    {
      title: "5. DATA RETENTION",
      content: "We retain personal data only for as long as necessary to fulfill the purposes outlined herein, unless a longer retention period is required or permitted by law."
    },
    {
      title: "6. USER RIGHTS",
      content: "Subject to applicable laws, You may have the right to:\n\n* Access and review Your personal data\n* Request correction or deletion\n* Withdraw consent (where applicable)\n* Object to processing in certain circumstances\n\nRequests may be made through designated contact channels."
    },
    {
      title: "7. DATA SECURITY",
      content: "We implement reasonable technical and organizational safeguards to protect user data. However, no system is completely secure, and We cannot guarantee absolute security."
    },
    {
      title: "8. THIRD-PARTY LINKS",
      content: "The Platform may contain links to third-party websites or services. We are not responsible for their privacy practices."
    },
    {
      title: "9. CHILDREN’S PRIVACY",
      content: "The Platform is not intended for individuals below 18 years of age. We do not knowingly collect data from minors."
    },
    {
      title: "10. CHANGES TO POLICY",
      content: "We reserve the right to update this Policy at any time. Continued use of the Platform constitutes acceptance of revised terms."
    },
    {
      title: "11. CONTACT INFORMATION",
      content: "For any queries regarding this Policy, You may contact:\nhelp@sugamaya.in"
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
            Privacy Policy
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
