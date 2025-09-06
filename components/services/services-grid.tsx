"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  ShoppingCart,
  Palette,
  Search,
  Headphones,
  ArrowRight,
  CheckCircle,
  Globe,
} from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description:
      "Future-ready web applications engineered with the latest technologies. Built to scale, secure, and designed for complex business workflows.",
    features: [
      "React & Next.js development",
      "Full-stack solutions with Node.js",
      "Custom APIs & integrations",
      "Progressive Web Apps (PWA)",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
    price: "Starting from ₹50,000",
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description:
      "High-performance e-commerce platforms with seamless checkout, secure payments, and optimized for conversions.",
    features: [
      "WooCommerce & Shopify stores",
      "Custom WordPress sites",
      "Secure payment integration",
      "Inventory & order management",
    ],
    technologies: ["WooCommerce", "Shopify", "WordPress", "Stripe", "PayPal"],
    price: "Starting from ₹50,000",
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Intuitive, human-centered designs that merge creativity with usability, ensuring delightful digital experiences.",
    features: [
      "User research & journey mapping",
      "Wireframing & prototyping",
      "Design system creation",
      "Accessibility compliance",
    ],
    technologies: ["Figma", "Adobe XD", "Framer", "Principle"],
    price: "Starting from ₹50,000",
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Search,
    title: "SEO & Performance Optimization",
    description:
      "Comprehensive optimization to boost visibility, drive traffic, and improve speed with measurable business impact.",
    features: [
      "Technical SEO audits",
      "Core Web Vitals improvement",
      "Performance optimization",
      "Analytics & tracking setup",
    ],
    technologies: ["Google Analytics", "Search Console", "Lighthouse", "GTM"],
    price: "Starting from ₹50,000",
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Globe,
    title: "WordPress & WooCommerce Development",
    description:
      "Scalable WordPress websites and WooCommerce stores crafted with precision, speed, and business growth in mind.",
    features: [
      "Custom WordPress theme development",
      "WooCommerce store setup & scaling",
      "Payment gateway integration",
      "Advanced plugins & automation",
    ],
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    price: "Starting from ₹50,000",
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Headphones,
    title: "Ongoing Support & Maintenance",
    description:
      "Reliable support packages to keep your website secure, updated, and running at peak performance 24/7.",
    features: [
      "24/7 monitoring & response",
      "Security & performance updates",
      "Regular backups & restores",
      "Content & feature management",
    ],
    technologies: ["Monitoring Tools", "Security Patches", "CDN", "Backups"],
    price: "Starting from ₹50,000",
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* grid changed to 2-column by default, 3-column on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 h-full group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.gradient} border border-${service.color}/20 glow-${service.color === "primary" ? "blue" : "purple"}`}
                    >
                      <service.icon className={`w-8 h-8 text-${service.color}`} />
                    </div>
                    <Badge variant="outline" className={`border-${service.color}/30 text-${service.color}`}>
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-glow-blue transition-all duration-300">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4 text-secondary" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-secondary/10 text-secondary border-secondary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full bg-${service.color} hover:bg-${service.color}/80 glow-${service.color === "primary" ? "blue" : "purple"} group/btn`}
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
