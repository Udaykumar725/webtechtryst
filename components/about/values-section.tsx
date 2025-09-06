"use client"

import { motion } from "framer-motion"
import { Heart, Eye, Handshake, Zap } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion for Innovation",
    description: "We're driven by an insatiable curiosity to push the boundaries of what's possible.",
  },
  {
    icon: Eye,
    title: "Visionary Thinking",
    description: "We see beyond today's limitations to imagine tomorrow's possibilities.",
  },
  {
    icon: Handshake,
    title: "Collaborative Partnership",
    description: "Your success is our success. We work as an extension of your team.",
  },
  {
    icon: Zap,
    title: "Relentless Excellence",
    description: "We never settle for good enough. Every project deserves our absolute best.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-blue">
            Our <span className="text-secondary text-glow-purple">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            These core principles guide everything we do, from the smallest prototype to the largest production run.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center group"
            >
              <div className="p-6 rounded-lg border border-primary/20 bg-card/30 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <div className="inline-flex p-4 rounded-lg bg-secondary/10 border border-secondary/20 glow-purple mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
