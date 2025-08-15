// import React from 'react';

const services = [
  {
    emoji: "🩸",
    title: "Blood Donation",
    desc: "Helping patients by donating blood during emergencies and health crises.",
  },
  {
    emoji: "🍲",
    title: "Food Distribution",
    desc: "Providing warm meals to the poor, homeless, and hungry daily.",
  },
  {
    emoji: "📚",
    title: "Education Support",
    desc: "Supporting underprivileged children with books, tuition, and school kits.",
  },
  {
    emoji: "💊",
    title: "Medical Help",
    desc: "Arranging medicines and treatments for those who cannot afford it.",
  },
  {
    emoji: "🧓",
    title: "Old Age Care",
    desc: "Spreading love and help to elders in need of support and care.",
  },
  {
    emoji: "👩‍🍼",
    title: "Women Empowerment",
    desc: "Skill training and support to help women become independent and strong.",
  },
  {
    emoji: "♿",
    title: "Disabled Support",
    desc: "Helping physically challenged people with aids, tools, and assistance.",
  },
  {
    emoji: "🌳",
    title: "Tree Plantation",
    desc: "Encouraging environment care through tree planting and green drives.",
  },
];

const WelfareServices = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
      {services.map((item, index) => (
        <div
          key={index}
          className="bg-white border-1 border-pink-500 shadow-md rounded-xl p-5 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
        >
          <div className="text-4xl mb-3">{item.emoji}</div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default WelfareServices;
