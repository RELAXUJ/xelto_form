import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Optipacker - Optimizing Packaging for the Automotive Industry",
  description:
    "Optipacker is an intelligent tool designed to optimize packaging efficiency, reduce costs, and improve supply chain processes in the automotive industry.",
  keywords: "Optipacker, packaging optimization, automotive industry, supply chain, cost reduction",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

