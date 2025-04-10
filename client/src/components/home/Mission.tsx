import { ArrowRight, ShieldCheck, Zap, PartyPopper, Palette } from "lucide-react";
import { Link } from "wouter";
import { generateRainbowGradient, svgToDataURL } from "@/lib/imageUtils";

const Mission = () => {
  // Generate a rainbow gradient for the image placeholders
  const gradient1 = svgToDataURL(generateRainbowGradient(600, 400));
  const gradient2 = svgToDataURL(generateRainbowGradient(600, 400));
  const gradient3 = svgToDataURL(generateRainbowGradient(600, 400));
  const gradient4 = svgToDataURL(generateRainbowGradient(600, 400));
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 mb-6">
              <span className="mr-2">★</span>
              <span>Est. June 2023</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cosmic Mission</h2>
            <div className="h-1 w-20 bg-[#E71D36] mb-6"></div>
            <p className="text-lg mb-6">
              From Earth's vibrant cities to the farthest reaches of the cosmos, we're on a mission to create, preserve, and celebrate queer spaces that transcend planetary boundaries and serve all beings across the universe.
            </p>
            <p className="text-lg mb-6">
              Rainbow Rise empowers LGBTQ+ communities everywhere—whether in Austin, Alpha Centauri, or anywhere in between—to fund and build the venues, bars, cafes, and community centers that every queer being deserves.
            </p>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-3">How Funds Are Used</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ShieldCheck className="text-purple-600 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                  <span><strong>60% Space Creation & Preservation</strong> - Direct funding for venue purchases, renovations, and lease assistance</span>
                </li>
                <li className="flex items-start">
                  <Zap className="text-pink-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                  <span><strong>20% Community Programs</strong> - Events, workshops, and activities that strengthen queer bonds</span>
                </li>
                <li className="flex items-start">
                  <PartyPopper className="text-yellow-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                  <span><strong>15% Creator Support</strong> - Funds for queer artists and performers who illuminate our spaces</span>
                </li>
                <li className="flex items-start">
                  <Palette className="text-blue-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                  <span><strong>5% Platform Maintenance</strong> - Keeping our cosmic mission expanding across the universe</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-xl shadow-sm">
                <div className="text-purple-800 text-2xl font-bold">28+</div>
                <div className="text-sm text-purple-700">Campaign Ideas</div>
              </div>
              <div className="bg-gradient-to-r from-pink-100 to-pink-200 p-4 rounded-xl shadow-sm">
                <div className="text-pink-700 text-2xl font-bold">$321K</div>
                <div className="text-sm text-pink-600">Pledged Since Launch</div>
              </div>
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-xl shadow-sm">
                <div className="text-blue-700 text-2xl font-bold">3,700+</div>
                <div className="text-sm text-blue-600">Cosmic Supporters</div>
              </div>
            </div>
            <Link href="/about" className="text-primary font-medium flex items-center hover:underline">
              Learn more about our cosmic story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden h-48 shadow-md">
              <img src={gradient1} alt="Queer space before transformation" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 px-3 py-1 m-2 rounded text-xs text-white">Before</div>
            </div>
            <div className="rounded-2xl overflow-hidden h-48 mt-8 shadow-md">
              <img src={gradient2} alt="Queer space after transformation" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 px-3 py-1 m-2 rounded text-xs text-white">After</div>
            </div>
            <div className="rounded-2xl overflow-hidden h-48 mt-8 shadow-md">
              <img src={gradient3} alt="Community celebration" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 px-3 py-1 m-2 rounded text-xs text-white">Celebration</div>
            </div>
            <div className="rounded-2xl overflow-hidden h-48 shadow-md">
              <img src={gradient4} alt="Local queer art" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 px-3 py-1 m-2 rounded text-xs text-white">Local Art</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
