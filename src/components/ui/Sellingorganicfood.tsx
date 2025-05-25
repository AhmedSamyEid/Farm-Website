import { FaTractor, FaCarrot, FaSeedling, FaCheckCircle, FaTree, FaTruck } from "react-icons/fa";

const features = [
  { icon: <FaTractor />, title: "Professional Farmers" },
  { icon: <FaCarrot />, title: "Fresh Vegetables" },
  { icon: <FaSeedling />, title: "Agriculture Products" },
  { icon: <FaCheckCircle />, title: "100% Guaranteed" },
];

const AboutSection = () => {
  return (
    <section className="bg-[#F9F8F4] px-4 md:px-16 py-12 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {features.map((item, i) => (
          <div key={i} className="bg-white rounded-xl p-6 relative shadow hover:shadow-md transition">
            <div className="bg-yellow-300 w-12 h-12 rounded-full flex items-center justify-center text-black text-xl mb-4">
              {item.icon}
            </div>
            <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.</p>
            <button className="absolute bottom-2 right-2 text-gray-400 text-xs hover:text-black">✕</button>
          </div>
        ))}
      </div>

  
      <div className=" grid md:grid-cols-2 gap-8 items-center mb-12">
        
        <div className="flex justify-center md:justify-end">
          <img className="w-70" src="/image/Background.png" />
          <div className="text-center px-8 py-10 rounded-xl text-black shadow-md w-60">
          
            
          </div>
        </div>
        <div>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 inline-block mb-2">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Currently we are growing<br />and selling organic food
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even.
          </p>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="flex gap-2 items-start">
              <FaTree className="text-green-600 text-xl mt-1" />
              <div>
                <p className="font-bold">Eco Farms Worldwide</p>
                <p className="text-gray-500">Ages of lorem ipsum available. Majority have suffered.</p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <FaTruck className="text-green-600 text-xl mt-1" />
              <div>
                <p className="font-bold">Special Equipment</p>
                <p className="text-gray-500">Ages of lorem ipsum available. Majority have suffered.</p>
              </div>
            </div>
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default AboutSection;
