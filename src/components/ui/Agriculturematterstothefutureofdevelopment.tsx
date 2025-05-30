export default function HeroSection() {
  return (
    <section className="bg-green-700 text-white py-16 px-4">
      <div className="max-w-7xl  mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="bg-white text-green-700 text-sm px-3 py-1 rounded-full font-medium">
            Choose Agriculture
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Agriculture matters to the <br /> future of development
          </h2>
          <p className="mt-4 text-gray-200">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form...
          </p>
        </div>
        <div className="relative">
          <img
            src="/image/staticbox-img-01.jpg.png"
            alt="Farmers"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute bottom-4 right-4 bg-yellow-400 p-2 rounded-full">
            <i className="bi bi-camera-fill text-white text-xl"></i>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-4 gap-6 text-white">
        {[
          "Schedule Your Experience",
          "Get Professional Advice",
          "Meet Our Expert Farmer",
          "Now Get & Best Products",
        ].map((step, index) => (
          <div
            key={index}
            className="bg-white/10 p-5 rounded-xl border border-white/20"
          >
            <div className="text-3xl font-bold text-lime-300">0{index + 1}</div>
            <h4 className="text-lg font-semibold mt-2">{step}</h4>
            <p className="text-sm mt-1">Online / Tells Place / Aloe Vera / 09:00 - 17:00</p>
          </div>
        ))}
      </div>
    </section>
  );
}
