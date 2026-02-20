import Link from "next/link"
import { Car } from "lucide-react"
import { siteConfig, navItems, legalLinks } from "@/lib/config"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">{siteConfig.companyName}</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Unabhängiger KFZ-Sachverständiger in {siteConfig.city}. Professionelle Unfallgutachten, Wertgutachten und
              Fahrzeugbewertungen – immer in Ihrem Interesse.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>{siteConfig.expertName}</p>
              <p>
                {siteConfig.street}, {siteConfig.zip} {siteConfig.city}
              </p>
              <p>Tel: {siteConfig.phone}</p>
              <p>E-Mail: {siteConfig.email}</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {navItems.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground">Rechtliches</h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} {siteConfig.companyName}. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
