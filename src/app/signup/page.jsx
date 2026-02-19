"use client"
import { useState } from "react"
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

  const courses = ["B.Tech","M.Tech","PhD"]
  const branches = ["CSE","ECE","Mechanical","Civil","EE","IT"]
  const hostels = ["Hostel A","Hostel B","Hostel C","Hostel D"]
  const bloodGroups = ["A+","A-","B+","B-","AB+","AB-","O+","O-"]

  const Dropdown = ({ name, value, options, placeholder }) => (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="w-full border border-white/20 rounded-xl px-4 py-2.5
        bg-[#020617] text-white
        focus:ring-2 focus:ring-blue-500 outline-none
        hover:border-white/40 transition appearance-none"
      >
        <option value="" className="bg-[#020617] text-gray-400">{placeholder}</option>
        {options.map(opt => (
          <option key={opt} value={opt} className="bg-[#020617] text-white">
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none"/>
    </div>
  )

const Input = ({ label, name, type="text" }) => {

  const getAutoComplete = () => {
    if(name === "email") return "email"
    if(name === "phone") return "tel"
    if(name === "password") return "new-password"
    if(name === "name") return "name"
    if(name === "city") return "address-level2"
    if(name === "country") return "country"
    if(name === "dob") return "bday"
    return "off"
  }

  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm text-white/80">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name] || ""}
        onChange={handleChange}
        autoComplete={getAutoComplete()}
        className="border border-white/20 rounded-xl px-4 py-2.5
        bg-[#020617] text-white
        focus:ring-2 focus:ring-blue-500 outline-none
        hover:border-white/40 transition"
      />
    </div>
  )
}

  return (
    <div className="min-h-screen flex items-center justify-center
      bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e3a8a] p-6">

      <div className="w-full max-w-3xl bg-[#0f172a]
        border border-white/10 shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Create Account
        </h2>

        <form className="grid md:grid-cols-2 gap-5">

          <Input label="Full Name" name="name"/>
          <Input label="Email" name="email" type="email"/>
          <Input label="Phone" name="phone"/>

          <Dropdown name="gender" value={formData.gender}
            options={["Male","Female","Other"]}
            placeholder="Select Gender"
          />

          <Input label="Date of Birth" name="dob" type="date"/>
          <Dropdown name="course" value={formData.course} options={courses} placeholder="Course"/>
          <Dropdown name="branch" value={formData.branch} options={branches} placeholder="Branch"/>
          <Input label="Passing Year" name="passingYear" type="number"/>
          <Dropdown name="hostel" value={formData.hostel} options={hostels} placeholder="Hostel"/>
          <Input label="City" name="city"/>
          <Input label="Country" name="country"/>
          <Input label="Password" name="password" type="password"/>
          <Dropdown name="bloodGroup" value={formData.bloodGroup} options={bloodGroups} placeholder="Blood Group"/>

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
              rounded-xl
              bg-gradient-to-r from-blue-500 to-blue-700
              hover:from-blue-600 hover:to-blue-800
              shadow-lg transition"
            >
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
