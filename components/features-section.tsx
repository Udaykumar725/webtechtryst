"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Zap, Shield, Rocket } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored web solutions built from scratch using the latest technologies and best practices.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with blazing-fast load times and seamless user experiences.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and reliability with robust testing and quality assurance.",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Future-proof architecture that grows with your business and adapts to changing needs.",
  },
]

export function FeaturesSection() {
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
            Why Choose <span className="text-secondary text-glow-purple">FutureWeb</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine cutting-edge technology with innovative design to deliver web experiences that drive results and
            exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20 glow-blue mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
