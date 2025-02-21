import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white py-8 shadow-[0_-2px_4px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-6">
          <Link href="https://optipacker.com/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/images/logo_opti.png" 
              alt="Optipacker Logo" 
              width={150} 
              height={40}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
          <span className="text-gray-300 text-2xl font-light">/</span>
          <Link href="https://xeltodigital.cz/en/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/logo-XELTO-DIGITAL.jpg"
              alt="Xelto Digital Logo"
              width={120}
              height={40}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}

