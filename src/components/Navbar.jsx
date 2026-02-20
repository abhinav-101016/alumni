"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Search, ChevronDown } from "lucide-react"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400","600","700"],
})

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/", options: [{name:"Overview",href:"/"},{name:"Highlights",href:"/highlights"}, "Announcements"] },
    {
      name: "About",
      href: "/about",
      options: [
        {name:"Our Mission", href:"/our-mission"},
        { name: "Executive Committee", href: "/committees/executive-committee" },
        { name: "Advisory Committee", href: "/committees/advisory-committee" },
        { name: "Constitution", href: "/constitution" },
      ]
    },
    { name: "Alumni", href: "/alumni", options: ["Directory", "Success Stories", "Chapters"] },
    { name: "Events", href: "/events", options: ["Upcoming", "Past Events", "Reunions"] },
    { name: "Contact", href: "/contact", options: ["Support", "FAQs", "Reach Us"] },
  ]

  const getOptionProps = (opt) => {
    if (typeof opt === "string") return { name: opt, href: `/${opt.toLowerCase().replace(/\s/g,"-")}` }
    return { name: opt.name, href: opt.href }
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="w-full backdrop-blur-xl border-b border-white/10 shadow-xl
        bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#1e3a8a]">

        {/* TOP BAR */}
        <div className="flex items-center justify-between px-4 sm:px-10 py-4 sm:py-5">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0">
              <Image
                src="/images/logo1.png"
                alt="IET Lucknow Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="font-bold uppercase tracking-wide text-white text-sm sm:text-lg">
                IET Lucknow
              </span>
              <span className={`${playfair.className} italic text-blue-300 text-sm sm:text-lg`}>
                alumni
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map(item => (
              <div key={item.name} className="relative group">

                <Link
                  href={item.href}
                  className="text-white/90 hover:text-white text-lg font-medium flex items-center gap-1 transition"
                >
                  {item.name}
                  {item.options && <ChevronDown size={18}/>}
                </Link>

                {item.options && (
                  <div
                    className="absolute left-0 top-full mt-2 w-56
                      bg-[#0f172a] border border-white/10 shadow-2xl
                      opacity-0 invisible scale-95
                      group-hover:opacity-100 group-hover:visible group-hover:scale-100
                      transition-all duration-200 origin-top rounded-xl overflow-hidden"
                  >
                    {item.options.map(opt => {
                      const { name, href } = getOptionProps(opt)
                      return (
                        <Link
                          key={name}
                          href={href}
                          className="block px-6 py-3 text-sm text-white/80
                            hover:text-white hover:bg-white/5 transition"
                        >
                          {name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* Desktop Search */}
            <div className="hidden md:flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-xl">
              <Search size={18} className="text-white/80"/>
              <input
                placeholder="Search alumni..."
                className="bg-transparent outline-none text-white placeholder:text-white/60 w-28 focus:w-44 transition-all"
              />
            </div>

            {/* SIGN UP BUTTON DESKTOP */}
            <Link
              href="/signup"
              className="hidden lg:block px-6 py-2.5 rounded-xl font-medium text-white
              bg-gradient-to-r from-blue-500 to-blue-700
              hover:from-blue-600 hover:to-blue-800
              shadow-lg transition text-center"
            >
              Sign Up
            </Link>

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
                    {item.options.map(opt => {
                      const { name, href } = getOptionProps(opt)
                      return (
                        <Link
                          key={name}
                          href={href}
                          className="block pl-4 py-2 text-white/70 hover:text-white"
                        >
                          {name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}

            {/* SIGN UP BUTTON MOBILE */}
            <Link
              href="/signup"
              className="mt-3 text-center bg-gradient-to-r from-blue-500 to-blue-700 py-3 rounded-xl font-semibold"
            >
              Sign Up
            </Link>

          </div>
        </div>

      </nav>
    </header>
  )
}
