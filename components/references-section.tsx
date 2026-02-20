
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Loader2, AlertTriangle } from "lucide-react"
import { motion } from "framer-motion"
import { databases } from "@/lib/appwrite"
import { Skeleton } from "@/components/ui/skeleton"

type Reference = {
  title: string
  situation: string
  solution: string
  result: string
  tags: string[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

function ReferenceSkeleton() {
  return (
    <div className="h-full">
      <Card className="h-full">
        <CardHeader>
          <div className="mb-2 flex flex-wrap gap-2">
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-24 rounded-full" />
          </div>
          <Skeleton className="h-6 w-3/4" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Skeleton className="h-4 w-1/4 mb-2" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div>
            <Skeleton className="h-4 w-1/4 mb-2" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="flex gap-2 rounded-lg bg-muted/50 p-3">
            <Skeleton className="h-5 w-5 rounded-full" />
            <div className="flex-1">
              <Skeleton className="h-4 w-1/4 mb-2" />
              <Skeleton className="h-5 w-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function ReferencesSection() {
  const [references, setReferences] = useState<Reference[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchReferences() {
      try {
        setLoading(true)
        const response = await databases.listDocuments(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
          process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_REFERENCES!
        )
        const fetchedReferences = response.documents.map((doc: any) => ({
          title: doc.title,
          situation: doc.situation,
          solution: doc.solution,
          result: doc.result,
          tags: doc.tags,
        }))
        setReferences(fetchedReferences)
      } catch (err) {
        console.error("Failed to fetch references:", err)
        setError("Die Referenzen konnten nicht geladen werden. Bitte versuchen Sie es später erneut.")
      } finally {
        setLoading(false)
      }
    }
    fetchReferences()
  }, [])

  return (
    <section id="referenzen" className="bg-muted/50 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Referenzen & Fallbeispiele</h2>
          <p className="mt-4 text-muted-foreground">
            Anonymisierte Beispiele aus meiner Praxis – so konnte ich Kunden bereits helfen.
          </p>
        </motion.div>

        <div className="mt-12">
          {loading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <ReferenceSkeleton key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center rounded-lg bg-destructive/10 p-8 text-center text-destructive">
              <AlertTriangle className="mb-4 h-12 w-12" />
              <h3 className="text-lg font-semibold">Fehler beim Laden</h3>
              <p className="mt-2 text-sm">{error}</p>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {references.map((caseStudy, index) => (
                <motion.div key={index} variants={cardVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }}>
                  <Card className="h-full border-border bg-card">
                    <CardHeader>
                      <div className="mb-2 flex flex-wrap gap-2">
                        {caseStudy.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-lg text-card-foreground">{caseStudy.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Situation</p>
                        <CardDescription className="mt-1">{caseStudy.situation}</CardDescription>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Lösung</p>
                        <CardDescription className="mt-1">{caseStudy.solution}</CardDescription>
                      </div>
                      <div className="flex gap-2 rounded-lg bg-primary/5 p-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Ergebnis</p>
                          <p className="mt-1 text-sm text-foreground">{caseStudy.result}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

