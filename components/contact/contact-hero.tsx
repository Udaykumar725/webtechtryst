"use client"

import { motion } from "framer-motion"
import { MessageSquare, Clock, Award } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,oklch(0.7_0.2_240_/_0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,oklch(0.6_0.25_300_/_0.1),transparent_50%)]" />

        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,191,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,191,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Let's Build the Future Together</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow-blue">
            Get In <span className="text-secondary text-glow-purple">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Our team of experts is standing by to discuss your project and
            provide a customized solution that exceeds your expectations.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="flex justify-center items-center gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { icon: Clock, label: "24h Response", color: "text-primary" },
            { icon: MessageSquare, label: "Free Consultation", color: "text-secondary" },
            { icon: Award, label: "Expert Guidance", color: "text-primary" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center gap-3"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-3 rounded-lg border border-primary/20 bg-card/30 backdrop-blur-sm glow-blue">
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
