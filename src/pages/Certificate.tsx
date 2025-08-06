import certificate from "@/assets/teamPhotos/certificate.png"

const Certificate = () => {
  return (
     <div className="w-full mt-3  flex flex-col justify-center items-center ">
      {/* Quote Section */}
      <h1 className="text-2xl sm:text-4xl font-semibold text-center   mb-4">
        "Your Contribution, Our Commitment — {" "}
        <span className="text-red-500">Certified."</span>
      </h1>
      <p className="text-center text-gray-700 max-w-xl mb-8">
       This certificate is a symbol of appreciation and trust, awarded to individuals or organizations whose support empowers our NGO’s mission to serve, uplift, and bring positive change to society.
      </p>

      <div className=" shadow-stone-400 shadow-2xl p-2 md:p-6 lg:p-6 xl:p-6 rounded-xl">
        {/* <h2 className="text-lg font-semibold mb-2 text-center">
          Scan & Donate via UPI
        </h2> */}
        <img
          src={certificate}
          alt="Donate QR Code"
          className="w-full mx-auto h-96  object-contain rounded-md "
        />
        </div>
      
    </div>
  )
}

export default Certificate
