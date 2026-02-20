import type { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: `Kontakt | ${siteConfig.companyName}`,
  description: `Kontaktieren Sie ${siteConfig.expertName} für Ihr KFZ-Gutachten. Schnelle Terminvergabe und kostenlose Erstberatung.`,
}

export default function KontaktPage() {
  return <ContactSection />
}
