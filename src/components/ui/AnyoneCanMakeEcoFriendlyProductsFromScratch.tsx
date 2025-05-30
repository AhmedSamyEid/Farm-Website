export default function AnyoneCanMakeEcoFriendlyProductsFromScratch() {
  const services = [
    {
      title: "Agriculture Products",
      icon: "/icons/Background (1).png", 
      isImage: true,
      desc: "Various types of crops & services.",
    },
    {
      title: "Professional Farmers",
      icon: "/icons/Background.png",
      isImage: true,
      desc: "Work with trained farmers.",
    },
    {
      title: "Fresh Vegetables",
      icon: "/icons/Background (4).png",
      isImage: true,
      desc: "Fresh & healthy vegetables.",
    },
    {
      title: "Dairy Products",
      icon: "/icons/Background (28).png",
      isImage: true,
      desc: "High quality dairy goods.",
    },
    {
      title: "Quality Products",
      icon: "/icons/Backgrou.png",
      isImage: true,
      desc: "Certified organic products.",
    },
    {
      title: "Modern Equipment",
      icon: "/icons/Background (5261).png",
      isImage: true,
      desc: "State-of-the-art farming tools.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="text-center mb-12">
        <span className="bg-gray-200 text-gray-700 text-sm px-4 py-1 rounded-full">
          We Work For Nature
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Anyone Can Make Eco-Friendly <br /> Products From Scratch
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition"
          >
            <div className="text-3xl text-yellow-500 mb-4 flex justify-center">
              {item.isImage ? (
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-14 h-14 object-contain"
                />
              ) : (
                <i className={item.icon}></i>
              )}
            </div>
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
