import type { Metadata } from "next";
import QarpulClient from "@/components/QarpulClient";

export const metadata: Metadata = {
  title: "Qarpul Case Study | BhanuWorks",
  description: "Read how BhanuWorks designed and built Qarpul, a ride-sharing and coordinate route synchronization platform matching commuters to vehicles.",
  alternates: {
    canonical: "/work/qarpul",
  },
  openGraph: {
    title: "Qarpul Case Study | BhanuWorks",
    description: "Automating driver dispatches and route pairings during high-congestion hours to reduce passenger wait times.",
    url: "https://bhanuworks.com/work/qarpul",
  },
};

export default function QarpulPage() {
  return <QarpulClient />;
}
