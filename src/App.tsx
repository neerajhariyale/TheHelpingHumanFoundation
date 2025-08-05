// import "./App.css";
// // import { ShimmerButtonDemo } from './component/ShimmerButtonDemo'
// import Navbar from "./component/Navbar";
// import Hero from "./component/Hero";
// import Teams from "./component/Teams";
// import Donation from "./component/Donation";
// import Gallery from "./component/Gallery";
// import WelfareServices from "./component/WelfareServices";
// import Footer from "./component/Footer";
// import { BlurFade } from "./components/magicui/blur-fade";

// function App() {
//   return (
//     <div className="w-11/12 flex flex-col justify-center items-center mx-auto">
//       <BlurFade delay={0.25} inView>
//         
//         <Hero />
//       </BlurFade>

//       <BlurFade delay={0.25 * 2} inView>
//         <div className="mt-5 w-11/12 h-contain mx-auto flex flex-col items-center justify-evenly mb-4">
//           <div className="flex flex-col items-center">
//             <p className="text-center mt-8  text-3xl">
//               Our Welfare Services ❤️‍🩹
//             </p>
//             <div className="w-16 border-2 border-red-500 mt-2"></div>
//           </div>
//         </div>
//         <WelfareServices />
//       </BlurFade>

//       <BlurFade delay={0.25 * 2} inView>
//         <div className="mt-5 w-11/12 h-contain mx-auto flex flex-col items-center justify-evenly mb-4">
//           <div className="flex flex-col items-center">
//             <p className="text-center mt-8  text-3xl">Make a Contribution 🤝</p>
//             <div className="w-16 border-2 border-red-500 mt-2"></div>
//           </div>
//         </div>
//         <Donation />
//       </BlurFade>

//       <BlurFade delay={0.25 * 2} inView>
//         <div className="mt-5 w-11/12 h-contain mx-auto flex flex-col items-center justify-evenly mb-4">
//           <div className="flex flex-col items-center">
//             <p className="text-center mt-8  text-3xl">Happy Faces 😄</p>
//             <div className="w-16 border-2 border-red-500 mt-2"></div>
//           </div>
//         </div>
//         <Gallery />
//       </BlurFade>

//       <BlurFade delay={0.25 * 2} inView>
//         <div className="mt-5 w-11/12 h-contain mx-auto flex flex-col items-center justify-evenly">
//           <div className="flex flex-col items-center">
//             <p className="text-center mt-8  text-3xl">Meet Our Team</p>
//             <div className="w-16 border-2 border-red-500 mt-1"></div>
//           </div>
//         </div>
//         <Teams />
//       </BlurFade>

//       <BlurFade delay={0.25 * 2} inView>
//         <Footer />
//       </BlurFade>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Donate from "./pages/Donate";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";

function App() {


  return (
    <div className= "w-full flex flex-col justify-center items-center " >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/joinus" element={<ContactUs />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;