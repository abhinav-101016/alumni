"use client"

import { Playfair_Display } from "next/font/google"

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["700","800"]
})

import { useEffect, useState } from "react"
import { FaUserGraduate, FaGlobeAsia, FaBuilding, FaHandshake } from "react-icons/fa"

function Counter({ target }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target])

  return <span>{count.toLocaleString()}+</span>
}

export default function Stats() {

  const stats = [
    {
      icon: <FaUserGraduate size={38} />,
      value: 40000,
      label: "Alumni Worldwide",
    },
    {
      icon: <FaGlobeAsia size={38} />,
      value: 20,
      label: "Countries Where Alumni Work",
    },
    {
      icon: <FaBuilding size={38} />,
      value: 200,
      label: "Leading Organizations",
    },
    {
      icon: <FaHandshake size={38} />,
      value: 1500,
      label: "Mentorship & Industry Connects",
    },
  ]

  return (
    <section className="w-full py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <div className="text-center mb-20 px-6">
        <h2 className=" [font-family:var(--font-playfair)] text-4xl sm:text-5xl font-bold tracking-tight">
          IET Lucknow Alumni Impact
        </h2>
        <div className="mt-4 w-24 h-[2px] bg-slate-400 mx-auto"/>
        <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
          Statistics representing real influence and reach of the IET Lucknow alumni network.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, i) => (
          <div
            key={i}
            className="group relative p-10 text-center
            bg-white/5 backdrop-blur-md
            border border-white/10
            shadow-xl
            hover:-translate-y-2
            hover:shadow-blue-900/40
            transition-all duration-500"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
            bg-gradient-to-br from-blue-600/10 to-transparent"/>
            <div className="mb-5 flex justify-center text-blue-400 group-hover:scale-110 transition duration-500">
              {item.icon}
            </div>
            <h3 className="text-4xl font-extrabold text-white">
              <Counter target={item.value}/>
            </h3>
            <p className="mt-3 text-slate-400 font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
