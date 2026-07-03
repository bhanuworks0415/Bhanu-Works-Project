"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Laptop, LayoutGrid, MessageSquare, Cpu, Smartphone, Activity, BarChart3, HeartHandshake, Eye, Send, CheckCircle } from "lucide-react";

export default function ServicesClient() {
  const services = [
    {
      title: "Business Websites",
      desc: "Help businesses establish a premium online presence that builds trust and converts visitors into customers.",
      icon: Laptop,
      color: "from-accent-primary/5 to-accent-primary/10 border-accent-primary/10",
      accent: "text-accent-primary bg-accent-primary/5 border-accent-primary/10",
      illustration: (
        <div className="w-full h-24 mt-4 rounded-xl border border-border-muted bg-bg-primary/50 relative overflow-hidden flex flex-col justify-between p-3">
          <div className="flex gap-1.5 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
            <div className="w-8 h-1.5 rounded bg-border-active/40" />
          </div>
          <div className="font-mono text-[9px] text-accent-gold font-bold text-center">
            +142% conversion speed
          </div>
        </div>
      ),
    },
    {
      title: "Custom Web Applications",
      desc: "Build tailored platforms that simplify operations, improve productivity and support business growth.",
      icon: LayoutGrid,
      color: "from-accent-primary/5 to-accent-primary/10 border-accent-primary/10",
      accent: "text-accent-primary bg-accent-primary/5 border-accent-primary/10",
      illustration: (
        <div className="w-full h-24 mt-4 rounded-xl border border-border-muted bg-bg-primary/50 relative overflow-hidden p-3 flex flex-col justify-between">
          <div className="flex justify-between items-center font-mono text-[8px] text-text-muted">
            <span>Client Panel</span>
            <span className="text-success font-bold">Uptime 99.9%</span>
          </div>
          <div className="w-full h-1.5 rounded bg-accent-primary/20" />
        </div>
      ),
    },
    {
      title: "Restaurant Solutions",
      desc: "Digital menus, ordering systems, reservation platforms and operational tools built specifically for restaurants and cafés.",
      icon: MessageSquare,
      color: "from-accent-primary/5 to-accent-primary/10 border-accent-primary/10",
      accent: "text-accent-primary bg-accent-primary/5 border-accent-primary/10",
      illustration: (
        <div className="w-full h-24 mt-4 rounded-xl border border-border-muted bg-bg-primary/50 relative overflow-hidden p-3 flex justify-between items-center">
          <span className="p-2 rounded bg-bg-secondary border border-border-muted text-[10px] font-bold">T-5</span>
          <span className="font-mono text-[8px] text-accent-primary">Kitchen Queue Active</span>
        </div>
      ),
    },
    {
      title: "AI & Automation",
      desc: "Reduce repetitive work by automating customer communication, bookings, workflows and business operations.",
      icon: Cpu,
      color: "from-accent-primary/5 to-accent-primary/10 border-accent-primary/10",
      accent: "text-accent-primary bg-accent-primary/5 border-accent-primary/10",
      illustration: (
        <div className="w-full h-24 mt-4 rounded-xl border border-border-muted bg-bg-primary/50 relative overflow-hidden p-3 flex flex-col gap-1.5">
          <div className="p-1 rounded bg-accent-primary/5 text-[8px] self-start">Scoping pipeline?</div>
          <div className="p-1 rounded bg-bg-secondary text-[8px] self-end">Automated matching...</div>
        </div>
      ),
    },
    {
      title: "Mobile Applications",
      desc: "Create intuitive mobile experiences that keep customers connected anywhere.",
      icon: Smartphone,
      color: "from-accent-primary/5 to-accent-primary/10 border-accent-primary/10",
      accent: "text-accent-primary bg-accent-primary/5 border-accent-primary/10",
      illustration: (
        <div className="w-full h-24 mt-4 rounded-xl border border-border-muted bg-bg-primary/50 relative overflow-hidden p-3 flex flex-col justify-between">
          <Smartphone className="w-4 h-4 text-accent-gold mx-auto" />
          <div className="w-12 h-1 bg-border-active/40 mx-auto" />
        </div>
      ),
    },
    {
      title: "Ongoing Support",
      desc: "Continuous improvements, maintenance, updates and long-term partnership after launch.",
      icon: Activity,
      color: "from-accent-primary/5 to-accent-primary/10 border-accent-primary/10",
      accent: "text-accent-primary bg-accent-primary/5 border-accent-primary/10",
      illustration: (
        <div className="w-full h-24 mt-4 rounded-xl border border-border-muted bg-bg-primary/50 relative overflow-hidden p-3 flex flex-col justify-between font-mono text-[8px]">
          <span className="text-success">Certificates Active</span>
          <span className="text-text-muted">Daily backup synced</span>
        </div>
      ),
    },
  ];

  const whyUs = [
    { title: "Business-first approach", desc: "We coordinate build priorities around commercial objectives and investment returns.", icon: BarChart3 },
    { title: "Modern design", desc: "We craft clean, premium user interfaces that build customer trust and elevate brands.", icon: Eye },
    { title: "Transparent communication", desc: "You collaborate directly with build leads, receiving real-time task updates.", icon: Send },
    { title: "Reliable delivery", desc: "We scoping milestones before coding, delivering on schedule with transparent costs.", icon: CheckCircle },
    { title: "Long-term partnership", desc: "We provide regular updates and system maintenance, scaling as operations grow.", icon: HeartHandshake },
  ];

  const processSteps = [
    { step: "01", phase: "Discovery", title: "Operational Mapping", desc: "We audit workflows and scope software deliverables." },
    { step: "02", phase: "Strategy", title: "System Blueprints", desc: "We structure data parameters and check cloud plans." },
    { step: "03", phase: "Design", title: "Visual Prototyping", desc: "We construct custom layout pre-visualizations." },
    { step: "04", phase: "Development", title: "Product Engineering", desc: "We compile safe TypeScript code and databases." },
    { step: "05", phase: "Launch", title: "Production Setups", desc: "We host code on fast servers with zero downtime." },
    { step: "06", phase: "Support", title: "System Upgrades", desc: "We check speed rates, audit error logs, and update features." },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-bg-primary text-text-primary min-h-screen pt-36 select-none" role="main">
        
        {/* Hero Section */}
        <section className="relative py-12 md:py-18 text-center overflow-hidden" aria-labelledby="services-hero-title">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(95,116,88,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(95,116,88,0.012)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="container max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-tag mb-6"
            >
              Capabilities
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              id="services-hero-title"
              className="text-5xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-text-primary mb-8 leading-[1.05]"
            >
              Services that help<br />
              <span className="hero-gradient-text">businesses grow.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-text-secondary text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed select-text font-normal"
            >
              From modern websites to custom software and AI-powered automation, BhanuWorks builds digital solutions designed around your business.
            </motion.p>
          </div>
        </section>

        {/* 2. Services Grid */}
        <section className="py-12 pb-12 border-t border-border-muted/30" aria-label="Our services list">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.05 }}
                    className={`group relative rounded-3xl border bg-gradient-to-b ${service.color} p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300`}
                  >
                    <div>
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-border-muted flex items-center justify-center mb-6">
                        <Icon className="w-5 h-5 text-accent-primary" aria-hidden="true" />
                      </div>
                      <h3 className="font-display font-light text-xl md:text-2xl text-text-primary mb-3">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-6 select-text">
                        {service.desc}
                      </p>
                      
                      {/* Illustration block */}
                      {service.illustration}
                    </div>
                    
                    <div className="border-t border-border-muted/40 pt-5 mt-8">
                      <span className={`inline-flex px-3 py-1 rounded-xl text-[9px] font-mono font-bold tracking-wider uppercase border ${service.accent}`}>
                        Outcome Driven
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Why BhanuWorks */}
        <section className="py-16 md:py-24 border-t border-border-muted/30 bg-bg-secondary/15 relative overflow-hidden" aria-labelledby="why-us-title">
          <div className="container max-w-5xl mx-auto px-6 relative z-10">
            <div className="section-header center mb-24">
              <span className="section-tag">Value Proposition</span>
              <h2 id="why-us-title" className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-text-primary mb-6 leading-tight">Why BhanuWorks</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {whyUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.05 }}
                    className="p-6 rounded-2xl border border-border-muted bg-bg-primary shadow-sm hover:border-border-active transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-accent-primary/5 border border-accent-primary/10 flex items-center justify-center shrink-0 mb-4">
                      <Icon className="w-4.5 h-4.5 text-accent-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs text-text-primary mb-2">{item.title}</h4>
                      <p className="text-[10px] text-text-secondary leading-relaxed select-text">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Our Process (Premium Timeline) */}
        <section className="py-16 md:py-24 border-t border-border-muted/30" aria-labelledby="process-title">
          <div className="container max-w-4xl mx-auto px-6">
            <div className="section-header center mb-24">
              <span className="section-tag">Timeline</span>
              <h2 id="process-title" className="text-3xl md:text-4xl font-display font-light text-text-primary">Our Process</h2>
            </div>
            
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[1px] bg-border-muted -translate-x-1/2" />
              
              <div className="space-y-12">
                {processSteps.map((step, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div key={idx} className="relative flex flex-col md:flex-row items-start md:justify-between">
                      {/* Timeline Bullet */}
                      <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full border border-border-muted bg-bg-primary flex items-center justify-center -translate-x-1/2 z-10 font-mono text-[10px] text-accent-primary font-bold">
                        {step.step}
                      </div>
                      
                      {/* Timeline Card */}
                      <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:text-right md:order-1" : "md:order-3"}`}>
                        <div className="p-8 rounded-2xl border border-border-muted bg-bg-secondary/25 hover:border-border-active transition-all">
                          <span className="font-mono text-[9px] text-accent-gold uppercase tracking-widest block font-bold mb-1.5">{step.phase}</span>
                          <h4 className="font-display font-light text-xl text-text-primary mb-3">{step.title}</h4>
                          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed select-text font-normal">{step.desc}</p>
                        </div>
                      </div>
                      
                      <div className="hidden md:block w-[10%] order-2" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Final CTA */}
        <section className="py-16 border-t border-border-muted/40 relative text-center">
          <div className="absolute inset-0 hero-glow-element pointer-events-none z-0" />
          <div className="container max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <span className="section-tag mb-4">Start Scoping</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-text-primary mb-6 leading-tight">
              Ready to build something great?
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-md leading-relaxed mb-10 select-text font-normal">
              Schedule a scoping timeline call with our team. We map out fixed project milestones with transparent pricing.
            </p>
            <a
              href="/book-consultation"
              className="btn-shimmer-trigger inline-flex items-center gap-2 px-8 py-4.5 rounded-xl bg-text-primary text-bg-primary font-bold hover:bg-accent-primary hover:text-white transition-all duration-300 shadow-md text-xs font-mono uppercase tracking-wider cursor-pointer"
            >
              Book a free consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
