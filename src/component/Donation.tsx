import  { useState } from "react";
import workimage2 from "@/assets/workPhotos/workimage2.jpg";
import vegbiryani from "@/assets/workPhotos/vegbiryani.jpg"
import thaalimeal from "@/assets/workPhotos/thaalimeal.jpg"
import virtualcakecutting from "@/assets/workPhotos/virtualcakecutting.jpg"
import feeddog from "@/assets/workPhotos/straydogfeed.jpg"
import birthdaycake from "@/assets/workPhotos/birthdaycakecutting.jpg"
import planttree from "@/assets/workPhotos/planttree.jpg"
import educationkit from "@/assets/workPhotos/educationkit.jpg"
import { useNavigate } from "react-router-dom";
import mowlish from "@/assets/workPhotos/education/Mowlish.jpg";
import tashwin from "@/assets/workPhotos/education/Tashwin.jpg";
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
    image: vegbiryani,
    category: "🍛 Food",
  },
  {
    leftText: "Thaali Meals",
    rightText: "₹60/per person",
    image: thaalimeal,
    category: "🍛 Food",
  },
  {
    leftText: "Feed a Stray Dog",
    rightText: "₹35/per stray dog",
    image: feeddog,
    category: "🐶 Animal",
  },
  {
    leftText: "Virtual Cake Cutting",
    rightText: "₹4000/celebration",
    image: virtualcakecutting,
    category: "🎂 Birthday Celebration",
  },
  {
    leftText: "Birthday Cake",
    rightText: "₹1600 - 20 child",
    image: birthdaycake,
    category: "🎂 Birthday Celebration",
  },
  {
    leftText: "Plant a tree",
    rightText: "₹70/per sapling ",
    image: planttree,
    category: "🌳 Environment",
  },
    {
    leftText: "Education Kit",
    rightText: "₹200/per student",
    image: educationkit,
    category: "📖 Education",
  },
   {
    leftText: "Mowlish.S",
    rightText: "Raised: ₹3811 | Goal: ₹51600",
    image: mowlish,
    category: "📖 Education",
  },
  {
    leftText: "Tashwin.M",
    rightText: "Raised: ₹3811 | Goal: ₹51600",
    image: tashwin,
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

  const navigate = useNavigate()
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      <img src={image} alt="Donation" className="w-64 h-52 object-cover" />
      <div className="p-4 flex flex-col justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">{leftText}</h2>
        <p className="text-sm font-medium text-gray-600">{rightText}</p>
      </div>
      <div className="px-4 pb-4">
        <button onClick={() => navigate('/donation-form')} className="w-full bg-pink-500 text-white py-2 rounded-xl text-center font-semibold transition-all duration-300 hover:bg-pink-600 hover:border hover:border-pink-600 hover:cursor-pointer">
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
      <div className="mb-6 scrollbar-track-transparent w-72 mx-auto md:w-96 lg:w-full xl:w-full overflow-x-auto whitespace-nowrap p-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 p-2 rounded-full border ml-1 mr-1 font-medium transition ${
              filter === cat
                ? "bg-pink-500 text-white border-pink-500"
                : "bg-white  border-pink=500 hover:bg-pink-500 hover:text-white hover:cursor-pointer"
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
