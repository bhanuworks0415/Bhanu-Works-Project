import type { Metadata } from "next";
import HvrMediaClient from "@/components/HvrMediaClient";

export const metadata: Metadata = {
  title: "HVR Media House Case Study | BhanuWorks",
  description: "Read how BhanuWorks designed and built the HVR Media House creative asset review portal and client feedback dashboard.",
  alternates: {
    canonical: "/work/hvr-media-house",
  },
  openGraph: {
    title: "HVR Media House Case Study | BhanuWorks",
    description: "High-bandwidth video asset reviewer and client proofing system designed for creative agencies.",
    url: "https://bhanuworks.com/work/hvr-media-house",
  },
};

export default function HvrMediaHousePage() {
  return <HvrMediaClient />;
}
