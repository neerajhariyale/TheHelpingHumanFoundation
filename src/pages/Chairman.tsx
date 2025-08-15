
import chairman from "@/assets/teamPhotos/Founder.jpg";
import map from "@/assets/workPhotos/maplogo.png";
import whatsapp from "@/assets/workPhotos/whatsapp.png";
import gmail from "@/assets/workPhotos/gmail.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Chairman = () => {
  return (
    <div className="flex flex-col lg:flex-row xl:flex-row justify-center gap-4 border-2 rounded-lg w-11/12 p-2">
      <a
        href="https://wa.me/919079554009" // Replace with your own number+91
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg z-50"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <div>
        <img src={chairman} alt="" className="rounded-lg" />
      </div>

      <div className="flex flex-col">
        <h1 className="text-3xl text-center mt-3 font-semibold text-pink-500 tracking-wide">
          Ravi Prakash Dahiya
        </h1>
        <p className="text-md text-center  font-light text-gray-800 ">
          Founder & Chairman
        </p>
        <p className="mt-3 p-4 ">
          <span className="font-semibold"> The Helping Human Foundation </span>
          is an NGO dedicated to serving underprivileged communities. Its core
          mission is to provide food, education, healthcare, and emergency
          support, aiming to create a more compassionate, inclusive, and
          empowered society through consistent humanitarian efforts.
        </p>


        <div className="border-2 rounded-lg w-10/12 mx-auto flex flex-col  h-content shadow-2xl bg-gray-100 italic mt-4">
          <p className="mx-auto p-2 text-lg">
            “
            <span className="text-pink-600">
              At The Helping Human Foundation
            </span>
            , our mission is simple —{" "}
            <span className="text-pink-600">to bring hope, help,</span> and
            humanity to those who need it most. Together,{" "}
            <span className="text-pink-600">
              we can create a better, kinder world
            </span>{" "}
            for all.<span className="font-semibold text-pink-600 ">”</span>
          </p>
          <p className="text-right mr-3 text-gray-600">Founder & Chairman</p>
        </div>

        <div className="mt-4 p-2 ml-4">
          <div className="flex items-center mt-2 gap-3">
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
              <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z" />
            </svg>
              <a href="tel:+916377119794" className="hover:text-pink-500">
    +91 6377119794
  </a>
          </div>

          <div className="flex items-center mt-2 gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 128 128"
              enableBackground="new 0 0 128 128"
              width="24"
              height="24"
            >
              <defs>
                <radialGradient
                  id="InstagramGradient"
                  cx="19.1111"
                  cy="128.4444"
                  r="163.5519"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#FFB140" />
                  <stop offset="0.2559" stopColor="#FF5445" />
                  <stop offset="0.599" stopColor="#FC2B82" />
                  <stop offset="1" stopColor="#8E40B7" />
                </radialGradient>
              </defs>
              <g>
                <rect fill="none" height="128" width="128" />
                <path
                  fill="url(#InstagramGradient)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M105.843,29.837c0,4.242-3.439,7.68-7.68,7.68c-4.241,0-7.68-3.438-7.68-7.68
        c0-4.242,3.439-7.68,7.68-7.68C102.405,22.157,105.843,25.595,105.843,29.837z M64,85.333c-11.782,0-21.333-9.551-21.333-21.333
        c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333C85.333,75.782,75.782,85.333,64,85.333z
        M64,31.135c-18.151,0-32.865,14.714-32.865,32.865c0,18.151,14.714,32.865,32.865,32.865c18.151,0,32.865-14.714,32.865-32.865
        C96.865,45.849,82.151,31.135,64,31.135z M64,11.532c17.089,0,19.113,0.065,25.861,0.373c6.24,0.285,9.629,1.327,11.884,2.204
        c2.987,1.161,5.119,2.548,7.359,4.788c2.24,2.239,3.627,4.371,4.788,7.359c0.876,2.255,1.919,5.644,2.204,11.884
        c0.308,6.749,0.373,8.773,0.373,25.862c0,17.089-0.065,19.113-0.373,25.861c-0.285,6.24-1.327,9.629-2.204,11.884
        c-1.161,2.987-2.548,5.119-4.788,7.359c-2.239,2.24-4.371,3.627-7.359,4.788c-2.255,0.876-5.644,1.919-11.884,2.204
        c-6.748,0.308-8.772,0.373-25.861,0.373c-17.09,0-19.114-0.065-25.862-0.373c-6.24-0.285-9.629-1.327-11.884-2.204
        c-2.987-1.161-5.119-2.548-7.359-4.788c-2.239-2.239-3.627-4.371-4.788-7.359c-0.876-2.255-1.919-5.644-2.204-11.884
        c-0.308-6.749-0.373-8.773-0.373-25.861c0-17.089,0.065-19.113,0.373-25.862c0.285-6.24,1.327-9.629,2.204-11.884
        c1.161-2.987,2.548-5.119,4.788-7.359c2.239-2.24,4.371-3.627,7.359-4.788c2.255-0.876,5.644-1.919,11.884-2.204
        C44.887,11.597,46.911,11.532,64,11.532z M64,0C46.619,0,44.439,0.074,37.613,0.385C30.801,0.696,26.148,1.778,22.078,3.36
        c-4.209,1.635-7.778,3.824-11.336,7.382C7.184,14.3,4.995,17.869,3.36,22.078c-1.582,4.071-2.664,8.723-2.975,15.535
        C0.074,44.439,0,46.619,0,64c0,17.381,0.074,19.561,0.385,26.387c0.311,6.812,1.393,11.464,2.975,15.535
        c1.635,4.209,3.824,7.778,7.382,11.336c3.558,3.558,7.127,5.746,11.336,7.382c4.071,1.582,8.723,2.664,15.535,2.975
        C44.439,127.926,46.619,128,64,128c17.381,0,19.561-0.074,26.387-0.385c6.812-0.311,11.464-1.393,15.535-2.975
        c4.209-1.636,7.778-3.824,11.336-7.382c3.558-3.558,5.746-7.127,7.382-11.336c1.582-4.071,2.664-8.723,2.975-15.535
        C127.926,83.561,128,81.381,128,64c0-17.381-0.074-19.561-0.385-26.387c-0.311-6.812-1.393-11.464-2.975-15.535
        c-1.636-4.209-3.824-7.778-7.382-11.336c-3.558-3.558-7.127-5.746-11.336-7.382c-4.071-1.582-8.723-2.664-15.535-2.975
        C83.561,0.074,81.381,0,64,0z"
                />
              </g>
            </svg>
            <a href="https://www.instagram.com/ravi_dahiya_jnvu?igsh=aXA0aGdhYm1uZWg3" target="_blank" className="hover:text-pink-500">
              <p>Ravi Prakash Dahiya</p>
            </a>
          </div>

         <div className="flex items-center mt-2 gap-3">
  <img src={gmail} alt="Gmail" height={24} width={24} />
  <a href="mailto:rjdahiya009@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
    rjdahiya009@gmail.com
  </a>
</div>

          <div className="flex items-center mt-2  gap-3">
            <img src={whatsapp} alt="" height={24} width={24} />
            <a href="https://wa.me/916377119794" target="_blank" className="hover:text-pink-500">
              6377119794
            </a>
          </div>

          <div className="flex items-center mt-2  gap-3">
            <img src={map} alt="" height={24} width={24} />
            <a
              href="https://www.google.com/maps/dir/23.2150169,77.4257334/Q82C%2BX86+New+bus+stand+pali,+Keshav+Nagar,+Pali,+Rajasthan+306401/@24.5822215,72.7387979,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x394273951bcb574b:0x9ebedd90f7e2a476!2m2!1d73.32076!2d25.7524241?entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank" className="hover:text-pink-500"
            >
              New bus stand Pali Rajasthan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chairman;
