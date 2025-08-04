import { useState } from "react";
import workimage1 from "../assets/workPhotos/workimage1.jpg";
import workimage2 from "../assets/workPhotos/workimage2.jpg";
import workimage3 from "../assets/workPhotos/workimage3.jpg";
import workimage4 from "../assets/workPhotos/workimage4.jpg";
import workimage5 from "../assets/workPhotos/workimage5.jpg";
import workimage6 from "../assets/workPhotos/workimage6.jpg";
import workimage7 from "../assets/workPhotos/workimage7.jpg";
import workimage8 from "../assets/workPhotos/workimage8.jpg";
import workimage9 from "../assets/workPhotos/workimage9.jpg";
import workimage11 from "../assets/workPhotos/workimage11.jpg";
import workimage12 from "../assets/workPhotos/workimage12.jpg";
import workimage13 from "../assets/workPhotos/workimage13.jpg";
import workimage14 from "../assets/workPhotos/workimage14.jpg";
import workimage15 from "../assets/workPhotos/workimage15.jpg";
import workimage16 from "../assets/workPhotos/workimage16.jpg";
import workimage17 from "../assets/workPhotos/workimage17.jpg";
import workimage18 from "../assets/workPhotos/workimage18.jpg";

const images = [
  workimage1,
  workimage2,
  workimage3,
  workimage4,
  workimage5,
  workimage6,
  workimage7,
  workimage8,
  workimage9,
  workimage11,
  workimage12,
  workimage13,
  workimage14,
  workimage15,
  workimage16,
  workimage17,
  workimage18,
];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const isMobile = window.innerWidth < 640;
  const visibleImages = isMobile && !showAll ? images.slice(0, 5) : images;

  return (
    <div className="w-11/12 mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            className="w-full h-96 overflow-hidden rounded-lg shadow-md flex items-center justify-center"
          >
            <img
              src={img}
              alt={`workimage-${index + 1}`}
              className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* View More Button (visible only on mobile and when not showing all) */}
      {isMobile && !showAll && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
