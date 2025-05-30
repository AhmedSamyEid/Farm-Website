import { useState } from "react";

const initialFeatures = [
  { icon: "/icons/Container(77).png", title: "Member Discount" },
  { icon: "/icons/Background(55).png", title: "Money Return" },
  { icon: "/icons/Background (100).png", title: "Free Shipping" },
  { icon: "/icons/Container (1).png", title: "Online Support" },
];

const Memberdiscount = () => {
  const [features, setFeatures] = useState(initialFeatures);

  const handleRemove = (index: number) => {
    const updated = features.filter((_, i) => i !== index);
    setFeatures(updated);
  };

  return (
    <section className="bg-[#F9F8F4] px-4 md:px-16 py-12 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 relative shadow hover:shadow-md transition"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-yellow-300 mb-4 overflow-hidden">
              <img src={item.icon} alt={item.title} className="w-20 h-auto" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">
              Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.
            </p>
            <button
              onClick={() => handleRemove(i)}
              className="absolute bottom-2 right-2 text-gray-400 text-xs hover:text-black"
              aria-label="Remove"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Memberdiscount;

