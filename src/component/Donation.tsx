import  { useState } from "react";
import workimage2 from "@/assets/workPhotos/workimage2.jpg";

// 1️⃣ Donation Data with Category
const donationData = [
  {
    leftText: "Feed a Home person",
    rightText: "₹30/per person",
    image: workimage2,
    category: "🍛 Food",
  },
  {
    leftText: "Veg Biriyani",
    rightText: "₹60/per person",
    image: workimage2,
    category: "🍛 Food",
  },
  {
    leftText: "Thaali Meals",
    rightText: "₹60/per person",
    image: workimage2,
    category: "🍛 Food",
  },
  {
    leftText: "Feed a Stray Dog",
    rightText: "₹35/per stray dog",
    image: workimage2,
    category: "🐶 Animal",
  },
  {
    leftText: "Virtual Cake Cutting",
    rightText: "₹4000/celebration",
    image: workimage2,
    category: "🎂 Birthday Celebration",
  },
  {
    leftText: "Birthday Cake",
    rightText: "₹1600 - 20 child",
    image: workimage2,
    category: "🎂 Birthday Celebration",
  },
  {
    leftText: "Plant a tree",
    rightText: "₹70/per sapling ",
    image: workimage2,
    category: "🌳 Environment",
  },
    {
    leftText: "Amay Patel",
    rightText: "Raised: ₹3811 | Goal: ₹51600",
    image: workimage2,
    category: "📖 Education",
  },
   {
    leftText: "Rani Singh",
    rightText: "Raised: ₹3811 | Goal: ₹51600",
    image: workimage2,
    category: "📖 Education",
  },
];
type Props = {
  leftText: string;
  rightText: string;
  image: string;
};

// 2️⃣ Reusable Card Component
const DonationCard = ({ leftText, rightText, image }: Props) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      <img src={image} alt="Donation" className="w-64 h-52 object-cover" />
      <div className="p-4 flex flex-col justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">{leftText}</h2>
        <p className="text-sm font-medium text-gray-600">{rightText}</p>
      </div>
      <div className="px-4 pb-4">
        <button className="w-full bg-black text-white py-2 rounded-xl text-center font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-gray-600">
          Donate
        </button>
      </div>
    </div>
  );
};

// 3️⃣ Main Donation Section with Filter
const Donation = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "🍛 Food", "🎂 Birthday Celebration", "🐶 Animal", "🌳 Environment", "📖 Education", "👥 Orphanage", "🏥 Healthcare"];

  const filteredData =
    filter === "All"
      ? donationData
      : donationData.filter((item) => item.category === filter);

  return (
    <div className="p-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border font-medium transition ${
              filter === cat
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-300 hover:bg-green-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div
        className="grid gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        justify-items-center"
      >
        {filteredData.map((item, index) => (
          <DonationCard
            key={index}
            leftText={item.leftText}
            rightText={item.rightText}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Donation;
