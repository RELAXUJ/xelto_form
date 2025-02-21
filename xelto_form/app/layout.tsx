import './globals.css'

export const metadata = {
  title: 'Xelto Form',
  description: 'Contact form for Xelto Digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
} 