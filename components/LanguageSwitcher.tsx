import { Button } from "@/components/ui/button"

interface LanguageSwitcherProps {
  language: "en" | "cs"
  setLanguage: (lang: "en" | "cs") => void
}

export default function LanguageSwitcher({ language, setLanguage }: LanguageSwitcherProps) {
  return (
    <div className="flex justify-end mb-4">
      <Button variant="outline" size="sm" onClick={() => setLanguage(language === "en" ? "cs" : "en")}>
        {language === "en" ? "Česky" : "English"}
      </Button>
    </div>
  )
}

