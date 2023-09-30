import './globals.css'
import './main-page.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discussion Website',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className = "nav-header">
          <nav>
            <ul>
              <li><a href="https://cs61c.org/fa23/" target = "_blank">Course Website</a></li>
              <li><Link href = "/weekly-materials">Weekly Materials</Link></li>
              <li><Link href = "/">Home</Link></li>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdUmRuEBrzXZeyEpAEF3qEWyKe6_xZ0mhQ0YXZ5ZlSpSy3kOA/viewform?usp=sf_link" target = "_blank">Feedback</a></li>
              <li><a href ="/additional-resources">Additional Resources</a></li>
            </ul>
          </nav>
        </div>
        {children}</body>
    </html>
  )
}
