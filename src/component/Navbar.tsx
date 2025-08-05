// import React from 'react'
// import logo1 from '@/assets/workPhotos/logo1.png'
// import { ShimmerButtonDemo } from './ShimmerButtonDemo'
// const Navbar = () => {
//   return (
//     <div className='w-full mx-auto flex justify-between mt-4  '>
//       <img src={logo1} alt="" height={72} width={72} />
//       <div className='p-2 flex justify-center items-center'>
//         <ShimmerButtonDemo/>
//       </div>
//     </div>
//   )
// }

// export default Navbar




import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon package like lucide-react or heroicons
import logo1 from '@/assets/workPhotos/logo1.png'
import { ShimmerButtonDemo } from './ShimmerButtonDemo'

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Menu Items
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Team", path: "/team" },
    // { name: "Drives", path: "/drive" },
    { name: "Join Us", path: "/joinus" },
  ];

  return (
    <div className="w-full  ">
      <div className="flex justify-between border-none items-center px-4 py-3 md:px-10 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div>
          <img
            src={logo1}
            alt="Logo"
            className="h-18 w-18 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <p
              key={item.path}
              className={`cursor-pointer transition duration-100 ${
                isActive(item.path)
                  ? "border-b-2 border-pink-700 font-semibold text-pink-600"
                  : "hover:border-b-2 hover:border-pink-700"
              }`}
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </p>
          ))}
        </div>

        {/* Donate Button */}
        <div className="hidden md:flex">
          <button
            className="bg-white border-1 border-black rounded-full h-10 w-32 text-black hover:bg-pink-500 hover:text-white hover:border-1 hover:border-pink-500 transition hover:cursor-pointer"
            onClick={() => navigate("/donate")}
          >
            Donate
          </button>
        </div>



        {/* Mobile View Tag Line AND Name */}
        <div className="md:hidden flex flex-col items-center p-1">
          <h1 className="text-sm font-semibold text-black">The Helping Human Foundation</h1>
          <p className="text-[10px] text-gray-500 italic">"Give a hand, change a life"</p>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-white shadow-md">
          {menuItems.map((item) => (
            <p
              key={item.path}
              className={`cursor-pointer text-lg ${
                isActive(item.path)
                  ? "text-red-600 font-semibold underline"
                  : "hover:text-red-500"
              }`}
              onClick={() => {
                navigate(item.path);
                setIsMobileMenuOpen(false);
              }}
            >
              {item.name}
            </p>
          ))}
          <button
            className="bg-white border-1 border-black rounded-full h-10 w-32 text-black hover:bg-pink-500 hover:text-white hover:border-1 hover:border-pink-500 transition hover:cursor-pointer"
            onClick={() => {
              navigate("/donate");
              setIsMobileMenuOpen(false);
            }}
          >
            Donate
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
