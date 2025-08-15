import Teams from "@/component/Teams";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import React from 'react'

const Team = () => {
  return (
    <div className="flex justify-center items-center flex-col mb-8">
      <a
        href="https://wa.me/919079554009" // Replace with your own number+91
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg z-50"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <div className="mt-5  text-center">
        <p className="text-2xl italic font-semibold ">
          "We are the hearts and hands powering{" "}
          <span className="text-pink-500"> The Helping Human Foundation." </span>
        </p>
      </div>

      <Teams />
    </div>
  );
};

export default Team;
