import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/config"

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Impressum</h1>

          <div className="mt-8 space-y-6 text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
              <p className="mt-2">
                {siteConfig.companyName}
                <br />
                {siteConfig.expertName}
                <br />
                {siteConfig.street}
                <br />
                {siteConfig.zip} {siteConfig.city}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Kontakt</h2>
              <p className="mt-2">
                Telefon: {siteConfig.phone}
                <br />
                E-Mail: {siteConfig.email}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <p className="mt-2">
                Berufsbezeichnung: KFZ-Sachverständiger
                <br />
                Zuständige Kammer: {siteConfig.chamber}
                <br />
                Verliehen durch: Bundesrepublik Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Umsatzsteuer-ID</h2>
              <p className="mt-2">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                <br />
                {siteConfig.vatId}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Streitschlichtung</h2>
              <p className="mt-2">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                <br />
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Haftung für Inhalte</h2>
              <p className="mt-2">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">Haftung für Links</h2>
              <p className="mt-2">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
