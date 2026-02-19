"use client"

import Image from "next/image"
import { Playfair_Display, Inter } from "next/font/google"

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["700","800"],
})

const bodyFont = Inter({
  subsets: ["latin"],
})

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer-bg.png"   // <-- place your image inside public/images
          alt="campus"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-blue-950/80"/>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        {/* Heading */}
        <h1
          className={`${headingFont.className}
          text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto
          tracking-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]`}
        >
          The Legacy of IET Lucknow
          <br/>
          Lives Through You
        </h1>

        {/* Subtext */}
        <p
          className={`${bodyFont.className}
          mt-6 text-base sm:text-lg lg:text-xl text-slate-300
          max-w-2xl mx-auto`}
        >
          Stay connected with fellow alumni of IET Lucknow, celebrate achievements,
          expand your professional network, and continue building the legacy
          that began on campus.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <button className="px-8 py-3 rounded-lg font-semibold
          bg-blue-600 hover:bg-blue-500
          transition duration-300 shadow-md shadow-blue-900/30">
            Join Alumni Network
          </button>

          <button className="px-8 py-3 rounded-lg font-semibold
          border border-slate-400/40
          bg-white/5 backdrop-blur-md
          hover:bg-white/10 transition duration-300">
            Explore Community
          </button>

        </div>
      </div>
    </section>
  )
}
