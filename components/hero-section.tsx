import React from "react"
import Link from "next/link"
import Image from "next/image" // Import Image component
import { Button } from "@/components/ui/button"
import { Clock, Shield, CalendarCheck, FileText, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/config"

const trustElements = [
  { icon: Clock, text: "24/7 Anfrage möglich" },
  { icon: Shield, text: "Unabhängig von Versicherungen" },
  { icon: CalendarCheck, text: "Schnelle Terminvergabe" },
]

export function HeroSection() {
  return (
    <section id="startseite" className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-muted blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="lg:text-left text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Unabhängige KFZ-Gutachten in {siteConfig.city} – schnell, zuverlässig,
              bundesweit anerkannt
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0"
            >
              {siteConfig.expertName} unterstützt Sie nach einem Unfall mit objektiven Gutachten, damit Sie Ihren vollen
              Schadensersatz erhalten.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
              >
                <Link href="#kontakt" className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Jetzt Gutachten anfragen
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <Link href="#kontakt" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Rückruf vereinbaren
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:justify-start"
            >
              {trustElements.map((element, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <element.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{element.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <Image
              src="/car.jpg"
              width={700}
              height={700}
              alt="KFZ Haftpflichtschaden"
              className="rounded-lg object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
