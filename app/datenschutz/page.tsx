import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/config"

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Datenschutzerklärung</h1>

          <div className="mt-8 space-y-6 text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground">1. Datenschutz auf einen Blick</h2>
              <h3 className="mt-4 font-semibold text-foreground">Allgemeine Hinweise</h3>
              <p className="mt-2">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">2. Verantwortliche Stelle</h2>
              <p className="mt-2">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
              <p className="mt-2">
                {siteConfig.companyName}
                <br />
                {siteConfig.expertName}
                <br />
                {siteConfig.street}
                <br />
                {siteConfig.zip} {siteConfig.city}
                <br />
                Telefon: {siteConfig.phone}
                <br />
                E-Mail: {siteConfig.email}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">3. Datenerfassung auf dieser Website</h2>
              <h3 className="mt-4 font-semibold text-foreground">Kontaktformular</h3>
              <p className="mt-2">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-2">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
                mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                erforderlich ist.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">Anfrage per E-Mail, Telefon oder WhatsApp</h3>
              <p className="mt-2">
                Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage inklusive aller daraus
                hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei
                uns gespeichert und verarbeitet.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">4. Ihre Rechte</h2>
              <p className="mt-2">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
                Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
                Berichtigung, Sperrung oder Löschung dieser Daten.
              </p>
              <p className="mt-2">
                Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns
                wenden.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">5. SSL-Verschlüsselung</h2>
              <p className="mt-2">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
                SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
                Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
