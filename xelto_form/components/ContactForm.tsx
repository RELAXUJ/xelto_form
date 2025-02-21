"use client"

import type { FormEvent, ChangeEvent } from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

interface ContactFormProps {
  language: "en" | "cs"
}

export default function ContactForm({ language }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleConsentChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, consent: checked }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xovjregj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert(language === "en" ? 'Failed to submit form' : 'Nepodařilo se odeslat formulář')
    }

    setIsSubmitting(false)
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-xelto-gray">
        {language === "en" ? "Contact Us" : "Kontaktujte nás"}
      </h2>
      {submitSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          {language === "en" ? "Thank you! We will contact you shortly." : "Děkujeme! Budeme vás brzy kontaktovat."}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={language === "en" ? "Name" : "Jméno"}
            required
          />
          <Input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder={language === "en" ? "Company Name" : "Název společnosti"}
            required
          />
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={language === "en" ? "Email Address" : "E-mailová adresa"}
            required
          />
          <Input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder={language === "en" ? "Phone Number (optional)" : "Telefonní číslo (nepovinné)"}
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={language === "en" ? "Message (optional)" : "Zpráva (nepovinné)"}
          />
          <div className="flex items-center space-x-2">
            <Checkbox id="consent" checked={formData.consent} onCheckedChange={handleConsentChange} required />
            <label htmlFor="consent" className="text-sm">
              {language === "en" ? "I agree to the processing of my data" : "Souhlasím se zpracováním mých údajů"}
            </label>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-xelto-red hover:bg-xelto-red/90 text-white w-full md:w-auto"
          >
            {language === "en" ? "Request Free Demo" : "Požádat o demo"}
          </Button>
        </form>
      )}
    </section>
  )
} 