import { Button } from "@/components/ui/button"

interface IntroductionProps {
  language: "en" | "cs"
}

export default function Introduction({ language }: IntroductionProps) {
  return (
    <section className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4 text-xelto-gray">
        {language === "en" 
          ? "Revolutionize Your Packaging Process" 
          : "Revolucionizujte svůj obalový proces"}
      </h1>
      <p className="text-lg text-muted-foreground">
        {language === "en"
          ? "Optipacker is an intelligent tool designed to optimize packaging efficiency, reduce costs, and improve supply chain processes."
          : "Optipacker je inteligentní nástroj navržený pro optimalizaci efektivity balení, snížení nákladů a zlepšení procesů dodavatelského řetězce."}
      </p>
    </section>
  )
}

