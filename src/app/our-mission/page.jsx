"use client"

import { Playfair_Display } from "next/font/google"
import { motion } from "framer-motion"

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["700","800"]
})

export default function OurMission() {
  return (
    <section className="min-h-screen w-full py-28
      bg-gradient-to-b from-slate-950 via-slate-900 to-black
      text-white flex items-center">

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.h1
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          className={`${headingFont.className}
          text-4xl sm:text-5xl font-extrabold text-center mb-20 tracking-tight`}
        >
          Our Mission & Vision
        </motion.h1>


        {/* Mission Card */}
        <motion.div
          initial={{ opacity:0, y:60 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.7 }}
          className="mb-14 p-10 rounded-3xl
          bg-white/5 border border-white/10
          backdrop-blur-xl shadow-2xl
          hover:scale-[1.02] transition duration-500"
        >
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">
            Mission
          </h2>

          <p className="text-lg leading-relaxed text-slate-300">
            At IET Lucknow and its alumni community, our mission is to strive toward
            our guiding motto{" "}
            <span className="italic font-semibold text-white">
              “Sahaveeryam Karavahe” — Let us do great things together.
            </span>{" "}
            We aim to empower graduates to build technological leadership,
            foster innovation, and create a lifelong community of professional
            support and shared learning. Through mentorship programs, technical
            activities, and collaborative initiatives, we nurture growth,
            confidence, and excellence among our members.
          </p>
        </motion.div>


        {/* Vision Card */}
        <motion.div
          initial={{ opacity:0, y:60 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.7, delay:0.2 }}
          className="p-10 rounded-3xl
          bg-white/5 border border-white/10
          backdrop-blur-xl shadow-2xl
          hover:scale-[1.02] transition duration-500"
        >
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">
            Vision
          </h2>

          <p className="text-lg leading-relaxed text-slate-300">
            Our vision is to build a thriving platform where alumni and students
            come together to exchange ideas, share expertise, and contribute to
            the advancement of technology and society. We aspire to cultivate a
            vibrant ecosystem that inspires innovation, leadership, and lifelong
            connections across generations of graduates worldwide.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
