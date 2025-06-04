import { useState } from "react";

const testimonials = [
  {
    img: "/image/testimonial-02.jpg.png",
    name: "John Doe",
    role: "Farmer",
    feedback:
      "I would recommend this product to all farmers. It's very useful and affordable.",
  },
  {
    img: "/image/testimonial-04.jpg.png",
    name: "Jane Smith",
    role: "Organic Grower",
    feedback:
      "Amazing service and great results. It changed the way I manage my farm!",
  },
  {
    img: "/image/testimonial-03.jpg.png",
    name: "Ahmed Ali",
    role: "Greenhouse Expert",
    feedback:
      "This helped increase my crop yield while staying sustainable. Highly recommended.",
  },
];
const logos = [
  "/icons/client-logo-02.png.png",
  "/icons/client-logo-03.png.png",
  "/icons/client-logo-04.png.png",
  "/icons/client-logo-05.png.png",
  "/icons/client-logo-06.png.png",
  "/icons/client-logo-01.png.png",
  "/icons/client-logo-06.png.png",
  "/icons/client-logo-01.png.png",
];

const timeline = [
  { img: "/icons/1987.png", label: "Open my Farm" },
  { img: "/icons/1995.png", label: "Farm Revitalization" },
  { img: "/icons/2000.png", label: "Growers Formed" },
  { img: "/icons/1910.png", label: "Start of Agriculture" },
];
const ITEMS_PER_PAGE = 4;

const Farminghavebeensince = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + ITEMS_PER_PAGE < logos.length ? prev + ITEMS_PER_PAGE : prev
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - ITEMS_PER_PAGE >= 0 ? prev - ITEMS_PER_PAGE : 0
    );
  };

  const visibleLogos = logos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="bg-[#FAF9F6] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">What our customers say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md relative"
            >
              <div className="text-yellow-400 text-2xl">“</div>
              <p className="text-gray-600 mt-2">{item.feedback}</p>
              <div className="flex items-center mt-4">
                <img
                  src={item.img}
                  className="w-20 h-20 rounded-full"
                  alt={item.name}
                />
                <div className="ml-3">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex justify-end space-x-2 mt-4">
            <button
              onClick={handlePrev}
              className="bg-gray-200 p-2 rounded-full"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-200 p-2 rounded-full"
            >
              →
            </button>
          </div>

          <div className="flex flex-wrap justify-between gap-8 my-12 md:flex-nowrap overflow-hidden ">
            {visibleLogos.map((src, i) => (
              <img
                key={i}
                src={src}
                className="h-20 flex-shrink-0 "
                alt={`Logo ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="">
          <img
            src="/image/Section.png"
            alt="Farmer"
            className="rounded-xl shadow-md"
          />
        </div>

        <div className="mt-16">
          <h3 className="text-5xl text-green-900 font-semibold m-20">
            Farming have been since <br />
            1866
          </h3>
          <div className="grid grid-cols-2  md:grid-cols-4 gap-4 text-center">
            {timeline.map((item, i) => (
              <div key={i}>
                <img src={item.img} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
        <img className="mt-15" src="/image/Section (111).png" />
      </div>
    </section>
  );
};

export default Farminghavebeensince;
