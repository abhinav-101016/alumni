"use client"
import { useState } from "react"
import { Menu, X, Search, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const links = ["Home", "About", "Alumni", "Events", "Contact"]

  return (
    <header className="sticky top-0 z-50 w-full">

      <nav className="w-full backdrop-blur-xl border-b border-white/10 shadow-xl
      bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#1e3a8a]
      bg-[length:200%_200%] animate-gradientMove">

        <div className="flex items-center justify-between px-5 sm:px-8 py-4">

          {/* LOGO */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center font-bold text-white">
              A
            </div>
            <span className="text-white font-semibold text-xl tracking-wide">
              Alumni<span className="text-blue-300">Portal</span>
            </span>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">

            {links.map(link => (
              <a
                key={link}
                className="group relative text-white/90 hover:text-white font-medium flex items-center gap-1"
              >
                {link}
                <ChevronDown size={16} className="opacity-70 group-hover:rotate-180 transition"/>

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-300 to-white group-hover:w-full transition-all"/>
              </a>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* SEARCH DESKTOP */}
            <div className="hidden md:flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-2 rounded-xl">
              <Search size={16} className="text-white/80"/>
              <input
                placeholder="Search alumni..."
                className="bg-transparent outline-none text-sm text-white placeholder:text-white/60 w-28 focus:w-44 transition-all"
              />
            </div>

            {/* LOGIN */}
            <button className="hidden lg:block px-5 py-2 rounded-xl font-medium text-white
              bg-gradient-to-r from-blue-500 to-blue-700
              hover:from-blue-600 hover:to-blue-800
              shadow-lg transition">
              Login
            </button>

            {/* MOBILE SEARCH */}
            <button
              onClick={()=>setSearchOpen(!searchOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10">
              <Search size={22}/>
            </button>

            {/* MENU */}
            <button
              onClick={()=>setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10">
              {menuOpen ? <X size={26}/> : <Menu size={26}/>}
            </button>

          </div>
        </div>

        {/* MOBILE SEARCH */}
        <div className={`lg:hidden overflow-hidden transition-all ${searchOpen ? "max-h-24 py-4" : "max-h-0"}`}>
          <div className="px-5">
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-3 rounded-xl">
              <Search size={18} className="text-white/80"/>
              <input
                placeholder="Search alumni..."
                className="w-full bg-transparent outline-none text-white placeholder:text-white/60"
              />
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`lg:hidden overflow-hidden transition-all ${menuOpen ? "max-h-[400px] py-6" : "max-h-0"}`}>
          <div className="flex flex-col gap-4 px-6 text-white">

            {links.map(link => (
              <a key={link} className="text-lg border-b border-white/10 pb-2">
                {link}
              </a>
            ))}

            <button className="mt-3 bg-gradient-to-r from-blue-500 to-blue-700 py-3 rounded-xl font-semibold">
              Login
            </button>

          </div>
        </div>

      </nav>
    </header>
  )
}
