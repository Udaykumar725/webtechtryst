import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactCTA } from "@/components/contact/contact-cta"

export const metadata = {
  title: "Contact Us | FuturePrint - Get Your 3D Printing Quote Today",
  description:
    "Ready to bring your ideas to life? Contact FuturePrint for a free consultation and quote. Expert 3D printing services with rapid turnaround times.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactCTA />
    </div>
  )
}
