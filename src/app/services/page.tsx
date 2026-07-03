import type { Metadata } from "next";
import ServicesClient from "@/components/ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | BhanuWorks",
  description: "From custom web applications to digital menus and AI-powered automation, explore how we build outcome-focused software that speeds up operations.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | BhanuWorks",
    description: "Outcome-driven software engineering built specifically for restaurants, startups, and growing enterprises.",
    url: "https://bhanuworks.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
