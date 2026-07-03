import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact the Studio | BhanuWorks",
  description: "Get in touch with BhanuWorks to scoping digital menus, automated custom web platforms, or brand websites with fixed timelines.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact the Studio | BhanuWorks",
    description: "Submit your project requirements and start scoping digital solutions designed around your business.",
    url: "https://bhanuworks.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
