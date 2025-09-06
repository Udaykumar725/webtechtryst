"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Layers, Shield, Rocket } from "lucide-react"

const approaches = [
  {
    icon: Cpu,
    title: "AI-Powered Optimization",
    description:
      "Our proprietary AI algorithms analyze designs in real-time, optimizing for material usage, print time, and structural integrity before production begins.",
    features: ["Real-time design analysis", "Material optimization", "Predictive quality control"],
  },
  {
    icon: Layers,
    title: "Multi-Material Mastery",
    description:
      "We've mastered the art of working with next-generation materials, from biocompatible polymers to aerospace-grade composites.",
    features: ["50+ material options", "Custom material development", "Multi-material printing"],
  },
  {
    icon: Shield,
    title: "Zero-Defect Philosophy",
    description:
      "Every print undergoes our rigorous quality assurance process, combining automated inspection with human expertise.",
    features: ["Automated quality control", "Real-time monitoring", "100% inspection guarantee"],
  },
  {
    icon: Rocket,
    title: "Rapid Innovation Cycle",
    description:
      "Our streamlined workflow enables same-day prototyping and rapid iteration, accelerating your product development timeline.",
    features: ["Same-day prototyping", "Rapid iteration support", "24/7 production capability"],
  },
]

export function ApproachSection() {
  return (
    <section className="py-24 px-4 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-blue">
            Our Futuristic <span className="text-secondary text-glow-purple">Approach</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We don't just use advanced technology – we pioneer it. Our approach combines cutting-edge innovation with
            proven manufacturing excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 glow-blue">
                      <approach.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{approach.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {approach.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
