import type React from "react"
import "./globals.css"
import { Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
})

export const metadata = {
  title: "ConstrutoraPro - Construção Civil",
  description: "Empresa especializada em construção civil, alvenaria, acabamento, pintura, elétrica e hidráulica.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={cn("min-h-screen", montserrat.variable)}>{children}</body>
    </html>
  )
}
