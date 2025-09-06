"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our experts",
    value: "+1 (555) 123-4567",
    action: "tel:+15551234567",
    color: "text-primary",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your project details",
    value: "hello@futureprint.com",
    action: "mailto:hello@futureprint.com",
    color: "text-secondary",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
    value: "Available 9 AM - 6 PM PST",
    action: "#",
    color: "text-primary",
  },
]

const officeHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM PST" },
  { day: "Saturday", hours: "9:00 AM - 5:00 PM PST" },
  { day: "Sunday", hours: "Closed" },
]

export function ContactInfo() {
  return (
    <section className="py-24 px-4 lg:px-8">
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Contact Methods */}
        <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6 text-glow-blue">Get In Touch</h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  className="flex items-start gap-4 p-4 rounded-lg border border-primary/10 bg-card/30 hover:border-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <method.icon className={`w-5 h-5 ${method.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{method.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                    <a href={method.action} className={`text-sm font-medium ${method.color} hover:underline`}>
                      {method.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Office Hours */}
        <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6 text-glow-blue flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Office Hours
            </h3>
            <div className="space-y-3">
              {officeHours.map((schedule, index) => (
                <div key={schedule.day} className="flex justify-between items-center py-2">
                  <span className="text-foreground font-medium">{schedule.day}</span>
                  <span className="text-muted-foreground">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Location */}
        <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6 text-glow-blue flex items-center gap-2">
              <MapPin className="w-5 h-5 text-secondary" />
              Our Location
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-foreground font-medium">FuturePrint Headquarters</p>
                <p className="text-muted-foreground">
                  1234 Innovation Drive
                  <br />
                  Tech Valley, CA 94025
                  <br />
                  United States
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
              >
                <MapPin className="mr-2 w-4 h-4" />
                View on Map
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-4 text-glow-blue">Need Immediate Help?</h3>
            <p className="text-muted-foreground mb-6">
              For urgent projects or technical support, our experts are standing by to assist you.
            </p>
            <div className="flex flex-col gap-3">
              <Button className="bg-primary hover:bg-primary/80 glow-blue">
                <Phone className="mr-2 w-4 h-4" />
                Call Now
              </Button>
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
              >
                <Calendar className="mr-2 w-4 h-4" />
                Schedule Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
