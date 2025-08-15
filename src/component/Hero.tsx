// import React from 'react'

import BlurText from "@/components/magicui/BlurText";
import { NumberTickerDemo } from "./NumberTickerDemo";
import {  useNavigate } from "react-router-dom";



// import RollingGallery from "./RollingGallery"

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

 const navigate = useNavigate();
  return (

   
    <div className="w-full p-2 flex mx-auto  lg:flex-row ">
      {/* Left Image */}
      {/* <div className="w-full lg:w-1/2  flex justify-center items-center">
        <img
          src={workimage8}
          alt="Helping Human Work"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div> */}

      {/* Right Content */}
      <div className="w-full flex flex-col items-center text-center  mt-8 ">
        <BlurText
          text="The Helping Human Foundation"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-xl sm:text-3xl md:text-4xl font-semibold text-pink-600"
        />

        <p className="text-sm sm:text-base md:text-lg px-2 md:px-6 mt-4 text-gray-500">
          The Helping Human Foundation is a non-profit NGO dedicated to serving
          underprivileged communities through initiatives in education,
          healthcare, women empowerment, and social welfare, aiming to create
          lasting positive change.
        </p>
        {/* <TextAnimateDemo/> */}

        <div className="w-32  mt-4 hover:cursor-pointer  bg-pink-500 rounded-lg p-2 text-white hover:bg-pink-700 text-center mx-auto" onClick={() => navigate('/donate')}>
          <button className="hover:cursor-pointer">DONATE</button>
        </div>

        {/* Number Stats */}
         <div className="w-10/12 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-6 ">
          {/* Card 1 */}
          <div className="flex flex-col justify-center items-center">
            <BlurText
              text="Donation Raised"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-sm  md:text-lg lg:text-lg xl:text-lg  font-semibold text-pink-600"
            />
            <NumberTickerDemo number={9} suffix="Lakh+" />
          </div> 
         

          {/* Card 2 */}
          <div className="flex flex-col justify-center items-center">
            <BlurText
              text="Donation Made"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
               className="text-sm  md:text-lg lg:text-lg xl:text-lg  font-semibold text-pink-600"
            />
            <NumberTickerDemo number={8.45} suffix="Lakh+" />
          </div> 

          {/* Card 3 */}
          <div className="flex flex-col justify-center items-center">
            <BlurText
              text="Meals Served"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-sm  md:text-lg lg:text-lg xl:text-lg  font-semibold text-pink-600"
            />
            <NumberTickerDemo number={28} suffix="K+" />
          </div>


          <div className="flex flex-col justify-center items-center">
            <BlurText
              text="Active Donor"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
               className="text-sm  md:text-lg lg:text-lg xl:text-lg  font-semibold text-pink-600"
            />
            <NumberTickerDemo number={4} suffix="K+" />
          </div> 
        </div> 
       

        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
