import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const TeamMemberProfile = () => {
  return (
    <section className="bg-[#fefcf6] py-12 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <img
            src="/image/team-single-01.jpg.png"
            alt="Clara Henry"
            className="w-full h-full object-cover"
          />
          <div className="p-6">
            <p className="text-green-700 text-sm font-semibold">SUPERVISOR</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Clara Henry
            </h2>
            <p className="text-gray-600 mb-4">
              Clara takes care of supervising the work garden and looks after
              new interns.
            </p>
            <ul className="text-gray-700 text-sm mb-4 space-y-1">
              <li>
                <strong>Phone:</strong> +1 800 123 456 789
              </li>
              <li>
                <strong>Email:</strong> clara@example.com
              </li>
              <li>
                <strong>Experience:</strong> 5 years
              </li>
              <li>
                <strong>Social:</strong>
              </li>
            </ul>
            <div className="flex space-x-3 text-green-600">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">Personal Information</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Enthusiastic and passionate about sustainable agriculture.</li>
            <li>
              Strong leadership, communication, and organizational skills.
            </li>
            <li>
              Expert in crop rotation, pest control, and soil health monitoring.
            </li>
          </ul>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Professional Skills</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Analytical Skills</span>
                <span>75%</span>
              </li>
              <li className="flex justify-between">
                <span>Farming Skills</span>
                <span>82%</span>
              </li>
              <li className="flex justify-between">
                <span>Problem Solving</span>
                <span>90%</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Awards & Honors</h3>
            <ul className="space-y-2 bg-white p-4 rounded-xl shadow">
              <li>2015 – 2017: Best in local agricultural farming</li>
              <li>2018 – 2021: Agricultural excellence award</li>
              <li>2021 – 2023: National agricultural expert award</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">
            Everything on our farm is grown
          </h3>
          <p className="text-gray-700 mb-4">
            We follow sustainable and organic farming practices. Clara plays a
            key role in managing field tasks and supporting young interns. Her
            role ensures our farm remains a model of environmental
            responsibility and innovation.
          </p>
          <ul className="list-disc list-inside text-green-700">
            <li>Certified organic practices</li>
            <li>100% pesticide-free environment</li>
            <li>Use of renewable resources</li>
          </ul>
        </div>

        <div className="mt-10 bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-4">Send a message</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border p-2 rounded"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="border p-2 rounded md:col-span-2"
            />
            <button className="bg-green-600 text-white px-6 py-2 rounded w-fit hover:bg-green-700">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberProfile;
