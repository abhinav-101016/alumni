"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa"; // small circle icon for bullet points

const members = [
  {
    name: "Anupma Singh (EC 1993)",
    role: "President",
    phone: "9532718869",
    location: "Gorakhpur",
    highlights: [
      "Worked with LML Limited, Kanpur for 5 years and did MBA in Operation management in parallel.",
      "Since 2000 I have worked part time.",
      "Started a play school in Gorakhpur itself.",
      "In 1993 batch silver jubilee, arranged tree plantation on behalf of our batch.",
      "Do social work like free distribution of medicines, Environmental aspects etc.",
      "In 2018, on Silver Jubilee of 1993 pass out batch, arranged plantation of rare flowering plant Yellow and Pink Tabebuia Rosea in IET.",
    ],
    image: "/images/anupma_singh.png",
  },
  {
    name: "Mrigendra Kumar Anil (CE 1995)",
    role: "Vice President",
    phone: "7007331492",
    location: "Hardoi",
    highlights: [
      "Superintending Engineer, UP PWD, Agra",
      "Assignment from World Bank Project under UPPWD (AE, 1999 to 2004)",
      "Road Project under PMGSY scheme (AE, 2004 to 2013)",
      "National Highway Project (AE, 2013 to 2015)",
      "Agra-Lucknow express way Project (Project Director, 2015 to 2018)",
      "Purvanchal Express way Project (Project Director, 2018 to 2023)",
    ],
    image: "/images/mrigendra_kumar.png",
  },
  {
    name: "Ashish Yadav (CE 2008)",
    role: "General Secretary",
    phone: "8004360920",
    location: "Lucknow",
    highlights: [
      "Executive Engineer UP Irrigation Department, Government of UP",
      "Past work experience in Bharat Heavy Electricals Ltd and UP Power Corporation Ltd.",
      "General Secretary, UP Engineers Association",
      "Principle Secretary General, UP Adhikari Maha parishad",
      "Secretary General, Indian Engineers Federation (Northern)",
    ],
    image: "/images/ashish_yadav.png",
  },
  {
    name: "Sachin Kumar Jaiswal (EE 2008)",
    role: "Treasurer",
    phone: "7705005684",
    location: "Lucknow",
    highlights: [
      "Assistant Manager, Uttar Pradesh Metro Rail Corporation (UPMRCL)",
      "Joined in 2016 and currently posted in Kanpur",
      "After completing studies, joined the Delhi Metro Rail Corporation (DMRC)",
    ],
    image: "/images/sachin_jaiswal.png",
  },
  {
    name: "Harshad Das (CE 2015)",
    role: "Secretary-I",
    phone: "97958556780",
    location: "Varanasi",
    highlights: [
      "Joined Indian Oil Corporation through GATE exam in 2016.",
      "Worked at Jaunpur, Azamgarh, Mau and Chandauli looking after Petrol and LPG network of Indian Oil.",
      "Currently working as Manager in Indian Oil Corporation at Varanasi.",
      "Was part of the organising committee for launch of Ujjwala Phase-2 by Hon’ble Petroleum Minister.",
      "Was involved in automation of Petrol Pumps in Varanasi divisional Office.",
    ],
    image: "/images/harshad_das.png",
  },
  {
    name: "Srishti Singh (CE 2023)",
    role: "Secretary-II",
    phone: "8957437317",
    location: "Lucknow",
    highlights: [
      "Currently pursuing MBA from Indian Institute of Management, Rohtak (2nd year)",
      "Completed 2 months internship from Honda Motorcycle and Scooter India and selected as Best Intern",
      "Completed 1 month as a Trainee at Public Works Department, Sitapur",
      "Secured 96.78 percentile in CAT 2022; 97.34 in Quantitative Aptitude among 2.2 lakh+ applicants",
      "Achieved 99.06 percentile (AIR 1585) out of 190000 in UPSEE’19, 99.7 percentile among girl candidates",
    ],
    image: "/images/srishti_singh.png",
  },
];

export default function ExecutiveCommittee() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main className="container mx-auto px-6 py-12">
       <h1
  className="text-4xl font-bold text-blue-900 mb-2 text-center"
  style={{ fontFamily: "'Playfair Display', serif" }}
>
  Executive Committee 2024–2026
</h1>
<p className="text-center text-gray-700 mb-10 text-xl font-semibold">
  IET Lucknow Alumni Association
</p>

        <div className="grid md:grid-cols-2 gap-10">
          {members.map((member, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 ease-in-out hover:scale-102 hover:shadow-xl opacity-0 ${
                visible ? "opacity-100 translate-y-0" : "translate-y-10"
              }`}
            >
              <div className="flex flex-col md:flex-row">
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
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
