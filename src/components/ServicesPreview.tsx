"use client";

import { motion } from "framer-motion";
import { Laptop, Cpu, MessageSquare, RefreshCw, Smartphone, LayoutGrid } from "lucide-react";

export default function ServicesPreview() {
  const services = [
    {
      title: "Business Websites",
      icon: Laptop,
      description: "Fast, high-converting marketing hubs built to capture customer leads and build trust.",
      value: "Value: Convert & Grow",
      illustration: (
        <div className="w-full h-32 mt-4 rounded-xl overflow-hidden relative border border-border-muted shadow-sm group">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
            alt="Business marketing website mockup"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-2 left-2 right-2 p-2 rounded-lg bg-bg-primary/90 backdrop-blur border border-border-muted/50 flex justify-between items-center text-[9px] font-mono">
            <span className="text-text-primary">Landing Page</span>
            <span className="text-accent-gold font-bold">1.2s Load</span>
          </div>
        </div>
      ),
    },
    {
      title: "Web Applications",
      icon: LayoutGrid,
      description: "Custom software dashboards built to automate back-offices, operations, and databases.",
      value: "Value: Efficiency at Scale",
      illustration: (
        <div className="w-full h-32 mt-4 rounded-xl overflow-hidden relative border border-border-muted shadow-sm group">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
            alt="Custom software dashboard"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/95 via-bg-primary/20 to-transparent flex items-end p-3">
            <div className="w-full flex justify-between font-mono text-[8px] text-text-muted">
              <span>SQL Queries Synced</span>
              <span className="text-success font-bold">200 OK</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Restaurant Platforms",
      icon: MessageSquare,
      description: "Smart table ordering and kitchen ticketing workflows to speed up client ordering.",
      value: "Value: Lower Wait Times",
      illustration: (
        <div className="w-full h-32 mt-4 rounded-xl overflow-hidden relative border border-border-muted shadow-sm group">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
            alt="Cafe contactless tabletop menu ordering"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 left-2 p-1.5 rounded bg-success text-white font-mono text-[8px] font-bold">
            Table 4 Order Sent
          </div>
        </div>
      ),
    },
    {
      title: "AI Chatbots & Agents",
      icon: Cpu,
      description: "AI customer service integration answering inquiries and support tickets 24/7.",
      value: "Value: Active Engagement",
      illustration: (
        <div className="w-full h-32 mt-4 rounded-xl overflow-hidden relative border border-border-muted shadow-sm group">
          <img
            src="https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=600&q=80"
            alt="AI Smart Assistant"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/95 via-bg-primary/20 to-transparent flex items-end p-3">
            <div className="w-full flex justify-between font-mono text-[8px] text-text-muted">
              <span>LLM Sync Active</span>
              <span className="text-accent-gold font-bold">Latency: 24ms</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Business Automation",
      icon: RefreshCw,
      description: "Background system integrations syncing spreadsheets, orders, and automated emails.",
      value: "Value: Zero Manual Entry",
      illustration: (
        <div className="w-full h-32 mt-4 rounded-xl overflow-hidden relative border border-border-muted shadow-sm group">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
            alt="Business Workflow Automation"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/95 via-bg-primary/20 to-transparent flex items-end p-3">
            <div className="w-full flex justify-between font-mono text-[8px] text-text-muted">
              <span>Stripe Checkout</span>
              <span className="text-success font-bold">Active Sync</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Mobile Applications",
      icon: Smartphone,
      description: "Polished iOS and Android mobile software designed for modern checkouts.",
      value: "Value: Retain Customers",
      illustration: (
        <div className="w-full h-32 mt-4 rounded-xl overflow-hidden relative border border-border-muted shadow-sm group">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
            alt="Mobile application workspace"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-2 left-2 right-2 p-2 rounded-lg bg-text-primary text-bg-primary font-mono text-[8px] text-center">
            iOS & Android Sync
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="pt-16 pb-16 md:pt-20 md:pb-24 bg-bg-primary relative overflow-hidden select-none" aria-labelledby="services-preview-title">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-border-muted/50" />

      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="section-header center mb-32">
          <span className="section-tag">Capabilities</span>
          <h2 id="services-preview-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-text-primary mb-6 leading-tight">
            Software built to grow operations
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed select-text font-normal">
            We build custom, scalable solutions designed to solve your bottlenecks, reduce manual labor, and deliver better user experiences.
          </p>
        </div>

        {/* Services Grid (Asymmetric Editorial Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isWide = i === 1 || i === 4;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.05 }}
                className={`card-glow-effect rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 ${
                  isWide ? "lg:col-span-1 border-accent-primary/20" : ""
                }`}
              >
                <div>
                  {/* Icon Block */}
                  <div className="w-10 h-10 rounded-xl bg-accent-primary/5 border border-accent-primary/10 flex items-center justify-center mb-8">
                    <Icon className="w-5 h-5 text-accent-primary" aria-hidden="true" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-light text-xl md:text-2xl text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-6 select-text font-normal">
                    {service.description}
                  </p>

                  {/* High-Fidelity Mini Illustration / Real Photo */}
                  {service.illustration}
                </div>

                {/* Outcome Info */}
                <div className="border-t border-border-muted/40 pt-5 mt-8">
                  <span className="font-mono text-[9px] text-accent-gold font-bold uppercase tracking-wider block">
                    {service.value}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
