import type { Metadata } from "next";
import TapServeClient from "@/components/TapServeClient";

export const metadata: Metadata = {
  title: "TapServe Case Study | BhanuWorks",
  description: "Read how BhanuWorks designed and built TapServe, a contactless table ordering, kitchen queue display, and digital checkout platform.",
  alternates: {
    canonical: "/work/tapserve",
  },
  openGraph: {
    title: "TapServe Case Study | BhanuWorks",
    description: "Automating order dispatches and split payments directly from the dining table to reduce service delays.",
    url: "https://bhanuworks.com/work/tapserve",
  },
};

export default function TapServePage() {
  return <TapServeClient />;
}
