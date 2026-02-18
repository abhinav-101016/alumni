"use client"
import { motion } from "framer-motion"
import { Playfair_Display } from "next/font/google"

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
})

export default function UpcomingEvents() {
  const events = [
    {
      title: "Annual Alumni Reunion",
      date: "March 22, 2026",
      desc: "Reconnect with batchmates, mentors, and faculty at our grand yearly gathering.",
    },
    {
      title: "Tech Webinar Series",
      date: "April 10, 2026",
      desc: "Industry experts share insights on AI, Cloud, and emerging technologies.",
    },
    {
      title: "Alumni Leadership Talks",
      date: "May 5, 2026",
      desc: "Successful alumni share their journeys and career advice with students.",
    },
  ]

  return (
    <section className="relative w-full py-28 text-white overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className={`${headingFont.className} text-4xl sm:text-5xl font-extrabold tracking-tight`}>
            Upcoming Events
          </h2>

          <div className="mt-4 w-24 h-[2px] bg-slate-300 mx-auto" />

          <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-lg">
            Stay connected with alumni gatherings, expert sessions, and networking opportunities.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-white/10 p-8
              bg-white/5 backdrop-blur-xl
              shadow-xl
              transform transition duration-500
              hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">
                {event.title}
              </h3>

              <p className="text-blue-400 text-sm mb-4">
                {event.date}
              </p>

              <p className="text-slate-300 leading-relaxed">
                {event.desc}
              </p>

              <button
                className="mt-6 px-5 py-2 font-medium
                bg-gradient-to-r from-blue-500 to-blue-700
                hover:from-blue-600 hover:to-blue-800
                transition"
              >
                View Event Details
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
