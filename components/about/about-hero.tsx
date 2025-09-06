"use client"

import { motion } from "framer-motion"
import { Rocket, Target, Users } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,oklch(0.7_0.2_240_/_0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,oklch(0.6_0.25_300_/_0.12),transparent_50%)]" />

        {/* Animated geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-lg"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 border border-secondary/20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Shaping Tomorrow’s Web</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow-blue">
            About <span className="text-secondary text-glow-purple">WebTechTryst</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At WebTechTryst, we go beyond building websites — we craft digital experiences that inspire, engage, 
            and empower businesses. With cutting-edge technology and bold creativity, we’re driving the next era 
            of the web.
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { icon: Target, number: "2021", label: "Founded", color: "text-primary" },
            { icon: Users, number: "25+", label: "Creative Experts", color: "text-secondary" },
            { icon: Rocket, number: "100+", label: "Projects Delivered", color: "text-primary" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="inline-flex p-4 rounded-lg border border-primary/20 bg-card/30 backdrop-blur-sm glow-blue mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
