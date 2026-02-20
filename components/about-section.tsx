"use client"

import { Award, GraduationCap, Briefcase, Users } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/config"

const qualifications = [
  {
    icon: GraduationCap,
    title: "Ausbildung & Studium",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: Briefcase,
    title: "Branchen-Erfahrung",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
  },
  {
    icon: Award,
    title: "Zertifizierungen",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed perspiciatis.",
  },
  {
    icon: Users,
    title: "Spezialisierung",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function AboutSection() {
  return (
    <section id="ueber-mich" className="bg-background py-12 sm:py-16 lg:py-20 xl:py-28">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">Über mich</h2>
            <div className="mt-3 sm:mt-4">
              <p className="text-lg font-semibold text-foreground sm:text-xl">{siteConfig.expertName}</p>
              <p className="text-sm text-muted-foreground sm:text-base">Unabhängiger KFZ-Sachverständiger für Schäden und Bewertungen</p>
            </div>

            <div className="mt-4 space-y-3 text-sm text-muted-foreground sm:mt-6 sm:space-y-4 sm:text-base">
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p className="leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-3 sm:grid-cols-2 sm:gap-4"
          >
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="rounded-lg border border-border bg-card p-4 sm:p-6"
              >
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 sm:mb-3 sm:h-10 sm:w-10">
                  <qual.icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-sm font-semibold text-card-foreground sm:text-base">{qual.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">{qual.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
