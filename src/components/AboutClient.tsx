"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Award, ShieldCheck, HeartHandshake, Eye, RefreshCw, Send } from "lucide-react";

export default function AboutClient() {
  const values = [
    { title: "Quality over quantity", desc: "We focus on crafting a limited number of high-caliber products rather than scaling bulk builds.", icon: Award },
    { title: "Business-first thinking", desc: "Every design layout and software module is configured to drive real commercial utility and returns.", icon: ShieldCheck },
    { title: "Transparent communication", desc: "Direct interactions with developers provide complete transparency and eliminate middle layers.", icon: Send },
    { title: "Long-term partnerships", desc: "We collaborate as a long-term technology partner, supporting systems long after production launch.", icon: HeartHandshake },
    { title: "Modern design", desc: "Aesthetics and usability are prioritized to ensure every platform builds immediate customer trust.", icon: Eye },
    { title: "Continuous improvement", desc: "We audit operating speeds and upgrade features regularly to ensure systems remain future-proof.", icon: RefreshCw },
  ];

  const whyChooseUs = [
    { title: "Custom solutions", desc: "Bespoke software engineered to resolve your specific operational bottlenecks with zero compromise." },
    { title: "Modern user experience", desc: "Responsive, clean interfaces matching Vercel/Linear design and usability standards." },
    { title: "Reliable delivery", desc: "Predictable project scheduling with clear milestones and transparent fixed-cost models." },
    { title: "Clear communication", desc: "No project management delays—you collaborate directly with the software architects." },
    { title: "Long-term support", desc: "Uptime monitoring, server maintenance, and regular system optimizations after launch." },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-bg-primary text-text-primary min-h-screen pt-36 select-none" role="main">
        
        {/* 1. Hero Section */}
        <section className="relative py-12 md:py-18 text-center overflow-hidden" aria-labelledby="about-hero-title">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(95,116,88,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(95,116,88,0.012)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="container max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-tag mb-6"
            >
              About the Studio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              id="about-hero-title"
              className="text-5xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-text-primary mb-8 leading-[1.05]"
            >
              Building software that<br />
              <span className="hero-gradient-text">helps businesses grow.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-text-secondary text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed select-text font-normal"
            >
              BhanuWorks is an independent software studio helping businesses transform ideas into modern digital products through thoughtful design, custom software and intelligent automation.
            </motion.p>
          </div>
        </section>

        {/* 2. Our Story */}
        <section className="py-16 md:py-24 border-t border-border-muted/30" aria-labelledby="story-title">
          <div className="container max-w-3xl mx-auto px-6">
            <div className="section-header mb-12">
              <span className="section-tag">Origin</span>
              <h2 id="story-title" className="text-3xl md:text-4xl font-display font-light text-text-primary mb-6 leading-tight">Our Story</h2>
            </div>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6 select-text font-normal">
              BhanuWorks was established to bridge the gap between technical complexity and real-world business objectives. We realized that companies do not simply need code or templates—they need robust digital channels that solve actual operations bottlenecks, speed up dispatches, and capture customers.
            </p>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed select-text font-normal">
              By operating as an independent, engineering-first studio, we eliminate layers of bureaucracy. We work side-by-side with restaurant owners, startups, and growing firms to build tailored software assets that grow with their user volume.
            </p>
          </div>
        </section>

        {/* 3. Mission & Vision */}
        <section className="py-16 md:py-24 border-t border-border-muted/30 bg-bg-secondary/10" aria-label="Mission and Vision statements">
          <div className="container max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              
              {/* Mission */}
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[10px] text-accent-primary uppercase tracking-widest font-bold">The Core Mission</span>
                <h3 className="text-2xl md:text-3xl font-display font-light text-text-primary">Our Mission</h3>
                <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed select-text font-normal">
                  To build digital products that create real business value through thoughtful design, scalable software and long-term partnerships.
                </p>
              </div>

              {/* Vision */}
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[10px] text-accent-primary uppercase tracking-widest font-bold">The Future Vision</span>
                <h3 className="text-2xl md:text-3xl font-display font-light text-text-primary">Our Vision</h3>
                <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed select-text font-normal">
                  To become a trusted technology partner for businesses around the world, driving operational efficiency and visual credibility through clean custom platforms.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Our Values */}
        <section className="py-16 md:py-24 border-t border-border-muted/30" aria-labelledby="values-title">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="section-header center mb-24">
              <span className="section-tag">Philosophy</span>
              <h2 id="values-title" className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-text-primary mb-6">Our Values</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.05 }}
                    className="p-8 rounded-3xl border border-border-muted bg-bg-secondary/35 flex flex-col gap-5 hover:border-border-active transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent-primary/5 border border-accent-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-text-primary mb-2">{val.title}</h4>
                      <p className="text-[11px] sm:text-xs text-text-secondary leading-relaxed select-text">{val.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Meet the Founder */}
        <section className="py-16 md:py-24 border-t border-border-muted/30 bg-bg-secondary/15" aria-labelledby="founder-title">
          <div className="container max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
              
              {/* Founder Text */}
              <div className="md:col-span-7 flex flex-col gap-6">
                <span className="section-tag self-start">Leadership</span>
                <h2 id="founder-title" className="text-4xl md:text-5xl font-display font-light text-text-primary tracking-tight leading-tight">
                  Meet the Founder
                </h2>
                <div className="flex flex-col gap-1">
                  <span className="font-display font-light text-2xl text-text-primary">Bhanu Prakash</span>
                  <span className="font-mono text-[9px] text-accent-gold uppercase tracking-widest font-bold">Full Stack Software Developer</span>
                </div>
                <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed select-text font-normal">
                  Bhanu Prakash founded BhanuWorks with a single objective: to help growing organizations solve real commercial bottlenecks through clean custom engineering. With a strong focus on high-fidelity designs and database dispatches, he coordinates every software blueprint from mapping dispatches to active server deployment.
                </p>
                
                <ul className="space-y-3 text-xs sm:text-sm text-text-secondary">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0" aria-hidden="true" />
                    <span>Passion for solving actual business operations problems.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0" aria-hidden="true" />
                    <span>Focus on building highly scalable, zero-downtime platforms.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0" aria-hidden="true" />
                    <span>Commitment to creating premium, brand-building user experiences.</span>
                  </li>
                </ul>
              </div>

              {/* Portrait Placeholder Card */}
              <div className="md:col-span-5">
                <div className="w-full aspect-[4/5] rounded-3xl border border-border-muted bg-bg-primary relative overflow-hidden flex flex-col justify-between p-8 shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/10 to-transparent opacity-50 group-hover:opacity-75 transition-opacity pointer-events-none" />
                  <div className="w-20 h-20 rounded-full border border-border-muted bg-bg-secondary flex items-center justify-center font-display font-light text-3xl text-text-primary shadow shadow-accent-primary/10">
                    BP
                  </div>
                  <div className="absolute bottom-6 inset-x-6 text-center font-mono text-[9px] text-text-muted">
                    Bhanu Prakash • Founded 2025
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. Why Choose BhanuWorks */}
        <section className="py-16 md:py-24 border-t border-border-muted/30" aria-labelledby="why-choose-title">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="section-header center mb-24">
              <span className="section-tag">Commitment</span>
              <h2 id="why-choose-title" className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-text-primary mb-6">
                Why Businesses Choose BhanuWorks
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.05 }}
                  className="p-6 rounded-2xl border border-border-muted bg-bg-secondary/25 flex flex-col justify-between hover:border-border-active transition-all"
                >
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-[9px] text-text-muted uppercase tracking-wider font-bold">0{i + 1}</span>
                    <h4 className="font-semibold text-xs text-text-primary">{item.title}</h4>
                    <p className="text-[10px] text-text-secondary leading-relaxed select-text font-normal">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Let's Build Together (Final CTA) */}
        <section className="py-16 border-t border-border-muted/40 relative text-center">
          <div className="absolute inset-0 hero-glow-element pointer-events-none z-0" />
          <div className="container max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <span className="section-tag mb-4">Start Scoping</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-text-primary mb-6 leading-tight">
              Let's Build Together
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-md leading-relaxed mb-10 select-text font-normal">
              Transform your operational workflows into sleek, automated systems. Speak directly with our architects.
            </p>
            <a
              href="/book-consultation"
              className="btn-shimmer-trigger inline-flex items-center gap-2 px-8 py-4.5 rounded-xl bg-text-primary text-bg-primary font-bold hover:bg-accent-primary hover:text-white transition-all duration-300 shadow-md text-xs font-mono uppercase tracking-wider cursor-pointer"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
