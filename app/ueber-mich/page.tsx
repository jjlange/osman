import type { Metadata } from "next"
import { AboutSection } from "@/components/about-section"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: `Über mich | ${siteConfig.companyName}`,
  description: `Lernen Sie ${siteConfig.expertName} kennen – Ihr unabhängiger KFZ-Sachverständiger in ${siteConfig.city}.`,
}

export default function UeberMichPage() {
  return <AboutSection />
}
