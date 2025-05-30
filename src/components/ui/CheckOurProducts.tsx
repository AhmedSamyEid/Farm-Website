import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function CheckOurProducts() {

  const [index, setIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);

  const cards = [
    { img: "/image/shop-img-02.png.png", title: "Corn" , price : "$45.00" },
    { img: "/image/shop-img-03.png.png", title: "Tomato" ,price : "$16.00" },
    { img: "/image/shop-img-04.png.png", title: "Cabbage" ,price : "$18.00" },
    { img: "/image/shop-img-05.png.png", title: "Kiwi" ,price : "$2.00" },
    
  ];

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth >= 768) {
        setCardsPerPage(4);
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
    <>
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
    <div className="overflow-hidden ">
          <div
            className="flex  transition-transform duration-500"
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
                  transform: `translateX(-${index * 67}%)`,
                  width: `${(cards.length / cardsPerPage) * 100}%`,
                }}
              >
                <div className="bg-white  text-black rounded-xl overflow-hidden shadow-md">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <span>{item.price}</span>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
    </>
  );
}
