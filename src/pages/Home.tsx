// import Navbar from "./component/Navbar";
import Hero from "@/component/Hero";
import Teams from "@/component/Teams";
import Donation1 from "@/component/Donation1";
import WelfareServices from "@/component/WelfareServices";
import Footer from "@/component/Footer";
import { BlurFade } from "@/components/magicui/blur-fade";
import Copyright from "@/component/Copyright";
import CarouselPlugin from "@/component/Coursel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
     <div className="w-full md:w-11/12 lg:w-11/12 xl:w-11/12 flex flex-col justify-center items-center ">
    
    <a
  href="https://wa.me/919079554009" // Replace with your own number+91 
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg z-50"
>
  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
</a>
        <CarouselPlugin/>
       <BlurFade delay={0.25} inView>
         
         <Hero />
       </BlurFade>

       <BlurFade delay={0.25 * 2} inView>
         <div className="mt-5 w-11/12 h-contain mx-auto flex flex-col items-center justify-evenly mb-4">
           <div className="flex flex-col items-center">
             <p className="text-center mt-8  text-3xl">
               Our Welfare Services ❤️‍🩹
             </p>
             <div className="w-16 border-2 border-red-500 mt-2"></div>
           </div>
         </div>
         <WelfareServices />
       </BlurFade>

       <BlurFade delay={0.25 * 2} inView>
         <div className="mt-5 w-11/12 h-contain mx-auto flex flex-col items-center justify-evenly mb-4">
           <div className="flex flex-col items-center">
             <p className="text-center mt-8  text-3xl">Make a Contribution 🤝</p>
             <div className="w-26 border-2 border-red-500 mt-2"></div>
           </div>
         </div>
         <Donation1 />
       </BlurFade>

       {/* <BlurFade delay={0.25 * 2} inView>
         <div className="mt-5 w-11/12 h-contain mx-auto flex flex-col items-center justify-evenly mb-4">
           <div className="flex flex-col items-center">
             <p className="text-center mt-8  text-3xl">Happy Faces 😄</p>
            <div className="w-16 border-2 border-red-500 mt-2"></div>
           </div>
         </div>
         <Gallery />
       </BlurFade> */}

       <BlurFade delay={0.25 * 2} inView>
         <div className="mt-5 w-11/12 h-contain mx-auto flex flex-col items-center justify-evenly">
           <div className="flex flex-col items-center">
             <p className="text-center mt-8  text-3xl">Meet Our Team</p>
            <div className="w-16 border-2 border-red-500 mt-1"></div>
           </div>
         </div>
         <Teams />
       </BlurFade>

       <BlurFade delay={0.25 * 2} inView>
         <Footer />
       </BlurFade>

       <BlurFade delay={0.25 * 2} inView>
         <div className="w-full">
            <Copyright />
         </div>
       </BlurFade>


       {/* <DonateAmount/> */}

       {/* <Footer/> */}
     </div>
  )
}

export default Home
