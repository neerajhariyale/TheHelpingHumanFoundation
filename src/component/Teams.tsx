// import React from "react";
// import neeraj from "../assets/teamPhoto/neeraj.png";
import { FaInstagram } from "react-icons/fa6";
import founder from "../assets/teamPhotos/Founder.jpg";
import organizationsecratary from "../assets/teamPhotos/OrganizationSecratary.jpg";
import secratary from "../assets/teamPhotos/Secratary.jpg";
import ceoNfounder from "../assets/teamPhotos/ceoNfounder.jpg";
import joinSecratary from "../assets/teamPhotos/joinSecratary.jpg";
// import { ShineBorder } from "@/components/magicui/shine-border";

const Teams = () => {
  // Founder and Cofounder Data
  const founderData = [
    {
      name: "Ravi Prakash",
      position: "Founder",
      src: founder,
      social:
        "https://www.instagram.com/ravi_dahiya_jnvu?utm_source=qr&igsh=aXA0aGdhYm1uZWg3",
      desc: "The visionary behind The Helping Human Foundation, dedicated to uplifting communities through impactful initiatives focused on education, health, and social welfare.",
    },
    {
      name: "Seema Kanwar",
      position: "Co-Founder",
      src: ceoNfounder,
      social: "https://www.instagram.com/the__siyuu?igsh=MXY3djdmOHRnNXA4YQ==",
      desc: "Supports the Founder in planning and implementing NGO activities, contributing ideas and leadership to promote growth and maximize outreach to underprivileged sections.",
    },
  ];
  // Member Data
  const memberData = [
    {
      name: "Narpat Solanki",
      position: "Secretary",
      src: secratary,
      social: "https://www.instagram.com/narpat.solanki.45?igsh=MTlxazl1bG1rbnhvcQ==",
      desc: "Handles day-to-day operations, manages documentation, and ensures smooth execution of programs while maintaining coordination between team members and stakeholders.",
    },
    {
      name: "Sahil Balotiya",
      position: "Join Secratary",
      src: joinSecratary,
      social: "https://www.instagram.com/sahilbalotiya_official?igsh=MXZvZmhpdGJ5ajc4Zw==",
      desc: "Assists the Secretary in managing administrative tasks, communication, and event planning while ensuring transparency and teamwork in all NGO activities.",
    },
    {
      name: "Mohmmad Junaid Belim",
      position: "Organization Secretary",
      src: organizationsecratary,
      social: "https://www.instagram.com/junaid_belim_41_41?igsh=Y2tkZHFlMjc1N2x4",
      desc: "Oversees structural organization, coordinates between departments, and ensures policies and procedures align with the foundation’s mission and long-term vision.",
    },
  ];

  return (
    <div>
      {/* Founder Cards */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center mt-5 w-full max-w-screen-md mx-auto ">
          {founderData.map((item, index) => (
            <div
              key={index}
              className="w-80 max-w-sm h-96 border-1 border-pink-500 shadow-xl transition-shadow duration-100 hover:shadow-2xl rounded-2xl p-6 cursor-pointer bg-blend-soft-light mx-auto"
            >
              <img
                src={item.src}
                alt=""
                className="h-24 w-24 object-cover mx-auto rounded-full"
              />
              <p className="text-center text-xl font-semibold mt-3 text-pink-500 font-libertinus">
                {item.name}
              </p>
              <p className="text-center text-md text-gray-800 font-semibold font-libertinus">
                {item.position}
              </p>
              <p className="text-center text-gray-500  text-sm mt-2 font-libertinus">
                {item.desc}
              </p>
              <div className="flex justify-center mt-3">
                <a href={item.social} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl text-pink-500 hover:text-pink-800 transition duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Cards */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center items-center mt-5 w-full max-w-screen-lg mx-auto">
          {memberData.map((item, index) => (
            <div
              key={index}
              className="w-80 max-w-sm h-96 border-1 border-pink-600 shadow-xl transition-shadow duration-100 hover:shadow-2xl rounded-2xl p-6 cursor-pointer bg-blend-soft-light mx-auto"
            >
              <img
                src={item.src}
                alt=""
                className="h-24 w-24 object-cover mx-auto rounded-full"
              />
              <p className="text-center text-xl font-semibold mt-3 text-pink-500 font-libertinus">
                {item.name}
              </p>
              <p className="text-center text-md text-gray-800 font-semibold font-libertinus">
                {item.position}
              </p>
              <p className="text-center text-gray-500 text-sm mt-2 font-libertinus">
                {item.desc}
              </p>
              <div className="flex justify-center mt-3">
                <a href={item.social} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl text-pink-500 hover:text-pink-600 transition duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
