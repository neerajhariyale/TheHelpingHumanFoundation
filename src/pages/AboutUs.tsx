const AboutUs = () => {
  return (
    <div className="w-11/12 mx-auto p-6  bg-white ">
      {/* About Us Section */}
      <div className="mb-12">
        <h2 className="text-3xl  text-center  font-nautigal">About Us</h2>
        <div className="w-30 border-b-3 border-pink-600 mx-auto mt-1 mb-4"></div>
        <div className="border-1 border-pink-500 shadow-xl rounded-lg flex justify-center items-center flex-col p-2">
            <h4 className="text-md font-semibold text-center text-gray-800">FOUNDED IN 2023</h4>
        <p className="mt-3 text-gray-700 leading-relaxed mb-8 p-2 ">
          The Helping Human Foundation is a leading voice for the marginalised communities
          in Gujarat. Pioneering in their approach, they strive to empower women and children,
          offer assistance to the elderly, and foster livelihood opportunities. Their vision
          is to cultivate an inclusive society where their efforts make a tangible difference,
          driving towards equity and impact in their work.
        </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="mb-12">
        <h2 className="text-3xl text-center font-nautigal">Our Vision</h2>
        <div className="w-32 border-b-3 border-pink-600 mx-auto mt-1 mb-4"></div>
        <div className="border-1 border-pink-500 shadow-xl rounded-lg flex justify-center items-center  flex-col p-2">
        <p className="text-gray-700 leading-relaxed mt-3 mb-8 p-2">
          We envision a world where every individual, irrespective of their origins, is embraced
          affectionately and equipped to flourish. Through tireless commitment and steadfast
          compassion, we join forces with government bodies, donors, and volunteers who resonate
          with our vision. Collaboratively, we strive to forge a realm where empathy, fairness,
          and benevolence prevail, empowering all individuals to pursue meaningful and enriching lives.
        </p>
        </div>
      </div>

      {/* Mission Section */}
      <div>
        <h2 className="text-3xl  text-center  font-nautigal">Our Mission</h2>
        <div className="w-38 border-b-3 border-pink-600 mx-auto mt-1 mb-4"></div>
        <div className="border-1 border-pink-500 shadow-xl rounded-lg flex justify-center items-center flex-col p-2">
        <p className="text-gray-700 leading-relaxed mt-3 mb-8 p-2">
          The Helping Human Foundation is committed to serving as a guiding light of empathy
          and reshaping the destinies of the most disadvantaged individuals in society.
          Our mission is simple yet profound: to embolden marginalised communities in Pali
          and elsewhere. We strive to empower women, children, and the elderly, boost their morale,
          enhance their means of living, and champion their rights.
        </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
