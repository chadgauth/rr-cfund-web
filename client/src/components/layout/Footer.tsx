import { Link } from "wouter";
import { 
  FaInstagram, 
  FaFacebook, 
  FaTwitter, 
  FaTiktok, 
  FaMapMarkerAlt, 
  FaEnvelope 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-primary text-xl font-bold">RR</span>
              </div>
              <span className="text-xl font-bold">Rainbow Rise</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building Austin's queer future together, one space at a time.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white hover:text-[#E71D36] transition"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#FF8C42] transition"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#FFDD4A] transition"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#70C1B3] transition"
                aria-label="TikTok"
              >
                <FaTiktok className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Campaigns</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/campaigns" className="text-gray-400 hover:text-white transition">
                  Browse All
                </Link>
              </li>
              <li>
                <Link href="/campaigns?category=Bars+%26+Clubs" className="text-gray-400 hover:text-white transition">
                  Bars & Clubs
                </Link>
              </li>
              <li>
                <Link href="/campaigns?category=Community+Spaces" className="text-gray-400 hover:text-white transition">
                  Community Spaces
                </Link>
              </li>
              <li>
                <Link href="/campaigns?category=Cafes+%26+Restaurants" className="text-gray-400 hover:text-white transition">
                  Cafes & Restaurants
                </Link>
              </li>
              <li>
                <Link href="/campaigns?category=Retail+%26+Services" className="text-gray-400 hover:text-white transition">
                  Retail & Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/about#how-it-works" className="text-gray-400 hover:text-white transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about#success-stories" className="text-gray-400 hover:text-white transition">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="text-gray-400 hover:text-white transition">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about#faq" className="text-gray-400 hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1 text-[#E71D36]" />
                <span className="text-gray-400">Austin, TX</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mr-2 mt-1 text-[#FF8C42]" />
                <span className="text-gray-400">hello@rainbowrise.org</span>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact Form
                </Link>
              </li>
              <li>
                <Link href="/contact#support" className="text-gray-400 hover:text-white transition">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Rainbow Rise. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
