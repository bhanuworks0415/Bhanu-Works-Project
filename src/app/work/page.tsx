import type { Metadata } from "next";
import WorkClient from "@/components/WorkClient";

export const metadata: Metadata = {
  title: "Selected Work | BhanuWorks",
  description: "Explore the BhanuWorks portfolio, featuring restaurant technologies, ride-sharing platforms, and creative agency review software designed to speed up operations.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Selected Work | BhanuWorks",
    description: "Explore our portfolio of tailored web applications, restaurant menus, and automations.",
    url: "https://bhanuworks.com/work",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
