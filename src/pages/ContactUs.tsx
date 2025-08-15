import { ShineBorderDemo } from "@/component/ShineBorderDemo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import React from 'react'

const ContactUs = () => {
  return (
    <>
      <div className=" w-11/12  mx-auto flex flex-col items-center justify-evenly">
      <a
        href="https://wa.me/919079554009" // Replace with your own number+91
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg z-50"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
        {/* Heading  */}
        <div className="flex flex-col items-center">
          <p className="text-center mt-1  text-3xl">Join Us 🫱🏻‍🫲🏻</p>
          <div className="w-32 border-2 border-pink-500 mt-1"></div>
        </div>
      </div>

      <p className="text-center text-gray-600 mb-5 max-w-2xl mx-auto mt-4">
        Join us in making a difference! Be a part of our NGO to spread kindness,
        support the needy, and bring positive change. Your small step can impact
        many lives.
      </p>

      <ShineBorderDemo />
    </>
  );
};

export default ContactUs;
