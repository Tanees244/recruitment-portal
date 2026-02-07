import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { UserProvider } from "@/lib/user-context"

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HealthCare Recruitment Portal",
  description: "Connect healthcare professionals with opportunities",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  )
}
