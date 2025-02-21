import { Mail, Phone } from "lucide-react"

interface FooterProps {
  language: "en" | "cs"
}

export default function Footer({ language }: FooterProps) {
  return (
    <footer className="bg-xelto-gray text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-white/90">
          {language === "en" ? "Contact Information" : "Kontaktní informace"}
        </h2>
        <p className="mb-2 text-white/80">Optipacker & Xelto Digital Czechia</p>
        <div className="flex items-center mb-2 text-white/80">
          <Mail className="mr-2" size={18} />
          <span>Email: info@optipacker.com</span>
        </div>
        <div className="flex items-center text-white/80">
          <Phone className="mr-2" size={18} />
          <span>Phone: +420 123 456 789</span>
        </div>
      </div>
    </footer>
  )
}

