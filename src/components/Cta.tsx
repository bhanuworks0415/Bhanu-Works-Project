"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";
import { motion } from "framer-motion";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function validateName(value: string): string | undefined {
  if (!value.trim()) return "Full name is required.";
  if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) return "Name must contain only letters.";
  if (value.trim().length < 2) return "Name must be at least 2 characters.";
  return undefined;
}

function validateEmail(value: string): string | undefined {
  if (!value.trim()) return "Email address is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "Enter a valid email with @.";
  return undefined;
}

export default function Cta() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "web-app",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormErrors, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = (): FormErrors => {
    return {
      name: validateName(formState.name),
      email: validateEmail(formState.email),
    };
  };

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
      };
      setErrors((prev) => ({ ...prev, [field]: newErrors[field as keyof FormErrors] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true };
    setTouched(allTouched);
    const allErrors = validate();
    setErrors(allErrors);
    const hasErrors = Object.values(allErrors).some(Boolean);
    if (hasErrors) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          projectType: formState.projectType,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", projectType: "web-app", message: "" });
        setErrors({});
        setTouched({});
      } else {
        console.error("CTA submission failed");
        setStatus("idle");
      }
    } catch (err) {
      console.error("CTA submission error:", err);
      setStatus("idle");
    }
  };

  const projectTypes = [
    { value: "web-app", label: "Custom Web Application" },
    { value: "ai-bot", label: "AI Solutions & Chatbots" },
    { value: "restaurant", label: "Restaurant Platform" },
    { value: "automation", label: "Business Automation" },
    { value: "mobile-app", label: "Mobile Application" },
    { value: "other", label: "Other Project" },
  ];

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-bg-primary border px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none transition-all placeholder:text-text-muted ${
      touched[field] && errors[field]
        ? "border-error focus:border-error focus:ring-1 focus:ring-error/20"
        : "border-border-muted focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20"
    }`;

  return (
    <section id="contact" className="pt-16 pb-12 md:pt-20 md:pb-16 bg-bg-primary border-t border-border-muted relative overflow-hidden select-none">
      <div className="absolute inset-x-0 bottom-0 top-1/4 hero-glow-element pointer-events-none z-0" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="section-tag self-start">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-text-primary tracking-tight leading-[1.05]">
                Let's build something great together.
              </h2>
              <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed select-text font-normal max-w-sm">
                Have an idea for custom software or automated operations? Fill out our brief intake form, or email us directly at:
                <br />
                <a
                  href="mailto:bhanuworks0415@gmail.com"
                  className="font-mono text-accent-gold font-semibold mt-2.5 block hover:underline select-text"
                >
                  bhanuworks0415@gmail.com
                </a>
              </p>
            </div>

            <div className="w-full aspect-video rounded-3xl overflow-hidden border border-border-muted shadow-lg relative group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                alt="BhanuWorks software team collaborating"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent pointer-events-none" />
            </div>
            
            <div className="border-t border-border-muted/50 pt-8 flex flex-col gap-4">
              <span className="font-mono text-[9px] text-text-muted uppercase tracking-widest block font-bold">Project Standards</span>
              <ul className="space-y-3.5 text-xs sm:text-sm text-text-secondary">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" aria-hidden="true" />
                  <span>Response in less than 24 hours.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" aria-hidden="true" />
                  <span>Direct communication with your build lead.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" aria-hidden="true" />
                  <span>Predictable fixed-scope scoping roadmaps.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
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
                    Project details received
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm max-w-sm leading-relaxed select-text font-normal">
                    We will review your project details and get back to you with fixed scope estimates in less than 24 hours.
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

                  {/* Full Name */}
                  <div className="form-group flex flex-col gap-2.5">
                    <label htmlFor="cta-name" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">
                      Full Name <span className="text-error">*</span>
                    </label>
                    <input
                      id="cta-name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      placeholder="e.g. David Vance"
                      className={inputClass("name")}
                      disabled={status === "submitting"}
                      aria-describedby={errors.name ? "cta-name-error" : undefined}
                      aria-invalid={touched.name && !!errors.name}
                    />
                    {touched.name && errors.name && (
                      <motion.p
                        id="cta-name-error"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] text-error font-mono"
                        role="alert"
                      >
                        ✕ {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="form-group flex flex-col gap-2.5">
                    <label htmlFor="cta-email" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">
                      Email Address <span className="text-error">*</span>
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      placeholder="e.g. david@example.com"
                      className={inputClass("email")}
                      disabled={status === "submitting"}
                      aria-describedby={errors.email ? "cta-email-error" : undefined}
                      aria-invalid={touched.email && !!errors.email}
                    />
                    {touched.email && errors.email && (
                      <motion.p
                        id="cta-email-error"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] text-error font-mono"
                        role="alert"
                      >
                        ✕ {errors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* Project Type */}
                  <div className="form-group flex flex-col gap-2.5">
                    <label htmlFor="cta-project-type" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">
                      What are you looking to build?
                    </label>
                    <div className="relative">
                      <select
                        id="cta-project-type"
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
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[10px]">▼</div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group flex flex-col gap-2.5">
                    <label htmlFor="cta-message" className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">
                      Tell us about your project
                    </label>
                    <textarea
                      id="cta-message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Outline any specific operational outcomes, custom workflows, or integrations you need..."
                      className="w-full bg-bg-primary border border-border-muted px-4 py-3.5 rounded-xl text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/20 transition-all resize-none placeholder:text-text-muted"
                      disabled={status === "submitting"}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-shimmer-trigger w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-text-primary text-bg-primary font-bold hover:bg-accent-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-xs font-mono uppercase tracking-wider cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
                        Sending Request...
                      </span>
                    ) : (
                      <>
                        Send Request
                        <Send className="w-3.5 h-3.5 shrink-0" />
                      </>
                    )}
                  </button>

                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
