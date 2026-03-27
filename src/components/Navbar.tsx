"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home", id: "home" },
  { href: "/#havan", label: "Havan", id: "havan" },
  { href: "/#history", label: "History", id: "history" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(pathname === "/" ? "home" : "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    
    // Observer targets
    const sections = ["havan", "history"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Special case for home (top of page)
    const handleScroll = () => {
      if (window.scrollY < 300 && pathname === "/") {
        setActiveSection("home");
      } else if (pathname !== "/") {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-primary-container py-3 shadow-lg" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex justify-between items-center px-8 md:px-12 max-w-7xl mx-auto">
        <Link 
          href="/" 
          className="group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="flex flex-col">
            <span className={`text-2xl md:text-3xl font-headline font-bold tracking-tighter transition-colors duration-300 group-hover:opacity-80 ${
              isScrolled ? "text-on-primary-container" : "text-primary"
            }`}>
              Samast Sanatani Sangh
            </span>
            <div className={`h-[1px] w-0 group-hover:w-full transition-all duration-700 ease-in-out mt-0.5 ${isScrolled ? "bg-on-primary-container" : "bg-primary"}`}></div>
          </div>
        </Link>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("/#")) {
                      const id = link.href.split("#")[1];
                      const el = document.getElementById(id);
                      if (el) {
                        e.preventDefault();
                        const offset = 80; // Navbar height approx
                        const bodyRect = document.body.getBoundingClientRect().top;
                        const elementRect = el.getBoundingClientRect().top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth"
                        });
                      }
                    } else if (link.href === "/") {
                      if (pathname === "/") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    } else if (link.href === "/download") {
                      // Normal link behavior
                      return;
                    }
                  }}
                  className={`text-sm font-label uppercase tracking-[0.2em] transition-all duration-300 relative group ${
                    isActive 
                      ? (isScrolled ? "text-on-primary-container font-bold" : "text-primary font-bold") 
                      : (isScrolled ? "text-on-primary-container/80 hover:text-on-primary-container" : "text-secondary hover:text-primary")
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-2 left-0 w-full h-[1px] origin-left transition-transform duration-500 ${
                    isScrolled ? "bg-on-primary-container" : "bg-primary"
                  } ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </Link>
              );
            })}
            
            <Link 
              href="/download"
              className={`px-6 py-2 rounded-full text-xs font-label uppercase tracking-widest transition-all duration-300 ${
                isScrolled 
                  ? "bg-on-primary-container text-primary-container hover:bg-on-primary-container/90 shadow-lg" 
                  : "bg-primary/90 text-on-primary hover:bg-white hover:text-primary backdrop-blur-sm"
              }`}
            >
              Download App
            </Link>
          </div>

          <button 
            className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? "text-on-primary-container" : "text-primary"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className={`md:hidden overflow-hidden border-b border-outline-variant/20 ${
          isScrolled ? "bg-primary-container" : "bg-background"
        }`}
      >
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith("/#")) {
                  const id = link.href.split("#")[1];
                  const el = document.getElementById(id);
                  if (el) {
                    setIsMenuOpen(false);
                    e.preventDefault();
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = el.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                  }
                } else if (link.href === "/") {
                  if (pathname === "/") {
                    setIsMenuOpen(false);
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }
              }}
              className={`text-sm font-label uppercase tracking-[0.2em] transition-colors ${
                isScrolled ? "text-on-primary-container/80 hover:text-on-primary-container" : "text-secondary hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/download"
            className={`px-6 py-3 rounded-full text-center text-xs font-label uppercase tracking-widest transition-all duration-300 ${
              isScrolled 
                ? "bg-on-primary-container text-primary-container shadow-xl" 
                : "bg-primary text-on-primary"
            }`}
          >
            Download App
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}

