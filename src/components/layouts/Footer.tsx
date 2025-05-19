import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram  , FaPhoneAlt, FaEnvelope} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] border-t border-gray-200 text-gray-700  py-16">
      
    <div className="bg-[#f6d44b] text-black text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 w-full h-15">
        {/* الروابط */}
        <ul className="flex gap-6 text-xs font-medium tracking-wide">
          <li><a href="#" className="hover:underline">FARMERS</a></li>
          <li><a href="#" className="hover:underline">ORGANIC</a></li>
          <li><a href="#" className="hover:underline">FOODS</a></li>
          <li><a href="#" className="hover:underline">PRODUCT</a></li>
        </ul>

        {/* معلومات الاتصال */}
        <div className="flex gap-6 items-center text-xs">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-sm" />
            <span>+1 (212) 255 511</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-sm" />
            <span>noreply@admininfo.tech</span>
          </div>
        </div>
      </div>
    </div>
  
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mt-40">
        {/* Logo and Description */}
        <div>
  
          <div className="flex items-center mb-4">
            <img src="/icons/logo.svg.png" alt="grimo" className="h-10 mr-2" />
        
          </div>
          <p className="text-sm">
            Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan risus.
            In vitae sapien viverra est. Duis eu ullam mauris.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-500">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-semibold mb-4">Useful Link</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Company</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Working Time */}
        <div>
          <h4 className="font-semibold mb-4">Working Time</h4>
          <ul className="text-sm space-y-2">
            <li>Mon - Fri: 9:00am - 5:00pm</li>
            <li>Saturday: 10:00am - 6:00pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-semibold mb-4">Our Address</h4>
          <p className="text-sm">Old Westbury 256, New York<br />11201, United States</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-12 pt-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <div className="space-x-4">
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
        <p className="mt-2 md:mt-0">&copy; 2024 Aqtima. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
