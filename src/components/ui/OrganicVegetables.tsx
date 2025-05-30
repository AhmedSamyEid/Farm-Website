import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function OrganicVegetables() {
    const [index, setIndex] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(1);
  
    const cards = [
      { img: "/image/service-img-+1.jpg.png", title: "Harvest Concepts" },
      { img: "/image/service-img-02.jpg.png", title: "Farming Products" },
      { img: "/image/service-img-03.jpg.png", title: "Soil Fertilization" },
      {
        img: "/image/Container11.png",
        title: "What technology is used in verticalfarming?",
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
        if (window.innerWidth >= 768) {
          setCardsPerPage(3);
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
    <section className="px-4 py-10 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
    
        <div className="w-full lg:w-1/2">
          <img
            src="/image/img-011.png.png"
            alt="Organic Vegetables"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

      
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-800 mb-4 leading-tight">
            Organic Vegetables <br /> in Our Store
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            There are many variations of passages of Lorem Ipsum available,
            <br className="hidden sm:block" />
            but the majority have suffered alteration look even.
          </p>
            <button className="bg-green-800 rounded-4xl  p-3">Buy Now </button>
        </div>
      </div>
        <h2 className="text-3xl font-bold mt-5">
              Latest posts & articles
            </h2>
            <div className="mt-20">
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
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${index * 33}%)`,
              width: `${(cards.length / cardsPerPage) * 100}%`,
            }}
          >
            {cards.map((item, i) => (
              <div
                key={i}
                className="p-4"
                style={{
                  transform: `translateX(-${index * 100}%)`,
                  width: `${(cards.length / cardsPerPage) * 10}%`,
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
      
    </section>
  );
}

