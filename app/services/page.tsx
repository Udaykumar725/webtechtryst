import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata = {
  title: "Web Development Services | FutureWeb - Professional Digital Solutions",
  description:
    "Comprehensive web development services including custom websites, e-commerce solutions, UI/UX design, SEO optimization, and ongoing support. Transform your digital presence.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </div>
  )
}
