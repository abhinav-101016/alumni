import Image from "next/image";

export default function ProgrammingPurpose() {
  const cards = [
    {
      title: "Career Pathways at IET",
      desc: "Access exclusive opportunities shared by IET Lucknow alumni including referrals, industry openings, and guidance from graduates working across leading tech, core, and research organizations.",
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop",
      cta: "View Opportunities",
    },
    {
      title: "Student–Alumni Collaboration",
      desc: "Current IET students receive direct mentorship, internship referrals, and practical career insights from seniors who once walked the same campus corridors.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop",
      cta: "Get Guidance",
    },
    {
      title: "IET Mentorship Network",
      desc: "Connect with experienced IET Lucknow graduates who help you navigate career decisions, build strong skills, and grow with confidence in competitive industries.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
      cta: "Find a Mentor",
    },
  ];

  return (
    <section className="w-full py-32 bg-slate-50 text-slate-900">

      {/* Heading */}
      <div className="text-center mb-24 px-6">
        <h2 className="[font-family:var(--font-playfair)] text-4xl md:text-5xl font-bold tracking-tight">
          Strengthening the IET Lucknow Community
        </h2>

        <div className="mt-5 w-24 h-[2px] bg-blue-500 mx-auto"/>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
          The IET Lucknow alumni network bridges generations of students and graduates,
          creating opportunities for mentorship, collaboration, and professional growth.
        </p>
      </div>

      {/* Stacked Cards */}
      <div className="max-w-5xl mx-auto px-6 space-y-16">

        {cards.map((card, i) => (
          <div
            key={i}
            className="group flex flex-col md:flex-row bg-white border border-slate-200
            shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >

            {/* Image */}
            <div className="relative w-full md:w-1/2 h-[320px] md:h-[420px] overflow-hidden">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-12 md:w-1/2">

              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-5">
                {card.title}
              </h3>

              <p className="text-slate-600 text-lg leading-relaxed mb-9">
                {card.desc}
              </p>

              <button className="self-start px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold
              hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-xl">
                {card.cta}
              </button>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
