"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MessageCircle, FileText, Zap } from "lucide-react"

export function ServicesCTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading + Subtitle */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow-blue">
            Let’s Build Your <span className="text-secondary text-glow-purple">Next Big Idea</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with our team of innovators to bring your vision to life—on time, on budget, 
            and with future-ready technology that scales with your growth.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: MessageCircle,
              title: "Strategy Call",
              description: "Kick off with a free discovery session to align your goals, challenges, and vision.",
            },
            {
              icon: FileText,
              title: "Tailored Proposal",
              description: "Receive a transparent roadmap with clear pricing, timeline, and project milestones.",
            },
            {
              icon: Zap,
              title: "Launch & Scale",
              description: "We build, test, and deliver—backed with continuous support and scalable solutions.",
            },
          ].map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/30 border-primary/20 backdrop-blur-sm text-center h-full">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20 glow-blue mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/80 glow-blue group">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 glow-purple bg-transparent"
            >
              Explore Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
