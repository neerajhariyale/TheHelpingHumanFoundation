import { ShineBorderDemo } from "@/component/ShineBorderDemo";
// import React from 'react'

const ContactUs = () => {
  return (
    <>
      <div className=" w-11/12  mx-auto flex flex-col items-center justify-evenly">
        {/* Heading  */}
        <div className="flex flex-col items-center">
          <p className="text-center mt-1  text-3xl">Join Us 🫱🏻‍🫲🏻</p>
          <div className="w-14 border-2 border-red-500 mt-1"></div>
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
