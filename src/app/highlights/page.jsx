"use client"

import { motion } from "framer-motion"
import { Users, Briefcase, Rocket, Trophy } from "lucide-react"
import { useEffect, useState } from "react"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets:["latin"],
  weight:["600","700"]
})

/* ---------------- alumni data ---------------- */

const alumni = [
  {
    name: "Srijan Pal Singh",
    role: "Innovation Leader",
    desc: "Inspires youth nationwide through leadership and innovation after graduating from IET Lucknow.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600"
  },
  {
    name: "Prashant Misra",
    role: "Product Strategist",
    desc: "Driving global digital platforms and scaling products internationally from his IET Lucknow foundation.",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=600"
  },
  {
    name: "Dr Renu Rajani",
    role: "Technology Leader",
    desc: "Leading enterprise innovation initiatives as a proud alumna of IET Lucknow.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600"
  },
  {
    name: "Ajay Shrivastava",
    role: "CTO",
    desc: "Architecting scalable tech platforms and mentoring startups inspired by his IET Lucknow journey.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600"
  }
]

/* ---------------- stats ---------------- */

const stats = [
  { number:100, label:"Global Alumni", icon:Users },
  { number:50, label:"Tech Leaders", icon:Briefcase },
  { number:25, label:"Startup Founders", icon:Rocket },
  { number:10, label:"Award Winners", icon:Trophy }
]

/* ---------------- counter ---------------- */

function Counter({ value }) {
  const [count,setCount]=useState(0)

  useEffect(()=>{
    let start=0
    const step=value/60

    const interval=setInterval(()=>{
      start+=step
      if(start>=value){
        setCount(value)
        clearInterval(interval)
      } else setCount(Math.floor(start))
    },16)

    return()=>clearInterval(interval)
  },[value])

  return count
}

/* ---------------- page ---------------- */

export default function HighlightsPage(){

  const [index,setIndex]=useState(0)

  useEffect(()=>{
    const timer=setInterval(()=>{
      setIndex(i=>(i+1)%alumni.length)
    },4000)
    return ()=>clearInterval(timer)
  },[])

  return(
    <div className="bg-[#020617] text-white">

      {/* HERO */}
      <section
        className="relative h-[48vh] md:h-[52vh] flex flex-col items-center justify-start text-center px-6 pt-16 md:pt-20 bg-cover bg-center"
        style={{backgroundImage:"url('/images/footer-bg.png')"}}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/70 to-[#020617]/95"></div>

        <div className="relative z-10">

          <motion.h1
            initial={{opacity:0,y:-30}}
            animate={{opacity:1,y:0}}
            transition={{duration:.8}}
            className={`${playfair.className} text-5xl md:text-6xl font-bold mb-4`}
          >
            IET Lucknow Highlights
          </motion.h1>

          <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:.3}}
            className="text-lg text-white/90 max-w-xl"
          >
            Celebrating achievements and global impact created by the alumni of IET Lucknow.
          </motion.p>

        </div>
      </section>

      {/* STATS */}
   <section className="pt-6 pb-16 grid grid-cols-2 md:grid-cols-4 gap-14 text-center">

  {stats.map((s,i)=>{
    const Icon = s.icon
    return(
      <div key={i} className="space-y-4 flex flex-col items-center">

        <div className="bg-blue-500/10 p-4 rounded-full">
          <Icon size={34} className="text-blue-400"/>
        </div>

        <h2 className="text-5xl md:text-6xl font-extrabold text-blue-400">
          <Counter value={s.number}/>+
        </h2>

        <p className="text-lg text-white/70 tracking-wide">
          {s.label}
        </p>

      </div>
    )
  })}

</section>
      {/* SLIDER */}
      <section className="px-6 pb-28">

        <h2 className={`${playfair.className} text-3xl font-bold text-center mb-14`}>
          Distinguished Alumni
        </h2>

        <div
          id="slider"
          className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide px-2 md:px-10 snap-x snap-mandatory"
        >

          {alumni.map((a,i)=>(
            <motion.div
              key={i}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:i*.1}}
              className="snap-center min-w-[280px] bg-[#0f172a] rounded-2xl overflow-hidden shadow-lg"
            >
              
              <div className="overflow-hidden">
                <img
                  src={a.img}
                  className="h-64 w-full object-cover object-top transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">{a.name}</h3>
                <p className="text-blue-400 text-sm mb-2">{a.role}</p>
                <p className="text-white/70 text-sm">{a.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* SPOTLIGHT */}
      <section className="py-24 text-center">

        <h2 className={`${playfair.className} text-3xl font-bold mb-14`}>
          Success Spotlight
        </h2>

        <div className="relative h-[380px]">

          {alumni.map((a,i)=>(
            <motion.div
              key={i}
              animate={{opacity:i===index?1:0}}
              transition={{duration:.7}}
              className="absolute inset-0 flex flex-col items-center justify-center px-6"
            >
              {i===index &&(
                <>
                  <img
                    src={a.img}
                    className="w-44 h-44 rounded-full object-cover object-top border-4 border-blue-500 mb-5"
                  />
                  <h3 className="text-2xl font-semibold">{a.name}</h3>
                  <p className="text-blue-400 mb-2">{a.role}</p>
                  <p className="text-white/70 max-w-md">{a.desc}</p>
                </>
              )}
            </motion.div>
          ))}

        </div>
      </section>

      {/* QUOTE */}
      <section className="py-28 px-6 text-center bg-[#020617]">

        <motion.blockquote
          initial={{opacity:0,scale:.9}}
          whileInView={{opacity:1,scale:1}}
          viewport={{once:true}}
          transition={{duration:.6}}
          className={`${playfair.className} text-2xl md:text-3xl italic text-white/90 max-w-3xl mx-auto leading-relaxed`}
        >
          “IET Lucknow doesn’t just create engineers — it creates innovators,
          leaders, and visionaries who shape the future.”
        </motion.blockquote>

      </section>

    </div>
  )
}