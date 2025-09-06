"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, User, Mail, MessageSquare, Package, Clock, DollarSign } from "lucide-react"

// Updated project types for web development agency
const projectTypes = [
  "Custom Web Application",
  "WordPress Development",
  "WooCommerce Store",
  "Shopify Store",
  "UI/UX Design",
  "SEO & Performance",
  "Ongoing Support & Maintenance",
]

// Updated urgency/timelines for web projects
const urgencyLevels = [
  { value: "standard", label: "Standard (4-6 weeks)", color: "bg-muted" },
  { value: "priority", label: "Priority (2-3 weeks)", color: "bg-primary/20 text-primary" },
  { value: "rush", label: "Rush (1 week)", color: "bg-secondary/20 text-secondary" },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    urgency: "",
    budget: "",
    projectDetails: "",
    files: null,
  })

  const [selectedProjectTypes, setSelectedProjectTypes] = useState<string[]>([])
  const [selectedUrgency, setSelectedUrgency] = useState("")

  const handleProjectTypeToggle = (type: string) => {
    setSelectedProjectTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", {
      ...formData,
      projectTypes: selectedProjectTypes,
      urgency: selectedUrgency,
    })
  }

  return (
    <section className="py-24 px-4 lg:px-8 bg-card/10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-glow-blue flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-primary" />
              Request Your Project Quote
            </CardTitle>
            <p className="text-muted-foreground">
              Fill out the form below and our team will respond within 24 hours with a tailored proposal, estimated cost, and timeline.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                    <User className="w-4 h-4 text-primary" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-input/50 border-primary/20 focus:border-primary/40 glow-blue"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-input/50 border-primary/20 focus:border-primary/40 glow-blue"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">
                    Company/Organization
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-input/50 border-primary/20 focus:border-primary/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-input/50 border-primary/20 focus:border-primary/40"
                  />
                </div>
              </div>

              {/* Project Type Selection */}
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-foreground">
                  <Package className="w-4 h-4 text-secondary" />
                  Project Type(s) *
                </Label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <Badge
                      key={type}
                      variant={selectedProjectTypes.includes(type) ? "default" : "outline"}
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedProjectTypes.includes(type)
                          ? "bg-primary text-primary-foreground glow-blue"
                          : "border-primary/30 text-primary hover:bg-primary/10"
                      }`}
                      onClick={() => handleProjectTypeToggle(type)}
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Urgency Level */}
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-foreground">
                  <Clock className="w-4 h-4 text-secondary" />
                  Timeline Requirements
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {urgencyLevels.map((level) => (
                    <div
                      key={level.value}
                      className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                        selectedUrgency === level.value
                          ? "border-primary/40 bg-primary/10 glow-blue"
                          : "border-primary/20 bg-card/30 hover:border-primary/30"
                      }`}
                      onClick={() => setSelectedUrgency(level.value)}
                    >
                      <div className="text-sm font-medium text-foreground">{level.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div className="space-y-2">
                <Label htmlFor="budget" className="flex items-center gap-2 text-foreground">
                  <DollarSign className="w-4 h-4 text-secondary" />
                  Estimated Budget Range
                </Label>
                <Input
                  id="budget"
                  placeholder="e.g., ₹50,000 - ₹5,00,000 or 'Open to discussion'"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="bg-input/50 border-primary/20 focus:border-primary/40"
                />
              </div>

              {/* Project Details */}
              <div className="space-y-2">
                <Label htmlFor="projectDetails" className="text-foreground">
                  Project Details *
                </Label>
                <Textarea
                  id="projectDetails"
                  placeholder="Please describe your project in detail. For example: type of website (corporate, e-commerce, SaaS), features required, integrations, design preferences, etc."
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="bg-input/50 border-primary/20 focus:border-primary/40 min-h-32"
                  required
                />
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="files" className="text-foreground">
                  Upload Files (Wireframes, Specs, References)
                </Label>
                <Input
                  id="files"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip,.rar"
                  className="bg-input/50 border-primary/20 focus:border-primary/40"
                />
                <p className="text-xs text-muted-foreground">
                  Supported formats: PDF, DOC, Images, ZIP (max 20MB)
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/80 glow-blue group text-lg py-6"
              >
                <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Request Quote
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
