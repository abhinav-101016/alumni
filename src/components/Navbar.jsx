"use client"
import { useState } from "react"
import { Menu, X, Search, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/", options: ["Overview", "Highlights", "Announcements"] },
    { name: "About", href: "/about", options: ["Our Mission", "Leadership", "History"] },
    { name: "Alumni", href: "/alumni", options: ["Directory", "Success Stories", "Chapters"] },
    { name: "Events", href: "/events", options: ["Upcoming", "Past Events", "Reunions"] },
    { name: "Contact", href: "/contact", options: ["Support", "FAQs", "Reach Us"] },
  ]

  return (
    <header className="sticky top-0 z-50 w-full">

      <nav className="w-full backdrop-blur-xl border-b border-white/10 shadow-xl
      bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#1e3a8a]">

        {/* TOP BAR */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-6">

          {/* LOGO */}
          <a href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center font-bold text-white text-lg">
              A
            </div>
            <span className="text-white font-semibold text-2xl tracking-wide">
              Alumni<span className="text-blue-300">Portal</span>
            </span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">

            {navItems.map(item => (
              <div key={item.name} className="relative group">

                {/* Nav Label */}
                <a
                  href={item.href}
                  className="text-white/90 hover:text-white text-lg font-medium flex items-center gap-1 transition"
                >
                  {item.name}
                  {item.options && <ChevronDown size={18}/>}
                </a>

                {/* Hover bridge */}
                <div className="absolute left-0 right-0 h-5 top-full"></div>

                {/* Dropdown */}
                {item.options && (
                  <div
                    className="absolute left-0 top-full mt-2 w-56
                    bg-[#0f172a] border border-white/10 shadow-2xl
                    opacity-0 invisible scale-95
                    group-hover:opacity-100 group-hover:visible group-hover:scale-100
                    transition-all duration-200 origin-top"
                  >
                    {item.options.map(opt => (
                      <a
                        key={opt}
                        href={`/${opt.toLowerCase().replace(/\s/g,"-")}`}
                        className="block px-6 py-3 text-sm text-white/80
                        hover:text-white hover:bg-white/5 transition"
                      >
                        {opt}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* Desktop Search */}
            <div className="hidden md:flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-xl">
              <Search size={18} className="text-white/80"/>
              <input
                placeholder="Search alumni..."
                className="bg-transparent outline-none text-white placeholder:text-white/60 w-32 focus:w-48 transition-all"
              />
            </div>

            {/* Login */}
            <button className="hidden lg:block px-6 py-2.5 rounded-xl font-medium text-white
              bg-gradient-to-r from-blue-500 to-blue-700
              hover:from-blue-600 hover:to-blue-800
              shadow-lg transition">
              Login
            </button>

            {/* Mobile Search */}
            <button
              onClick={()=>setSearchOpen(!searchOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10">
              <Search size={24}/>
            </button>

            {/* Menu Toggle */}
            <button
              onClick={()=>setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10">
              {menuOpen ? <X size={28}/> : <Menu size={28}/> }
            </button>

          </div>
        </div>

        {/* MOBILE SEARCH */}
        <div className={`lg:hidden overflow-hidden transition-all ${searchOpen ? "max-h-24 py-4" : "max-h-0"}`}>
          <div className="px-6">
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
        <div className={`lg:hidden overflow-hidden transition-all ${menuOpen ? "max-h-[600px] py-6" : "max-h-0"}`}>
          <div className="flex flex-col gap-5 px-6 text-white">

            {navItems.map(item => (
              <div key={item.name}>

                <div
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.name ? null : item.name)
                  }
                  className="flex justify-between items-center text-xl border-b border-white/10 pb-2 cursor-pointer"
                >
                  {item.name}
                  {item.options && <ChevronDown size={20}/>}
                </div>

                {item.options && (
                  <div className={`overflow-hidden transition-all
                  ${activeDropdown === item.name ? "max-h-60 mt-2" : "max-h-0"}`}>
                    {item.options.map(opt => (
                      <a
                        key={opt}
                        href={`/${opt.toLowerCase().replace(/\s/g,"-")}`}
                        className="block pl-4 py-2 text-white/70 hover:text-white"
                      >
                        {opt}
                      </a>
                    ))}
                  </div>
                )}
              </div>
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
