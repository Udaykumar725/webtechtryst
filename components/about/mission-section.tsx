"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Zap } from "lucide-react"

export function MissionSection() {
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
            Our <span className="text-secondary text-glow-purple">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To democratize cutting-edge web technology by making innovative digital solutions accessible to businesses,
            creators, and visionaries worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Code,
              title: "Innovation First",
              description:
                "We believe every digital breakthrough starts with clean, efficient code. Our mission is to provide the expertise and technology to turn ambitious ideas into exceptional web experiences.",
              color: "primary",
            },
            {
              icon: Globe,
              title: "Global Reach",
              description:
                "From local startups to multinational enterprises, we're building a future where geography doesn't limit digital innovation. Our solutions connect businesses worldwide.",
              color: "secondary",
            },
            {
              icon: Zap,
              title: "Speed & Performance",
              description:
                "In a world that demands instant results, we deliver both rapid development and lightning-fast performance without compromise, accelerating digital transformation.",
              color: "primary",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div
                    className={`inline-flex p-4 rounded-lg bg-${item.color}/10 border border-${item.color}/20 glow-${item.color === "primary" ? "blue" : "purple"} mb-6`}
                  >
                    <item.icon className={`w-8 h-8 text-${item.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
