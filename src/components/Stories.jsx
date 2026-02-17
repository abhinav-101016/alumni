"use client"

import { Playfair_Display } from "next/font/google"

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["700","800"]
})

export default function Stories() {

  const stories = [
    {
      name: "Rahul Verma",
      role: "Software Engineer — Google",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800",
      text: "My journey from campus classrooms to Google was shaped by the mentorship and powerful network I found through our alumni community.",
    },
    {
      name: "Ananya Singh",
      role: "Founder — Fintech Startup",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800",
      text: "The alumni network opened doors to investors, advisors, and opportunities I never imagined possible during my college days.",
    },
    {
      name: "Arjun Mehta",
      role: "Data Scientist — Microsoft",
      img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800",
      text: "Remaining connected with fellow alumni helped me grow professionally, build confidence, and explore global opportunities.",
    },
  ]

  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#f8f7f2] to-[#fdfcf9] text-slate-900">

      {/* Heading */}
      <div className="text-center mb-16 px-6">
        <h2 className={`${headingFont.className} text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1e3a8a]`}>
          Alumni Stories
        </h2>

        <div className="mt-4 w-24 h-[2px] bg-[#1e3a8a] mx-auto"/>

        <p className="mt-6 text-slate-700 max-w-2xl mx-auto text-lg font-medium">
          Inspiring journeys of alumni shaping industries, leading innovation,
          and creating impact across the globe.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        {stories.map((story, i) => (
          <div
            key={i}
            className="group bg-white border border-slate-200 overflow-hidden
            shadow-lg hover:shadow-2xl
            transition-all duration-500"
          >

            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={story.img}
                alt={story.name}
                className="w-full h-64 object-cover
                transform group-hover:scale-105
                transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
            </div>

            {/* Content */}
            <div className="p-7">

              <h3 className="text-xl font-bold tracking-tight text-[#1e3a8a]">
                {story.name}
              </h3>

              <p className="text-slate-600 text-sm mt-1 font-medium">
                {story.role}
              </p>

              <p className="mt-5 text-slate-700 leading-relaxed text-[15px] font-medium">
                {story.text}
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}
