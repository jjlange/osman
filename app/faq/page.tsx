import type { Metadata } from "next"
import { FaqSection } from "@/components/faq-section"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: `Häufige Fragen | ${siteConfig.companyName}`,
  description:
    "Antworten auf häufig gestellte Fragen rund um KFZ-Gutachten, Unfallschäden und Versicherungsabwicklung.",
}

export default function FaqPage() {
  return <FaqSection />
}
