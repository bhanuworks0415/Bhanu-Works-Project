"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Send, Sparkles } from "lucide-react";

export default function BookConsultationClient() {
  const [formState, setFormState] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    industry: "restaurant",
    projectType: "custom-software",
    description: "",
    timeline: "within-1-month",
    budget: "lets-discuss",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [phoneError, setPhoneError] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.phone || !formState.description) {
      if (!formState.phone) {
        setPhoneError("Phone number is required.");
      }
      return;
    }
    if (formState.phone.length < 10 || formState.phone.length > 15) {
      setPhoneError("Phone number must be between 10 and 15 digits.");
      return;
    }
    setPhoneError("");
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          business: formState.business,
          email: formState.email,
          phone: formState.phone,
          industry: formState.industry,
          projectType: formState.projectType,
          message: formState.description,
          timeline: formState.timeline,
          budget: formState.budget,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({
          name: "",
          business: "",
          email: "",
          phone: "",
          industry: "restaurant",
          projectType: "custom-software",
          description: "",
          timeline: "within-1-month",
          budget: "lets-discuss",
        });
      } else {
        console.error("Form submission failed");
        setStatus("idle");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("idle");
    }
  };

  const industries = [
    { value: "restaurant", label: "Restaurant" },
    { value: "cafe", label: "Café" },
    { value: "hotel", label: "Hotel" },
    { value: "healthcare", label: "Healthcare" },
    { value: "retail", label: "Retail" },
    { value: "startup", label: "Startup" },
    { value: "agency", label: "Agency" },
    { value: "education", label: "Education" },
    { value: "other", label: "Other" },
  ];

  const projectTypes = [
    { value: "business-website", label: "Business Website" },
    { value: "custom-software", label: "Custom Software" },
    { value: "restaurant-solution", label: "Restaurant Solution" },
    { value: "mobile-app", label: "Mobile App" },
    { value: "ai-automation", label: "AI Automation" },
    { value: "other", label: "Other" },
  ];

  const timelines = [
    { value: "immediately", label: "Immediately" },
    { value: "within-1-month", label: "Within 1 Month" },
    { value: "1-3-months", label: "1–3 Months" },
    { value: "flexible", label: "Flexible" },
  ];

  const budgets = [
    { value: "under-50k", label: "Under ₹50K" },
    { value: "50k-1l", label: "₹50K–₹1L" },
    { value: "1l-3l", label: "₹1L–₹3L" },
    { value: "3l-plus", label: "₹3L+" },
    { value: "lets-discuss", label: "Let's Discuss" },
  ];

  const steps = [
    { num: "01", title: "Submit Inquiry", desc: "Share your business parameters and project goals using our visual onboarding form." },
    { num: "02", title: "Initial Discussion", desc: "A brief video session where we audit workflows and identify technical requirements." },
    { num: "03", title: "Proposal", desc: "We deliver a detailed project blueprint containing fixed timelines and transparent milestones." },
    { num: "04", title: "Design & Development", desc: "We construct custom layout pre-visualizations and compile robust client code." },
    { num: "05", title: "Launch", desc: "We host your product on fast production servers and check final system uptime metrics." },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-bg-primary text-text-primary min-h-screen pt-36 select-none" role="main">
        
        {/* Hero Section */}
        <section className="relative py-12 md:py-18 text-center overflow-hidden border-b border-border-muted/30" aria-labelledby="booking-hero-title">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(95,116,88,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(95,116,88,0.012)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="container max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-tag mb-6"
            >
              Consultation
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              id="booking-hero-title"
              className="text-5xl md:text-6xl font-display font-light tracking-tight text-text-primary mb-8 leading-[1.05]"
            >
              Let's Talk About<br />
              <span className="hero-gradient-text">Your Project.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-text-secondary text-sm sm:text-base max-w-2xl leading-relaxed select-text font-normal"
            >
              Tell us about your business, your goals and what you're looking to build. We'll review your requirements and get back to you with the next steps.
            </motion.p>
          </div>
        </section>

        {/* Form and Sidebar Container */}
        <section className="py-12" aria-label="Onboarding setup details">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column (Premium Form) */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 md:p-10 rounded-3xl border border-border-muted bg-bg-secondary/35 backdrop-blur-md shadow-xl"
                >
                  {status === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-16 gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-success/5 border border-success/20 flex items-center justify-center">
                        <Check className="w-5 h-5 text-success" />
                      </div>
                      <h3 className="font-display font-light text-2xl text-text-primary">
                        Inquiry Submitted Successfully
                      </h3>
                      <p className="text-text-secondary text-xs sm:text-sm max-w-sm leading-relaxed select-text font-normal">
                        Your onboarding data has been compiled. Our software architects will contact you within 24 hours.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-6 px-4 py-2 rounded-lg bg-bg-tertiary border border-border-muted text-xs text-text-secondary hover:text-text-primary hover:border-border-active transition-all duration-300 cursor-pointer"
                      >
                        Submit another inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-group flex flex-col gap-2.5">
                          <label htmlFor="name" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">Full Name</label>
                          <input
                            id="name"
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            placeholder="e.g. David Vance"
                            className="w-full bg-bg-primary border border-border-muted px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-all placeholder:text-text-muted"
                            disabled={status === "submitting"}
                          />
                        </div>
                        <div className="form-group flex flex-col gap-2.5">
                          <label htmlFor="business" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">Business Name (Optional)</label>
                          <input
                            id="business"
                            type="text"
                            value={formState.business}
                            onChange={(e) => setFormState({ ...formState, business: e.target.value })}
                            placeholder="e.g. Vance Hospitality"
                            className="w-full bg-bg-primary border border-border-muted px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-all placeholder:text-text-muted"
                            disabled={status === "submitting"}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-group flex flex-col gap-2.5">
                          <label htmlFor="email" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">Email Address</label>
                          <input
                            id="email"
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            placeholder="e.g. david@example.com"
                            className="w-full bg-bg-primary border border-border-muted px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-all placeholder:text-text-muted"
                            disabled={status === "submitting"}
                          />
                        </div>
                        <div className="form-group flex flex-col gap-2.5">
                          <label htmlFor="phone" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">Phone Number *</label>
                          <input
                            id="phone"
                            type="tel"
                            required
                            value={formState.phone}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, "");
                              setFormState({ ...formState, phone: val });
                              if (val.length >= 10 && val.length <= 15) {
                                setPhoneError("");
                              } else if (val.length === 0) {
                                setPhoneError("Phone number is required.");
                              } else {
                                setPhoneError("Phone number must be between 10 and 15 digits.");
                              }
                            }}
                            placeholder="e.g. 9876543210"
                            className={`w-full bg-bg-primary border px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none transition-all placeholder:text-text-muted ${
                              phoneError
                                ? "border-error focus:border-error focus:ring-1 focus:ring-error/20"
                                : "border-border-muted focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20"
                            }`}
                            disabled={status === "submitting"}
                          />
                          {phoneError && (
                            <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-error font-mono mt-1">
                              ✕ {phoneError}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-group flex flex-col gap-2.5">
                          <label htmlFor="industry" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">Industry</label>
                          <div className="relative">
                            <select
                              id="industry"
                              value={formState.industry}
                              onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                              className="w-full bg-bg-primary border border-border-muted px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-all appearance-none cursor-pointer pr-10"
                              disabled={status === "submitting"}
                            >
                              {industries.map((ind) => (
                                <option key={ind.value} value={ind.value} className="bg-bg-secondary text-text-primary">
                                  {ind.label}
                                </option>
                              ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[10px]">
                              ▼
                            </div>
                          </div>
                        </div>

                        <div className="form-group flex flex-col gap-2.5">
                          <label htmlFor="project-type" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">Project Type</label>
                          <div className="relative">
                            <select
                              id="project-type"
                              value={formState.projectType}
                              onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                              className="w-full bg-bg-primary border border-border-muted px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-all appearance-none cursor-pointer pr-10"
                              disabled={status === "submitting"}
                            >
                              {projectTypes.map((type) => (
                                <option key={type.value} value={type.value} className="bg-bg-secondary text-text-primary">
                                  {type.label}
                                </option>
                              ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[10px]">
                              ▼
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group flex flex-col gap-2.5">
                        <label htmlFor="description" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">Project Description</label>
                        <textarea
                          id="description"
                          rows={5}
                          required
                          value={formState.description}
                          onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                          placeholder="Outline the operational functions, dashboard features, or automated checkouts you need..."
                          className="w-full bg-bg-primary border border-border-muted px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-all resize-none placeholder:text-text-muted"
                          disabled={status === "submitting"}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-group flex flex-col gap-2.5">
                          <label htmlFor="timeline" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">Estimated Timeline</label>
                          <div className="relative">
                            <select
                              id="timeline"
                              value={formState.timeline}
                              onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                              className="w-full bg-bg-primary border border-border-muted px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-all appearance-none cursor-pointer pr-10"
                              disabled={status === "submitting"}
                            >
                              {timelines.map((time) => (
                                <option key={time.value} value={time.value} className="bg-bg-secondary text-text-primary">
                                  {time.label}
                                </option>
                              ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[10px]">
                              ▼
                            </div>
                          </div>
                        </div>

                        <div className="form-group flex flex-col gap-2.5">
                          <label htmlFor="budget" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">Budget</label>
                          <div className="relative">
                            <select
                              id="budget"
                              value={formState.budget}
                              onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                              className="w-full bg-bg-primary border border-border-muted px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-all appearance-none cursor-pointer pr-10"
                              disabled={status === "submitting"}
                            >
                              {budgets.map((bud) => (
                                <option key={bud.value} value={bud.value} className="bg-bg-secondary text-text-primary">
                                  {bud.label}
                                </option>
                              ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[10px]">
                              ▼
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={status === "submitting" || !formState.name || !formState.email || !formState.description}
                        className="btn-shimmer-trigger w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-text-primary text-bg-primary font-bold hover:bg-accent-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-xs font-mono uppercase tracking-wider cursor-pointer font-bold"
                      >
                        {status === "submitting" ? (
                          <span className="flex items-center gap-2">
                            <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
                            Submitting...
                          </span>
                        ) : (
                          <>
                            Request Consultation
                            <Send className="w-3.5 h-3.5 shrink-0" />
                          </>
                        )}
                      </button>

                    </form>
                  )}
                </motion.div>
              </div>

              {/* Right Column (Process Sidebar) */}
              <div className="lg:col-span-5 flex flex-col gap-8 lg:pl-6">
                <div className="p-8 rounded-3xl border border-border-muted bg-bg-secondary/15 flex flex-col gap-6">
                  <div className="flex items-center gap-2.5 border-b border-border-muted/40 pb-4 font-mono text-[9px] text-text-primary font-bold uppercase tracking-widest">
                    <Sparkles className="w-4 h-4 text-accent-gold" aria-hidden="true" />
                    How We Work
                  </div>
                  <div className="space-y-6">
                    {steps.map((step, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-7 h-7 rounded-lg bg-accent-primary/5 border border-accent-primary/10 flex items-center justify-center font-mono text-[9px] text-accent-primary font-bold shrink-0">
                          {step.num}
                        </div>
                        <div>
                          <h4 className="font-semibold text-xs text-text-primary mb-1">{step.title}</h4>
                          <p className="text-[10px] text-text-secondary leading-relaxed select-text font-normal">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="py-12 border-t border-border-muted/40 text-center relative overflow-hidden">
          <div className="absolute inset-0 hero-glow-element pointer-events-none z-0" />
          <div className="container max-w-4xl mx-auto px-6 relative z-10">
            <p className="font-display font-light text-2xl sm:text-3xl text-text-secondary leading-relaxed select-text max-w-lg mx-auto italic">
              "Looking forward to building something exceptional together."
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
