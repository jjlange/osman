"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FileCheck, TrendingUp, Car, Camera, Building2 } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: FileText,
    title: "Unfallgutachten",
    description:
      "Nach einem unverschuldeten Unfall ist ein unabhängiges Gutachten entscheidend für die Durchsetzung Ihrer Ansprüche. Wir dokumentieren alle Schäden professionell und neutral.",
  },
  {
    icon: FileCheck,
    title: "Kurzgutachten / Kostenvoranschlag",
    description:
      "Für kleinere Schäden, bei denen ein ausführliches Gutachten nicht notwendig ist. Schnell und kostengünstig zur Schadensdokumentation.",
  },
  {
    icon: TrendingUp,
    title: "Wertgutachten / Fahrzeugbewertung",
    description:
      "Professionelle Bewertung für Verkauf, Kauf, Leasingrückgabe oder das Finanzamt. Objektive Wertermittlung Ihres Fahrzeugs.",
  },
  {
    icon: Car,
    title: "Oldtimer-Gutachten",
    description:
      "Fachkundige Bewertung von Oldtimern inkl. Zustandsbewertung und Marktwertermittlung. Ideal für Versicherungen und Liebhaber.",
  },
  {
    icon: Camera,
    title: "Beweissicherungsgutachten",
    description:
      "Dokumentation von Vorschäden, verdeckten Mängeln oder bei Streitfällen. Wichtig zur Absicherung vor Kauf oder bei Rechtsstreitigkeiten.",
  },
  {
    icon: Building2,
    title: "Flotten- & Firmenkunden",
    description:
      "Maßgeschneiderte Angebote für Fuhrparks und gewerbliche Kunden. Schnelle Abwicklung und Sonderkonditionen für Unternehmen.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function ServicesSection() {
  return (
    <section id="leistungen" className="bg-muted/50 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Leistungen</h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Als unabhängiger KFZ-Sachverständiger biete ich Ihnen umfassende Gutachterleistungen – objektiv, transparent
            und immer in Ihrem Interesse, nicht im Interesse der Versicherungen.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full border-border bg-card transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground"
        >
          <strong>Hinweis:</strong> Alle Gutachten werden unabhängig von Versicherungen erstellt. Ich vertrete
          ausschließlich Ihre Interessen als Kunde.
        </motion.p>
      </div>
    </section>
  )
}
