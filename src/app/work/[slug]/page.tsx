"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Clock, TrendingUp, ShoppingBag, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const caseStudiesData: Record<string, any> = {
  qarpul: {
    title: "Qarpul",
    client: "Qarpul Mobility Solutions",
    industry: "Logistics & Smart Mobility",
    tagline: "Automating driver dispatches and route pairings during high-congestion hours.",
    overview: "Qarpul matches drivers with commuters during high-congestion hours. Their manual operations could not scale as request volumes increased, leading to scheduling bottlenecks.",
    challenge: "Dispatch routing processes could not resolve passenger pickups fast enough during peak hours, causing driver delays and missed booking bookings.",
    solution: "We engineered a dashboard that maps route patterns and pairs drivers automatically based on vehicle availability and passenger coordinates.",
    features: [
      "Automated passenger matching",
      "Dynamic driver queue organizer",
      "Real-time dispatch telemetry logs",
      "Automated peak-pricing limits",
    ],
    gallery: [
      { title: "Real-Time Mapping", detail: "Dynamic GPS alignment paths matching drivers to nearest pick-up points instantly." },
      { title: "Capacity Optimizer", detail: "Optimized ride dispatches to achieve maximum seats utilization rates." },
    ],
    process: [
      { step: "01", title: "Operational Mapping", desc: "Auditing commute statistics, driver shifts schedules, and route congestion areas." },
      { step: "02", title: "Queue Modeling", desc: "Constructing scheduling flow charts to automatically match commuters." },
      { step: "03", title: "Automated Deployment", desc: "Activating the dashboard console with live GPS tracking features." },
    ],
    outcome: "Reduced driver-commuter matching delay to real-time, boosting monthly bookings to 40,000 requests with zero manual dispatching errors.",
    accent: "from-accent-primary/5 to-accent-primary/10 border-accent-primary/10",
    accentBg: "bg-accent-primary/5 border-accent-primary/10 text-accent-primary",
    stats: [
      { label: "Dispatch Match Speed", value: "Real-time" },
      { label: "Monthly Bookings", value: "40k/mo" },
      { label: "Booking Growth", value: "+142%" },
    ],
    visualMockup: (
      <div className="w-full h-80 md:h-[450px] rounded-3xl border border-accent-primary/15 bg-bg-secondary/40 relative overflow-hidden flex flex-col justify-between p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-border-muted/50 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent-primary" />
            <span className="font-mono text-xs text-text-primary font-bold">Qarpul Active Dispatches</span>
          </div>
          <span className="font-mono text-[9px] text-accent-primary px-2.5 py-0.5 rounded border border-accent-primary/20 bg-accent-primary/5">Active Sync</span>
        </div>
        <div className="flex-1 relative flex items-center justify-center my-4 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(142,116,83,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(142,116,83,0.015)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
          <svg className="w-4/5 h-2/3 text-accent-primary/20" viewBox="0 0 100 50">
            <path
              d="M10,40 Q30,10 60,35 T90,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              d="M10,40 Q30,10 60,35 T90,10"
              fill="none"
              stroke="#5F7458"
              strokeWidth="2"
            />
          </svg>
          <div className="absolute top-1/4 left-1/3 w-3.5 h-3.5 rounded-full bg-accent-primary animate-ping" />
          <div className="absolute bottom-1/3 right-1/4 w-3.5 h-3.5 rounded-full bg-accent-hover animate-ping" />
        </div>
        <div className="grid grid-cols-3 gap-2 border-t border-border-muted/50 pt-4 font-mono text-[10px]">
          <div>
            <span className="text-text-muted block">Incoming</span>
            <span className="text-text-primary font-bold">142 Requests</span>
          </div>
          <div>
            <span className="text-text-muted block">Matched</span>
            <span className="text-text-primary font-bold">98.4% Rate</span>
          </div>
          <div>
            <span className="text-text-muted block">Avg Delay</span>
            <span className="text-text-primary font-bold">0.0s</span>
          </div>
        </div>
      </div>
    ),
  },
  tapserve: {
    title: "TapServe",
    client: "TapServe Hospitality Group",
    industry: "Hospitality & Restaurant Technology",
    tagline: "Speeding up service and automating kitchen workflows with smart ordering platforms.",
    overview: "TapServe manages checkout flows for busy cafés. Legacy POS terminals could not sync orders fast enough, causing preparation delays.",
    challenge: "Orders placed by tables were delayed on their path to the kitchen, leading to cooking errors and slow customer turnarounds.",
    solution: "We deployed a menu and ticketing console linking customer selections directly to chef kitchen screens in real-time.",
    features: [
      "Table order syncing",
      "Direct kitchen ticket queues",
      "POS cash register syncs",
      "Instant feedback notices",
    ],
    gallery: [
      { title: "Chef Dashboard", detail: "Ticketing displays ranking order requests by submission timestamps automatically." },
      { title: "Payment Consolidation", detail: "Automated billing syncing order transactions to local spreadsheets." },
    ],
    process: [
      { step: "01", title: "Workflow Audit", desc: "Studying restaurant floor traffic layouts, peak table demands, and kitchen prep queues." },
      { step: "02", title: "Ticketing Design", desc: "Constructing the visual order-card layout displaying ticket ages and status alerts." },
      { step: "03", title: "Kitchen Deployment", desc: "Installing ruggedized screen consoles in food prep areas, connected in real-time." },
    ],
    outcome: "Reduced communication ticket delays by 34%, eliminating meal prep errors and improving average table checkouts speed.",
    accent: "from-accent-hover/5 to-accent-hover/10 border-accent-hover/10",
    accentBg: "bg-accent-hover/5 border-accent-hover/10 text-accent-hover",
    stats: [
      { label: "Kitchen Ticket Delays", value: "-34%" },
      { label: "Avg Service Speed", value: "Instant" },
      { label: "Table Turnaround", value: "+28%" },
    ],
    visualMockup: (
      <div className="w-full h-80 md:h-[450px] rounded-3xl border border-accent-hover/15 bg-bg-secondary/40 relative overflow-hidden flex flex-col justify-between p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-border-muted/50 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent-hover" />
            <span className="font-mono text-xs text-text-primary font-bold">TapServe Menu Console</span>
          </div>
          <span className="font-mono text-[9px] text-accent-hover px-2.5 py-0.5 rounded border border-accent-hover/20 bg-accent-hover/5">Active Queue</span>
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
        <div className="grid grid-cols-2 gap-2 border-t border-border-muted/50 pt-4 font-mono text-[10px]">
          <div>
            <span className="text-text-muted block">Hourly Volume</span>
            <span className="text-text-primary font-bold">180 Tickets</span>
          </div>
          <div>
            <span className="text-text-muted block">Avg Wait</span>
            <span className="text-text-primary font-bold">3.2 Minutes</span>
          </div>
        </div>
      </div>
    ),
  },
  "hvr-media-house": {
    title: "HVR Media House",
    client: "HVR Creative Agency",
    industry: "Creative Media & Assets Distribution",
    tagline: "Streamlining client video reviews and high-volume media asset deliveries.",
    overview: "HVR Media distributes high-resolution draft files to enterprise partners. Relying on generic hosting links led to feedback delays and files administration issues.",
    challenge: "Clients had to download heavy assets to review drafts, leading to upload congestion and fragmented email review chains.",
    solution: "We deployed a portal where clients review, comment, and sign off on high-resolution video drafts directly inside their browser.",
    features: [
      "In-browser video rendering",
      "Timestamped comment threads",
      "Secure custom file locks",
      "Instant drag-and-drop uploads",
    ],
    gallery: [
      { title: "Review Board", detail: "Timeline player letting clients insert notes at specific video frames." },
      { title: "Secure Library", detail: "Encrypted vaults ensuring media assets remain strictly private." },
    ],
    process: [
      { step: "01", title: "Storage Review", desc: "Auditing agency media volumes, project review cycles, and team structures." },
      { step: "02", title: "Console Layout", desc: "Creating the timeline player UI and timestamp comment overlays." },
      { step: "03", title: "Portal Launch", desc: "Publishing the secure folder system with granular client password rules." },
    ],
    outcome: "Cut draft review cycles by 50%, saving upload bandwidth and organizing files automatically inside high-security project folders.",
    accent: "from-text-secondary to-accent-primary",
    accentBg: "bg-text-secondary/5 border-text-secondary/10 text-text-secondary",
    stats: [
      { label: "Feedback Cycle Speed", value: "-50%" },
      { label: "Asset Load Speed", value: "Instant" },
      { label: "Review Completion", value: "99.8%" },
    ],
    visualMockup: (
      <div className="w-full h-80 md:h-[450px] rounded-3xl border border-text-secondary/15 bg-bg-secondary/40 relative overflow-hidden flex flex-col justify-between p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-border-muted/50 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-text-secondary" />
            <span className="font-mono text-xs text-text-primary font-bold">HVR Active Library</span>
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
        <div className="grid grid-cols-2 gap-2 border-t border-border-muted/50 pt-4 font-mono text-[10px]">
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
    ),
  },
};

