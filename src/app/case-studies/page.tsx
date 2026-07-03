"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, ShieldCheck, Check } from "lucide-react";

export default function CaseStudiesPage() {
  const projects = [
    {
      title: "Qarpul",
      client: "Qarpul Mobility Solutions",
      industry: "Logistics & Smart Mobility",
      summary: "Automating driver dispatches and route pairings during high-congestion hours.",
      challenge: "Manual dispatch coordination and route mapping resulted in scheduling conflicts and increased driver delays during peak commute times.",
      solution: "We engineered a real-time dispatch dashboard that automates route matching and coordinates driver schedules automatically without manual intervention.",
      features: [
        "Automated route matching",
        "Driver schedule synchronizer",
        "Real-time dispatch coordination",
        "Commuter queue management",
      ],
      impact: "Reduced matching delays to real-time and stabilized operations across 40,000 monthly bookings.",
      accent: "from-accent-primary to-accent-hover",
      accentBg: "bg-accent-primary/5 border-accent-primary/10 text-accent-primary",
      stats: [
        { value: "Instant", label: "Match Speed" },
        { value: "40k/mo", label: "Monthly Bookings" },
      ],
      // High-Fidelity CSS Mock Dashboard
      visualMockup: (
        <div className="w-full h-80 rounded-3xl border border-accent-primary/10 bg-bg-secondary/40 relative overflow-hidden flex flex-col justify-between p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-border-muted/50 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent-primary" />
              <span className="font-mono text-xs text-text-primary font-bold">Qarpul Dispatch Engine</span>
            </div>
            <span className="font-mono text-[9px] text-accent-primary px-2 py-0.5 rounded border border-accent-primary/20 bg-accent-primary/5">Active Sync</span>
          </div>
          {/* Vector Map Simulation */}
          <div className="flex-1 relative flex items-center justify-center my-4 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(142,116,83,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(142,116,83,0.015)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
            {/* Glowing route line */}
            <svg className="w-4/5 h-2/3 text-accent-primary/20" viewBox="0 0 100 50">
              <path
                d="M10,40 Q30,10 60,35 T90,10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
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
            <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-accent-primary animate-ping" />
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-accent-hover animate-ping" />
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-border-muted/50 pt-4 font-mono text-[10px]">
            <div>
              <span className="text-text-muted block">Incoming</span>
              <span className="text-text-primary font-bold">142 Requests</span>
            </div>
            <div>
              <span className="text-text-muted block">Matched</span>
              <span className="text-text-primary font-bold">98.4% Rate</span>
            </div>
            <div>
              <span className="text-text-muted block">Avg Delay</span>
              <span className="text-text-primary font-bold">0.0s</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "TapServe",
      client: "TapServe Hospitality Group",
      industry: "Hospitality & Restaurant Technology",
      summary: "Speeding up service and automating kitchen workflows with smart ordering platforms.",
      challenge: "Legacy POS configurations and manual ticketing caused kitchen communication bottlenecks and increased meal preparation delays.",
      solution: "We deployed an automated ordering pipeline that links customer table selections directly to kitchen dashboard queues in real-time.",
      features: [
        "Real-time kitchen syncing",
        "Automated table ordering",
        "Direct-to-chef queue queues",
        "Integrated payment gateways",
      ],
      impact: "Reduced communication delays by 34% and speeded up average ticket preparation cycles.",
      accent: "from-accent-hover to-accent-primary",
      accentBg: "bg-accent-hover/5 border-accent-hover/10 text-accent-hover",
      stats: [
        { value: "-34%", label: "Wait Times" },
        { value: "Instant", label: "Ordering Speed" },
      ],
      visualMockup: (
        <div className="w-full h-80 rounded-3xl border border-accent-hover/10 bg-bg-secondary/40 relative overflow-hidden flex flex-col justify-between p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-border-muted/50 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent-hover" />
              <span className="font-mono text-xs text-text-primary font-bold">TapServe Menu Console</span>
            </div>
            <span className="font-mono text-[9px] text-accent-hover px-2 py-0.5 rounded border border-accent-hover/20 bg-accent-hover/5">Active Queue</span>
          </div>
          {/* Order Board Grid Simulation */}
          <div className="flex-1 grid grid-cols-2 gap-3 my-4 overflow-hidden">
            {[
              { id: "#1024", item: "Table 4 - Main Course", status: "In Kitchen", time: "2m ago" },
              { id: "#1025", item: "Table 8 - Appetizers", status: "Ready to Serve", time: "Just now" },
            ].map((order, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-border-muted bg-bg-primary/50 flex flex-col justify-between shadow">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-[10px] text-text-primary font-bold">{order.id}</span>
                  <span className="font-mono text-[8px] text-text-muted">{order.time}</span>
                </div>
                <span className="text-xs text-text-primary font-semibold block mb-2">{order.item}</span>
                <span className={`self-start font-mono text-[9px] px-2 py-0.5 rounded font-medium ${idx === 1 ? "bg-success/10 border border-success/20 text-success" : "bg-accent-hover/10 border border-accent-hover/20 text-accent-hover"}`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 border-t border-border-muted/50 pt-4 font-mono text-[10px]">
            <div>
              <span className="text-text-muted block">Hourly Volume</span>
              <span className="text-text-primary font-bold">180 Tickets</span>
            </div>
            <div>
              <span className="text-text-muted block">Avg Wait</span>
              <span className="text-text-primary font-bold">3.2 Minutes</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "HVR Media House",
      client: "HVR Creative Agency",
      industry: "Creative Media & Assets Distribution",
      summary: "Streamlining client video reviews and high-volume media asset deliveries.",
      challenge: "Sharing high-resolution draft files via fragmented links caused feedback delays, storage limits, and security vulnerabilities.",
      solution: "We launched a secure client delivery portal featuring instant in-browser asset previews, feedback loops, and automated folder organization.",
      features: [
        "In-browser asset previews",
        "Interactive feedback threads",
        "High-security folders",
        "Automated delivery tags",
      ],
      impact: "Reduced client feedback turnaround cycles by 50% with secure, automated folders.",
      accent: "from-text-secondary to-accent-primary",
      accentBg: "bg-text-secondary/5 border-text-secondary/10 text-text-secondary",
      stats: [
        { value: "-50%", label: "Feedback Cycle" },
        { value: "Instant", label: "Asset Loading" },
      ],
      visualMockup: (
        <div className="w-full h-80 rounded-3xl border border-text-secondary/10 bg-bg-secondary/40 relative overflow-hidden flex flex-col justify-between p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-border-muted/50 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-text-secondary" />
              <span className="font-mono text-xs text-text-primary font-bold">HVR Review Portal</span>
            </div>
            <span className="font-mono text-[9px] text-text-secondary px-2 py-0.5 rounded border border-text-secondary/20 bg-text-secondary/5">Secure Asset</span>
          </div>
          {/* Mock Video Grid Preview */}
          <div className="flex-1 flex flex-col justify-center gap-3 my-4 overflow-hidden">
            <div className="p-4 rounded-xl border border-border-muted bg-bg-primary/50 flex items-center justify-between shadow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 rounded bg-bg-tertiary border border-border-active flex items-center justify-center font-mono text-[8px] text-text-muted">
                  Draft v3
                </div>
                <div>
                  <span className="text-xs text-text-primary font-semibold block">Commercial_Edits.mp4</span>
                  <span className="text-[10px] text-text-muted block">452 MB • Ready for review</span>
                </div>
              </div>
              <span className="font-mono text-[9px] text-text-secondary px-2 py-0.5 rounded border border-text-secondary/20 bg-text-secondary/5">In Review</span>
            </div>
            {/* Feedback thread simulation */}
            <div className="pl-6 border-l-2 border-text-secondary/20 flex gap-2 items-start">
              <div className="w-5 h-5 rounded-full bg-text-secondary/10 flex items-center justify-center font-mono text-[9px] text-text-secondary font-bold">C</div>
              <div>
                <span className="text-[10px] text-text-primary font-bold block">Client Review</span>
                <p className="text-[10px] text-text-secondary leading-normal select-text">"Increase lighting at 0:14. Everything else looks solid."</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 border-t border-border-muted/50 pt-4 font-mono text-[10px]">
            <div>
              <span className="text-text-muted block">Uptime</span>
              <span className="text-text-primary font-bold">99.98% Rate</span>
            </div>
            <div>
              <span className="text-text-muted block">Review Loop</span>
              <span className="text-text-primary font-bold">Instant Threads</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-bg-primary text-text-primary min-h-screen pt-36 select-none">
        
        {/* Page Hero Header */}
        <section className="py-12 md:py-18 text-center">
          <div className="container max-w-4xl mx-auto px-6">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-tag"
            >
              Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-light tracking-tight mb-6 leading-[1.05]"
            >
              Digital products engineered for <br />
              <span className="hero-gradient-text">business growth.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-text-secondary text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed select-text font-normal"
            >
              We build custom software systems designed to solve operational friction, scale scheduling dispatches, and automate back-office workflows.
            </motion.p>
          </div>
        </section>

        {/* Case Studies Display (Screen sections) */}
        <section className="pb-32 space-y-48">
          {projects.map((project, i) => {
            return (
              <div
                key={i}
                className="container max-w-5xl mx-auto px-6 border-t border-border-muted/40 pt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                  
                  {/* Left Column (Metadata & Details) */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className="lg:col-span-5 flex flex-col gap-6"
                  >
                    <div>
                      <span className={`px-2.5 py-1 rounded-md text-[9px] font-mono font-bold tracking-wider uppercase border inline-block mb-4.5 ${project.accentBg}`}>
                        {project.industry}
                      </span>
                      <h2 className="font-display font-light text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight mb-2">
                        {project.title}
                      </h2>
                      <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider block font-bold">Client: {project.client}</span>
                    </div>

                    <p className="text-text-primary font-semibold text-sm sm:text-base leading-relaxed italic select-text">
                      "{project.summary}"
                    </p>

                    {/* Challenge Block */}
                    <div className="flex flex-col gap-2">
                      <h4 className="font-mono text-[10px] text-text-muted uppercase tracking-widest font-bold">The Challenge</h4>
                      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed select-text font-normal">
                        {project.challenge}
                      </p>
                    </div>

                    {/* Solution Block */}
                    <div className="flex flex-col gap-2">
                      <h4 className="font-mono text-[10px] text-accent-primary uppercase tracking-widest font-bold">The Solution</h4>
                      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed select-text font-normal">
                        {project.solution}
                      </p>
                    </div>

                    {/* Key Features Bullet List */}
                    <div className="flex flex-col gap-3">
                      <h4 className="font-mono text-[10px] text-text-muted uppercase tracking-widest font-bold">Core Functions</h4>
                      <ul className="grid grid-cols-2 gap-2 text-xs text-text-secondary">
                        {project.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-accent-primary shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact Block */}
                    <div className="border-t border-border-muted/50 pt-6 mt-2">
                      <h4 className="font-mono text-[9px] text-text-muted uppercase tracking-widest font-bold mb-3">Business Impact</h4>
                      <p className="text-text-secondary text-xs leading-relaxed mb-4 select-text font-normal">
                        {project.impact}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {project.stats.map((stat, idx) => (
                          <div key={idx} className="flex flex-col gap-0.5">
                            <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider">{stat.label}</span>
                            <span className="font-display font-bold text-xl md:text-2xl text-text-primary">{stat.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </motion.div>

                  {/* Right Column (High-Fidelity Dashboard Mockup) */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className="lg:col-span-7"
                  >
                    {project.visualMockup}
                  </motion.div>

                </div>
              </div>
            );
          })}
        </section>

        {/* Global Bottom CTA */}
        <section className="py-16 border-t border-border-muted/50 bg-bg-secondary/10 relative overflow-hidden text-center">
          <div className="absolute inset-0 hero-glow-element pointer-events-none z-0" />
          <div className="container max-w-3xl mx-auto px-6 relative z-10">
            <span className="section-tag mb-4">Start Scoping</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-text-primary mb-6 leading-tight">
              Ready to automate your operations?
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-10 select-text font-normal">
              Schedule a scoping timeline call with our build lead. We map out fixed project milestones with transparent pricing.
            </p>
            <a
              href="/#contact"
              className="btn-shimmer-trigger inline-flex items-center gap-2 px-8 py-4.5 rounded-xl bg-text-primary text-bg-primary font-bold hover:bg-accent-primary hover:text-white transition-all duration-300 shadow-md text-xs font-mono uppercase tracking-wider cursor-pointer font-bold"
            >
              Book Scoping Session
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
