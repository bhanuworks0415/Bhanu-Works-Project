"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [times, setTimes] = useState({ india: "", newYork: "" });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
    const updateTimes = () => {
      const formatT = (tz: string) => {
        try {
          return new Date().toLocaleTimeString("en-US", {
            timeZone: tz,
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          });
        } catch (e) {
          return "";
        }
      };
      setTimes({
        india: formatT("Asia/Kolkata"),
        newYork: formatT("America/New_York"),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "How We Work", href: "/#process" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-bg-secondary/70 backdrop-blur-md border-b border-border-muted/80 py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="w-full max-w-[1340px] mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Desktop Left Side Links */}
          <div className="hidden md:flex items-center justify-start gap-12 lg:gap-14 w-[44%]">
            {/* Symmetrical Running Clocks */}
            {mounted ? (
              <div className="flex items-center gap-3.5 font-mono text-xs font-medium uppercase tracking-wider text-text-secondary select-none shrink-0">
                <span>Delhi {times.india}</span>
                <span className="text-[#DDDCD8]">|</span>
                <span>New York {times.newYork}</span>
              </div>
            ) : (
              <div className="w-[110px] shrink-0" />
            )}
            
            {/* Shipped Navigation Links closer to Center */}
            <div className="flex items-center gap-6">
              <a href="/services" className="text-xs font-mono font-medium uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-200 py-1">Services</a>
              <a href="/work" className="text-xs font-mono font-medium uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-200 py-1">Work</a>
              <a href="/about" className="text-xs font-mono font-medium uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-200 py-1">About</a>
            </div>
          </div>

          {/* Desktop Symmetrical Center / Mobile Left Logo */}
          <div className="flex md:w-[12%] justify-start md:justify-center items-center">
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-md shrink-0 border border-border-muted/50 bg-[#FCFCFA] p-1 transition-transform duration-300 group-hover:scale-[1.03]">
                <img
                  src="/logo-monogram.png"
                  alt="BhanuWorks logo"
                  className="w-full h-full object-contain scale-[1.18]"
                />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-text-primary group-hover:text-accent-hover transition-colors duration-300">
                Bhanu<span className="text-accent-primary">Works</span>
              </span>
            </a>
          </div>

          {/* Desktop Right Side Links */}
          <div className="hidden md:flex items-center gap-6 w-[44%] justify-end">
            <a href="/#process" className="text-xs font-mono font-medium uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-200 py-1">How We Work</a>
            <a href="/contact" className="text-xs font-mono font-medium uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors duration-200 py-1">Contact</a>
            <a
              href="/book-consultation"
              className="btn-shimmer-trigger inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-text-primary text-bg-primary text-xs font-bold hover:bg-accent-primary hover:text-white transition-all duration-300 shadow-sm"
            >
              Book Consultation
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary focus:outline-none ml-auto"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[64px] z-40 md:hidden bg-bg-secondary/95 backdrop-blur-lg border-b border-border-muted py-6 px-6 flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-mono uppercase tracking-wider font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-sm font-mono uppercase tracking-wider font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
            <div className="flex flex-col gap-3">
              <a
                href="/book-consultation"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-lg bg-text-primary text-bg-primary font-bold hover:bg-accent-primary hover:text-white transition-all duration-300 text-xs font-mono uppercase tracking-wider"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
