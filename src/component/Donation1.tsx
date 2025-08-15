import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import workimage2 from "@/assets/workPhotos/workimage2.jpg";
import vegbiryani from "@/assets/workPhotos/vegbiryani.jpg";
import thaalimeal from "@/assets/workPhotos/thaalimeal.jpg";
import virtualcakecutting from "@/assets/workPhotos/virtualcakecutting.jpg";
import feeddog from "@/assets/workPhotos/straydogfeed.jpg";
import birthdaycake from "@/assets/workPhotos/birthdaycakecutting.jpg";
import planttree from "@/assets/workPhotos/planttree.jpg";
import mowlish from "@/assets/workPhotos/education/Mowlish.jpg";
import tashwin from "@/assets/workPhotos/education/Tashwin.jpg";
import educationkit from "@/assets/workPhotos/educationkit.jpg"
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

const DonationCard = ({ leftText, rightText, image }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden border-1  border-pink-500">
      <img src={image} alt="Donation" className="w-64 h-52 object-cover" />
      <div className="p-4 flex flex-col justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">{leftText}</h2>
        <p className="text-sm font-medium text-gray-600">{rightText}</p>
      </div>
      <div className="px-4 pb-4">
        <button
          onClick={() => navigate("/donation-form")}
          className="w-full bg-pink-500 text-white py-2 rounded-xl text-center font-semibold transition-all duration-300 hover:bg-pink-600 hover:border hover:border-pink-600 hover:cursor-pointer"
        >
          Donate
        </button>
      </div>
    </div>
  );
};

const Donation1 = () => {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4); // default for larger screens
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? 2 : 4); // 2 on mobile, 4 on others
    };

    handleResize(); // run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    "All",
    "🍛 Food",
    "🎂 Birthday Celebration",
    "🐶 Animal",
    "🌳 Environment",
    "📖 Education",
    "👥 Orphanage",
    "🏥 Healthcare",
  ];

  const filteredData = donationData.filter(
    (item) => filter === "All" || item.category === filter
  );

  const displayedCards = filteredData.slice(0, visibleCount);

  return (
    <div className="p-2 w-full mx-auto ">

      
      {/* Filter Buttons */}
      <div className="mb-6  scrollbar-track-transparent w-72 mx-auto md:w-96 lg:w-full xl:w-full overflow-x-auto whitespace-nowrap p-2">
        <div className="inline-flex gap-3 px-2 whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border mr-1 ml-1 font-medium transition shrink-0 ${
                filter === cat
                  ? "bg-pink-500 text-white border-pink-500"
                : "bg-white  border-pink=500 hover:bg-pink-500 hover:text-white hover:cursor-pointer"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
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
        {displayedCards.map((item, index) => (
          <DonationCard
            key={index}
            leftText={item.leftText}
            rightText={item.rightText}
            image={item.image}
          />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/donate")}
          className="bg-pink-500 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-pink-600 hover:cursor-pointer hover:border hover:border-pink-600"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Donation1;
