"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "Wer bezahlt das Gutachten nach einem unverschuldeten Unfall?",
    answer:
      "Bei einem unverschuldeten Unfall trägt die Haftpflichtversicherung des Unfallverursachers die Kosten für das Gutachten. Sie müssen nicht in Vorleistung gehen – die Abrechnung erfolgt direkt mit der gegnerischen Versicherung.",
  },
  {
    question: "Soll ich zuerst zur Werkstatt oder zuerst zum Gutachter gehen?",
    answer:
      "Idealerweise kontaktieren Sie zuerst den Gutachter, bevor Reparaturen durchgeführt werden. So kann der Schaden vollständig dokumentiert werden. In dringenden Fällen kann das Fahrzeug aber auch in der Werkstatt besichtigt werden.",
  },
  {
    question: "Ab welcher Schadenhöhe lohnt sich ein unabhängiges Gutachten?",
    answer:
      "In der Regel lohnt sich ein unabhängiges Gutachten ab einer Schadenhöhe von etwa 750-1.000 €. Bei kleineren Schäden kann ein Kurzgutachten oder Kostenvoranschlag ausreichend sein. Ich berate Sie gerne, welche Option für Ihren Fall sinnvoll ist.",
  },
  {
    question: "Wie schnell erhalte ich mein Gutachten?",
    answer:
      "Nach der Besichtigung erhalten Sie das Gutachten in der Regel innerhalb von 2-3 Werktagen. In dringenden Fällen ist auch eine Express-Bearbeitung möglich – sprechen Sie mich einfach an.",
  },
  {
    question: "Sind Sie wirklich unabhängig von Versicherungen?",
    answer:
      "Ja, absolut. Ich arbeite ausschließlich im Auftrag von Privatpersonen, Anwälten und Unternehmen – niemals im Auftrag von Versicherungen. Meine Gutachten sind objektiv und vertreten ausschließlich Ihre Interessen.",
  },
  {
    question: "Erstellen Sie auch Gutachten für Leasingrückgaben?",
    answer:
      "Ja, ich erstelle Zustandsgutachten für Leasingrückgaben. Diese dokumentieren den tatsächlichen Zustand des Fahrzeugs und helfen Ihnen, ungerechtfertigte Nachforderungen zu vermeiden.",
  },
  {
    question: "Kann ich Sie auch außerhalb von Hamburg beauftragen?",
    answer:
      "Selbstverständlich. Ich bin in Hamburg und der gesamten Umgebung tätig. Die genauen Regionen finden Sie im Abschnitt 'Einsatzgebiet'. Für größere Entfernungen sprechen Sie mich bitte direkt an.",
  },
  {
    question: "Wie läuft die Terminvereinbarung ab?",
    answer:
      "Kontaktieren Sie mich telefonisch, per E-Mail, WhatsApp oder über das Kontaktformular. In der Regel kann ich innerhalb von 24-48 Stunden einen Besichtigungstermin anbieten. Sie können zwischen einem Termin vor Ort, in Ihrer Werkstatt oder bei Ihnen zu Hause wählen.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export function FaqSection() {
  return (
    <section id="faq" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Häufige Fragen (FAQ)</h2>
          <p className="mt-4 text-muted-foreground">
            Die wichtigsten Fragen rund um KFZ-Gutachten – verständlich erklärt.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-12 max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
