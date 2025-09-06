"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { number: "500+", label: "Projects Completed", color: "text-primary" },
  { number: "50+", label: "Industries Served", color: "text-secondary" },
  { number: "99.8%", label: "Quality Rate", color: "text-primary" },
  { number: "24h", label: "Average Turnaround", color: "text-secondary" },
]

export function PortfolioStats() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/30 border-primary/20 backdrop-blur-sm text-center hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
