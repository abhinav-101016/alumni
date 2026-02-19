"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa"; // small circle icon for bullet points

const members = [
  {
    name: "Pradeep Mishra (CE 1991)",
    role: "Member I",
    phone: "+91-9313325973",
    
    social: "@Pradeep1299",
    location: "New Delhi",
    highlights: [
      "Founder & CMD of REPL: Integrated Urban Development & Infrastructure Consultancy company, listed at NSE",
      "Director in NMBPL: A leading Real Estate Developer & EPC firm",
      "Director in RIPL: Digital Transformation Partner for AEC Sector",
      "Promoter of Apnaghar: India’s first Online Architectural Design Company",
      "Chairman of REPL Sports: Initiative to bring Sports in Everyday Life",
      "Actively involved in Smart Cities, Hi-tech Townships, PMAY, and Real Estate projects",
      "Member of academic board in IET Lucknow and executive council in HBTU Kanpur",
      "Recipient of 'Economic Times Promising Entrepreneurs of India, 2016' award"
    ],
    image: "/images/pradeep_mishra.png",
  },
  {
    name: "Shakti Pratap Singh (EE 1994)",
    role: "Member II",
    phone: "+91-7007158911",
   
    social: "@Shakti792",
    location: "Lucknow",
    highlights: [
      "Joint Commissioner, Commercial Taxes and GST Lucknow",
      "Master Trainer of GST, conducts seminars for Advocates, CAs, Tax Officers, Entrepreneurs",
      "Previously worked in UP State Electricity Board as Assistant Engineer",
      "Worked in BHEL and selected in several PSUs and engineering services",
      "Guest faculty in IET for 1 year",
      "Red-one belt in Taekwondo and regularly practices Vipassana"
    ],
    image: "/images/shakti_pratap_singh.png",
  },
  {
    name: "Sarthak Verma (ME 2008)",
    role: "Member III",
    phone: "+91-9838641122",
    
    social: "@Sarthak1858",
    location: "Lucknow",
    highlights: [
      "Managing Director of Sushma Hospital & Research Centre Pvt Ltd, 50-bed NABH-accredited multi-specialty hospital since 2008",
      "Completed General Management Programme for Executives at IIM Lucknow in 2023, topper of the batch",
      "Sushma Hospital designated as a Covid Hospital during the pandemic",
      "NTSE scholar, 99.93 percentile in CAT 2007, appeared in UPSC CSE interview 4 times",
      "Honored by Deputy CM & Health Minister Mr. Brajesh Pathak for excellence in healthcare services"
    ],
    image: "/images/sarthak_verma.png",
  },
];

export default function AdvisoryCommittee() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main className="container mx-auto px-6 py-12">
        {/* Main Heading */}
        <h1
          className="text-4xl font-bold text-blue-900 mb-2 text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Advisory Committee 2023–2027
        </h1>
        <p className="text-center text-gray-700 mb-10 text-xl font-semibold">
          IET Lucknow Alumni Association
        </p>

        {/* Pyramid Layout */}
        <div className="flex flex-col gap-10">
          {/* Top Row: 2 cards */}
          <div className="flex flex-col md:flex-row md:space-x-10 justify-center gap-10">
            {members.slice(0, 2).map((member, i) => (
              <MemberCard key={i} member={member} visible={visible} />
            ))}
          </div>

          {/* Bottom Row: 1 card centered */}
          <div className="flex justify-center">
            <MemberCard member={members[2]} visible={visible} />
          </div>
        </div>
      </main>
    </div>
  );
}

// Horizontal Member Card with bullet points
function MemberCard({ member, visible }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 ease-in-out hover:scale-102 hover:shadow-xl opacity-0 ${
        visible ? "opacity-100 translate-y-0" : "translate-y-10"
      } max-w-2xl w-full flex`}
    >
      {/* Image */}
      <div className="relative w-full md:w-48 h-64 md:h-auto flex-shrink-0">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-6 flex-1">
        <h2
          className="text-2xl font-semibold mb-2 text-blue-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {member.name}
        </h2>
        <span className="inline-block px-3 py-1 bg-gray-800 text-white text-sm rounded mb-3">
          {member.role}
        </span>
        <p className="text-gray-700 mb-1 leading-relaxed">
          <strong>Phone:</strong> {member.phone}
        </p>
        
        <p className="text-gray-700 mb-1 leading-relaxed">
          <strong>Social:</strong> {member.social}
        </p>
        <p className="text-gray-700 mb-3 leading-relaxed">
          <strong>Location:</strong> {member.location}
        </p>
        <p className="text-gray-700 font-medium mb-2">Professional Highlights:</p>
        <ul className="space-y-2">
          {member.highlights.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start text-gray-700 leading-relaxed"
            >
              <FaCircle className="text-blue-900 mt-2 mr-2 text-[0.5rem]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
