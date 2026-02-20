"use client"

import { Phone, Car, FileSearch, Send, HeadphonesIcon } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: Phone,
    title: "Kontaktaufnahme",
    description:
      "Melden Sie sich per Telefon, WhatsApp oder Kontaktformular und schildern Sie kurz Ihren Schaden. Wir besprechen gemeinsam das weitere Vorgehen.",
  },
  {
    icon: Car,
    title: "Besichtigung des Fahrzeugs",
    description:
      "Wir vereinbaren einen Termin vor Ort, in Ihrer Werkstatt oder bei Ihnen zu Hause. Dabei werden Fotos gemacht, Messungen durchgeführt und alles dokumentiert.",
  },
  {
    icon: FileSearch,
    title: "Erstellung des Gutachtens",
    description:
      "Fachliche Analyse aller Schäden, Kalkulation der Reparaturkosten, Wertminderung, Nutzungsausfall und weiterer relevanter Positionen.",
  },
  {
    icon: Send,
    title: "Übergabe des Gutachtens",
    description:
      "Versand des Gutachtens per E-Mail und auf Wunsch auch per Post. Das Gutachten ist für Versicherung, Anwalt und Gericht verwendbar.",
  },
  {
    icon: HeadphonesIcon,
    title: "Unterstützung bei Rückfragen",
    description:
      "{ExpertName} steht für Rückfragen von Kund:innen, Anwälten oder Versicherungen auch nach der Gutachtenerstellung zur Verfügung.",
  },
]

export function ProcessSection() {
  return (
    <section id="ablauf" className="bg-muted/50 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">So läuft Ihr Gutachten ab</h2>
          <p className="mt-4 text-muted-foreground">
            In nur fünf einfachen Schritten zu Ihrem professionellen KFZ-Gutachten.
          </p>
        </motion.div>

        <div className="mt-12">
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-border lg:block" />

            <div className="space-y-8 lg:space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div
                    className={`flex flex-col items-center gap-6 lg:flex-row ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        className="rounded-lg border border-border bg-card p-6"
                      >
                        <h3 className="text-lg font-semibold text-card-foreground">{step.title}</h3>
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                      </motion.div>
                    </div>

                    {/* Step Number - with scale animation */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary text-xl font-bold text-primary-foreground shadow-lg lg:h-16 lg:w-16"
                    >
                      {index + 1}
                    </motion.div>

                    {/* Icon - hidden on mobile */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="hidden w-5/12 lg:flex lg:justify-center"
                    >
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ${
                          index % 2 === 0 ? "lg:ml-0" : "lg:mr-0"
                        }`}
                      >
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
