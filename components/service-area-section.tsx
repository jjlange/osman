"use client"

import { MapPin, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/config"

const usps = [
  {
    title: "Unabhängige Gutachten",
    description: "Wir arbeiten ausschließlich in Ihrem Interesse, nicht im Interesse der Versicherungen.",
  },
  {
    title: "Langjährige Erfahrung",
    description: "Profitieren Sie von unserer umfassenden Expertise in der KFZ-Begutachtung.",
  },
  {
    title: "Schnelle Terminvergabe",
    description: "In der Regel können wir innerhalb von 24-48 Stunden einen Termin anbieten.",
  },
  {
    title: "Transparente Kommunikation",
    description: "Sie werden in jedem Schritt des Prozesses umfassend informiert.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
}

export function ServiceAreaSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Service Area - slide in from left */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">Einsatzgebiet</h2>
            </div>
            <p className="mt-4 text-muted-foreground">
              Wir sind für Sie in {siteConfig.city} und der gesamten Umgebung im Einsatz. Termine vor Ort, in Ihrer
              Werkstatt oder bei Ihnen zu Hause sind kein Problem.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-wrap gap-3"
            >
              {siteConfig.regions.map((region, index) => (
                <motion.span
                  key={index}
                  variants={tagVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground"
                >
                  {region}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* USPs - slide in from right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">Warum wir?</h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mt-6 space-y-4"
            >
              {usps.map((usp, index) => (
                <motion.div key={index} variants={itemVariants} className="flex gap-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">{usp.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{usp.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
