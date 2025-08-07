import  { useEffect, useState } from "react";
import workimage1 from "../assets/workPhotos/workimage1.jpg";
import workimage3 from "../assets/workPhotos/workimage3.jpg";
import workimage4 from "../assets/workPhotos/workimage4.jpg";
import banner1 from "@/assets/workPhotos/banner/banner1.jpg"
import banner2 from "@/assets/workPhotos/banner/banner2.jpg"
import banner3 from "@/assets/workPhotos/banner/banner3.jpg"
import banner4 from "@/assets/workPhotos/banner/banner4.jpg"
import banner5 from "@/assets/workPhotos/banner/banner5.jpg"
import bannervideo1 from "@/assets/workPhotos/banner/bannervideo1.mp4"

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Coursel = () => {
  // Image data
  const images = [
    {src: banner5},
    {src: bannervideo1},
    { src : banner1 },
    { src: banner2 },
    { src: banner3},
    { src: banner4 },
    { src: workimage3 },
    { src: workimage4 },
    { src: workimage1 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  //  Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full  mx-auto overflow-hidden bg-black">
      {/* Image */}
      <img
        src={images[currentIndex].src}
        alt={`workimage-${currentIndex}`}
        className="w-full h-full lg:h-[600px]  object-contain   transition-all duration-500"
      />

      {/* Left Arrow */}
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className="absolute top-1/2 left-5 text-gray-100 text-3xl cursor-pointer z-10 transform -translate-y-1/2 hover:scale-110 transition"
      />

      {/* Right Arrow */}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="absolute top-1/2 right-5 text-gray-100 text-3xl cursor-pointer z-10 transform -translate-y-1/2 hover:scale-110 transition"
      />

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Coursel;