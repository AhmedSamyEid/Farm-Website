import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialsTimeline = () => {
  const posts = [
    {
      img: "/image/Container11.png",
      title: "What technology is used in vertical farming?",
      category: "Farming News",
    },
    {
      img: "/image/Mask Group.png",
      title: "Which type of farming is more prevalent today?",
      category: "Organic Farm",
    },
    {
      img: "/image/Container@2x.png",
      title: "The Farmer's Sentiment Darkens Hopes Fade",
      category: "Farming News",
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

  const ITEMS_PER_PAGE = 4;
  const [logoIndex, setLogoIndex] = useState(0);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogoNext = () => {
    setLogoIndex((prev) =>
      prev + ITEMS_PER_PAGE < logos.length ? prev + ITEMS_PER_PAGE : prev
    );
  };

  const handleLogoPrev = () => {
    setLogoIndex((prev) =>
      prev - ITEMS_PER_PAGE >= 0 ? prev - ITEMS_PER_PAGE : 0
    );
  };

  const visibleLogos = logos.slice(logoIndex, logoIndex + ITEMS_PER_PAGE);

  const handlePostNext = () => {
    setCurrentPostIndex((prev) => (prev + 1 < posts.length ? prev + 1 : prev));
  };

  const handlePostPrev = () => {
    setCurrentPostIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={handleLogoPrev}
            className="bg-gray-200 p-2 rounded-full"
          >
            ←
          </button>
          <button
            onClick={handleLogoNext}
            className="bg-gray-200 p-2 rounded-full"
          >
            →
          </button>
        </div>

        <div className="flex flex-wrap justify-between gap-8 my-12 md:flex-nowrap overflow-hidden">
          {visibleLogos.map((src, i) => (
            <img
              key={i}
              src={src}
              className="h-20 flex-shrink-0"
              alt={`Logo ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center">
        <img src="/image/img-01.png.png" alt="Farmer" className="rounded-xl" />
        <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
          <span className="inline-block bg-yellow-400 text-white text-sm px-3 py-1 rounded-full mb-4">
            Free Quote
          </span>
          <h2 className="text-2xl font-bold mb-6">Get a free quote</h2>
          <form className="grid gap-4">
            <input className="p-3 rounded-md border" placeholder="Your Name" />
            <input
              className="p-3 rounded-md border"
              placeholder="Email Address"
            />
            <input className="p-3 rounded-md border" placeholder="Subject" />
            <textarea
              className="p-3 rounded-md border"
              placeholder="Message"
            ></textarea>
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-md">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Latest posts & articles</h3>
            {isMediumScreen && (
              <div className="flex gap-2">
                <button
                  onClick={handlePostPrev}
                  className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={handlePostNext}
                  className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                >
                  <FaArrowRight />
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6 transition-all duration-300">
            {(isMediumScreen ? [posts[currentPostIndex]] : posts).map(
              (post, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition"
                >
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-sm text-green-600 font-medium">
                      {post.category}
                    </span>
                    <h4 className="font-semibold mt-2">{post.title}</h4>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsTimeline;
