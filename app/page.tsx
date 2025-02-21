"use client"

import { useState } from "react"
import Header from "@/components/Header"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import Introduction from "@/components/Introduction"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "cs">("en")

  return (
    <div className="min-h-screen flex flex-col">
      <Header language={language} />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
          <Introduction language={language} />
          <ContactForm language={language} />
        </div>
      </main>
      <Footer language={language} />
    </div>
  )
}

