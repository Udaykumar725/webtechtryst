"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Clock } from "lucide-react"

const guarantees = [
  {
    icon: Clock,
    title: "24-Hour Response",
    description: "We respond to all inquiries within 24 hours, guaranteed.",
  },
  {
    icon: Shield,
    title: "Free Consultation",
    description: "No-obligation technical consultation and project assessment.",
  },
  {
    icon: Zap,
    title: "Rapid Turnaround",
    description: "Fast-track production available for urgent projects.",
  },
]

export function ContactCTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-card/20 to-background">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-blue">
            Ready to Start Your <span className="text-secondary text-glow-purple">Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Join hundreds of satisfied clients who have brought their innovations to life with FuturePrint's
            cutting-edge 3D printing services.
          </p>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="inline-flex p-4 rounded-lg bg-primary/10 border border-primary/20 glow-blue mb-4">
                <guarantee.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{guarantee.title}</h3>
              <p className="text-muted-foreground text-sm">{guarantee.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/80 glow-blue group text-lg px-8 py-4">
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 glow-purple bg-transparent text-lg px-8 py-4"
            >
              View Our Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
