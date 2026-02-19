"use client"
import { useState } from "react"

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
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked })
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] })
    } else if (name.includes("socialLinks.")) {
      const key = name.split(".")[1]
      setFormData({ ...formData, socialLinks: { ...formData.socialLinks, [key]: value } })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Add submit logic here
  }

  const courses = ["B.Tech", "M.Tech", "PhD"]
  const branches = ["CSE", "ECE", "Mechanical", "Civil", "EE", "IT"]
  const hostels = ["Hostel A", "Hostel B", "Hostel C", "Hostel D"]
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

  const selectClass =
    "border border-white/20 rounded-lg px-4 py-2 bg-transparent text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 outline-none appearance-none relative pr-10"

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e3a8a] p-4">
      <div className="relative w-full max-w-5xl p-8 bg-[#0f172a] rounded-3xl shadow-2xl border border-white/10
        before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/5 before:via-white/2 before:blur-xl before:rounded-3xl">
        <h2 className="text-3xl font-bold text-white text-center mb-8 z-10 relative">Sign Up</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10" onSubmit={handleSubmit}>

          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-white/90">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="border border-white/20 rounded-lg px-4 py-2 bg-transparent text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 outline-none hover:border-white/30 transition"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-white/90">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="border border-white/20 rounded-lg px-4 py-2 bg-transparent text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 outline-none hover:border-white/30 transition"
              required
            />
            <div className="flex items-center gap-2 mt-1">
              <input
                type="checkbox"
                name="emailPrivate"
                checked={formData.emailPrivate}
                onChange={handleChange}
                className="w-4 h-4 accent-blue-500"
              />
              <span className="text-sm text-white/70">Make email private</span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-white/90">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="border border-white/20 rounded-lg px-4 py-2 bg-transparent text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 outline-none hover:border-white/30 transition"
              required
            />
            <div className="flex items-center gap-2 mt-1">
              <input
                type="checkbox"
                name="phonePrivate"
                checked={formData.phonePrivate}
                onChange={handleChange}
                className="w-4 h-4 accent-blue-500"
              />
              <span className="text-sm text-white/70">Make phone private</span>
            </div>
          </div>

          {/* Gender */}
          <div className="flex flex-col relative">
            <label className="mb-1 font-medium text-white/90">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={selectClass}
              required
            >
              <option value="" className="text-black">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* DOB */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-white/90">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="border border-white/20 rounded-lg px-4 py-2 bg-transparent text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 outline-none hover:border-white/30 transition"
              required
            />
          </div>

          {/* Course */}
          <div className="flex flex-col relative">
            <label className="mb-1 font-medium text-white/90">Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className={selectClass}
              required
            >
              <option value="">Select course</option>
              {courses.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* Branch */}
          <div className="flex flex-col relative">
            <label className="mb-1 font-medium text-white/90">Branch</label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className={selectClass}
              required
            >
              <option value="">Select branch</option>
              {branches.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          {/* Passing Year */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-white/90">Passing Year</label>
            <input
              type="number"
              name="passingYear"
              value={formData.passingYear}
              onChange={handleChange}
              placeholder="2026"
              min="1900"
              max="2100"
              className="border border-white/20 rounded-lg px-4 py-2 bg-transparent text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 outline-none hover:border-white/30 transition"
              required
            />
          </div>

          {/* Hostel */}
          <div className="flex flex-col relative">
            <label className="mb-1 font-medium text-white/90">Hostel</label>
            <select
              name="hostel"
              value={formData.hostel}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Select hostel</option>
              {hostels.map(h => <option key={h} value={h}>{h}</option>)}
            </select>
          </div>

          {/* City */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-white/90">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Lucknow"
              className="border border-white/20 rounded-lg px-4 py-2 bg-transparent text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 outline-none hover:border-white/30 transition"
            />
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-white/90">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="India"
              className="border border-white/20 rounded-lg px-4 py-2 bg-transparent text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 outline-none hover:border-white/30 transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-white/90">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="border border-white/20 rounded-lg px-4 py-2 bg-transparent text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 outline-none hover:border-white/30 transition"
              required
            />
          </div>

          {/* Blood Group */}
          <div className="flex flex-col relative">
            <label className="mb-1 font-medium text-white/90">Blood Group</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className={selectClass}
            >
              <option value="">Select blood group</option>
              {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
            </select>
          </div>

          {/* Bio */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 font-medium text-white/90">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
              className="border border-white/20 rounded-lg px-4 py-2 bg-transparent text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 outline-none resize-none hover:border-white/30 transition"
              rows={3}
            />
          </div>

          {/* Profile Picture */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-white/90">Profile Picture</label>
            <input
              type="file"
              name="profilePic"
              onChange={handleChange}
              accept="image/*"
              className="border border-white/20 rounded-lg px-4 py-2 bg-transparent text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 outline-none hover:border-white/30 transition"
            />
          </div>

          {/* Social Links */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-white/90">LinkedIn</label>
            <input
              type="url"
              name="socialLinks.linkedin"
              value={formData.socialLinks.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/username"
              className="border border-white/20 rounded-lg px-4 py-2 bg-transparent text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 outline-none hover:border-white/30 transition"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-white/90">GitHub</label>
            <input
              type="url"
              name="socialLinks.github"
              value={formData.socialLinks.github}
              onChange={handleChange}
              placeholder="https://github.com/username"
              className="border border-white/20 rounded-lg px-4 py-2 bg-transparent text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 outline-none hover:border-white/30 transition"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-white/90">Twitter</label>
            <input
              type="url"
              name="socialLinks.twitter"
              value={formData.socialLinks.twitter}
              onChange={handleChange}
              placeholder="https://twitter.com/username"
              className="border border-white/20 rounded-lg px-4 py-2 bg-transparent text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 outline-none hover:border-white/30 transition"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition"
            >
              Sign Up
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
