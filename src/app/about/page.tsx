import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About the Studio | BhanuWorks",
  description: "BhanuWorks is an independent software studio founded by Bhanu Prakash, designing and building digital solutions that help businesses grow.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About the Studio | BhanuWorks",
    description: "BhanuWorks is an independent software studio helping businesses transform ideas into modern digital products.",
    url: "https://bhanuworks.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
