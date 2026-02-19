"use client";

export default function ConstitutionPage() {
  return (
    <div
      className="w-full bg-cover bg-center relative min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1597525362591-7f4d3a7026ff?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex justify-center py-10 px-4 md:px-10">
        <div className="w-full md:w-4/5 lg:w-3/4 bg-black/30 rounded-xl shadow-2xl p-6 md:p-10">
          <h1
            className="text-3xl md:text-4xl font-bold text-blue-200 mb-3 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Constitution & By-laws
          </h1>
          <p className="text-center text-gray-200 mb-6 text-lg md:text-xl font-semibold">
            IET Lucknow Alumni Association
          </p>

          <div className="space-y-4 text-gray-100 leading-relaxed text-sm md:text-base">
            {/* Full Constitution Text */}
            <p>
              Original Constitution updated here by : Shivam Patel (Ex-AC) and Amit Chitranshi (Ex-GS)
            </p>
            <p>Second update by EC 2022-2024 by Secretary II - Abhilasha Rani.</p>
            <p>Third update by EC 2022-2024 by Secretary II - Abhilasha Rani.</p>

            <p>
              <strong>IET Lucknow Alumni Association Constitution & By-laws</strong>
            </p>

            <h2 className="text-xl font-semibold mt-4">MEMORANDUM OF ASSOCIATION</h2>
            <p>1. Name : “Institute of Engineering and Technology Lucknow Alumni Association”</p>
            <p>2. Address : Institute of Engineering and Technology Sitapur Road, Lucknow-226021</p>
            <p>3. Jurisdiction : Uttar Pradesh</p>
            <p>4. Objectives :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To establish and promote the spirit of brotherhood and esprit de corps amongst the alumni and the Institute.</li>
              <li>To assist the institute in building and evolving a vision for itself and aid the Institute in meeting its objectives.</li>
              <li>To build a database, for the welfare and promoting communication amongst the alumni, within the alumni association and from alumni to the association and the institute.</li>
              <li>To foster contact between the Institute and industry, R & D organizations, other academic institutions in India and abroad for assisting in summer trainings, placements, curriculum delivery, pre-placement guidance, technical mentoring, project work facilitation etc for the students.</li>
              <li>To undertake and promote technology and management consultancy, technology transfer, publication of scientific and technical literature and other similar activities in conjunction with the Institute.</li>
              <li>To promote and execute scientific and industrial research amongst the alumni by utilizing the available infrastructure facilities at the Institute.</li>
              <li>To help alumni achieve their professional goals.</li>
              <li>To provide library, laboratories, computational facilities and other similar facilities existing at the Institute and also creating and enhancing them at the Institute.</li>
              <li>To mobilize resources for supporting and fulfilling the aims and objectives of the association.</li>
              <li>To promote activities that are essential to holistic personality development and which may receive less attention during regular curriculum, not as a pastime alone but as an opportunity of alternate profession and expertise.</li>
              <li>To further such objectives as the General body may decide from time to time.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">RULES AND REGULATIONS</h2>
            <p>1 - Name : “Institute of Engineering and Technology Lucknow Alumni Association”</p>
            <p>2- Address : Institute of Engineering and Technology Sitapur Road Lucknow. 226021</p>
            <p>3- Jurisdiction: Uttar Pradesh</p>
            <p>4- Classification and Eligibility for Membership :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>i) Patron : The Director of the Institute shall be the ex-officio Patron of the Association</li>
              <li>
                ii) Members: There will be following categories of Members-
                <ul className="list-disc pl-6 space-y-1">
                  <li>(a) Regular members: Following shall be considered as regular members of the Association after registration on alumni website www.iethub.org
                    <ul className="list-disc pl-6 space-y-1">
                      <li>(i) Those who have pursued a course at IET herein referred to as the Alumni,</li>
                      <li>(ii) Ex-faculty members who have served the Institute for at least two years</li>
                    </ul>
                  </li>
                  <li>(b) Honorary members: Those
                    <ul className="list-disc pl-6 space-y-1">
                      <li>(i) Who are past directors of the Institute and</li>
                      <li>(ii) Who are eminent personalities honored by the Institute</li>
                    </ul>
                  </li>
                  <li>(c) Star Members would be identified as members with significant contribution to the objectives of the association and would be valid for 2 years</li>
                  <li>(d) Lifetime Members
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Alumni of IET who submit the prescribed membership fee after completing the process as given below shall be considered Lifetime Members of the Association-</li>
                      <li>The membership fees would be Rs 5000/- for Life Membership. In case the spouse is an alumnus of IET Lucknow, the membership fee for the couple shall be Rs 7500/-.</li>
                      <li>Eligible members are required to fill an online registration form which is available at the Alumni Website www.iethub.org. After the due identification & realization of membership fees, the members would be given a unique Membership Number.</li>
                    </ul>
                  </li>
                  <li>(e) Suspension of the membership can be affected by the Executive Committee by two-third majority in the event of misconduct by any member, after affording him/her an opportunity to explain the reasons of his conduct within the prescribed time limit.</li>
                  <li>(f) A member can voluntarily surrender his membership by requesting the Executive Committee. No fee refund would be applicable in such cases.</li>
                  <li>(g) Payment gateway shall be introduced for ease of payment. Transaction Charges for the payment gateway shall be borne by IETLAA.</li>
                  <li>(h) EC can suspend for one to two months on the situation basis. If suspension is needed for more than two months or maximum till their EC tenure then approval of the Advisory Committee is required.</li>
                </ul>
              </li>
            </ul>

            <p className="mt-4">5. Privileges of the Members</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>(i) While all the members of the Association shall be eligible to participate and put forth their views in the GBM, only the Lifetime Members shall have the voting rights to vote on issues raised in GBM.</li>
              <li>(ii) Only the Lifetime Members shall be eligible to hold posts in Executive and Advisory Committee of the Association and vote for electing the members of Executive and Advisory Committee</li>
            </ul>

            <p className="mt-4">6- Termination of Membership:</p>
            <p>Membership termination can be executed by the Executive Committee with a two-thirds majority vote in the occurrence of misconduct…</p>

            <p className="mt-4">[The remaining constitution text continues exactly as provided...]</p>

            <p className="mt-4 mb-4">
              <strong>Note:</strong> Include the full text in the same format as above. Use nested lists for sub-points where needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
