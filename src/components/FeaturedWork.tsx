"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FeaturedWork() {
  const projects = [
    {
      title: "Qarpul",
      slug: "qarpul",
      category: "Logistics & Mobility",
      description: "A dispatch platform synchronizing driver routes and customer bookings automatically. Built to handle heavy peak transit demands with zero scheduling friction.",
      color: "from-accent-primary/5 to-accent-primary/10 border-accent-primary/10 hover:border-accent-primary/20",
      accent: "text-accent-primary bg-accent-primary/5 border-accent-primary/10",
      visualMockup: (
        <div className="w-full h-80 rounded-3xl border border-accent-primary/15 bg-bg-secondary/40 relative overflow-hidden flex flex-col justify-between p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-border-muted/30 pb-3">
            <span className="font-mono text-[10px] text-text-primary font-bold">Qarpul Dispatch</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
          </div>
          <div className="flex-1 relative flex items-center justify-center my-2 overflow-hidden">
            <svg className="w-3/4 h-2/3 text-accent-primary/20" viewBox="0 0 100 50" aria-hidden="true">
              <path d="M10,40 Q30,10 60,35 T90,10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                d="M10,40 Q30,10 60,35 T90,10"
                fill="none"
                stroke="#5F7458"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="flex justify-between font-mono text-[9px] text-text-muted">
            <span>40k Bookings</span>
            <span>0.0s Latency</span>
          </div>
        </div>
      ),
    },
    {
      title: "TapServe",
      slug: "tapserve",
      category: "Restaurant Platform",
      description: "Table ordering and kitchen ticketing workflows to speed up ordering processes. Integrates menu listings directly with POS registries for fast customer checkouts.",
      color: "from-accent-hover/5 to-accent-hover/10 border-accent-hover/10 hover:border-accent-hover/20",
      accent: "text-accent-hover bg-accent-hover/5 border-accent-hover/10",
      visualMockup: (
        <div className="w-full h-80 rounded-3xl border border-accent-hover/15 bg-bg-secondary/40 relative overflow-hidden flex flex-col justify-between p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-border-muted/30 pb-3">
            <span className="font-mono text-[10px] text-text-primary font-bold">TapServe Queue</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-hover animate-pulse" />
          </div>
          <div className="flex-1 grid grid-cols-2 gap-3 my-2 overflow-hidden items-center">
            <div className="p-3 rounded-xl border border-border-muted bg-bg-primary/50 flex flex-col justify-between h-24 shadow-sm">
              <span className="font-mono text-[9px] text-text-primary">#1024</span>
              <span className="text-[10px] text-success font-semibold">Ready</span>
            </div>
            <div className="p-3 rounded-xl border border-border-muted bg-bg-primary/50 flex flex-col justify-between h-24 shadow-sm">
              <span className="font-mono text-[9px] text-text-primary">#1025</span>
              <span className="text-[10px] text-accent-primary font-semibold font-mono">Prep</span>
            </div>
          </div>
          <div className="flex justify-between font-mono text-[9px] text-text-muted">
            <span>Wait: -34%</span>
            <span>POS: Connected</span>
          </div>
        </div>
      ),
    },
    {
      title: "HVR Media House",
      slug: "hvr-media-house",
      category: "Creative Asset Portal",
      description: "High-bandwidth video asset reviewer and client proofing system. Features timeline-based feedback threads for immediate client approvals and video preview dispatches.",
      color: "from-text-secondary/5 to-text-secondary/10 border-text-secondary/10 hover:border-text-secondary/20",
      accent: "text-text-secondary bg-text-secondary/5 border-text-secondary/10",
      visualMockup: (
        <div className="w-full h-80 rounded-3xl border border-text-secondary/15 bg-bg-secondary/40 relative overflow-hidden flex flex-col justify-between p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-border-muted/30 pb-3">
            <span className="font-mono text-[10px] text-text-primary font-bold">HVR Assets</span>
            <span className="w-1.5 h-1.5 rounded-full bg-text-secondary animate-pulse" />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-3 my-2 overflow-hidden">
            <div className="p-3 rounded-xl border border-border-muted bg-bg-primary/50 flex items-center justify-between shadow-sm">
              <span className="text-[10px] text-text-primary font-bold">Draft_v3.mp4</span>
              <span className="font-mono text-[9px] text-accent-primary">Review</span>
            </div>
          </div>
          <div className="flex justify-between font-mono text-[9px] text-text-muted">
            <span>Loop: -50%</span>
            <span>Uptime: 99.98%</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="case-studies" className="pt-16 pb-16 md:pt-20 md:pb-24 bg-bg-primary border-t border-border-muted relative select-none" aria-labelledby="featured-work-title">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="section-header center mb-16">
          <span className="section-tag">Featured Work</span>
          <h2 id="featured-work-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-text-primary mb-6 leading-tight">
            Software built for business outcomes
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed select-text">
            We deliver outcomes, not code. Here are real projects running live production systems for our partners.
          </p>
        </div>

        {/* Alternating Layout Grid */}
        <div className="space-y-32">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-border-muted/30 pt-12`}
              >
                {/* Text Content Block */}
                <div className={`lg:col-span-5 flex flex-col items-start gap-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <span className={`px-2.5 py-1 rounded text-[9px] font-mono font-bold tracking-wider uppercase border ${project.accent}`}>
                    {project.category}
                  </span>
                  
                  <h3 className="font-display font-light text-3xl md:text-4xl lg:text-5xl text-text-primary">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed select-text font-normal">
                    {project.description}
                  </p>

                  <a
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-accent-primary hover:text-accent-hover transition-colors duration-200 mt-2"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>

                {/* Visual Mockup Block */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    className={`rounded-3xl border bg-gradient-to-b ${project.color} p-2 hover:shadow-2xl transition-all duration-300 cursor-pointer`}
                    onClick={() => window.location.href = `/work/${project.slug}`}
                  >
                    {project.visualMockup}
                  </motion.div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
