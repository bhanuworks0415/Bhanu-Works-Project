"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Image, Film, Video, Users, FileText, Smartphone, LayoutGrid, Sparkles } from "lucide-react";

export default function HvrMediaClient() {
  const features = [
    { title: "Portfolio Showcase", desc: "Sleek immersive layout displaying creative folders and custom catalog entries.", icon: LayoutGrid },
    { title: "Photography Gallery", desc: "High-contrast galleries with zero-delay thumbnail preloading.", icon: Image },
    { title: "Videography Portfolio", desc: "Integrated visual player blocks supporting high-bandwidth draft review loops.", icon: Film },
    { title: "Client Showcase", desc: "Dedicated spaces showing client partners testimonials and project catalogs.", icon: Users },
    { title: "Inquiry Forms", desc: "Polished project scoping intake panels converting client requests automatically.", icon: FileText },
    { title: "Responsive Design", desc: "Universal styling maintaining visual rhythm across mobile screens and displays.", icon: Smartphone },
    { title: "Content Management", desc: "Simple file admin nodes permitting updates to menus, galleries, and catalogs.", icon: Video },
    { title: "SEO Optimization", desc: "Optimized tags structure guaranteeing fast browser index lookup rates.", icon: Sparkles },
  ];

  const journey = [
    { phase: "Discovery", title: "Brand Alignment", desc: "We audited HVR's creative style, brand assets guide, and storage scale requirements." },
    { phase: "Brand Strategy", title: "Visual Positioning", desc: "We defined visual margins, dark-mode palettes, and typography to highlight media assets." },
    { phase: "UI/UX Design", title: "Console Layouts", desc: "We structured the catalog grids, gallery players, and custom intake fields." },
    { phase: "Development", title: "Engineering Systems", desc: "We integrated image compression nodes, video dispatches, and secure client databases." },
    { phase: "Launch", title: "Production Sync", desc: "We activated the website on fast global servers with automated cache setups." },
  ];

  const techBadges = [
    "React", "Node.js", "PostgreSQL", "Socket.io", "Cloudflare CDN", "AWS S3", "Docker"
  ];

  return (
    <>
      <Navbar />

      <main className="bg-bg-primary text-text-primary min-h-screen pt-36 select-none" role="main">
        
        {/* 1. Hero Section */}
        <section className="relative py-20 overflow-hidden border-b border-border-muted/30" aria-labelledby="hvr-hero-title">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(142,116,83,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(142,116,83,0.015)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none" />
          <div className="container max-w-5xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Title */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-2.5 py-1 rounded-md text-[9px] font-mono font-bold tracking-wider uppercase border inline-block self-start bg-text-secondary/5 border-text-secondary/10 text-text-secondary"
                >
                  Creative Media & Portfolio Platform
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  id="hvr-hero-title"
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-text-primary leading-[1.05]"
                >
                  HVR Media House
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-text-secondary text-sm sm:text-base leading-relaxed select-text"
                >
                  High-bandwidth video asset reviewer and client proofing system designed for creative agencies.
                </motion.p>
              </div>

              {/* Right Column Large Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6"
              >
                <div className="w-full h-80 rounded-2xl border border-text-secondary/15 bg-bg-secondary/40 relative overflow-hidden flex flex-col justify-between p-6 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-border-muted/50 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-text-secondary" />
                      <span className="font-mono text-xs text-text-primary font-bold">HVR Creative Library</span>
                    </div>
                    <span className="font-mono text-[9px] text-text-secondary px-2.5 py-0.5 rounded border border-text-secondary/20 bg-text-secondary/5">Secure Assets</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-4 my-4 overflow-hidden">
                    <div className="p-4 rounded-xl border border-border-muted bg-bg-primary/50 flex items-center justify-between shadow">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-9 rounded bg-bg-tertiary border border-border-active flex items-center justify-center font-mono text-[8px] text-text-muted shadow-inner">
                          Draft v3
                        </div>
                        <div>
                          <span className="text-xs text-text-primary font-semibold block">Commercial_Edits.mp4</span>
                          <span className="text-[10px] text-text-muted block">452 MB • Ready for review</span>
                        </div>
                      </div>
                      <span className="font-mono text-[9px] text-text-secondary px-2.5 py-0.5 rounded border border-text-secondary/20 bg-text-secondary/5">In Review</span>
                    </div>
                    <div className="pl-6 border-l-2 border-text-secondary/20 flex gap-2 items-start">
                      <div className="w-6 h-6 rounded-full bg-text-secondary/10 flex items-center justify-center font-mono text-[9px] text-text-secondary font-bold shrink-0">C</div>
                      <div>
                        <span className="text-[10px] text-text-primary font-bold block">Client Review</span>
                        <p className="text-[10px] text-text-secondary leading-normal select-text">"Increase lighting at 0:14. Everything else looks solid."</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-t border-border-muted/50 pt-4 font-mono text-[9px]">
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
              HVR Media House is a digital portfolio platform built to showcase photography, branding catalogs, videography, and media dispatches. It serves as a visual gallery and client proofing portal where drafts are reviewed and approved securely in one system.
            </p>
          </div>
        </section>

        {/* 3. Business Challenge */}
        <section className="py-12 md:py-16 border-t border-border-muted/30" aria-labelledby="challenge-title">
          <div className="container max-w-4xl mx-auto px-6">
            <div className="section-header">
              <span className="section-tag text-accent-primary border-accent-primary/20 bg-accent-primary/5">Friction Points</span>
              <h2 id="challenge-title" className="text-2xl md:text-3xl font-display font-light text-text-primary mb-6 leading-tight">Business Challenge</h2>
            </div>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed select-text">
              Creative studios suffer from brand fragmentation and draft review delays when relying on disparate hosting networks. Heavy file downloads saturate client bandwidth, while emails review logs create miscommunications during asset approvals.
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
              BhanuWorks designed a fast, visually immersive portfolio hub. We integrated direct video rendering nodes that support timestamp feedback overlays, letting HVR's clients proof media files in-browser and checkout projects securely with no file size limitations.
            </p>
          </div>
        </section>

        {/* 5. Key Features */}
        <section className="py-12 md:py-16 border-t border-border-muted/30" aria-labelledby="features-title">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="section-header center mb-20">
              <span className="section-tag">Capabilities</span>
              <h2 id="features-title" className="text-2xl md:text-3xl lg:text-4xl font-display font-light tracking-tight text-text-primary mb-6 leading-tight">
                Designed for creative agencies
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
                    <div className="w-8.5 h-8.5 rounded-lg bg-text-secondary/5 border border-text-secondary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-text-secondary" aria-hidden="true" />
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

        {/* 6. Visual Gallery */}
        <section className="py-12 md:py-16 border-t border-border-muted/30 bg-bg-secondary/15" aria-labelledby="gallery-title">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="section-header center mb-16">
              <span className="section-tag">Showcase</span>
              <h2 id="gallery-title" className="text-2xl md:text-3xl font-display font-light text-text-primary mb-6">Visual Gallery</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Photography showcase", desc: "Sleek full-width asset panels loading high-resolution draft files instantly." },
                { title: "In-Browser Player Console", desc: "Interactive video player letting clients insert timestamp notes at specific frames." },
                { title: "Brand Catalog Vault", desc: "Organized grid libraries indexing digital mockups, logo guidelines, and reviews." },
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-border-muted bg-bg-primary shadow flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-4 font-mono text-[9px] text-text-primary font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-secondary" />
                    {item.title}
                  </div>
                  <div className="h-32 rounded-lg bg-bg-secondary/40 border border-border-muted flex items-center justify-center p-3">
                    <span className="font-mono text-[8px] text-text-muted">[ Media Preview Frame ]</span>
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
                      <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full border border-border-muted bg-bg-primary flex items-center justify-center -translate-x-1/2 z-10 font-mono text-[10px] text-text-secondary font-bold">
                        0{idx + 1}
                      </div>
                      
                      <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:text-right md:order-1" : "md:order-3"}`}>
                        <div className="p-6 rounded-xl border border-border-muted bg-bg-secondary/25">
                          <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest block font-bold mb-1">{step.phase}</span>
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
              By launching a central, fast review console, HVR cut creative proofing loops by 50%. The clean visual presentation of folders builds client credibility, leading to higher conversion rates on incoming scoping inquiries.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-border-muted/40 pt-10">
              <div>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">Proofing Time</span>
                <span className="font-display font-bold text-2xl md:text-3xl text-text-primary">-50% Cycle</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">Client Engagement</span>
                <span className="font-display font-bold text-2xl md:text-3xl text-text-primary">+42% Growth</span>
              </div>
              <div className="col-span-2 md:col-span-1">
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">Inquiry Conversions</span>
                <span className="font-display font-bold text-2xl md:text-3xl text-text-primary">+15% Rate</span>
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
              Ready to build your digital presence?
            </h2>
            <p className="text-text-secondary text-xs sm:text-sm md:text-base max-w-md leading-relaxed mb-10 select-text">
              Partner with BhanuWorks to build visually immersive portfolios, media delivery platforms, or secure custom portals.
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
