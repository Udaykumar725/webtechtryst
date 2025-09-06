import { AboutHero } from "@/components/about/about-hero"
import { MissionSection } from "@/components/about/mission-section"
import { ApproachSection } from "@/components/about/approach-section"
import { TeamSection } from "@/components/about/team-section"
import { ValuesSection } from "@/components/about/values-section"

export const metadata = {
  title: "About Us | WebTechTryst - Crafting the Future of Digital Experiences",
  description:
    "At WebTechTryst, we blend creativity, technology, and strategy to craft futuristic digital solutions. Discover our mission, values, and innovative approach that empower businesses to thrive online. Meet the passionate team shaping tomorrow’s web.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <MissionSection />
      <ApproachSection />
      <ValuesSection />
      <TeamSection />
    </div>
  )
}
