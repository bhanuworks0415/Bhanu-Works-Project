"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-bg-primary text-text-primary min-h-screen flex flex-col items-center justify-center text-center px-6 pt-36 pb-20 select-none" role="main">
        <span className="section-tag mb-4">404 Error</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 leading-tight">Page Not Found</h1>
        <p className="text-text-secondary text-xs sm:text-sm md:text-base max-w-md leading-relaxed mb-10 select-text">
          The page you are looking for does not exist or has been relocated to another route.
        </p>
        <a
          href="/"
          className="btn-shimmer-trigger inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-text-primary text-bg-primary font-bold hover:bg-accent-primary hover:text-white transition-all duration-300 shadow-md text-xs font-mono uppercase tracking-wider"
        >
          Return Home
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </main>
      <Footer />
    </>
  );
}
