"use client"

import { Playfair_Display } from "next/font/google"

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["700","800"]
})

export default function Stories() {

  const stories = [
    {
      name: "Mr. Yatish Katheria",
      role: "DDG — Department of Telecommunications",
      img: "/images/alumni2.jpg",
      text: "As DDG at the Department of Telecommunications, my engineering foundation and network from IET Lucknow helped shape my strategic vision in public service.",
    },
    {
      name: "Mrs. Swati S Bhadauria",
      role: "District Magistrate — UPSC",
      img: "/images/alumni1.jpg",
      text: "IET Lucknow’s alumni community strengthened my early leadership foundation, which later guided me through intense national-level services and responsibilities.",
    },
    {
      name: "Professor R. S. Yadav",
      role: "Professor — MNNIT Allahabad",
      img: "/images/alumni2.jpg",
      text: "Being surrounded by scholars who later excelled globally pushed me to pursue academic excellence and mentoring future generations.",
    },
  ]

  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#f8f7f2] to-[#fdfcf9] text-slate-900">
      <div className="text-center mb-16 px-6">
        <h2 className={`${headingFont.className} text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1e3a8a]`}>
          Alumni Success Stories
        </h2>
        <div className="mt-4 w-24 h-[2px] bg-[#1e3a8a] mx-auto"/>
        <p className="mt-6 text-slate-700 max-w-2xl mx-auto text-lg font-medium">
          Stories of IET Lucknow graduates shaping industries and public service worldwide.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story, i) => (
          <div
            key={i}
            className="group bg-white border border-slate-200 overflow-hidden
            shadow-lg hover:shadow-2xl
            transition-all duration-500"
          >
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
