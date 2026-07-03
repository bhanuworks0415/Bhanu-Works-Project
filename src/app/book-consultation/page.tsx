import type { Metadata } from "next";
import BookConsultationClient from "@/components/BookConsultationClient";

export const metadata: Metadata = {
  title: "Book a Consultation | BhanuWorks",
  description: "Share your business parameters, project timelines, and custom budget options with our team to request an operational software scoping blueprint.",
  alternates: {
    canonical: "/book-consultation",
  },
  openGraph: {
    title: "Book a Consultation | BhanuWorks",
    description: "Start a visual onboarding session to build custom web applications, digital menus, or automations.",
    url: "https://bhanuworks.com/book-consultation",
  },
};

export default function BookConsultationPage() {
  return <BookConsultationClient />;
}
