"use client"

import { MapPin, Phone, Mail } from "lucide-react"
import { siteConfig, getFullAddress, getPhoneLink } from "@/lib/config"
import { useEffect, useRef } from "react"

export function MapSection() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<any>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    const initMap = async () => {
      // Dynamically import mapbox-gl to avoid SSR issues
      const mapboxgl = (await import('mapbox-gl')).default
      
      const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
      
      if (!accessToken) {
        console.warn('Mapbox access token not found')
        return
      }

      mapboxgl.accessToken = accessToken

      // Coordinates for Hamburg address (Lübecker Str. 13, 22087 Hamburg)
      const coordinates: [number, number] = [10.0767, 53.5653]

      if (map.current) return // Initialize map only once

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: coordinates,
        zoom: 15,
      })

      // Add marker
      new mapboxgl.Marker({ color: '#ef4444' })
        .setLngLat(coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<div style="padding: 8px;"><strong>${siteConfig.companyName}</strong><br/>${getFullAddress()}</div>`)
        )
        .addTo(map.current)

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')
    }

    initMap()

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [])

  return (
    <section className="bg-muted py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Besuchen Sie uns
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base">
            Wir sind für Sie da – persönlich vor Ort oder nach Vereinbarung
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Map */}
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <div 
              ref={mapContainer} 
              className="h-[300px] w-full sm:h-[400px]"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6 rounded-lg border border-border bg-card p-6 sm:p-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                {siteConfig.companyName}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">{siteConfig.expertName}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Adresse</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {siteConfig.street}
                    <br />
                    {siteConfig.zip} {siteConfig.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Telefon</p>
                  <a
                    href={getPhoneLink()}
                    className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">E-Mail</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(getFullAddress())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:underline"
              >
                <MapPin className="h-4 w-4" />
                Route planen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
