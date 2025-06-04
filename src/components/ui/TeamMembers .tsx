import { FaShareAlt } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Jacob Mersin',
    title: 'CEO Owner',
    image: '/image/Container (1).png',
  },
  {
    name: 'Clara Henry',
    title: 'Supervisor',
    image: '/image/Containr.png',
  },
  {
    name: 'Paula Den',
    title: 'Manager',
    image: '/image/Container (2).png',
  },
  {
    name: 'Carla Hall',
    title: 'Marketing',
    image: '/image/Container (3).png',
  },
  {
    name: 'Mark Donald',
    title: 'Sales Manager',
    image: '/image/Container (4).png',
  },
  {
    name: 'Jamie Oliver',
    title: 'Garden Experts',
    image: '/image/Container (5).png',
  },
  {
    name: 'Alice Waters',
    title: 'Senior Manager',
    image: '/image/Container (6).png',
  },
  {
    name: 'Julia Taylor',
    title: 'Senior Worker',
    image: '/image/Container (7).png',
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-[#fefcf6]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative bg-white rounded-xl shadow-md overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-72 object-cover" />
              <div className="p-4">
                <p className="text-green-700 text-sm font-semibold">{member.title}</p>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
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
