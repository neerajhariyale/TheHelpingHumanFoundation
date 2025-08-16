import { useEffect, useState } from "react";

// Services Data
const services = [
  { emoji: "🩸", title: "Blood Donation", desc: "Helping patients by donating blood during emergencies and health crises." },
  { emoji: "🍲", title: "Food Distribution", desc: "Providing warm meals to the poor, homeless, and hungry daily." },
  { emoji: "📚", title: "Education Support", desc: "Supporting underprivileged children with books, tuition, and school kits." },
  { emoji: "💊", title: "Medical Help", desc: "Arranging medicines and treatments for those who cannot afford it." },
  { emoji: "🧓", title: "Old Age Care", desc: "Spreading love and help to elders in need of support and care." },
  { emoji: "👩‍🍼", title: "Women Empowerment", desc: "Skill training and support to help women become independent and strong." },
  { emoji: "♿", title: "Disabled Support", desc: "Helping physically challenged people with aids, tools, and assistance." },
  { emoji: "🌳", title: "Tree Plantation", desc: "Encouraging environment care through tree planting and green drives." },
];

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const WelfareServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Prev Service
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  // Next Service
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  // Auto slide every 3 seconds (mobile only)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-11/12 mx-auto py-8">
      {/* ✅ Mobile view → Carousel */}
      <div className="relative block md:hidden bg-white border border-pink-500 shadow-md rounded-xl p-6 text-center">
        <div className="text-4xl mb-3 font-libertinus">{services[currentIndex].emoji}</div>
        <h3 className="text-xl font-semibold mb-2 font-libertinus">{services[currentIndex].title}</h3>
        <p className="text-gray-600 text-sm font-libertinus">{services[currentIndex].desc}</p>

        {/* Left Arrow */}
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="absolute top-1/2 left-3 text-pink-500 text-3xl cursor-pointer z-10 transform -translate-y-1/2 hover:scale-110 transition"
        />

        {/* Right Arrow */}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="absolute top-1/2 right-3 text-pink-500 text-3xl cursor-pointer z-10 transform -translate-y-1/2 hover:scale-110 transition"
        />

        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                currentIndex === index ? "bg-pink-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* ✅ Tablet & Desktop view → Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-pink-500 shadow-md rounded-xl p-5 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
          >
            <div className="text-4xl mb-3 font-libertinus">{item.emoji}</div>
            <h3 className="text-xl font-semibold mb-2 font-libertinus">{item.title}</h3>
            <p className="text-gray-600 text-sm font-libertinus">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelfareServices;
