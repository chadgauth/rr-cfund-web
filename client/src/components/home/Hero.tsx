import { Link } from "wouter";
import { RainbowButton } from "@/components/ui/rainbow-button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#3772FF] opacity-90 z-10"></div>
      
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full bg-gray-800"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Rebuilding Austin's Queer Spaces Together
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8">
            Crowdfunding the future of LGBTQ+ venues and community spaces in our city.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#campaigns">
              <RainbowButton variant="primary">Explore Campaigns</RainbowButton>
            </Link>
            <Link href="/create-campaign">
              <RainbowButton variant="secondary">Start a Campaign</RainbowButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
