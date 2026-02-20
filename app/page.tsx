"use client"

import { HeroSection } from "@/components/hero-section"
import { ReferencesSection } from "@/components/references-section"
import { ServiceAreaSection } from "@/components/service-area-section"
import { ServicesSection } from "@/components/services-section"
import { MapSection } from "@/components/map-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ServiceAreaSection />
      <ReferencesSection />
      <MapSection />
    </>
  )
}
