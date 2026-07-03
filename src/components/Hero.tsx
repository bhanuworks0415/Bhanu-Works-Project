"use client";

import { ArrowRight, Shield, Zap, Users, Headphones, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative overflow-visible select-none"
      style={{
        background: "radial-gradient(circle at 75% 35%, rgba(36, 107, 58, 0.04) 0%, #FAFAF8 65%)",
        paddingTop: "5rem",
        paddingBottom: "6rem",
      }}
      aria-label="Hero section"
    >
      {/* Background glow filters */}
      <div className="absolute top-1/4 right-[10%] w-[450px] h-[450px] rounded-full bg-[#246B3A]/4 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-[25%] w-[320px] h-[320px] rounded-full bg-[#4ade80]/3 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-[1240px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ══════════════ LEFT COLUMN (40%) ══════════════ */}
          <div className="lg:col-span-5 flex flex-col items-start text-left w-full z-10">

            {/* Pill tag */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-8"
              style={{ borderColor: "rgba(36, 107, 58, 0.18)", background: "#FFFFFF" }}
            >
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "#246B3A" }} />
              <span style={{ fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#111", fontWeight: 500 }}>
                Software. Automation. AI Agents.
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="hero-title-dark font-display font-light tracking-tight leading-[1.08] mb-5 select-text"
              style={{ fontSize: "clamp(2.8rem, 4.5vw, 4.2rem)" }}
            >
              Building software<br />
              that drives<br />
              <span className="hero-title-accent">growth.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ color: "#444", fontSize: "15px", lineHeight: "1.65", marginBottom: "2.25rem", maxWidth: "380px" }}
              className="select-text"
            >
              We design custom software, AI systems and automation solutions that help businesses grow faster.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-row items-center gap-3 mb-14"
            >
              <a
                href="/book-consultation"
                className="inline-flex items-center gap-2 group cursor-pointer"
                style={{
                  padding: "12px 24px",
                  borderRadius: "9999px",
                  background: "#246B3A",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "background 0.2s",
                  boxShadow: "0 4px 14px rgba(36,107,58,0.2)",
                }}
              >
                Book Consultation
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/work"
                className="inline-flex items-center gap-2 cursor-pointer"
                style={{
                  padding: "12px 24px",
                  borderRadius: "9999px",
                  background: "#fff",
                  border: "1px solid #DCDCD8",
                  color: "#111",
                  fontWeight: 500,
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                View Our Work
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-4"
              style={{ borderTop: "1px solid #E4E4E0", paddingTop: "1.75rem", width: "100%" }}
            >
              {[
                { icon: Shield, label: "Trusted", sub: "by Businesses" },
                { icon: Zap, label: "Scalable", sub: "by Design" },
                { icon: Users, label: "Focused on", sub: "Your Growth" },
                { icon: Headphones, label: "Support", sub: "That Cares" },
              ].map(({ icon: Icon, label, sub }, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <Icon size={15} style={{ color: "#246B3A", flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#111", display: "block", lineHeight: 1.25 }}>{label}</span>
                    <span style={{ fontSize: "11px", color: "#666", lineHeight: 1.25 }}>{sub}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ══════════════ RIGHT COLUMN — Visual Composition Collage (60%) ══════════════ */}
          <div className="lg:col-span-7 relative w-full h-[320px] sm:h-[450px] lg:h-[620px] z-10 flex items-center justify-center overflow-hidden lg:overflow-visible">
            
            {/* Ambient vector lines in the background */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" fill="none">
              <path
                d="M 60,400 Q -20,220 80,90 T 420,40"
                stroke="rgba(36, 107, 58, 0.15)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
              <path
                d="M 120,530 Q 350,560 550,420"
                stroke="rgba(36, 107, 58, 0.2)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="290" cy="270" r="230" stroke="rgba(36, 107, 58, 0.06)" strokeWidth="1" />
            </svg>

            {/* ── Main Arched Team Photo ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-4 lg:top-5 lg:bottom-[30px] lg:left-10 lg:right-[15px] overflow-hidden"
              style={{
                borderTopLeftRadius: "300px",
                borderBottomLeftRadius: "300px",
                borderTopRightRadius: "32px",
                borderBottomRightRadius: "32px",
                border: "1px solid rgba(36, 107, 58, 0.08)",
                boxShadow: "0 25px 50px -12px rgba(17, 17, 17, 0.06), 0 0 40px rgba(17, 17, 17, 0.02)",
              }}
            >
              <img
                src="/hero_team.png?v=7"
                alt="BhanuWorks engineering team collaborating"
                className="w-full h-full object-cover object-center"
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#246B3A]/6 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* ── CARD 1: Deployed Status (Top-Left overlay) ── */}
            <motion.div
              initial={{ opacity: 0, x: -12, y: -8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="hidden lg:block absolute top-[45px] left-[-20px] w-[180px] rounded-2xl p-4 z-20"
              style={{
                background: "#0B0F0D",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)",
                opacity: 1,
              }}
            >
              <div style={{ opacity: 1, color: "#ffffff", position: "relative", zIndex: 2 }}>
                <div className="flex items-center gap-2 mb-3.5" style={{ color: "#ffffff" }}>
                  <div className="w-5 h-5 rounded-md flex items-center justify-center bg-[#4ade80]/20">
                    <span style={{ fontSize: "10px", color: "#4ade80", fontFamily: "monospace", fontWeight: "bold" }}>&gt;_</span>
                  </div>
                  <span style={{ fontSize: "11px", color: "#4ade80", fontWeight: "bold", fontFamily: "sans-serif" }}>✓ Project Delivered</span>
                </div>
                <div className="space-y-2 font-sans" style={{ color: "#ffffff" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", color: "#ffffff", fontWeight: "500" }}>
                    <span style={{ color: "#4ade80", fontWeight: "bold" }}>✦</span> Website Live
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", color: "#ffffff", fontWeight: "500" }}>
                    <span style={{ color: "#4ade80", fontWeight: "bold" }}>✦</span> Mobile App Ready
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", color: "#ffffff", fontWeight: "500" }}>
                    <span style={{ color: "#4ade80", fontWeight: "bold" }}>✦</span> API Connected
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── CARD 2: Project Overview (Top-Right overlay) ── */}
            <motion.div
              initial={{ opacity: 0, x: 12, y: -8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="hidden lg:block absolute top-[-15px] right-[-25px] w-[210px] bg-white rounded-2xl border border-[#EBEBE8] p-4 z-20"
              style={{
                boxShadow: "0 20px 40px -12px rgba(17, 17, 17, 0.05), 0 0 25px rgba(17, 17, 17, 0.01)",
              }}
            >
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#246B3A] animate-pulse" />
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "#111" }}>Project Overview</span>
                </div>
                <span style={{ fontSize: "10px", color: "#246B3A", fontWeight: 600 }}>Status: Live</span>
              </div>
              <div className="flex items-center gap-2 pb-2 mb-2.5 border-b border-[#F0F0EC]">
                <div className="w-5 h-5 rounded bg-[#F5F5F2] flex items-center justify-center text-[10px]">📁</div>
                <span style={{ fontSize: "11px", color: "#555", fontWeight: 500 }}>Custom SaaS Suite</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: "10px", color: "#111", fontWeight: 500 }}>✓ Website</span>
                  <span style={{ fontSize: "10px", fontWeight: 600, color: "#246B3A" }}>Live</span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: "10px", color: "#111", fontWeight: 500 }}>✓ Admin Dashboard</span>
                  <span style={{ fontSize: "10px", fontWeight: 600, color: "#246B3A" }}>Live</span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: "10px", color: "#111", fontWeight: 500 }}>✓ Mobile App</span>
                  <span style={{ fontSize: "10px", fontWeight: 600, color: "#246B3A" }}>Live</span>
                </div>
              </div>
            </motion.div>

            {/* ── CARD 3: Our Process (Bottom-Left overlay) ── */}
            <motion.div
              initial={{ opacity: 0, x: -12, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="hidden lg:block absolute bottom-[60px] left-[-40px] w-[260px] bg-white rounded-2xl border border-[#EBEBE8] p-4 z-20"
              style={{
                boxShadow: "0 20px 40px -12px rgba(17, 17, 17, 0.05), 0 0 25px rgba(17, 17, 17, 0.01)",
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#111", display: "block", marginBottom: "10px" }}>Our Process</span>
              <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-lg border border-[#E0E0DC] bg-[#F8F8F5] flex items-center justify-center text-[10px]">🔍</div>
                  <span style={{ fontSize: "8px", color: "#999", fontWeight: 500 }}>Discovery</span>
                </div>
                <div className="flex-1 mx-0.5 border-t border-dashed border-[#DDDCD8]" />
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-lg border border-[#E0E0DC] bg-[#F8F8F5] flex items-center justify-center text-[10px]">🎨</div>
                  <span style={{ fontSize: "8px", color: "#999", fontWeight: 500 }}>Design</span>
                </div>
                <div className="flex-1 mx-0.5 border-t border-dashed border-[#DDDCD8]" />
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-lg border border-[#E0E0DC] bg-[#F8F8F5] flex items-center justify-center text-[10px]">💻</div>
                  <span style={{ fontSize: "8px", color: "#246B3A", fontWeight: 600 }}>Development</span>
                </div>
                <div className="flex-1 mx-0.5 border-t border-dashed border-[#DDDCD8]" />
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-lg border border-[#E0E0DC] bg-[#F8F8F5] flex items-center justify-center text-[10px]">🚀</div>
                  <span style={{ fontSize: "8px", color: "#999", fontWeight: 500 }}>Launch</span>
                </div>
              </div>
              <p style={{ fontSize: "9px", color: "#888", marginBottom: "8px" }}>Consultation → Build → Live Production</p>
              <span className="inline-block px-2 py-0.5 rounded bg-[#246B3A]/8 text-[#246B3A]" style={{ fontSize: "9px", fontWeight: 600 }}>Handcrafted</span>
            </motion.div>

            {/* ── CARD 4: Business Dashboard (Bottom-Center overlay) ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="hidden lg:block absolute bottom-[-15px] left-[170px] w-[200px] bg-white rounded-2xl border border-[#EBEBE8] p-3 z-20"
              style={{
                boxShadow: "0 20px 40px -12px rgba(17, 17, 17, 0.05), 0 0 25px rgba(17, 17, 17, 0.01)",
              }}
            >
              {/* High-Fidelity CSS Dashboard Preview */}
              <div className="rounded-xl overflow-hidden p-2.5 mb-2 flex flex-col gap-2" style={{ background: "#0A0D14", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between border-b border-white/5 pb-1">
                  <div className="flex gap-1">
                    <span className="w-1 h-1 rounded-full bg-red-400" />
                    <span className="w-1 h-1 rounded-full bg-yellow-400" />
                    <span className="w-1 h-1 rounded-full bg-green-400" />
                  </div>
                  <span style={{ fontSize: "6px", fontFamily: "monospace", color: "rgba(255,255,255,0.3)" }}>client-portal.dashboard</span>
                </div>
                {/* Stats Grid (2x2) */}
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="p-1 rounded bg-white/3 flex flex-col">
                    <span style={{ fontSize: "6px", color: "rgba(255,255,255,0.4)" }}>Revenue</span>
                    <span style={{ fontSize: "8px", fontWeight: 600, color: "#fff" }}>$42,850</span>
                  </div>
                  <div className="p-1 rounded bg-white/3 flex flex-col">
                    <span style={{ fontSize: "6px", color: "rgba(255,255,255,0.4)" }}>Orders</span>
                    <span style={{ fontSize: "8px", fontWeight: 600, color: "#fff" }}>1,280</span>
                  </div>
                  <div className="p-1 rounded bg-white/3 flex flex-col">
                    <span style={{ fontSize: "6px", color: "rgba(255,255,255,0.4)" }}>Growth</span>
                    <span style={{ fontSize: "8px", fontWeight: 600, color: "#4ade80" }}>+12.4%</span>
                  </div>
                  <div className="p-1 rounded bg-white/3 flex flex-col">
                    <span style={{ fontSize: "6px", color: "rgba(255,255,255,0.4)" }}>Visitors</span>
                    <span style={{ fontSize: "8px", fontWeight: 600, color: "#fff" }}>24,500</span>
                  </div>
                </div>
                {/* Handcrafted static SVG line graph */}
                <div className="h-10 pt-1 relative overflow-visible">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 174 40">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4ade80" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#4ade80" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Gridlines */}
                    <line x1="0" y1="10" x2="174" y2="10" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                    <line x1="0" y1="20" x2="174" y2="20" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                    <line x1="0" y1="30" x2="174" y2="30" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                    {/* Filled Area */}
                    <path
                      d="M 0,35 C 30,33 50,18 80,22 C 110,26 130,8 174,4 L 174,40 L 0,40 Z"
                      fill="url(#chartGrad)"
                    />
                    {/* Stroke Path */}
                    <path
                      d="M 0,35 C 30,33 50,18 80,22 C 110,26 130,8 174,4"
                      fill="none"
                      stroke="#4ade80"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    {/* Pulsing indicator dot */}
                    <circle cx="174" cy="4" r="2.5" fill="#4ade80" />
                  </svg>
                </div>
              </div>
              <span style={{ fontSize: "11px", fontWeight: 600, color: "#111", display: "block", textAlign: "center" }}>Business Dashboard</span>
            </motion.div>

            {/* ── CARD 5: Code Terminal with Sparkle Button (Bottom-Right overlay) ── */}
            <motion.div
              initial={{ opacity: 0, x: 12, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.82 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="hidden lg:block absolute bottom-[30px] right-[-25px] w-[210px] rounded-2xl p-3.5 z-20"
              style={{
                background: "#0B0F0D",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* macOS Dots + Sparkle Button */}
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#FF5F57" }} />
                  <div className="w-2 h-2 rounded-full" style={{ background: "#FEBC2E" }} />
                  <div className="w-2 h-2 rounded-full" style={{ background: "#28C840" }} />
                </div>
                <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <Sparkles size={10} style={{ color: "#4ade80" }} />
                </div>
              </div>
              {/* Syntax code */}
              <div style={{ fontFamily: "monospace", fontSize: "9px", lineHeight: "1.65" }}>
                <div>
                  <span style={{ color: "#9EAF9E" }}>1 </span>
                  <span style={{ color: "#79B8FF" }}>import </span>
                  <span style={{ color: "#FFFFFF" }}>{"{ studio } "}</span>
                  <span style={{ color: "#79B8FF" }}>from </span>
                  <span style={{ color: "#FFD700" }}>'bhanuworks'</span>
                </div>
                <div>
                  <span style={{ color: "#9EAF9E" }}>2 </span>
                </div>
                <div>
                  <span style={{ color: "#9EAF9E" }}>3 </span>
                  <span style={{ color: "#79B8FF" }}>await </span>
                  <span style={{ color: "#FFFFFF" }}>studio.</span>
                  <span style={{ color: "#FFD700" }}>buildWebsite</span>
                  <span style={{ color: "#FFFFFF" }}>{"();"}</span>
                </div>
                <div>
                  <span style={{ color: "#9EAF9E" }}>4 </span>
                  <span style={{ color: "#79B8FF" }}>await </span>
                  <span style={{ color: "#FFFFFF" }}>studio.</span>
                  <span style={{ color: "#FFD700" }}>connectPayments</span>
                  <span style={{ color: "#FFFFFF" }}>{"();"}</span>
                </div>
                <div>
                  <span style={{ color: "#9EAF9E" }}>5 </span>
                  <span style={{ color: "#79B8FF" }}>await </span>
                  <span style={{ color: "#FFFFFF" }}>studio.</span>
                  <span style={{ color: "#FFD700" }}>automateWorkflow</span>
                  <span style={{ color: "#FFFFFF" }}>{"();"}</span>
                </div>
                <div>
                  <span style={{ color: "#9EAF9E" }}>6 </span>
                  <span style={{ color: "#79B8FF" }}>await </span>
                  <span style={{ color: "#FFFFFF" }}>studio.</span>
                  <span style={{ color: "#FFD700" }}>goLive</span>
                  <span style={{ color: "#FFFFFF" }}>{"();"}</span>
                </div>
                <div><span style={{ color: "#9EAF9E" }}>7 </span></div>
                <div>
                  <span style={{ color: "#9EAF9E" }}>8 </span>
                  <span style={{ color: "#8E9F8E" }}>{"// Production Ready"}</span>
                </div>
                <div>
                  <span style={{ color: "#9EAF9E" }}>9 </span>
                  <span style={{ color: "#4ade80" }}>{"// Clean, Fast, Scalable"}</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
