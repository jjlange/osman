"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (consent !== "true") {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true")
    setShowConsent(false)
  }

  if (!showConsent) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm rounded-lg border bg-background p-4 shadow-lg">
      <div className="mb-2 text-lg font-semibold">Cookie-Richtlinie</div>
      <p className="mb-4 text-sm text-muted-foreground">
        Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern. Indem Sie auf &quot;Akzeptieren&quot; klicken, stimmen Sie
        unserer Verwendung von Cookies zu. Weitere Informationen finden Sie in unserer{" "}
        <Link href="/datenschutz" className="text-primary hover:underline">
          Datenschutzerklärung
        </Link>
        .
      </p>
      <div className="flex justify-end">
        <Button onClick={acceptCookies} className="bg-primary text-primary-foreground hover:bg-primary/90">
          Akzeptieren
        </Button>
      </div>
    </div>
  )
}
