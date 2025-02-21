import Image from "next/image"

interface HeaderProps {
  language: "en" | "cs"
}

export default function Header({ language }: HeaderProps) {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center items-center space-x-6">
          <Image 
            src="/images/logo_opti.png" 
            alt="Optipacker Logo" 
            width={150} 
            height={40} 
          />
          <span className="text-gray-300 text-2xl font-light">/</span>
          <Image
            src="/images/logo-XELTO-DIGITAL.jpg"
            alt="Xelto Digital Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>
      </div>
      <div className="bg-xelto-red text-white text-center py-2">
        <p className="text-sm">
          {language === "en"
            ? "Optimizing packaging for the automotive industry."
            : "Optimalizace balení pro automobilový průmysl."}
        </p>
      </div>
    </header>
  )
}

