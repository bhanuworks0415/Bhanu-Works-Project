"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, TrendingUp, MapPin, MessageSquare, Bell, CreditCard, Lock } from "lucide-react";

export default function QarpulClient() {
  const features = [
    { title: "Ride Booking", desc: "Instant passenger destination scheduling with flexible routing selectors.", icon: MapPin },
    { title: "Driver Matching", desc: "Automated route matching pairing commuters to nearest vehicles instantly.", icon: Clock },
    { title: "Live Tracking", desc: "Real-time interactive maps tracking dispatches and driver paths continuously.", icon: TrendingUp },
    { title: "Real-time Chat", desc: "Direct, secure in-app passenger-driver communication channels.", icon: MessageSquare },
    { title: "Push Notifications", desc: "Timely alerts for match details, estimated arrivals, and ride dispatches.", icon: Bell },
    { title: "Secure Authentication", desc: "High-security user verification and privacy locks.", icon: Lock },
    { title: "Payment Ready Architecture", desc: "Integrated payment gateways with predictable, instant checkouts.", icon: CreditCard },
  ];

  const journey = [
    { phase: "Discovery", title: "Operational Mapping", desc: "We audited route traffic congestion, passenger demand patterns, and peak dispatch delays." },
    { phase: "Design", title: "Interface Prototyping", desc: "We drafted clean, dark-mode wireframes ensuring intuitive map navigation for passengers." },
    { phase: "Development", title: "Engineering Systems", desc: "We compiled dispatch queues, automated matching algorithms, and geolocation maps syncs." },
    { phase: "Testing", title: "Simulation & Auditing", desc: "We ran booking simulators under extreme peak-load dispatches to verify system stability." },
    { phase: "Launch", title: "Active Production", desc: "We deployed the console to secure cloud hosting with instant monitoring systems." },
  ];

  const techBadges = [
    "React Native", "Node.js", "PostgreSQL", "Socket.io", "Mapbox GL", "AWS", "Stripe API"
  ];

  return (
    <>
      <Navbar />

      <main className="bg-bg-primary text-text-primary min-h-screen pt-36 select-none" role="main">
        
        {/* 1. Hero Section */}
        <section className="relative py-20 overflow-hidden border-b border-border-muted/30" aria-labelledby="qarpul-hero-title">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(142,116,83,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(142,116,83,0.015)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none" />
          <div className="container max-w-5xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Title */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-2.5 py-1 rounded-md text-[9px] font-mono font-bold tracking-wider uppercase border inline-block self-start bg-accent-primary/5 border-accent-primary/10 text-accent-primary"
                >
                  Ride Sharing Platform
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  id="qarpul-hero-title"
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-text-primary leading-[1.05]"
                >
                  Qarpul
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-text-secondary text-sm sm:text-base leading-relaxed select-text"
                >
                  Automating driver dispatches and route pairings during high-congestion hours to reduce passenger wait times.
                </motion.p>
              </div>

              {/* Right Column Large Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6"
              >
                <div className="w-full h-80 rounded-2xl border border-accent-primary/10 bg-bg-secondary/40 relative overflow-hidden flex flex-col justify-between p-6 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-border-muted/50 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent-primary" />
                      <span className="font-mono text-xs text-text-primary font-bold">Qarpul Active Matches</span>
                    </div>
                    <span className="font-mono text-[9px] text-accent-primary px-2 py-0.5 rounded border border-accent-primary/20 bg-accent-primary/5">Active Sync</span>
                  </div>
                  <div className="flex-1 relative flex items-center justify-center my-4 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(142,116,83,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(142,116,83,0.015)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                    <svg className="w-4/5 h-2/3 text-accent-primary/20" viewBox="0 0 100 50" aria-hidden="true">
                      <path d="M10,40 Q30,10 60,35 T90,10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        d="M10,40 Q30,10 60,35 T90,10"
                        fill="none"
                        stroke="#8E7453"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-accent-primary animate-ping" />
                    <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-accent-hover animate-ping" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t border-border-muted/50 pt-4 font-mono text-[9px]">
                    <div>
                      <span className="text-text-muted block">Requests</span>
                      <span className="text-text-primary font-bold">142 live</span>
                    </div>
                    <div>
                      <span className="text-text-muted block">Rate</span>
                      <span className="text-text-primary font-bold">98.4%</span>
                    </div>
                    <div>
                      <span className="text-text-muted block">Delay</span>
                      <span className="text-text-primary font-bold">0.0s</span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 2. About the Project */}
        <section className="py-12 md:py-16" aria-labelledby="about-project-title">
          <div className="container max-w-4xl mx-auto px-6">
            <div className="section-header">
              <span className="section-tag">Overview</span>
              <h2 id="about-project-title" className="text-2xl md:text-3xl font-display font-light text-text-primary mb-6 leading-tight">About the Project</h2>
            </div>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed select-text">
              Qarpul was created to address transit routing inefficiencies in growing municipalities. The platform automates dispatches, pairing commuters and drivers on common routes during heavy congestion hours to stabilize commuter flows and minimize vehicle vacancies.
            </p>
          </div>
        </section>

        {/* 3. The Challenge */}
        <section className="py-12 md:py-16 border-t border-border-muted/30" aria-labelledby="challenge-title">
          <div className="container max-w-4xl mx-auto px-6">
            <div className="section-header">
              <span className="section-tag text-accent-primary border-accent-primary/20 bg-accent-primary/5">Friction Points</span>
              <h2 id="challenge-title" className="text-2xl md:text-3xl font-display font-light text-text-primary mb-6 leading-tight">The Challenge</h2>
            </div>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed select-text">
              Manual dispatches resulted in passenger wait times exceeding 30 minutes, while drivers navigated inefficient routes with high seats vacancies. Additionally, rising ride request volumes caused database delays and scheduling conflicts during morning commute hours.
            </p>
          </div>
        </section>

        {/* 4. Our Solution */}
        <section className="py-12 md:py-16 border-t border-border-muted/30" aria-labelledby="solution-title">
          <div className="container max-w-4xl mx-auto px-6">
            <div className="section-header">
              <span className="section-tag text-success border-success/20 bg-success/5">Engineering</span>
              <h2 id="solution-title" className="text-2xl md:text-3xl font-display font-light text-text-primary mb-6 leading-tight">Our Solution</h2>
            </div>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed select-text">
              BhanuWorks designed an automated routing dashboard that matches driver dispatches with commuters automatically. Geolocation syncs pair pick-ups and drops dynamically, maintaining zero manual data entry and pairing drivers within seconds.
            </p>
          </div>
        </section>

        {/* 5. Key Features */}
        <section className="py-12 md:py-16 border-t border-border-muted/30" aria-labelledby="features-title">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="section-header center mb-20">
              <span className="section-tag">Functions</span>
              <h2 id="features-title" className="text-2xl md:text-3xl lg:text-4xl font-display font-light tracking-tight text-text-primary mb-6 leading-tight">
                Designed for operational efficiency
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.05 }}
                    className="p-6 rounded-2xl border border-border-muted/80 bg-bg-secondary/35 flex flex-col gap-4 hover:border-border-active transition-all"
                  >
                    <div className="w-8.5 h-8.5 rounded-lg bg-accent-primary/5 border border-accent-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-accent-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-text-primary mb-1">{feat.title}</h4>
                      <p className="text-[11px] text-text-secondary leading-relaxed select-text">{feat.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. Product Gallery */}
        <section className="py-12 md:py-16 border-t border-border-muted/30 bg-bg-secondary/15" aria-labelledby="gallery-title">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="section-header center mb-16">
              <span className="section-tag">Showcase</span>
              <h2 id="gallery-title" className="text-2xl md:text-3xl font-display font-light text-text-primary mb-6">Product Gallery</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Gallery Item 1 */}
              <div className="p-6 rounded-2xl border border-border-muted bg-bg-primary shadow flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-4 font-mono text-[10px] text-text-primary font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                  Route Dispatch Simulator
                </div>
                <div className="h-40 rounded-xl bg-bg-secondary/40 border border-border-muted flex items-center justify-center p-4">
                  <div className="w-full text-center font-mono text-[9px] text-text-muted">
                    [ Active Route Maps Grid Display ]
                  </div>
                </div>
                <p className="text-xs text-text-secondary mt-4 leading-relaxed select-text">
                  Visual mapping interface projecting real-time driver coordinates and commute wait times.
                </p>
              </div>

              {/* Gallery Item 2 */}
              <div className="p-6 rounded-2xl border border-border-muted bg-bg-primary shadow flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-4 font-mono text-[10px] text-text-primary font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                  Capacity Optimization Console
                </div>
                <div className="h-40 rounded-xl bg-bg-secondary/40 border border-border-muted flex items-center justify-center p-4">
                  <div className="w-full text-center font-mono text-[9px] text-text-muted">
                    [ Booking Capacity Chart Visualizer ]
                  </div>
                </div>
                <p className="text-xs text-text-secondary mt-4 leading-relaxed select-text">
                  Operations dashboard display showing matched rides rates, driver counts, and hourly volumes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Development Journey */}
        <section className="py-12 md:py-16 border-t border-border-muted/30" aria-labelledby="journey-title">
          <div className="container max-w-4xl mx-auto px-6">
            <div className="section-header center mb-20">
              <span className="section-tag">Timeline</span>
              <h2 id="journey-title" className="text-2xl md:text-3xl font-display font-light text-text-primary">Development Journey</h2>
            </div>
            
            <div className="relative">
              {/* Timeline Connector Line */}
              <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[1px] bg-border-muted -translate-x-1/2" />
              
              <div className="space-y-12">
                {journey.map((step, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div key={idx} className="relative flex flex-col md:flex-row items-start md:justify-between">
                      {/* Timeline Bullet */}
                      <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full border border-border-muted bg-bg-primary flex items-center justify-center -translate-x-1/2 z-10 font-mono text-[10px] text-accent-primary font-bold">
                        0{idx + 1}
                      </div>
                      
                      {/* Timeline Card */}
                      <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:text-right md:order-1" : "md:order-3"}`}>
                        <div className="p-6 rounded-xl border border-border-muted bg-bg-secondary/25">
                          <span className="font-mono text-[9px] text-accent-primary uppercase tracking-widest block font-bold mb-1">{step.phase}</span>
                          <h4 className="font-display font-medium text-sm sm:text-base text-text-primary mb-2">{step.title}</h4>
                          <p className="text-xs text-text-secondary leading-relaxed select-text">{step.desc}</p>
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

        {/* 8. Business Impact */}
        <section className="py-12 md:py-16 border-t border-border-muted/30 bg-gradient-to-b from-bg-primary to-bg-secondary/35" aria-labelledby="impact-title">
          <div className="container max-w-4xl mx-auto px-6 text-center">
            <span className="section-tag mb-4">Outcome</span>
            <h2 id="impact-title" className="text-3xl md:text-4xl font-display font-light text-text-primary mb-6">Business Impact</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-10 select-text">
              Qarpul matches dispatches in real-time, eliminating passenger wait times and seating driver dispatches efficiently. This automated dispatch workflow stabilized operations across 40,000 monthly bookings, creating a reliable mapping system built to scale with civic requests.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-border-muted/40 pt-10">
              <div>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">Match Delays</span>
                <span className="font-display font-bold text-2xl md:text-3xl text-text-primary">0.0 Seconds</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">Monthly bookings</span>
                <span className="font-display font-bold text-2xl md:text-3xl text-text-primary">40,000/mo</span>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">System stability</span>
                <span className="font-display font-bold text-2xl md:text-3xl text-text-primary">99.98%</span>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Technologies Used */}
        <section className="py-20 border-t border-border-muted/30 text-center" aria-labelledby="tech-title">
          <div className="container max-w-4xl mx-auto px-6">
            <h3 id="tech-title" className="font-mono text-[9px] text-text-muted uppercase tracking-widest font-bold mb-6">Integrations</h3>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {techBadges.map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded bg-bg-secondary border border-border-muted text-[10px] font-mono text-text-primary font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Final Call To Action */}
        <section className="py-16 border-t border-border-muted/40 relative text-center">
          <div className="absolute inset-0 hero-glow-element pointer-events-none z-0" />
          <div className="container max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <span className="section-tag mb-4">Start Scoping</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light tracking-tight text-text-primary mb-6 leading-tight">
              Looking to build something similar?
            </h2>
            <p className="text-text-secondary text-xs sm:text-sm md:text-base max-w-md leading-relaxed mb-10 select-text">
              Partner with BhanuWorks to build scalable dispatches, route organizers, or custom dashboards.
            </p>
            <a
              href="/book-consultation"
              className="btn-shimmer-trigger inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-text-primary text-bg-primary font-bold hover:bg-accent-primary hover:text-white transition-all duration-300 shadow-md text-xs font-mono uppercase tracking-wider cursor-pointer"
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
