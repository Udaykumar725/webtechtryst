"use client"

import { motion } from "framer-motion"
import { Layers, Zap, Settings, Package } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,oklch(0.7_0.2_240_/_0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,oklch(0.6_0.25_300_/_0.08),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow-blue">
            Our <span className="text-secondary text-glow-purple">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We deliver cutting-edge digital solutions — from modern web design and high-performance development 
            to scalable e-commerce platforms and seamless integrations. Our services are built to empower your 
            business for the future of the web.
          </p>
        </motion.div>

        {/* Service Icons Preview */}
        <motion.div
          className="flex justify-center items-center gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { icon: Layers, color: "text-primary", label: "UI/UX Design" },
            { icon: Package, color: "text-secondary", label: "E-Commerce Solutions" },
            { icon: Settings, color: "text-primary", label: "Custom Development" },
            { icon: Zap, color: "text-secondary", label: "Performance Optimization" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-lg border border-primary/20 bg-card/30 backdrop-blur-sm glow-blue text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <item.icon className={`w-8 h-8 mx-auto mb-2 ${item.color}`} />
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
