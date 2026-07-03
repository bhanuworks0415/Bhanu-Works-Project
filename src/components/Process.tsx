"use client";

import { useRef } from "react";
import { Search, Compass, Layout, Code, Rocket, Activity, BarChart, Server } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 18,
  });

  const activeLineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      title: "Discovery",
      icon: Search,
      description: "We map out your business objectives and software scoping constraints.",
      outcome: "Clear project blueprint & strategy roadmap.",
      visual: (
        <div className="w-full h-20 mt-4 rounded-xl border border-border-muted bg-bg-primary p-3 flex flex-col justify-between font-mono text-[8px] text-text-muted shadow-sm">
          <div className="flex justify-between items-center border-b border-border-muted/50 pb-1">
            <span>Milestone Scoping</span>
            <span className="text-accent-gold font-bold">Phase 1</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-1.5 rounded bg-accent-primary" />
            <div className="w-16 h-1.5 rounded bg-border-muted" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-1.5 rounded bg-accent-primary/40" />
            <div className="w-10 h-1.5 rounded bg-accent-primary" />
          </div>
        </div>
      ),
    },
    {
      title: "System Design",
      icon: Compass,
      description: "We organize system parameters, cloud routes, and client requirements.",
      outcome: "Secure system structure maps.",
      visual: (
        <div className="w-full h-20 mt-4 rounded-xl border border-border-muted bg-bg-primary p-3 flex justify-between items-center font-mono text-[8px] text-text-muted shadow-sm">
          <div className="flex flex-col gap-1">
            <span>Database Nodes</span>
            <span className="text-success font-bold">Secure SSL ✓</span>
          </div>
          <Server className="w-6 h-6 text-accent-primary/40" />
        </div>
      ),
    },
    {
      title: "Interface Prototyping",
      icon: Layout,
      description: "We draft premium visual wireframes matching your exact branding.",
      outcome: "Interactive custom user interface previews.",
      visual: (
        <div className="w-full h-20 mt-4 rounded-xl overflow-hidden relative border border-border-muted shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=300&q=80"
            alt="UX interface design workflow"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      title: "Engineering",
      icon: Code,
      description: "We engineer scalable interfaces, configure custom components, and check integration dispatches.",
      outcome: "Audited, fully functional software systems.",
      visual: (
        <div className="w-full h-20 mt-4 rounded-xl border border-border-muted bg-bg-primary p-3 flex flex-col justify-between font-mono text-[8px] text-text-muted shadow-sm">
          <div className="flex justify-between">
            <span className="text-accent-gold">$ npm run test</span>
            <span className="text-success font-bold">100% Pass</span>
          </div>
          <div className="w-full h-1 bg-border-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5 }}
              className="h-full bg-success"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Secure Launch",
      icon: Rocket,
      description: "We launch your code on high-speed servers with zero downtime.",
      outcome: "Active production server setups.",
      visual: (
        <div className="w-full h-20 mt-4 rounded-xl overflow-hidden relative border border-border-muted shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80"
            alt="Studio launch center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 to-transparent flex items-end p-2 justify-between font-mono text-[8px]">
            <span>Uptime online</span>
            <span className="text-success font-bold">99.98%</span>
          </div>
        </div>
      ),
    },
    {
      title: "Support",
      icon: Activity,
      description: "We audit speed logs, boost response speeds, and schedule updates.",
      outcome: "Ongoing speed optimization reports.",
      visual: (
        <div className="w-full h-20 mt-4 rounded-xl border border-border-muted bg-bg-primary p-3 flex justify-between items-center font-mono text-[8px] text-text-muted shadow-sm">
          <div className="flex flex-col gap-1">
            <span>Uptime telemetry</span>
            <span className="text-accent-gold font-bold">Optimized</span>
          </div>
          <BarChart className="w-6 h-6 text-accent-gold/40 animate-pulse" />
        </div>
      ),
    },
  ];

  return (
    <section
      ref={containerRef}
      id="process"
      className="pt-16 pb-32 md:pt-20 md:pb-48 bg-bg-primary border-t border-border-muted relative select-none"
    >
      <div className="container max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="section-header center mb-32">
          <span className="section-tag">How We Work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-text-primary mb-6 leading-tight">
            Our strategic scoping process
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed select-text font-normal">
            An engineering-led workflow built to guarantee zero scope surprises, clear milestones, and absolute transparency.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Base connecting line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[1px] bg-border-muted z-0 -translate-x-1/2" />

          {/* Active scroll progress connecting line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-4 w-[1px] bg-accent-primary z-10 -translate-x-1/2 shadow-lg"
            style={{ height: activeLineHeight }}
          />

          <div className="space-y-12">
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              const isEven = i % 2 === 0;

              return (
                <div key={i} className="relative flex flex-col md:flex-row items-start md:justify-between z-10">
                  
                  {/* Timeline bullet */}
                  <div className="absolute left-6 md:left-1/2 w-10 h-10 rounded-full border border-border-muted bg-bg-primary flex items-center justify-center -translate-x-1/2 z-20 shadow-md">
                    <span className="font-mono text-xs text-accent-primary font-bold">0{i + 1}</span>
                  </div>

                  {/* Step Card */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:text-right md:order-1" : "md:order-3"}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 120, damping: 20 }}
                      className="p-8 rounded-3xl border border-border-muted bg-bg-secondary/30 backdrop-blur-sm hover:border-border-active transition-all duration-300 shadow-sm"
                    >
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-9 h-9 rounded-xl bg-accent-primary/5 border border-accent-primary/10 flex items-center justify-center shrink-0">
                          <StepIcon className="w-4.5 h-4.5 text-accent-primary" aria-hidden="true" />
                        </div>
                        <h3 className="font-display font-light text-xl text-text-primary">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4 select-text font-normal">
                        {step.description}
                      </p>
                      
                      {/* Step Visual Graphic */}
                      {step.visual}

                      <span className="font-mono text-[9px] text-accent-gold font-bold block uppercase tracking-wider mt-4">
                        {step.outcome}
                      </span>
                    </motion.div>
                  </div>

                  <div className="hidden md:block w-[5%] order-2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
