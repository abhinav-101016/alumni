"use client"
import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

export default function SignupForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    course: "",
    branch: "",
    passingYear: "",
    hostel: "",
    city: "",
    country: "",
    emailPrivate: false,
    phonePrivate: false,
    password: "",
    bloodGroup: "",
    bio: "",
    profilePic: null,
    socialLinks: { linkedin: "", github: "", twitter: "" },
  })

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === "checkbox")
      setFormData({ ...formData, [name]: checked })

    else if (type === "file")
      setFormData({ ...formData, [name]: files[0] })

    else if (name.includes("socialLinks.")) {
      const key = name.split(".")[1]
      setFormData({
        ...formData,
        socialLinks: { ...formData.socialLinks, [key]: value }
      })
    }
    else
      setFormData({ ...formData, [name]: value })
  }

  /* ---------- SMALL TOGGLE ---------- */

 const Toggle = ({ name, checked }) => (
  <div className="flex items-center gap-2">

    {/* switch */}
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
        className="sr-only peer"
      />

      <div className="
        w-9 h-5 bg-gray-600 rounded-full
        peer-checked:bg-blue-600
        transition-colors
      "/>

      <div className="
        absolute left-0.5 top-0.5
        w-4 h-4 bg-white rounded-full
        transition-transform
        peer-checked:translate-x-4
      "/>
    </label>

    {/* label */}
    <span className="text-xs text-white/70">
      {checked ? "Private" : "Public"}
    </span>

  </div>
)

  /* ---------- DROPDOWN ---------- */

  const Dropdown = ({ name, value, options, placeholder }) => {

    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
      const close = e => {
        if (ref.current && !ref.current.contains(e.target))
          setOpen(false)
      }
      document.addEventListener("mousedown", close)
      return () => document.removeEventListener("mousedown", close)
    }, [])

    const select = (val) => {
      setFormData(prev => ({ ...prev, [name]: val }))
      setOpen(false)
    }

    return (
      <div ref={ref} className="relative">

        <div
          onClick={() => setOpen(!open)}
          className="w-full border border-white/20 rounded-xl px-4 py-2.5
          bg-[#020617] text-white cursor-pointer
          flex justify-between items-center hover:border-white/40"
        >
          <span className={value ? "text-white" : "text-gray-400"}>
            {value || placeholder}
          </span>
          <ChevronDown className={`${open ? "rotate-180" : ""} transition`} />
        </div>

        {open && (
          <div className="absolute z-50 mt-2 w-full rounded-xl
          border border-white/10 bg-[#020617] shadow-xl max-h-60 overflow-y-auto">

            {options.map(opt => (
              <div
                key={opt}
                onClick={() => select(opt)}
                className="px-4 py-2 cursor-pointer hover:bg-blue-600/30"
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  /* ---------- INPUT ---------- */

  const Input = ({ label, name, type="text" }) => (
    <div className="flex flex-col">
      <label className="mb-1 text-sm text-white/80">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name] || ""}
        onChange={handleChange}
        className="border border-white/20 rounded-xl px-4 py-2.5
        bg-[#020617] text-white focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  )

  /* ---------- DATA ---------- */

  const courses = ["B.Tech","M.Tech","MCA","MBA","PhD"]
  const branches = ["CSE-R","CSE-SF","CSE-Ai","ECE","Mechanical","Civil","EE","Chemical"]
  const hostels = [
    "Ramanujan Hostel","Aryabhatta Hostel","Kailash Narayan Hostel",
    "Raman-A","Raman-B","Visvesvaraya-A","Visvesvaraya-B",
    "Bhabha Hostel","RML Hostel","Apala Bhawan",
    "Sarojini Bhawan","Maitriya Hostel","Gargi Hostel"
  ]
  const bloodGroups = ["A+","A-","B+","B-","AB+","AB-","O+","O-"]

  /* ---------- UI ---------- */

  return (
    <div className="min-h-screen flex items-center justify-center
      bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e3a8a] p-6">

      <div className="w-full max-w-3xl bg-[#0f172a]
        border border-white/10 shadow-2xl p-8 rounded-2xl">

        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Create Account
        </h2>

        <form className="grid md:grid-cols-2 gap-5">

          <Input label="Full Name" name="name"/>

          {/* EMAIL */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm text-white/80">Email</label>
              <Toggle name="emailPrivate" checked={formData.emailPrivate}/>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-white/20 rounded-xl px-4 py-2.5
              bg-[#020617] text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* PHONE */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm text-white/80">Phone</label>
              <Toggle name="phonePrivate" checked={formData.phonePrivate}/>
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-white/20 rounded-xl px-4 py-2.5
              bg-[#020617] text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <Dropdown name="gender" value={formData.gender}
            options={["Male","Female","Other"]} placeholder="Gender"/>

          <Input label="Date of Birth" name="dob" type="date"/>

          <Dropdown name="course" value={formData.course}
            options={courses} placeholder="Course"/>

          <Dropdown name="branch" value={formData.branch}
            options={branches} placeholder="Branch"/>

          <Input label="Passing Year" name="passingYear" type="number"/>

          <Dropdown name="hostel" value={formData.hostel}
            options={hostels} placeholder="Hostel"/>

          <Input label="City" name="city"/>
          <Input label="Country" name="country"/>
          <Input label="Password" name="password" type="password"/>

          <Dropdown name="bloodGroup" value={formData.bloodGroup}
            options={bloodGroups} placeholder="Blood Group"/>

          <div className="md:col-span-2">
            <label className="text-sm text-white/80">Bio</label>
            <textarea
              name="bio"
              rows={3}
              value={formData.bio}
              onChange={handleChange}
              className="mt-1 w-full border border-white/20 rounded-xl px-4 py-2.5
              bg-[#020617] text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {["linkedin","github","twitter"].map(site => (
            <Input
              key={site}
              label={site.charAt(0).toUpperCase()+site.slice(1)}
              name={`socialLinks.${site}`}
            />
          ))}

          <div className="md:col-span-2 flex flex-col items-center gap-3 mt-4">

            <button
              type="submit"
              className="w-full md:w-1/2 py-3 font-semibold text-white
              rounded-xl bg-gradient-to-r from-blue-500 to-blue-700
              hover:from-blue-600 hover:to-blue-800 shadow-lg transition">
              Sign Up
            </button>

            <p className="text-sm text-white/70">
              Already have an account?{" "}
              <a href="/login" className="text-blue-400 hover:text-blue-300 font-medium">
                Login
              </a>
            </p>

          </div>

        </form>
      </div>
    </div>
  )
}