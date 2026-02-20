"use client"

import { siteConfig, navItems, getPhoneLink } from "@/lib/config"
import { useState } from "react"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { Car, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="hidden border-b bg-secondary py-2 lg:block">
        <div className="container mx-auto flex justify-end px-4 space-x-4 text-sm text-secondary-foreground">
          <Link href={getPhoneLink()} className="hover:underline">
            {siteConfig.phone}
          </Link>

          <Link href={`mailto:${siteConfig.email}`} className="hover:underline">
            {siteConfig.email}
          </Link>
        </div>
      </div>
      <div className="container mx-auto flex h-14 items-center justify-between gap-2 px-4 sm:h-16 sm:gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
            <Car className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold ml-2 text-foreground sm:text-lg lg:text-2xl">{siteConfig.companyName}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary hover:underline hover:underline-offset-4 ${
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/kontakt">Schaden online melden</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="shrink-0 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/kontakt" onClick={() => setIsMenuOpen(false)}>
                Schaden online melden
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

