"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Clock, Users, Code } from "lucide-react"

const categories = ["All", "E-Commerce", "Web Apps", "Landing Pages", "UI/UX Design", "Corporate"]

const projects = [
  {
    id: 1,
    title: "TechStore E-Commerce Platform",
    category: "E-Commerce",
    description:
      "Modern e-commerce platform with advanced filtering, secure payments, and real-time inventory management.",
    image: "/modern-ecommerce-website-tech-store-dark-theme.jpg",
    technology: "Next.js + Stripe",
    duration: "8 weeks",
    client: "TechStore Inc",
    tags: ["E-Commerce", "Payment Integration", "Responsive"],
  },
  {
    id: 2,
    title: "HealthCare Management App",
    category: "Web Apps",
    description:
      "Comprehensive healthcare management system with patient portals, appointment scheduling, and telemedicine features.",
    image: "/healthcare-management-dashboard-medical-app-interf.jpg",
    technology: "React + Node.js",
    duration: "12 weeks",
    client: "MedCare Solutions",
    tags: ["Healthcare", "Dashboard", "Real-time"],
  },
  {
    id: 3,
    title: "FinTech Startup Landing",
    category: "Landing Pages",
    description:
      "High-converting landing page for fintech startup with interactive animations and lead generation forms.",
    image: "/fintech-landing-page-modern-financial-website-purp.jpg",
    technology: "Next.js + Framer Motion",
    duration: "3 weeks",
    client: "PayFlow Startup",
    tags: ["Landing Page", "Animations", "Conversion"],
  },
  {
    id: 4,
    title: "SaaS Dashboard Design",
    category: "UI/UX Design",
    description:
      "Complete UI/UX design system for SaaS analytics platform with data visualization and user management.",
    image: "/saas-dashboard-analytics-data-visualization-dark-i.jpg",
    technology: "Figma + Design System",
    duration: "6 weeks",
    client: "DataInsights Pro",
    tags: ["UI/UX", "Design System", "Analytics"],
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "Web Apps",
    description: "Full-featured real estate platform with property listings, virtual tours, and mortgage calculators.",
    image: "/real-estate-website-property-listings-modern-inter.jpg",
    technology: "React + MongoDB",
    duration: "10 weeks",
    client: "PropertyHub LLC",
    tags: ["Real Estate", "Search", "Virtual Tours"],
  },
  {
    id: 6,
    title: "Corporate Website Redesign",
    category: "Corporate",
    description: "Complete corporate website redesign with modern aesthetics, improved UX, and CMS integration.",
    image: "/corporate-website-professional-business-modern-des.jpg",
    technology: "WordPress + Custom Theme",
    duration: "5 weeks",
    client: "GlobalTech Corp",
    tags: ["Corporate", "CMS", "Professional"],
  },
]

export function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory,
  )

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-primary hover:bg-primary/80 glow-blue"
                  : "border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 overflow-hidden group h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute top-4 right-4 p-2 bg-primary/20 backdrop-blur-sm rounded-lg border border-primary/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        scale: hoveredProject === project.id ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </motion.div>
                  </div>

                  <CardContent className="p-6">
                    {/* Category Badge */}
                    <Badge variant="outline" className="border-secondary/30 text-secondary mb-3">
                      {project.category}
                    </Badge>

                    {/* Title and Description */}
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-glow-blue transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                    {/* Project Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4 text-secondary" />
                        <span>{project.client}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Code className="w-4 h-4 text-primary" />
                        <span>{project.technology}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-secondary/10 text-secondary border-secondary/20 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-glow-blue">
            Ready to Build Your <span className="text-secondary text-glow-purple">Next Project?</span>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and transform your digital presence with our cutting-edge web
            development services.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/80 glow-blue">
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
