export default function BestAgricultureServices() {
  const AgricultureServices = [
    { src: "/image/service-img1.jpg.png", title: "Harvest Concepts" },
    { src: "/image/service-img-02.jpg(44).png", title: "Farming Products" },
    { src: "/image/Border.png", title: "Soil fertilization" },
    { src: "/image/service-img-04.jpg.png", title: "Fresh vegetables" },
  ];

  return (
    <><div className=" mt-20">
        <h1 className="text-3xl font-bold text-center mb-8">Best Agriculture Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {AgricultureServices.map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.src}
              alt={item.title}
              className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
            />
            <h3 className="text-lg font-medium">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
}
