"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Send, Mail, MessageSquare, Plus, Minus } from "lucide-react";

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function validateName(v: string): string | undefined {
  if (!v.trim()) return "Full name is required.";
  if (!/^[a-zA-Z\s'\-]+$/.test(v.trim())) return "Name must contain only letters.";
  if (v.trim().length < 2) return "Name must be at least 2 characters.";
  return undefined;
}

function validateEmail(v: string): string | undefined {
  if (!v.trim()) return "Email address is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) return "Enter a valid email with @.";
  return undefined;
}

function validatePhone(v: string): string | undefined {
  if (!v.trim()) return "Phone number is required.";
  if (!/^\d+$/.test(v.trim())) return "Phone number must contain only numbers.";
  if (v.trim().length < 10 || v.trim().length > 15) return "Phone number must be between 10 and 15 digits.";
  return undefined;
}

function validateMessage(v: string): string | undefined {
  if (!v.trim()) return "Project description is required.";
  if (v.trim().length < 10) return "Please provide at least 10 characters.";
  return undefined;
}

export default function ContactClient() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "web-app",
    message: "",
    budget: "",
    timeline: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormErrors, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [faqIndex, setFaqIndex] = useState<number | null>(null);

  const validate = (): FormErrors => ({
    name: validateName(formState.name),
    email: validateEmail(formState.email),
    phone: validatePhone(formState.phone),
    message: validateMessage(formState.message),
  });

  const handleBlur = (field: keyof FormErrors) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validate();
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleChange = (field: keyof typeof formState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (touched[field as keyof FormErrors]) {
      const updated = { ...formState, [field]: value };
      const newErrors: FormErrors = {
        name: validateName(updated.name),
        email: validateEmail(updated.email),
        phone: validatePhone(updated.phone),
        message: validateMessage(updated.message),
      };
      setErrors((prev) => ({ ...prev, [field]: newErrors[field as keyof FormErrors] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    const allErrors = validate();
    setErrors(allErrors);
    if (Object.values(allErrors).some(Boolean)) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          business: formState.company, // maps to business
          email: formState.email,
          phone: formState.phone,
          projectType: formState.projectType,
          message: formState.message,
          budget: formState.budget,
          timeline: formState.timeline,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", company: "", email: "", phone: "", projectType: "web-app", message: "", budget: "", timeline: "" });
        setErrors({});
        setTouched({});
      } else {
        console.error("Contact form submission failed");
        setStatus("idle");
      }
    } catch (err) {
      console.error("Contact form submission error:", err);
      setStatus("idle");
    }
  };

  const projectTypes = [
    { value: "web-app", label: "Custom Web Application" },
    { value: "ai-solutions", label: "AI Solutions & Chatbots" },
    { value: "restaurant-systems", label: "Restaurant System" },
    { value: "automation", label: "Business Automation" },
    { value: "mobile-apps", label: "Mobile Application" },
    { value: "other", label: "Other Project" },
  ];

  const socialLinks = [
    {
      label: "Email",
      value: "bhanuworks0415@gmail.com",
      href: "mailto:bhanuworks0415@gmail.com",
      svg: <Mail className="w-4 h-4" aria-hidden="true" />,
      color: "hover:border-accent-primary/40 hover:text-accent-primary hover:shadow-sm",
    },
    {
      label: "LinkedIn",
      value: "company/bhanuworks",
      href: "https://www.linkedin.com/company/bhanuworks/",
      svg: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      color: "hover:border-accent-primary/40 hover:text-accent-primary hover:shadow-sm",
    },
  ];

  const faqs = [
    {
      question: "How long does a project take?",
      answer: "A typical custom software project takes between 4 to 8 weeks, depending on the complexity of dispatches, table setups, or integrations.",
    },
    {
      question: "How do we get started?",
      answer: "We begin with a brief, direct scoping video call to review your commercial requirements, mapping out fixed deliverables and pricing guides.",
    },
    {
      question: "Do you work internationally?",
      answer: "Yes, we design, deploy, and support custom business software for partners across regions internationally with secure hosting setups.",
    },
    {
      question: "Do you provide support after launch?",
      answer: "Yes, we provide ongoing maintenance plans covering speed adjustments, security certificate renewals, and software optimizations.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-bg-primary text-text-primary min-h-screen pt-36 select-none" role="main">
        
        {/* 1. Hero Section */}
        <section className="relative py-12 md:py-18 text-center overflow-hidden" aria-labelledby="contact-hero-title">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(95,116,88,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(95,116,88,0.012)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="container max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-tag mb-6"
            >
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              id="contact-hero-title"
              className="text-5xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-text-primary mb-8 leading-[1.05]"
            >
              Let's build something<br />
              <span className="hero-gradient-text">great together.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-text-secondary text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed select-text font-normal"
            >
              Whether you're launching a new product, modernizing your business, or exploring automation, we'd love to hear about your project.
            </motion.p>
          </div>
        </section>

        {/* 2. Contact Form */}
        <section className="py-12 pb-32 border-t border-border-muted/30" aria-label="Inquiry submission form">
          <div className="container max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-10 rounded-3xl border border-border-muted bg-bg-secondary/35 backdrop-blur-md shadow-xl"
            >
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-success/5 border border-success/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-success" />
                  </div>
                  <h3 className="font-display font-light text-2xl text-text-primary">
                    Request Received
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm max-w-sm leading-relaxed select-text font-normal">
                    We will review your project details and contact you within 24 hours to schedule a scoping session.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-4 py-2 rounded-lg bg-bg-tertiary border border-border-muted text-xs text-text-secondary hover:text-text-primary hover:border-border-active transition-all duration-300 cursor-pointer"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>

                  {/* Name + Company Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group flex flex-col gap-2.5">
                      <label htmlFor="name" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">
                        Full Name <span className="text-error">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formState.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        placeholder="e.g. David Vance"
                        className={`w-full bg-bg-primary border px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none transition-all placeholder:text-text-muted ${
                          touched.name && errors.name
                            ? "border-error focus:border-error focus:ring-1 focus:ring-error/20"
                            : "border-border-muted focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20"
                        }`}
                        disabled={status === "submitting"}
                        aria-invalid={touched.name && !!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {touched.name && errors.name && (
                        <motion.p id="name-error" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-error font-mono" role="alert">
                          ✕ {errors.name}
                        </motion.p>
                      )}
                    </div>
                    <div className="form-group flex flex-col gap-2.5">
                      <label htmlFor="company" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">Company Name (Optional)</label>
                      <input
                        id="company"
                        type="text"
                        value={formState.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="e.g. Vance Hospitality"
                        className="w-full bg-bg-primary border border-border-muted px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-all placeholder:text-text-muted"
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  {/* Email + Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group flex flex-col gap-2.5">
                      <label htmlFor="email" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">
                        Email Address <span className="text-error">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formState.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        placeholder="e.g. david@example.com"
                        className={`w-full bg-bg-primary border px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none transition-all placeholder:text-text-muted ${
                          touched.email && errors.email
                            ? "border-error focus:border-error focus:ring-1 focus:ring-error/20"
                            : "border-border-muted focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20"
                        }`}
                        disabled={status === "submitting"}
                        aria-invalid={touched.email && !!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {touched.email && errors.email && (
                        <motion.p id="email-error" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-error font-mono" role="alert">
                          ✕ {errors.email}
                        </motion.p>
                      )}
                    </div>
                    <div className="form-group flex flex-col gap-2.5">
                      <label htmlFor="phone" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">Phone Number *</label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, ""))}
                        onBlur={() => handleBlur("phone")}
                        placeholder="e.g. 9876543210"
                        className={`w-full bg-bg-primary border px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none transition-all placeholder:text-text-muted ${
                          touched.phone && errors.phone
                            ? "border-error focus:border-error focus:ring-1 focus:ring-error/20"
                            : "border-border-muted focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20"
                        }`}
                        disabled={status === "submitting"}
                        aria-invalid={touched.phone && !!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {touched.phone && errors.phone && (
                        <motion.p id="phone-error" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-error font-mono" role="alert">
                          ✕ {errors.phone}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="form-group flex flex-col gap-2.5">
                    <label htmlFor="project-type" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">What are you looking to build?</label>
                    <div className="relative">
                      <select
                        id="project-type"
                        value={formState.projectType}
                        onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                        className="w-full bg-bg-primary border border-border-muted px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-all appearance-none cursor-pointer pr-10"
                        disabled={status === "submitting"}
                      >
                        {projectTypes.map((type) => (
                          <option key={type.value} value={type.value} className="bg-bg-secondary text-text-primary">{type.label}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[10px]">▼</div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group flex flex-col gap-2.5">
                    <label htmlFor="message" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">
                      Tell us about your project <span className="text-error">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      placeholder="Outline the operational functions, dashboard features, or automated checkouts you need..."
                      className={`w-full bg-bg-primary border px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none transition-all resize-none placeholder:text-text-muted ${
                        touched.message && errors.message
                          ? "border-error focus:border-error focus:ring-1 focus:ring-error/20"
                          : "border-border-muted focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20"
                      }`}
                      disabled={status === "submitting"}
                      aria-invalid={touched.message && !!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {touched.message && errors.message && (
                      <motion.p id="message-error" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-error font-mono" role="alert">
                        ✕ {errors.message}
                      </motion.p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group flex flex-col gap-2.5">
                      <label htmlFor="budget" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">Budget (Optional)</label>
                      <input
                        id="budget"
                        type="text"
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        placeholder="e.g. $10k - $20k"
                        className="w-full bg-bg-primary border border-border-muted px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-all placeholder:text-text-muted"
                        disabled={status === "submitting"}
                      />
                    </div>
                    <div className="form-group flex flex-col gap-2.5">
                      <label htmlFor="timeline" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">Timeline (Optional)</label>
                      <input
                        id="timeline"
                        type="text"
                        value={formState.timeline}
                        onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                        placeholder="e.g. 4 to 8 weeks"
                        className="w-full bg-bg-primary border border-border-muted px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-all placeholder:text-text-muted"
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-shimmer-trigger w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-text-primary text-bg-primary font-bold hover:bg-accent-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-xs font-mono uppercase tracking-wider cursor-pointer font-bold"
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
                        Sending Request...
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
        </section>

        {/* 3. Alternative Contact */}
        <section className="py-16 md:py-24 border-t border-border-muted/30 bg-bg-secondary/15" aria-labelledby="alt-contact-title">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="section-header center mb-24">
              <span className="section-tag">Direct Lines</span>
              <h2 id="alt-contact-title" className="text-3xl md:text-4xl font-display font-light text-text-primary">Alternative Contact</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {socialLinks.map((social, i) => {
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    className={`p-6 rounded-3xl border border-border-muted bg-bg-primary shadow flex flex-col gap-4 transition-all duration-300 ${social.color}`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-bg-secondary border border-border-muted flex items-center justify-center shrink-0">
                      {social.svg}
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-text-muted uppercase tracking-widest block mb-1">{social.label}</span>
                      <span className="text-xs text-text-primary font-semibold select-text">{social.value}</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Frequently Asked Accordion */}
        <section className="py-16 md:py-24 border-t border-border-muted/30" aria-labelledby="faq-accordion-title">
          <div className="container max-w-3xl mx-auto px-6">
            <div className="section-header center mb-24">
              <span className="section-tag">Answers</span>
              <h2 id="faq-accordion-title" className="text-3xl md:text-4xl font-display font-light text-text-primary">Frequently Asked</h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = faqIndex === i;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-border-muted bg-bg-secondary/20 overflow-hidden hover:border-border-active transition-all duration-300"
                  >
                    <button
                      onClick={() => setFaqIndex(isOpen ? null : i)}
                      className="w-full text-left py-5 px-8 flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-bg-secondary cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display font-light text-lg sm:text-xl text-text-primary">
                        {faq.question}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-bg-secondary border border-border-muted flex items-center justify-center shrink-0">
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5 text-accent-primary" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 text-text-secondary" />
                        )}
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-8 pb-6 pt-1 border-t border-border-muted/30 text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed select-text font-normal">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Final CTA */}
        <section className="py-16 border-t border-border-muted/40 relative text-center">
          <div className="absolute inset-0 hero-glow-element pointer-events-none z-0" />
          <div className="container max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <span className="section-tag mb-4">Start Scoping</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-text-primary mb-6 leading-tight">
              Let's turn your idea into reality.
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-md leading-relaxed mb-10 select-text font-normal">
              Schedule a scoping timeline call with our team. We map out fixed project milestones with transparent pricing.
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
