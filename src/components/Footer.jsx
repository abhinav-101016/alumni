import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative w-full px-[10%] py-16 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/footer-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/85 to-black/75 z-0" />

      {/* Bluish texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_70%)] z-0" />

      {/* Content */}
      <div className="relative z-10">

        <div className="flex flex-wrap justify-between gap-12">

          {/* Column 1 */}
          <div className="min-w-[220px] flex-1">
            <h4 className="uppercase tracking-wider text-sm border-b border-white/20 pb-2 mb-5 font-semibold">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="#" className="hover:text-blue-400 transition-all hover:pl-1">Get in Touch</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-all hover:pl-1">Frequently Asked Questions</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-all hover:pl-1">Update Contact Information</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-all hover:pl-1">Submit Alumni News</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-all hover:pl-1">Submit an Obituary</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="min-w-[220px] flex-1">
            <h4 className="uppercase tracking-wider text-sm border-b border-white/20 pb-2 mb-5 font-semibold">
              About IET Alumni
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="#" className="hover:text-blue-400 transition-all hover:pl-1">About the Association</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-all hover:pl-1">Events & Reunions</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-all hover:pl-1">Alumni Stories</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-all hover:pl-1">Career Resources</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-all hover:pl-1">Chapters & Networks</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="min-w-[220px] flex-1">
            <h4 className="uppercase tracking-wider text-sm border-b border-white/20 pb-2 mb-5 font-semibold">
              Alumni Resources
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="#" className="hover:text-blue-400 transition-all hover:pl-1">Alumni Portal Login</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-all hover:pl-1">Membership Benefits</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-all hover:pl-1">Support & Donations</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-all hover:pl-1">Volunteer Opportunities</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-all hover:pl-1">Mentorship Program</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="min-w-[220px] flex-1">
            <h4 className="uppercase tracking-wider text-sm border-b border-white/20 pb-2 mb-5 font-semibold">
              Connect With Us
            </h4>
            <div className="space-y-2 text-sm text-slate-300">
              <Link href="#" className="block hover:text-blue-400 transition">Facebook</Link>
              <Link href="#" className="block hover:text-blue-400 transition">LinkedIn</Link>
              <Link href="#" className="block hover:text-blue-400 transition">Instagram</Link>
              <Link href="#" className="block hover:text-blue-400 transition">YouTube</Link>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 pt-6 text-sm leading-relaxed text-slate-400">
          <strong className="text-white">
            Institute of Engineering and Technology Lucknow Alumni Association
          </strong>
          <br />
          IET Lucknow Campus, Sitapur Road, Lucknow – 226021, Uttar Pradesh, India
          <br />
          Email: alumni@ietlucknow.ac.in | Phone: +91-0522-XXXXXXX
        </div>

        {/* Bottom */}
        <div className="mt-6 text-xs text-slate-500">
          © 2026 Institute of Engineering and Technology Lucknow Alumni Association. All rights reserved. |
          <Link href="#" className="underline hover:text-blue-400 ml-1 mr-1">
            Privacy Policy
          </Link> |
          <Link href="#" className="underline hover:text-blue-400 ml-1">
            Terms of Use
          </Link>
        </div>

      </div>
    </footer>
  );
}
