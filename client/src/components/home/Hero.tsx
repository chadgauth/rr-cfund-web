import { Link } from "wouter";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { generateRainbowGradient, svgToDataURL } from "@/lib/imageUtils";

const Hero = () => {
  // Create rainbow gradient background as SVG
  const rainbowGradientSvg = generateRainbowGradient();
  const rainbowGradientUrl = svgToDataURL(rainbowGradientSvg);
  
  return (
    <section className="relative overflow-hidden">
      {/* Overlay with semi-transparent gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#3772FF] opacity-80 z-10"></div>
      
      {/* Rainbow Background Pattern */}
      <div 
        className="absolute inset-0 w-full h-full bg-repeat"
        style={{ 
          backgroundImage: `url(${rainbowGradientUrl})`,
          backgroundSize: "cover"
        }}
      ></div>
      
      {/* City Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-black opacity-20 z-5">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,40 L60,35 L120,45 L180,30 L240,45 L300,25 L360,45 L420,35 L480,50 L540,30 L600,40 L660,20 L720,50 L780,25 L840,45 L900,30 L960,50 L1020,25 L1080,45 L1140,30 L1200,50 L1260,25 L1320,40 L1380,30 L1440,40 L1440,100 L0,100 Z" fill="black"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-36 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm p-6 rounded-2xl inline-block mb-6">
            <div className="text-xl text-white font-semibold mb-1">Rainbow Rise</div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Rebuilding Austin's Queer Spaces Together
          </h1>
          
          <p className="text-xl md:text-2xl text-white opacity-90 mb-10 drop-shadow-md">
            Crowdfunding the future of LGBTQ+ venues and community spaces in our city.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/campaigns">
              <RainbowButton variant="primary" className="text-lg px-8 py-6">
                Explore Campaigns
              </RainbowButton>
            </Link>
            <Link href="/create-campaign">
              <RainbowButton variant="secondary" className="text-lg px-8 py-6">
                Start a Campaign
              </RainbowButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
