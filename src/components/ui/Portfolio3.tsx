const Servicesimg = [
  {
    name: "Harvest Concepts",

    image: "/image/service-img-+1.jpg.png",
  },
  {
    name: "Farming Products",

    image: "/image/service-img-02.jpg(44).png",
  },
  {
    name: "Soil fertilization",

    image: "/image/service-03.jpg.png",
  },
  {
    name: "Fresh vegetables",

    image: "/image/service-img-04.jpg.png",
  },
  {
    name: "Dairy Production",

    image: "/image/service-05.jpg.png",
  },
  {
    name: "Product Supplies",

    image: "/image/service-06.jpg.png",
  },
  {
    name: "Natural Carrots",

    image: "/image/service-07.jpg.png",
  },
  {
    name: "Nutrition Solutions",

    image: "/image/service-08.jpg.png",
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
              className="relative bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
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
