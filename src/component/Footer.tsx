// import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import map from "@/assets/workPhotos/maplogo.png"

const Footer = () => {
  //  social media links and phone number
  const phoneNumber = "+919079554009";
  const instagramLink = "https://www.instagram.com/thehelpinghumanfoundation?igsh=anFtM2ZkZmtweHk=";
  //const youtubeLink = "https://www.youtube.com/@ekhidaata_foundation";
  const whatsappLink = "https://whatsapp.com/channel/0029VbB4AuMFy726CvgA8R2T"
  // const gmailLink = "thehelpinghumanfoundation@yahoo.com";
  const location = "https://www.google.com/maps/dir//Q82C%2BX86,+Keshav+Nagar,+Pali,+Rajasthan+306401/@25.7524009,73.2383585,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x394273951bcb574b:0x9ebedd90f7e2a476!2m2!1d73.32076!2d25.7524241?entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="mt-5  h-contain mx-auto flex flex-col items-center justify-evenly mb-8">
      {/* Heading */}
      <div className="flex flex-col items-center">
        <p className="text-center mt-8  text-3xl">Follow Us for Updates</p>
        <div className="w-72 border-2 border-pink-500 mt-1"></div>
      </div>

      <div className="flex justify-center gap-5 items-center mt-4">
        {/* Phone Icon */}
        <div className="flex justify-center mt-3">
          <a
            href={`tel:${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhone className="text-[39px] text-blue-400 hover:text-blue-800 transition duration-200" />
          </a>
        </div>

        {/* Instagram Icon */}
        <div className="flex justify-center mt-3">
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-5xl text-red-500 hover:text-red-800 transition duration-200" />
          </a>
        </div>

        {/* Youtube Icon */}
        {/* <div className="flex justify-center mt-3">
          <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-5xl text-red-500 hover:text-red-800 transition duration-200" />
          </a>
        </div> */}

        {/* Whatsapp Icon */}
        <div className="flex justify-center mt-3">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-5xl text-green-500 hover:text-green-800 transition duration-200" />
          </a>
        </div>

        {/* Gmail Icon */}
        <div className="flex justify-center mt-3">
          <a
            href={"mailto:thehelpinghumanfoundation@yahoo.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGmail className="text-5xl text-red-500 hover:text-red-800 transition duration-200" />
          </a>
        </div>

         <div className="flex justify-center mt-3">
          <a href={location}>
            <img src={map} alt="" height={40} width={40}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;