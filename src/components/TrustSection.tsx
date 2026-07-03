"use client";

import { motion } from "framer-motion";
import { Globe, ArrowUpRight } from "lucide-react";

export default function TrustSection() {
  const sectors = [
    {
      name: "Restaurant Technology",
      description: "Contactless QR menus, kitchen ticketing consoles, and POS registries.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
      size: "lg:col-span-8",
    },
    {
      name: "Creative Media Assets",
      description: "Secure review hubs and timeline feedback loops for draft sign-offs.",
      image: "https://images.unsplash.com/photo-1496181130204-755241544e35?auto=format&fit=crop&w=600&q=80",
      size: "lg:col-span-4",
    },
    {
      name: "Mobility & Booking",
      description: "Dispatch systems, passenger queue mapping, and driver routing.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      size: "lg:col-span-4",
    },
    {
      name: "Business Automation",
      description: "System integrations syncing sheets, Stripe payments, and databases.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      size: "lg:col-span-8",
    },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 border-y border-border-muted bg-bg-secondary/15 backdrop-blur-sm overflow-hidden select-none">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 select-text max-w-2xl">
          <span className="font-mono text-[9px] text-[#246B3A] uppercase tracking-widest font-bold flex items-center gap-1.5 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#246B3A]" />
            Capabilities & Sectors
          </span>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-[#111] leading-tight mb-3">
            Where we build value.
          </h2>
          <p className="text-[#555] text-xs sm:text-sm leading-relaxed font-normal">
            From local operations to worldwide partnerships, we engineer custom workflows and products that drive business efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Box 1 (Global Presence / Network Nodes): 5 columns */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl border border-border-muted bg-bg-primary shadow-sm relative overflow-hidden">
            {/* Soft decorative blur */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-accent-primary/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <span className="font-mono text-[9px] text-accent-primary uppercase tracking-widest font-bold flex items-center gap-1.5 mb-4">
                <Globe className="w-3.5 h-3.5 text-accent-primary animate-pulse" />
                Worldwide Partnerships
              </span>
              <h3 className="font-display font-light text-3xl md:text-4xl text-text-primary leading-[1.1] mb-4">
                Serving clients globally.
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
                BhanuWorks operates as a remote-first product studio, delivering robust web software and automation systems to partners across borders.
              </p>
            </div>

            {/* Network Nodes Connection Vector SVG */}
            <div className="h-44 w-full relative mt-8 flex items-center justify-center">
              <svg className="w-full h-full text-accent-primary/20" viewBox="0 0 200 100" aria-hidden="true">
                {/* Connection paths */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  d="M 20,50 Q 60,10 100,50 T 180,50"
                  fill="none"
                  stroke="#3E4E3A"
                  strokeWidth="1"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  d="M 40,80 Q 100,20 160,80"
                  fill="none"
                  stroke="#C2A26A"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                
                {/* Glowing Nodes */}
                <circle cx="20" cy="50" r="3" fill="#3E4E3A" className="animate-ping" />
                <circle cx="20" cy="50" r="3.5" fill="#3E4E3A" />
                <circle cx="100" cy="50" r="4.5" fill="#C2A26A" />
                <circle cx="180" cy="50" r="3" fill="#3E4E3A" />
                <circle cx="40" cy="80" r="3" fill="#3E4E3A" />
                <circle cx="160" cy="80" r="3" fill="#C2A26A" />
              </svg>
            </div>
          </div>

          {/* Box 2 (Core Sectors Redesigned Bento Grid): 7 columns */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-mono text-[9px] text-text-muted uppercase tracking-widest font-bold pl-2">Core Sectors</span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
              {sectors.map((sector, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  className={`group relative rounded-3xl border border-border-muted overflow-hidden bg-bg-primary shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between p-6 ${sector.size}`}
                >
                  {/* Backdrop Photo Image */}
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <img
                      src={sector.image}
                      alt={sector.name}
                      className="w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/90 to-bg-primary/65" />
                  </div>

                  {/* Sector Title & Meta */}
                  <div className="relative z-10 flex justify-between items-start gap-4">
                    <h4 className="font-display font-light text-xl text-text-primary group-hover:text-accent-primary transition-colors">
                      {sector.name}
                    </h4>
                    <ArrowUpRight className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="relative z-10 text-[11px] text-text-secondary leading-relaxed mt-4 max-w-md select-text font-normal">
                    {sector.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
