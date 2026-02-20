import type { Metadata } from "next"
import { ServicesSection } from "@/components/services-section"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: `Leistungen | ${siteConfig.companyName}`,
  description:
    "Unfallgutachten, Wertgutachten, Kurzgutachten und Oldtimer-Bewertungen. Professionelle KFZ-Sachverständigen-Leistungen.",
}

export default function LeistungenPage() {
  return <ServicesSection />
}
