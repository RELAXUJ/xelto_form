"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface MockupSlideshowProps {
  language: "en" | "cs"
}

export default function MockupSlideshow({ language }: MockupSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { src: "/images/figma/Add new project - step 1.png", alt: "Add new project - Step 1" },
    { src: "/images/figma/Add new project - step 2.png", alt: "Add new project - Step 2" },
    { src: "/images/figma/Add new project - step 3 - expanded.png", alt: "Add new project - Step 3 Expanded" },
    { src: "/images/figma/Add new project - step 3.png", alt: "Add new project - Step 3" },
    { src: "/images/figma/Add new project - step 4.png", alt: "Add new project - Step 4" },
    { src: "/images/figma/Add new project - step 5 right side.png", alt: "Add new project - Step 5 Right Side" },
    { src: "/images/figma/Add new project - step 5.png", alt: "Add new project - Step 5" },
    { src: "/images/figma/Add new project - step 6.png", alt: "Add new project - Step 6" },
    { src: "/images/figma/Login.png", alt: "Login Screen" },
    { src: "/images/figma/Packing units - add new modal.png", alt: "Packing Units - Add New Modal" },
    { src: "/images/figma/Packing units.png", alt: "Packing Units" },
    { src: "/images/figma/Pallets.png", alt: "Pallets" },
    { src: "/images/figma/Project - details-1.png", alt: "Project Details" },
    { src: "/images/figma/Projects - delete modal.png", alt: "Projects Delete Modal" },
    { src: "/images/figma/Projects.png", alt: "Projects Overview" },
    { src: "/images/figma/Summary & Budget (step 5 & 6).png", alt: "Summary & Budget" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="mt-16 mb-12">
      <div className="w-full h-px bg-gray-200 mb-12" /> {/* Separator */}
      
      <h2 className="text-2xl font-bold mb-8 text-center text-xelto-gray">
        {language === "en" ? "Application Preview" : "Náhled aplikace"}
      </h2>

      <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl bg-white">
        {/* Main Slide */}
        <div className="relative w-full" style={{ minHeight: '600px' }}>
          <Image
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            fill
            className="object-contain transition-opacity duration-500"
            quality={100}
            priority
          />
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "bg-white w-4" 
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/30 transition-colors"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/30 transition-colors"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
} 