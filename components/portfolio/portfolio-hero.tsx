"use client"

import { motion } from "framer-motion"
import { Eye, Award, Users, Zap } from "lucide-react"

export function PortfolioHero() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.7_0.2_240_/_0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,oklch(0.6_0.25_300_/_0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,191,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,191,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <Eye className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Crafted with Vision</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow-blue">
            Our <span className="text-secondary text-glow-purple">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our showcase of transformative projects — from custom web applications to powerful e-commerce
            solutions — designed to help businesses thrive in the digital age.
          </p>
        </motion.div>

        {/* Achievement Icons */}
        <motion.div
          className="flex justify-center items-center gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { icon: Award, label: "Award Winning Projects", color: "text-primary" },
            { icon: Users, label: "Client-Centric Approach", color: "text-secondary" },
            { icon: Zap, label: "Cutting-Edge Innovation", color: "text-primary" },
          ].map((item) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center gap-3"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4 rounded-lg border border-primary/20 bg-card/30 backdrop-blur-sm glow-blue">
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
