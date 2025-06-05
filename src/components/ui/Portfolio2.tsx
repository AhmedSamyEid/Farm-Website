const Servicesimg = [
  {
    name: "Harvest Concepts",

    image: "/image/Container0.png",
  },
  {
    name: "Farming Products",

    image: "/image/Container1.png",
  },
  {
    name: "Soil fertilization",

    image: "/image/portfolio-03b.jpg.png",
  },
  {
    name: "Fresh vegetables",

    image: "/image/Container00.png",
  },
  {
    name: "Dairy Production",

    image: "/image/Container (11).png",
  },
  {
    name: "Product Supplies",

    image: "/image/Container (40).png",
  },
  {
    name: "Natural Carrots",

    image: "/image/Container (33).png",
  },
  {
    name: "Nutrition Solutions",

    image: "/image/Container (44).png",
  },
  {
    name: "Organic Vegetables",

    image: "/image/service-09.jpg.png",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-[#fefcf6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {Servicesimg.map((member, index) => (
            <div
              key={index}
              className="relative bg-white  rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-70 object-cover"
              />
              <div className="p-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
