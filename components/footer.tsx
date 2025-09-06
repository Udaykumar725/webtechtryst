"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-primary/20 glow-blue mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + About */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg glow-blue flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">TWT</span>
              </div>
              <span className="text-2xl font-bold text-glow-blue">WebTechTryst</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
              Building futuristic web experiences with cutting-edge design and technology.
              We transform your ideas into digital reality.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:text-glow-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-foreground mb-4">Let’s Build Together</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Have a project in mind? Let’s turn it into reality.
            </p>
            <Button className="bg-secondary hover:bg-secondary/80 glow-purple w-fit">
              Start Your Project
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-primary/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} WebTechTryst. All rights reserved.</p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
