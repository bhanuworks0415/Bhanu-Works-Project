"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function WorkClient() {
  const projects = [
    {
      title: "Qarpul",
      slug: "qarpul",
      category: "Mobility Platform",
      description: "A ride-sharing platform connecting passengers and drivers through real-time booking, tracking, and communication.",
      color: "from-accent-primary/5 to-accent-primary/10 border-accent-primary/10 hover:border-accent-primary/25 hover:shadow-accent-primary/5",
      accent: "text-accent-primary bg-accent-primary/5 border-accent-primary/10",
      visualMockup: (
        <div className="w-full h-64 md:h-72 rounded-2xl border border-accent-primary/10 bg-bg-secondary/20 relative overflow-hidden flex flex-col justify-between p-5 transition-all duration-300">
          <div className="flex items-center justify-between border-b border-border-muted/30 pb-3">
            <span className="font-mono text-[10px] text-text-primary font-bold tracking-wider">Qarpul Active Panel</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
          </div>
          <div className="flex-1 relative flex items-center justify-center my-4 overflow-hidden">
            <svg className="w-4/5 h-2/3 text-accent-primary/20" viewBox="0 0 100 50" aria-hidden="true">
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
            <span>Route Matches</span>
            <span>Uptime: Active</span>
          </div>
        </div>
      ),
    },
    {
      title: "TapServe",
      slug: "tapserve",
      category: "Restaurant Technology",
      description: "A digital ordering and restaurant operations platform designed to improve customer experience and staff efficiency.",
      color: "from-accent-hover/5 to-accent-hover/10 border-accent-hover/10 hover:border-accent-hover/25 hover:shadow-accent-hover/5",
      accent: "text-accent-hover bg-accent-hover/5 border-accent-hover/10",
      visualMockup: (
        <div className="w-full h-64 md:h-72 rounded-2xl border border-accent-hover/10 bg-bg-secondary/20 relative overflow-hidden flex flex-col justify-between p-5 transition-all duration-300">
          <div className="flex items-center justify-between border-b border-border-muted/30 pb-3">
            <span className="font-mono text-[10px] text-text-primary font-bold tracking-wider">TapServe Queue Console</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-hover animate-pulse" />
          </div>
          <div className="flex-1 grid grid-cols-2 gap-3 my-4 overflow-hidden">
            <div className="p-3.5 rounded-lg border border-border-muted bg-bg-primary/40 flex flex-col justify-between shadow-inner">
              <span className="font-mono text-[9px] text-text-primary">Table 4</span>
              <span className="text-[10px] text-success font-semibold">Served</span>
            </div>
            <div className="p-3.5 rounded-lg border border-border-muted bg-bg-primary/40 flex flex-col justify-between shadow-inner">
              <span className="font-mono text-[9px] text-text-primary">Table 8</span>
              <span className="text-[10px] text-accent-primary font-semibold font-mono">Kitchen</span>
            </div>
          </div>
          <div className="flex justify-between font-mono text-[9px] text-text-muted">
            <span>Orders synced</span>
            <span>Uptime: Active</span>
          </div>
        </div>
      ),
    },
    {
      title: "HVR Media House",
      slug: "hvr-media-house",
      category: "Creative Platform",
      description: "A modern media and portfolio platform built to showcase creative work and strengthen online brand presence.",
      color: "from-text-secondary/5 to-text-secondary/10 border-text-secondary/10 hover:border-text-secondary/25 hover:shadow-text-secondary/5",
      accent: "text-text-secondary bg-text-secondary/5 border-text-secondary/10",
      visualMockup: (
        <div className="w-full h-64 md:h-72 rounded-2xl border border-text-secondary/10 bg-bg-secondary/20 relative overflow-hidden flex flex-col justify-between p-5 transition-all duration-300">
          <div className="flex items-center justify-between border-b border-border-muted/30 pb-3">
            <span className="font-mono text-[10px] text-text-primary font-bold tracking-wider">HVR Assets Manager</span>
            <span className="w-1.5 h-1.5 rounded-full bg-text-secondary animate-pulse" />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-2.5 my-4 overflow-hidden">
            <div className="p-3 rounded-lg border border-border-muted bg-bg-primary/40 flex items-center justify-between shadow-sm">
              <span className="text-[10px] text-text-primary font-semibold">Video_Draft_v3.mp4</span>
              <span className="font-mono text-[8px] text-accent-primary">Preview</span>
            </div>
          </div>
          <div className="flex justify-between font-mono text-[9px] text-text-muted">
            <span>Media synced</span>
            <span>Uptime: Active</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-bg-primary text-text-primary min-h-screen pt-40 pb-28 select-none" role="main">
        
        {/* Premium Hero Section */}
        <section className="py-12 md:py-18 text-center relative overflow-hidden" aria-labelledby="work-hero-title">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(95,116,88,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(95,116,88,0.012)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="container max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-tag mb-6"
            >
              Selected Work
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              id="work-hero-title"
              className="text-5xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-text-primary mb-8 leading-[1.05]"
            >
              Building software that<br />
              <span className="hero-gradient-text">drives business growth.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-text-secondary text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed select-text font-normal"
            >
              BhanuWorks partners with startups, restaurants, hospitality businesses, and growing companies to engineer custom, robust software solutions.
            </motion.p>

          </div>
        </section>

        {/* Elegant Project Cards Grid */}
        <section className="py-12 pb-36" aria-label="Selected projects catalog">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 120, damping: 22, delay: i * 0.1 }}
                  className={`group relative rounded-3xl border bg-gradient-to-b ${project.color} p-8 flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer`}
                  onClick={() => window.location.href = `/work/${project.slug}`}
                >
                  <div>
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`px-2.5 py-1 rounded text-[9px] font-mono font-bold tracking-wider uppercase border ${project.accent}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Image / Mockup Placeholder */}
                    <div className="mb-6">
                      {project.visualMockup}
                    </div>

                    {/* Project Title */}
                    <h3 className="font-display font-light text-2xl text-text-primary mb-3">
                      {project.title}
                    </h3>
                    
                    {/* Short Description */}
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-8 select-text font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* View Project Button */}
                  <div className="border-t border-border-muted/40 pt-5 mt-auto flex items-center justify-between">
                    <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Explore System</span>
                    <a
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-bg-secondary border border-border-muted text-xs font-mono font-semibold uppercase tracking-wider text-text-primary group-hover:bg-text-primary group-hover:text-bg-primary transition-all duration-300 shadow-sm"
                    >
                      View Project
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
                    </a>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
