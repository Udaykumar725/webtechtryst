"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Chief Technology Officer",
    bio: "Former Google engineer with 12+ years in full-stack development. Pioneer in modern web architecture and performance optimization.",
    image: "/web-developer-cto-alex-thompson-futuristic-portrait.jpg",
    specialties: ["React/Next.js", "Cloud Architecture", "Performance"],
    social: { linkedin: "#", twitter: "#", email: "alex@futureweb.com" },
  },
  {
    name: "Maya Rodriguez",
    role: "Head of Design",
    bio: "Award-winning UX designer who has crafted digital experiences for Fortune 500 companies. Leads our design innovation.",
    image: "/ux-designer-maya-rodriguez-creative-director-portrait.jpg",
    specialties: ["UI/UX Design", "Design Systems", "User Research"],
    social: { linkedin: "#", twitter: "#", email: "maya@futureweb.com" },
  },
  {
    name: "Dr. James Park",
    role: "Director of Engineering",
    bio: "Full-stack architect with a PhD in Computer Science. Specializes in scalable systems and cutting-edge web technologies.",
    image: "/software-engineer-james-park-tech-lead-portrait.jpg",
    specialties: ["System Architecture", "DevOps", "API Development"],
    social: { linkedin: "#", twitter: "#", email: "james@futureweb.com" },
  },
  {
    name: "Sofia Chen",
    role: "Lead Frontend Developer",
    bio: "Frontend specialist passionate about creating seamless user experiences with modern JavaScript frameworks and animations.",
    image: "/frontend-developer-sofia-chen-javascript-expert-port.jpg",
    specialties: ["React/Vue.js", "Animation", "Mobile Development"],
    social: { linkedin: "#", twitter: "#", email: "sofia@futureweb.com" },
  },
]

export function TeamSection() {
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
            Meet Our <span className="text-secondary text-glow-purple">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our diverse team of developers, designers, and digital strategists brings decades of combined experience in
            web development and cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 overflow-hidden group h-full">
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6">
                  {/* Name and Role */}
                  <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-glow-blue transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium mb-3">{member.role}</p>

                  {/* Bio */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <a
                      href={member.social.linkedin}
                      className="p-2 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-primary" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-2 rounded-lg bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-colors"
                    >
                      <Twitter className="w-4 h-4 text-secondary" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
