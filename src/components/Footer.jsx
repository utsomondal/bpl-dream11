import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">BPL Dream 11</h2>
            <p className="text-gray-400 mt-2">
              The ultimate platform for player bidding and fantasy sports auctions.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Players</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Bidding Rules</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-3 flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-6" />

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} BPL Dream 11. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
