"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle, Loader2, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { siteConfig, getFullAddress, getPhoneLink } from "@/lib/config"
import { databases } from "@/lib/appwrite"
import { ID } from "appwrite"

type SubmissionStatus = "idle" | "loading" | "success" | "error"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  })
  const [agreed, setAgreed] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!agreed) return
    setSubmissionStatus("loading")

    try {
      await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_CONTACT!,
        ID.unique(),
        formData
      )
      setSubmissionStatus("success")
      setFormData({ name: "", phone: "", email: "", location: "", message: "" })
    } catch (error) {
      console.error("Failed to submit contact form:", error)
      setSubmissionStatus("error")
    }
  }

  return (
    <section id="kontakt" className="bg-muted/50 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Kontakt & Terminvereinbarung
          </h2>
          <p className="mt-4 text-muted-foreground">
            Schildern Sie uns Ihren Schaden – wir melden uns schnellstmöglich bei Ihnen.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact Info - slide in from left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Kontaktdaten</CardTitle>
                <CardDescription>Erreichen Sie uns auf dem für Sie bequemsten Weg.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: Phone, label: "Telefon", value: siteConfig.phone },
                  { icon: Mail, label: "E-Mail", value: siteConfig.email },
                  { icon: MapPin, label: "Adresse", value: getFullAddress() },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-card-foreground">{item.value}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Existing code for opening hours */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Öffnungszeiten</p>
                    <p className="font-medium text-card-foreground">Mo – Fr: 9:00 – 18:00 Uhr</p>
                    <p className="text-sm text-muted-foreground">Termine nach Vereinbarung auch außerhalb</p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={getPhoneLink()}>
                  <Phone className="mr-2 h-4 w-4" />
                  Jetzt anrufen
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-1 bg-transparent">
                <Link href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp-Chat starten
                </Link>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-center text-sm text-muted-foreground"
            >
              Schnelle Terminvereinbarung und kostenloser Rückrufservice
            </motion.p>
          </motion.div>

          {/* Contact Form - slide in from right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Nachricht senden</CardTitle>
                <CardDescription>
                  Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submissionStatus === "success" ? (
                  <div className="flex flex-col items-center justify-center rounded-lg bg-green-50 p-8 text-center">
                    <CheckCircle className="mb-4 h-12 w-12 text-green-500" />
                    <h3 className="text-lg font-semibold text-green-800">Vielen Dank!</h3>
                    <p className="mt-2 text-sm text-green-700">
                      Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.
                    </p>
                    <Button
                      onClick={() => setSubmissionStatus("idle")}
                      className="mt-6"
                      variant="outline"
                    >
                      Weitere Nachricht senden
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" placeholder="Ihr vollständiger Name" required value={formData.name} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefonnummer *</Label>
                        <Input id="phone" type="tel" placeholder="Ihre Telefonnummer" required value={formData.phone} onChange={handleInputChange} />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input id="email" type="email" placeholder="ihre@email.de" required value={formData.email} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Postleitzahl / Ort *</Label>
                        <Input id="location" placeholder="z.B. 80331 München" required value={formData.location} onChange={handleInputChange} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Nachricht / Schadenbeschreibung *</Label>
                      <Textarea
                        id="message"
                        placeholder="Beschreiben Sie kurz Ihren Schaden oder Ihr Anliegen..."
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>

                    <p className="text-sm text-muted-foreground">
                      Optional: Sie können uns auch Fotos des Schadens per E-Mail oder WhatsApp zusenden.
                    </p>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={agreed}
                        onCheckedChange={(checked) => setAgreed(checked as boolean)}
                      />
                      <Label htmlFor="privacy" className="text-sm leading-relaxed text-muted-foreground">
                        Ich habe die{" "}
                        <Link href="/datenschutz" className="text-primary underline hover:no-underline">
                          Datenschutzerklärung
                        </Link>{" "}
                        gelesen und akzeptiere sie. *
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={!agreed || submissionStatus === "loading"}
                    >
                      {submissionStatus === "loading" ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        "Nachricht senden"
                      )}
                    </Button>

                    {submissionStatus === "error" && (
                      <div className="mt-4 flex items-center rounded-md bg-red-50 p-3 text-sm text-red-700">
                        <XCircle className="mr-2 h-5 w-5" />
                        <p>
                          Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.
                        </p>
                      </div>
                    )}
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
