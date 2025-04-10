import { Link } from "wouter";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { CosmicBackground, CosmicText, GlowingText } from "@/components/ui/cosmic-background";
import { generateRainbowGradient } from "@/lib/imageUtils";

// Neon Planet SVG component
const NeonPlanet = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 rounded-full bg-pink-700 blur-xl opacity-50 animate-cosmic-slow"></div>
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="relative z-10 animate-float">
      <defs>
        <linearGradient id="planetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF66C4" />
          <stop offset="100%" stopColor="#7B5FFB" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <circle cx="100" cy="100" r="80" fill="url(#planetGradient)" filter="url(#glow)" />
      <path d="M30,100 Q60,70 100,80 Q140,90 170,100 Q140,130 100,120 Q60,110 30,100 Z" fill="#FF66C4" opacity="0.3" />
      <circle cx="70" cy="70" r="15" fill="white" opacity="0.2" />
      <circle cx="60" cy="60" r="8" fill="white" opacity="0.3" />
    </svg>
  </div>
);

// Star component
const Star = ({ x, y, size, delay }) => (
  <div 
    className="absolute rounded-full bg-white animate-sparkle"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`,
      filter: 'blur(0.5px)'
    }}
  />
);

const Hero = () => {
  // Generate random stars
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3
  }));
  
  return (
    <CosmicBackground intensity="soft" className="min-h-screen flex items-center justify-center overflow-hidden">
      {/* Stars */}
      {stars.map(star => (
        <Star key={star.id} {...star} />
      ))}
      
      {/* Floating Planets */}
      <NeonPlanet className="absolute w-32 h-32 right-[10%] top-[20%]" />
      <NeonPlanet className="absolute w-20 h-20 left-[15%] top-[30%]" />
      <NeonPlanet className="absolute w-16 h-16 right-[25%] bottom-[15%]" />
      
      {/* Cosmic Rings */}
      <div className="absolute w-[150%] h-[150%] border-[30px] border-fuchsia-600/10 rounded-full -top-[25%] -left-[25%] animate-cosmic-slow"></div>
      <div className="absolute w-[130%] h-[130%] border-[20px] border-purple-600/20 rounded-full -top-[15%] -left-[15%] animate-cosmic-medium"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-36 relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          {/* Futuristic badge */}
          <div className="bg-gradient-to-r from-fuchsia-600/30 to-purple-600/30 backdrop-blur-md p-4 rounded-full inline-flex mb-6 border border-pink-500/50">
            <div className="text-xl text-white font-bold px-4 py-1 border-2 border-pink-500/50 rounded-full animate-pulse">
              <GlowingText>Rainbow Rise</GlowingText>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            <div className="mb-2">Empowering</div>
            <div className="mb-2"><CosmicText className="text-6xl md:text-8xl">Queer Spaces</CosmicText></div>
            <div>Across The Universe</div>
          </h1>
          
          <p className="text-xl md:text-2xl text-white opacity-90 mb-10 bg-black/30 backdrop-blur-sm p-6 rounded-xl inline-block">
            Crowdfunding the future of LGBTQ+ venues and community spaces 
            <br />
            <GlowingText color="purple" className="text-2xl md:text-3xl font-bold italic mt-2">
              anywhere and everywhere in the cosmos
            </GlowingText>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/campaigns">
              <RainbowButton variant="primary" className="text-lg px-8 py-6 rounded-xl font-bold shadow-lg shadow-pink-500/30">
                Explore Campaigns
              </RainbowButton>
            </Link>
            <Link href="/create-campaign">
              <RainbowButton variant="secondary" className="text-lg px-8 py-6 rounded-xl font-bold shadow-lg shadow-purple-500/30">
                Create A Campaign
              </RainbowButton>
            </Link>
          </div>
        </div>
      </div>
    </CosmicBackground>
  );
};

export default Hero;
