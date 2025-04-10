import { Link } from "wouter";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { generateRainbowGradient, svgToDataURL } from "@/lib/imageUtils";
import { Frown, Sparkles, Home } from "lucide-react";

export default function NotFound() {
  // Generate rainbow gradient background
  const rainbowGradientSvg = generateRainbowGradient();
  const rainbowGradientUrl = svgToDataURL(rainbowGradientSvg);
  
  // Create a fun 404 graphic as SVG
  const notFoundSvg = `
    <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <style>
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }
        .floating { animation: float 3s ease-in-out infinite; }
        .pulsing { animation: pulse 2s ease-in-out infinite; }
      </style>
      
      <!-- Stars in background -->
      <g class="pulsing">
        <circle cx="30" cy="30" r="2" fill="#ff9ce6" />
        <circle cx="60" cy="50" r="3" fill="#9b6dff" />
        <circle cx="90" cy="20" r="2" fill="#5ee2ff" />
        <circle cx="120" cy="40" r="1.5" fill="#ff9ce6" />
        <circle cx="200" cy="30" r="2" fill="#5ee2ff" />
        <circle cx="250" cy="50" r="3" fill="#9b6dff" />
        <circle cx="270" cy="25" r="2" fill="#ff9ce6" />
        <circle cx="150" cy="60" r="2" fill="#5ee2ff" />
        <circle cx="40" cy="150" r="2" fill="#9b6dff" />
        <circle cx="70" cy="170" r="3" fill="#ff9ce6" />
        <circle cx="180" cy="160" r="2" fill="#5ee2ff" />
        <circle cx="240" cy="175" r="3" fill="#9b6dff" />
      </g>
      
      <!-- 404 Text -->
      <g class="floating">
        <text x="50%" y="50%" font-family="Arial" font-weight="bold" font-size="80" fill="white" text-anchor="middle" dominant-baseline="middle">404</text>
        <text x="50%" y="75%" font-family="Arial" font-size="20" fill="white" text-anchor="middle">Page Not Found</text>
      </g>
    </svg>
  `;
  
  const notFoundUrl = svgToDataURL(notFoundSvg);
  
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{ 
        backgroundImage: `url(${rainbowGradientUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="bg-black bg-opacity-70 backdrop-blur-md p-8 rounded-2xl max-w-lg w-full text-center flex flex-col items-center">
        <div className="relative w-full max-w-xs mb-6">
          <img src={notFoundUrl} alt="404 Not Found" className="w-full h-auto" />
        </div>
        
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-4">
          OH NO, HONEY!
        </h1>
        
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-px rounded-lg mb-6">
          <div className="bg-black p-4 rounded-lg">
            <p className="text-white mb-2 flex items-center justify-center">
              <Frown className="w-5 h-5 mr-2 text-pink-500" />
              <span>This page doesn't exist, and we're as upset about it as you are!</span>
            </p>
            <p className="text-gray-300 text-sm">
              Maybe it was so fabulous it transcended this digital plane? Either way, let's get you back on track!
            </p>
          </div>
        </div>
        
        <div className="mt-4 flex gap-4">
          <Link href="/">
            <RainbowButton className="flex items-center">
              <Home className="w-4 h-4 mr-2" />
              Take Me Home
            </RainbowButton>
          </Link>
        </div>
        
        <div className="mt-8 flex items-center text-gray-300 text-xs animate-pulse">
          <Sparkles className="w-4 h-4 mr-1 text-yellow-400" />
          <span>She's giving 404 realness, but you don't need to stay!</span>
        </div>
      </div>
    </div>
  );
}
