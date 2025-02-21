import Image from "next/image"

interface HeaderProps {
  language: "en" | "cs"
}

export default function Header({ language }: HeaderProps) {
  return (
    <header className="bg-white shadow-md">
      <div className="bg-xelto-green text-white text-center py-2">
        <p className="text-sm">
          {language === "en"
            ? "Optimizing packaging for the automotive industry."
            : "Optimalizace balení pro automobilový průmysl."}
        </p>
      </div>
    </header>
  )
}

