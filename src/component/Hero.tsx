// import React from 'react'
import workimage1 from "@/assets/workPhotos/workimage1.jpg";
import BlurText from "@/components/magicui/BlurText";
import { AnimatedGradientTextDemo } from "@/component/AnimatedGradientTextDemo";
import { NumberTickerDemo } from "./NumberTickerDemo";


// import RollingGallery from "./RollingGallery"

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row  py-6">
      {/* Left Image */}
      <div className="w-full lg:w-1/2  flex justify-center items-center">
        <img
          src={workimage1}
          alt="Helping Human Work"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center text-center space-y-4 mt-4 sm:mt-4 md:mt-24 lg:mt-24">
        <BlurText
          text="The Helping Human Foundation"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-xl sm:text-3xl md:text-4xl font-semibold"
        />

        <p className="text-sm sm:text-base md:text-lg px-2 md:px-6">
          The Helping Human Foundation is a non-profit NGO dedicated to serving
          underprivileged communities through initiatives in education,
          healthcare, women empowerment, and social welfare, aiming to create
          lasting positive change.
        </p>
        {/* <TextAnimateDemo/> */}

        <div className="w-fit mt-2">
          <AnimatedGradientTextDemo />
        </div>

        {/* Number Stats */}
        <div className="w-full flex flex-col sm:flex-row justify-around items-center gap-6 mt-6 ">
          {/* Card 1 */}
          <div className="flex flex-col justify-center items-center">
            <BlurText
              text="Donation Raised ✋"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-lg font-semibold"
            />
            <NumberTickerDemo number={9} suffix="Lakh+" />
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-center items-center">
            <BlurText
              text="Donation Made 🎊"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-lg font-semibold"
            />
            <NumberTickerDemo number={8.45} suffix="Lakh+" />
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-center items-center">
            <BlurText
              text="Meals Served 🍛"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-lg font-semibold"
            />
            <NumberTickerDemo number={28} suffix="K+" />
          </div>
        </div>

        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