export default function CaseStudySlugPage({ params }: PageProps) {
  const { slug } = use(params);
  const data = caseStudiesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-bg-primary text-text-primary min-h-screen pt-16 md:pt-20 select-none">
        
        {/* Large Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden border-b border-border-muted/40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(95,116,88,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(95,116,88,0.012)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
          <div className="container max-w-5xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Title block */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <span className={`px-2.5 py-1 rounded-md text-[9px] font-mono font-bold tracking-wider uppercase border inline-block self-start ${data.accentBg}`}>
                  {data.industry}
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light tracking-tight text-text-primary leading-[1.05]">
                  {data.title}
                </h1>
                <p className="text-text-primary font-semibold text-sm sm:text-base leading-relaxed italic select-text">
                  "{data.tagline}"
                </p>
                <div className="flex flex-wrap gap-6 border-t border-border-muted/50 pt-6 mt-2">
                  {data.stats.map((stat: any, idx: number) => (
                    <div key={idx} className="flex flex-col gap-0.5">
                      <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider">{stat.label}</span>
                      <span className="font-display font-bold text-2xl md:text-3xl text-text-primary">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Hero Image (Visual Mockup) */}
              <div className="lg:col-span-6">
                {data.visualMockup}
              </div>

            </div>
          </div>
        </section>

        {/* Project Overview & Challenge / Solution Grid */}
        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
              
              {/* Project Overview */}
              <div className="md:col-span-4 flex flex-col gap-4 border-r border-border-muted/30 pr-6">
                <h4 className="font-mono text-[10px] text-text-muted uppercase tracking-widest font-bold">Overview</h4>
                <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed select-text font-normal">
                  {data.overview}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="md:col-span-8 flex flex-col gap-10">
                <div className="flex flex-col gap-3.5">
                  <h4 className="font-mono text-[10px] text-text-muted uppercase tracking-widest font-bold">Business Challenge</h4>
                  <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed select-text font-normal">
                    {data.challenge}
                  </p>
                </div>
                <div className="flex flex-col gap-3.5">
                  <h4 className="font-mono text-[10px] text-accent-primary uppercase tracking-widest font-bold">Our Solution</h4>
                  <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed select-text font-normal">
                    {data.solution}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Image Gallery Block */}
        <section className="py-16 md:py-24 border-t border-border-muted/35 bg-bg-secondary/15">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="section-header mb-16">
              <span className="section-tag">Interactive Features</span>
              <h3 className="text-2xl md:text-3xl font-display font-light text-text-primary">System Screens</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.gallery.map((item: any, idx: number) => (
                <div key={idx} className="p-8 rounded-3xl border border-border-muted bg-bg-primary shadow flex flex-col justify-between hover:border-border-active transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-accent-primary" />
                    <span className="font-mono text-xs text-text-primary font-bold">{item.title}</span>
                  </div>
                  <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed select-text font-normal">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process Timeline */}
        <section className="py-16 md:py-24 border-t border-border-muted/35">
          <div className="container max-w-4xl mx-auto px-6">
            <div className="section-header center mb-20">
              <span className="section-tag">Methodology</span>
              <h3 className="text-3xl md:text-4xl font-display font-light text-text-primary">How we delivered this project</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.process.map((p: any, idx: number) => (
                <div key={idx} className="p-8 rounded-3xl border border-border-muted bg-bg-secondary/20 flex flex-col gap-4 hover:border-border-active transition-all">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-accent-primary font-bold">{p.step}</span>
                  </div>
                  <h4 className="font-display font-light text-lg text-text-primary">{p.title}</h4>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed select-text font-normal">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Outcome Block */}
        <section className="py-16 md:py-24 border-t border-border-muted/35 bg-gradient-to-b from-bg-primary to-bg-secondary/30 relative">
          <div className="container max-w-4xl mx-auto px-6 text-center">
            <span className="section-tag mb-4">Metrics</span>
            <h3 className="text-4xl md:text-5xl font-display font-light text-text-primary mb-6">Measuring the outcome</h3>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed select-text font-normal">
              {data.outcome}
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 border-t border-border-muted/40 relative text-center">
          <div className="absolute inset-0 hero-glow-element pointer-events-none" />
          <div className="container max-w-3xl mx-auto px-6 relative z-10">
            <span className="section-tag mb-4">Start Scoping</span>
            <h2 className="text-4xl md:text-5xl font-display font-light text-text-primary mb-6">
              Ready to automate your workflows?
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-10 select-text font-normal">
              Schedule a scoping timeline session with our build lead. We map out fixed project deliverables with transparent pricing.
            </p>
            <a
              href="/#contact"
              className="btn-shimmer-trigger inline-flex items-center gap-2 px-8 py-4.5 rounded-xl bg-text-primary text-bg-primary font-bold hover:bg-accent-primary hover:text-white transition-all duration-300 shadow-md text-xs font-mono uppercase tracking-wider cursor-pointer"
            >
              Book Scoping Session
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
