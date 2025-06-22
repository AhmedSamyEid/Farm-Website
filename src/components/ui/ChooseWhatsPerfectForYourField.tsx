import { useState, useEffect } from "react";
import { FaSeedling, FaCarrot, FaLeaf, FaCheckCircle } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ServicesSection = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);

  const cards = [
    { img: "/image/service-img-+1.jpg.png", title: "Harvest Concepts" },
    { img: "/image/service-img-02.jpg.png", title: "Farming Products" },
    { img: "/image/service-img-03.jpg.png", title: "Soil Fertilization" },
    {
      img: "/image/Container11.png",
      title: "What technology is used in vertical farming?",
    },
    {
      img: "/image/Mask Group.png",
      title: "Which type of farming is more prevalent today?",
    },
    {
      img: "/image/Container@2x.png",
      title: "The Farmers Sentiment Darkens Hopes Fade",
    },
  ];

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerPage(3); 
      } else if (window.innerWidth >= 640) {
        setCardsPerPage(2); 
      } else {
        setCardsPerPage(1);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const maxIndex = Math.ceil(cards.length / cardsPerPage) - 1;

  return (
    <section className="font-sans">
    
      <div className="bg-green-700 text-white py-12 px-4 md:px-16 relative">
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="bg-white text-green-700 px-3 py-1 rounded-full text-xs font-bold">
              Our Services
            </span>
            <h2 className="text-3xl font-bold mt-2">
              Best Agriculture Services
            </h2>
          </div>

          <div className="space-x-2 text-black">
            <button
              className="bg-white p-2 rounded-full hover:bg-gray-200"
              onClick={() => setIndex((prev) => Math.max(0, prev - 1))}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="bg-white p-2 rounded-full hover:bg-gray-200"
              onClick={() => setIndex((prev) => Math.min(maxIndex, prev + 1))}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              width: `${(cards.length * 100) / cardsPerPage}%`,
              transform: `translateX(-${(index * 100) / cards.length}%)`,
            }}
          >
            {cards.map((item, i) => (
              <div
                key={i}
                className="p-4"
                style={{
                  width: `${100 / cards.length}%`,
                }}
              >
                <div className="bg-white text-black rounded-xl overflow-hidden shadow-md">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">
                      Farming and sustainable solutions with smart techniques.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div className="bg-[#F9F8F4] px-4 md:px-16 py-16 text-center relative">
        <span className="bg-gray-200 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 inline-block mb-4">
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Choose What’s Perfect
          <br />
          For Your Field
        </h2>

        <div className="relative flex justify-center mb-12">
          <img
            src="/image/img-02.png.png"
            alt="Corn"
            className="w-40 md:w-56 z-10"
          />
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[ 
            { icon: <FaSeedling />, title: "Agriculture Products" },
            { icon: <FaCarrot />, title: "Fresh Vegetables" },
            { icon: <FaLeaf />, title: "Quality Products" },
            { icon: <FaCheckCircle />, title: "Pure & Organic" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="bg-yellow-300 w-12 h-12 flex items-center justify-center rounded-full text-xl text-black mb-4">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm">
                Nullam porta enim vel tellus commodo.
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 justify-center">
          <img
            src="/image/Container.png"
            alt="Woman Farming"
            className="rounded-xl shadow-md w-80 h-70 object-cover mx-auto"
          />
          <img
            src="/image/Container1.png"
            alt="Man Using Tablet"
            className="rounded-xl shadow-md w-80 h-70 object-cover mx-auto"
          />
          <img
            src="/image/about-img.jpg.png"
            alt="Man Using Tablet"
            className="rounded-xl shadow-md w-80 h-70 object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
