import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import logo from "@/assets/workPhotos/logo1.png"

const Footer1 = () => {
  return (
    <footer className="p-1 mb-2 text-black mt-4 px-6 py-10 flex-col lg:flex lg:flex-row lg:justify-between lg:gap-24 border rounded-lg shadow-xl ">
      {/* Logo + Intro */}
      <div className="text-center mb-6">
        <div >
            <img src={logo} alt="" height={64} width={64} className="mx-auto" />
            <h1 className="text-xl font-nautigal text-pink-600 italic font-semibold">The Helping Hand Foundation</h1>
        </div>
        <p className="mt-4 text-gray-700 text-sm lg:w-96 leading-relaxed font-libertinus">
          We’re passionate, and committed to helping underprivileged people to give
          them a better life.
        </p>
      </div>

      {/* Contact Section */}
      <div className="mt-6">
        <h2 className="text-xl font-extrabold mb-4 font-libertinus">CONTACT US</h2>

        <div className="space-y-3 ">
          <p className="flex items-center gap-2 font-libertinus">
            <MdLocationOn className="text-2xl mt-1 text-pink-500" />
            <a href="https://www.google.com/maps/dir//Q82C%2BX86,+Keshav+Nagar,+Pali,+Rajasthan+306401/@25.7524009,73.2383585,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x394273951bcb574b:0x9ebedd90f7e2a476!2m2!1d73.32076!2d25.7524241?entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D">New bus stand, Pali, Rajasthan</a>
          </p>

          <p className="flex items-center gap-2 font-libertinus">
            <MdEmail className="text-xl text-pink-500" />
            <a
              href="mailto:thehelpinghumanfoundation@yahoo.com"
              className="hover:underline"
            >
              thehelpinghumanfoundation@yahoo.com
            </a>
          </p>

          <p className="flex items-center gap-2 font-libertinus">
            <MdPhone className="text-xl text-pink-500" />
            +91 9079554009
          </p>
        </div>

        {/* Social Media */}
        <div className="mt-4">
          <p className="text-black text-lg font-semibold font-libertinus mb-3">Follow us on</p>
          <div className="flex space-x-4 text-2xl">
            {/* <a href="#" className="text-pink-500 hover:text-white">
              <FaFacebook />
            </a> */}
            <a href="https://www.instagram.com/thehelpinghumanfoundation?igsh=anFtM2ZkZmtweHk=" className="text-pink-500 hover:text-white">
              <FaInstagram />
            </a>
            {/* <a href="#" className="text-red-500 text-2xl hover:text-white">
              <FaYoutube />
            </a> */}
            <a href="https://whatsapp.com/channel/0029VbB4AuMFy726CvgA8R2T" className="text-green-500 hover:text-white">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-8">
        <h2 className="text-xl font-extrabold mb-4 font-libertinus">QUICK LINKS</h2>
        <ul className="space-y-2 text-pink-500">
          <li><a href="/" className="hover:text-black font-libertinus">Home</a></li>
          <li><a href="/about-us" className="hover:text-black font-libertinus">About Us</a></li>
          <li><a href="/about-us" className="hover:text-black font-libertinus">Our Mission</a></li>
          <li><a href="/donate" className="hover:text-black font-libertinus">Donate</a></li>
        </ul>
      </div>

      {/* Floating Donate Button */}
      {/* <a
        href="/donate"
        className="fixed bottom-6 right-6 bg-orange-500 text-black font-semibold px-6 py-6 rounded-full shadow-lg hover:bg-orange-600 transition"
      >
        Donate
      </a> */}
    </footer>
  );
};

export default Footer1;
