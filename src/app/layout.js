
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


import Stats from "@/components/Stats"
import { Playfair_Display, Inter } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Alumni Portal",
  description: "Official Alumni Network Platform",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-slate-950 text-white font-sans">
        <Navbar/>
      
       
        {children}
          <Footer/>
      </body>
    </html>
  )
}
