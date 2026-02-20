// Site configuration - Replace these values with your actual business information
export const siteConfig = {
  // Business Information
  companyName: "Osman Ergen",
  expertName: "Osman Ergen",

  // Contact Details
  phone: "+49 0176 81185087",
  email: "info@sv-ergen.de",
  whatsappLink: "https://wa.me/4917681185087",

  // Address
  street: "Lübecker Str. 13",
  zip: "22087",
  city: "Hamburg",

  // Service Area Regions
  regions: ["Hamburg", "Lübeck", "Kiel", "Flensburg", "Neumünster", "Elmshorn"],

  // Legal Information (for Impressum)
  chamber: "IHK München und Oberbayern",
  vatId: "DE123456789",

  // SEO & Meta
  siteUrl: "https://sv-ergen.de",
  siteDescription:
    "Unabhängiger KFZ-Sachverständiger in Hamburg. Professionelle Unfallgutachten, Wertgutachten und Fahrzeugbewertungen.",
  pageTitle: process.env.NEXT_PUBLIC_PAGE_TITLE || `KFZ-Gutachter in Hamburg | Unabhängige Unfall- & Wertgutachten – KFZ-Sachverständiger Osman Ergen`,
}

// Navigation items - shared between header and footer
export const navItems = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/ablauf", label: "Ablauf" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
]

// Legal links for footer
export const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutzerklärung" },
]

// Helper to get formatted address
export function getFullAddress() {
  return `${siteConfig.street}, ${siteConfig.zip} ${siteConfig.city}`
}

// Helper for phone link
export function getPhoneLink() {
  return `tel:${siteConfig.phone.replace(/\s/g, "")}`
}
