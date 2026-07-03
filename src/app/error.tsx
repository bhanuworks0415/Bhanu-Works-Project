"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RotateCcw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Root Error Boundary Log]:", error);
  }, [error]);

  return (
    <>
      <Navbar />
      <main className="bg-bg-primary text-text-primary min-h-screen flex flex-col items-center justify-center text-center px-6 pt-36 pb-20 select-none" role="alert">
        <span className="section-tag mb-4 bg-error/10 border-error/20 text-error">System Error</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 leading-tight">Something went wrong</h1>
        <p className="text-text-secondary text-xs sm:text-sm md:text-base max-w-md leading-relaxed mb-10 select-text">
          An unexpected error occurred while processing this layout context.
        </p>
        <button
          onClick={() => reset()}
          className="btn-shimmer-trigger inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-text-primary text-bg-primary font-bold hover:bg-accent-primary hover:text-white transition-all duration-300 shadow-md text-xs font-mono uppercase tracking-wider cursor-pointer"
        >
          Try Again
          <RotateCcw className="w-4 h-4" aria-hidden="true" />
        </button>
      </main>
      <Footer />
    </>
  );
}
