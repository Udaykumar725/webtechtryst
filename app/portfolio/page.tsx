import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGallery } from "@/components/portfolio/portfolio-gallery"
import { PortfolioStats } from "@/components/portfolio/portfolio-stats"

export const metadata = {
  title: "Portfolio | FutureWeb - Showcase of Web Development Excellence",
  description:
    "Explore our portfolio of innovative web development projects across industries. From e-commerce platforms to custom web applications, see what's possible with FutureWeb.",
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <PortfolioHero />
      <PortfolioStats />
      <PortfolioGallery />
    </div>
  )
}
