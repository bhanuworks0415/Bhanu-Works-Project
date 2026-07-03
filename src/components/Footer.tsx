"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 2000);
  };

  const navGroups = [
    {
      title: "Solutions",
      links: [
        { label: "Web Applications", href: "/services" },
        { label: "Restaurant Systems", href: "/services" },
        { label: "AI Integrations", href: "/services" },
        { label: "Business Automation", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Selected Work", href: "/work" },
        { label: "Methodology", href: "/#process" },
        { label: "Contact Scoping", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "System Uptime", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-bg-primary border-t border-border-muted pt-12 md:pt-16 pb-12 relative z-10 select-none">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="/" className="flex items-center gap-2.5 group self-start">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shadow-sm shrink-0 border border-border-muted/50 bg-[#FCFCFA] p-1">
                <img
                  src="/logo-monogram.png"
                  alt="BhanuWorks logo"
                  className="w-full h-full object-contain scale-[1.18]"
                />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-text-primary">
                Bhanu<span className="text-accent-primary">Works</span>
              </span>
            </a>
            
            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed max-w-sm select-text">
              <span className="font-semibold text-text-primary block mb-2">Building softwares that drive growth.</span>
              Specialists in high-performance custom software development, automated business operations, and enterprise AI agent integrations.
            </p>

            {/* Newsletter Subscription */}
            <div className="flex flex-col gap-2.5 mt-2">
              <span className="font-mono text-[9px] text-text-muted uppercase tracking-widest block font-bold">
                Subscribe to our business updates
              </span>
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-success text-xs font-semibold"
                >
                  <Check className="w-4 h-4" />
                  Subscribed to updates.
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="input-text text-xs py-2 px-3 focus:border-accent-primary"
                  />
                  <button
                    type="submit"
                    className="px-3 rounded-lg bg-text-primary text-bg-primary hover:bg-accent-primary hover:text-white transition-all duration-300"
                    aria-label="Subscribe to updates"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Spacer for Desktop */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Directory Groups */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {navGroups.map((group, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h4 className="font-mono text-[10px] text-text-muted uppercase tracking-widest font-bold">
                  {group.title}
                </h4>
                <ul className="space-y-3">
                  {group.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-text-secondary hover:text-text-primary transition-colors duration-150 select-text"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-muted/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Status Badge */}
          <div className="status-badge select-none border-border-muted/60">
            <div className="status-dot shrink-0" />
            <span className="text-[11px] font-semibold">Operational</span>
            <span className="text-[10px] text-text-muted">| 99.98% Uptime</span>
          </div>

          {/* Copyright */}
          <div className="text-[10px] sm:text-xs text-text-muted text-center sm:text-right select-text">
            © 2026 BhanuWorks. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              {
                href: "https://www.linkedin.com/in/bhanuworks/",
                label: "LinkedIn Connection",
                svg: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
              },
              {
                href: "mailto:bhanuworks0415@gmail.com",
                label: "Direct Email",
                svg: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                ),
              },
            ].map((soc, i) => {
              return (
                <a
                  key={i}
                  href={soc.href}
                  aria-label={soc.label}
                  className="w-8 h-8 rounded-lg border border-border-muted/80 hover:border-border-active bg-bg-secondary/40 text-text-secondary hover:text-text-primary flex items-center justify-center transition-all duration-300"
                >
                  {soc.svg}
                </a>
              );
            })}
          </div>

        </div>

      </div>
    </footer>
  );
}
