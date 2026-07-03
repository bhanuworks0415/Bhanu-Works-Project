"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, ShoppingBag, Eye, CreditCard, Star, Settings, LineChart, Layers } from "lucide-react";

export default function TapServeClient() {
  const features = [
    { title: "QR Menu", desc: "Interactive contactless menu cards loaded instantly via custom table codes.", icon: Eye },
    { title: "Table Ordering", desc: "Customer self-ordering routing item selections to kitchen queues directly.", icon: ShoppingBag },
    { title: "Kitchen Dashboard", desc: "Digital queue consoles tracking ticket times and preparation statuses in real-time.", icon: Clock },
    { title: "Order Management", desc: "Centralized panels letting floor hosts assign tables and edit active tickets.", icon: Layers },
    { title: "Digital Payments", desc: "Secure in-app split checkouts with support for popular digital wallets.", icon: CreditCard },
    { title: "Customer Feedback", desc: "Instant ratings collection allowing patrons to submit feedback post-checkout.", icon: Star },
    { title: "Admin Dashboard", desc: "Manage menu items, prices, operating hours, and floor setups in one screen.", icon: Settings },
    { title: "Analytics", desc: "Reports detailing daily revenues, ticket turnaround speeds, and top items.", icon: LineChart },
  ];

  const journey = [
    { phase: "Discovery", title: "Floor Flow Audit", desc: "We analyzed table turnover rates, ordering bottlenecks, and kitchen ticket communication delays." },
    { phase: "UX Design", title: "Visual Menus", desc: "We structured a high-fidelity visual ordering path optimized for quick customer selections." },
    { phase: "Development", title: "Consoles Engineering", desc: "We compiled active kitchen queues, menu databases, and payment consolidation routes." },
    { phase: "Testing", title: "Stress Simulations", desc: "We simulated heavy ticket dispatches during weekend dining simulations to check speed stability." },
    { phase: "Deployment", title: "Production Setup", desc: "We set up screens in food prep areas and linked menu nodes to checkout terminals." },
  ];

  const techBadges = [
    "React", "Node.js", "PostgreSQL", "Socket.io", "Stripe API", "Docker", "AWS"
  ];

  return (
    <>
      <Navbar />

      <main className="bg-bg-primary text-text-primary min-h-screen pt-36 select-none" role="main">
        
        {/* 1. Hero Section */}
        <section className="relative py-20 overflow-hidden border-b border-border-muted/30" aria-labelledby="tapserve-hero-title">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(142,116,83,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(142,116,83,0.015)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none" />
          <div className="container max-w-5xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Title */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-2.5 py-1 rounded-md text-[9px] font-mono font-bold tracking-wider uppercase border inline-block self-start bg-accent-hover/5 border-accent-hover/10 text-accent-hover"
                >
                  Restaurant Technology Platform
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  id="tapserve-hero-title"
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-text-primary leading-[1.05]"
                >
                  TapServe
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-text-secondary text-sm sm:text-base leading-relaxed select-text"
                >
                  Automating order dispatches and split payments directly from the dining table to reduce service delays.
                </motion.p>
              </div>

              {/* Right Column Large Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6"
              >
                <div className="w-full h-80 rounded-2xl border border-accent-hover/15 bg-bg-secondary/40 relative overflow-hidden flex flex-col justify-between p-6 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-border-muted/50 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent-hover" />
                      <span className="font-mono text-xs text-text-primary font-bold">TapServe Menu Console</span>
                    </div>
                    <span className="font-mono text-[9px] text-accent-hover px-2 py-0.5 rounded border border-accent-hover/20 bg-accent-hover/5">Active Queue</span>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4 my-4 overflow-hidden">
                    {[
                      { id: "#1024", item: "Table 4 - Main Course", status: "In Kitchen", time: "2m ago" },
                      { id: "#1025", item: "Table 8 - Appetizers", status: "Ready to Serve", time: "Just now" },
                    ].map((order, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-border-muted bg-bg-primary/50 flex flex-col justify-between shadow">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-mono text-[10px] text-text-primary font-bold">{order.id}</span>
                          <span className="font-mono text-[8px] text-text-muted">{order.time}</span>
                        </div>
                        <span className="text-xs text-text-primary font-semibold block mb-3">{order.item}</span>
                        <span className={`self-start font-mono text-[9px] px-2 py-0.5 rounded font-medium ${idx === 1 ? "bg-success/10 border border-success/20 text-success" : "bg-accent-hover/10 border border-accent-hover/20 text-accent-hover"}`}>
                          {order.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-t border-border-muted/50 pt-4 font-mono text-[9px]">
                    <div>
                      <span className="text-text-muted block">Hourly Volume</span>
                      <span className="text-text-primary font-bold">180 Tickets</span>
                    </div>
                    <div>
                      <span className="text-text-muted block">Avg Wait Time</span>
                      <span className="text-text-primary font-bold">3.2 Min</span>
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
              TapServe is a digital ordering and restaurant operations platform engineered to streamline checkouts. By placing interactive menus and payment methods directly in the hands of guests, the platform eliminates steps of service, speeds up kitchen prep syncs, and increases staff efficiency.
            </p>
          </div>
        </section>

        {/* 3. Business Challenge */}
        <section className="py-12 md:py-16 border-t border-border-muted/30" aria-labelledby="challenge-title">
          <div className="container max-w-4xl mx-auto px-6">
            <div className="section-header">
              <span className="section-tag text-accent-hover border-accent-hover/20 bg-accent-hover/5">Friction Points</span>
              <h2 id="challenge-title" className="text-2xl md:text-3xl font-display font-light text-text-primary mb-6 leading-tight">Business Challenge</h2>
            </div>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed select-text">
              Restaurants face operational inefficiencies due to slow physical order-taking, paper ticket delays, and fragmented POS registries. During busy weekend hours, these manual steps increase table wait times, lead to order entry errors, and cause customer dissatisfaction.
            </p>
          </div>
        </section>

        {/* 4. Our Solution */}
        <section className="py-12 md:py-16 border-t border-border-muted/30" aria-labelledby="solution-title">
          <div className="container max-w-4xl mx-auto px-6">
            <div className="section-header">
              <span className="section-tag text-success border-success/20 bg-success/5">Operations</span>
              <h2 id="solution-title" className="text-2xl md:text-3xl font-display font-light text-text-primary mb-6 leading-tight">Our Solution</h2>
            </div>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed select-text">
              BhanuWorks engineered a contactless table-ordering pipeline. Diners scan local table QR codes to view items, submit tickets, and split bills. Orders sync directly to kitchen consoles, bypassing host registries and speeding up preparation times.
            </p>
          </div>
        </section>

        {/* 5. Key Features */}
        <section className="py-12 md:py-16 border-t border-border-muted/30" aria-labelledby="features-title">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="section-header center mb-20">
              <span className="section-tag">Capabilities</span>
              <h2 id="features-title" className="text-2xl md:text-3xl lg:text-4xl font-display font-light tracking-tight text-text-primary mb-6 leading-tight">
                Designed for staff efficiency
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.05 }}
                    className="p-5 rounded-2xl border border-border-muted/80 bg-bg-secondary/35 flex flex-col gap-4 hover:border-border-active transition-all"
                  >
                    <div className="w-8.5 h-8.5 rounded-lg bg-accent-hover/5 border border-accent-hover/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-accent-hover" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-text-primary mb-1">{feat.title}</h4>
                      <p className="text-[10px] text-text-secondary leading-relaxed select-text">{feat.desc}</p>
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "QR Customer Ordering", desc: "Sleek in-browser visual menu optimized for quick selections and checkout dispatches." },
                { title: "Kitchen Ticketing Queue", desc: "Digital console display showing chef status logs and meal prep priorities." },
                { title: "Manager Admin Panel", desc: "Real-time menu price adjuster and floor layout mapping configuration." },
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-border-muted bg-bg-primary shadow flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-4 font-mono text-[9px] text-text-primary font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-hover" />
                    {item.title}
                  </div>
                  <div className="h-32 rounded-lg bg-bg-secondary/40 border border-border-muted flex items-center justify-center p-3">
                    <span className="font-mono text-[8px] text-text-muted">[ Console Screen Preview ]</span>
                  </div>
                  <p className="text-[11px] text-text-secondary mt-4 leading-normal select-text">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Project Journey */}
        <section className="py-12 md:py-16 border-t border-border-muted/30" aria-labelledby="journey-title">
          <div className="container max-w-4xl mx-auto px-6">
            <div className="section-header center mb-20">
              <span className="section-tag">Timeline</span>
              <h2 id="journey-title" className="text-2xl md:text-3xl font-display font-light text-text-primary">Project Journey</h2>
            </div>
            
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[1px] bg-border-muted -translate-x-1/2" />
              
              <div className="space-y-12">
                {journey.map((step, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div key={idx} className="relative flex flex-col md:flex-row items-start md:justify-between">
                      <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full border border-border-muted bg-bg-primary flex items-center justify-center -translate-x-1/2 z-10 font-mono text-[10px] text-accent-hover font-bold">
                        0{idx + 1}
                      </div>
                      
                      <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:text-right md:order-1" : "md:order-3"}`}>
                        <div className="p-6 rounded-xl border border-border-muted bg-bg-secondary/25">
                          <span className="font-mono text-[9px] text-accent-hover uppercase tracking-widest block font-bold mb-1">{step.phase}</span>
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
              By introducing QR menus and table dispatches, TapServe cut communications delays by 34%, eliminating meal prep errors and improving dining turnover speed. Staff handles transactions in less steps, boosting tips and daily table capacities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-border-muted/40 pt-10">
              <div>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">Kitchen Delays</span>
                <span className="font-display font-bold text-2xl md:text-3xl text-text-primary">-34%</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">Table Turnover</span>
                <span className="font-display font-bold text-2xl md:text-3xl text-text-primary">+28% Speed</span>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">Ticket Errors</span>
                <span className="font-display font-bold text-2xl md:text-3xl text-text-primary">0% Recorded</span>
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
              Want to modernize your restaurant?
            </h2>
            <p className="text-text-secondary text-xs sm:text-sm md:text-base max-w-md leading-relaxed mb-10 select-text">
              Partner with BhanuWorks to build interactive customer menus, digital kitchen displays, or checkouts.
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
