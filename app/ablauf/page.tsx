import type { Metadata } from "next"
import { ProcessSection } from "@/components/process-section"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: `Ablauf | ${siteConfig.companyName}`,
  description: "So einfach funktioniert die Gutachtenerstellung – von der Kontaktaufnahme bis zur Auszahlung.",
}

export default function AblaufPage() {
  return <ProcessSection />
}
