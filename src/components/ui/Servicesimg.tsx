import { FaShareAlt } from 'react-icons/fa';

const Servicesimg = [
  {
    name: 'Harvest Concepts',
    title: 'Farming and animal husbandry and discuss with farmers and scientists.',
    image: '/image/service-img-+1.jpg.png',
  },
  {
    name: 'Farming Products',
    title: 'Farming and animal husbandry and discuss with farmers and scientists.',
    image: '/image/service-img-02.jpg(44).png',
  },
  {
    name: 'Soil fertilization',
    title: 'Farming and animal husbandry and discuss with farmers and scientists.',
    image: '/image/service-03.jpg.png',
  },
  {
    name: 'Fresh vegetables',
    title: 'Farming and animal husbandry and discuss with farmers and scientists.',
    image: '/image/service-img-04.jpg.png',
  },
  {
    name: 'Dairy Production',
    title: 'Farming and animal husbandry and discuss with farmers and scientists.',
    image: '/image/service-05.jpg.png',
  },
  {
    name: 'Product Supplies',
    title: 'Farming and animal husbandry and discuss with farmers and scientists.',
    image: '/image/service-06.jpg.png',
  },
  {
    name: 'Natural Carrots',
    title: 'Farming and animal husbandry and discuss with farmers and scientists.',
    image: '/image/service-07.jpg.png',
  },
  {
    name: 'Nutrition Solutions',
    title: 'Farming and animal husbandry and discuss with farmers and scientists.',
    image: '/image/service-08.jpg.png',
  },
  {
    name: 'Organic Vegetables',
    title: 'Farming and animal husbandry and discuss with farmers and scientists.',
    image: '/image/service-09.jpg.png',
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-[#fefcf6]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {Servicesimg.map((member, index) => (
            <div key={index} className="relative bg-white rounded-xl shadow-md overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-72 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-green-700 text-sm font-semibold w-70">{member.title}</p>
              </div>
              <button className="absolute bottom-4 right-4 bg-yellow-300 p-2 rounded-full hover:bg-yellow-400 transition">
                <FaShareAlt className="text-gray-800" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
