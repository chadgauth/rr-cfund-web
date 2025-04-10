import { MapPin, Star, Building, Sparkles } from "lucide-react";
import { generateRainbowGradient, svgToDataURL } from "@/lib/imageUtils";

interface MapPlaceholderProps {
  title: string;
  description: string;
  className?: string;
}

export function MapPlaceholder({ title, description, className }: MapPlaceholderProps) {
  // Generate a stylized map background
  const cityMapSvg = `
    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#5D5FEF" stroke-width="0.5" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#1F2132"/>
      <rect width="100%" height="100%" fill="url(#grid)"/>
      
      <!-- Abstract city map paths -->
      <path d="M 50 300 L 750 300" stroke="#7B61FF" stroke-width="4" stroke-linecap="round"/>
      <path d="M 200 50 L 200 550" stroke="#7B61FF" stroke-width="4" stroke-linecap="round"/>
      <path d="M 600 50 L 600 550" stroke="#7B61FF" stroke-width="4" stroke-linecap="round"/>
      <path d="M 400 150 L 400 450" stroke="#7B61FF" stroke-width="4" stroke-linecap="round"/>
      
      <!-- Decorative circles for points of interest -->
      <circle cx="200" cy="300" r="15" fill="#E71D36" opacity="0.8"/>
      <circle cx="400" cy="300" r="15" fill="#3772FF" opacity="0.8"/>
      <circle cx="600" cy="300" r="15" fill="#FFDD4A" opacity="0.8"/>
      
      <!-- Pulsing animations -->
      <circle cx="200" cy="300" r="25" fill="none" stroke="#E71D36" opacity="0.5">
        <animate attributeName="r" values="15;30;15" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="400" cy="300" r="25" fill="none" stroke="#3772FF" opacity="0.5">
        <animate attributeName="r" values="15;30;15" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="600" cy="300" r="25" fill="none" stroke="#FFDD4A" opacity="0.5">
        <animate attributeName="r" values="15;30;15" dur="5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  `;
  
  const mapBgUrl = svgToDataURL(cityMapSvg);
  
  // Generate a colorful accent gradient
  const rainbowGradient = svgToDataURL(generateRainbowGradient(800, 40));
  
  return (
    <div className={`relative rounded-xl overflow-hidden h-96 ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${mapBgUrl})` }}
      ></div>
      
      {/* Rainbow accent bar across the top */}
      <div 
        className="absolute top-0 left-0 right-0 h-2"
        style={{ backgroundImage: `url(${rainbowGradient})` }}
      ></div>
      
      {/* Map Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 py-6 backdrop-blur-sm bg-black bg-opacity-40 rounded-xl max-w-lg">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-sm animate-pulse"></div>
              <div className="relative bg-black p-2 rounded-full">
                <MapPin className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 mt-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            {title}
          </h3>
          <p className="mb-6">{description}</p>
          
          <div className="inline-flex items-center text-xs text-purple-300 animate-pulse">
            <Sparkles className="h-4 w-4 mr-1" />
            <span>AI-powered location insights coming soon!</span>
          </div>
        </div>
      </div>
      
      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 backdrop-blur-md bg-black bg-opacity-60 p-4 rounded-lg border border-purple-500">
        <div className="text-sm font-bold mb-3 text-white">MAP LEGEND</div>
        
        <div className="space-y-2">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#E71D36] mr-2"></div>
            <Star className="h-3 w-3 text-[#E71D36] mr-1" />
            <span className="text-xs text-white">Existing Venues</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#3772FF] mr-2"></div>
            <Building className="h-3 w-3 text-[#3772FF] mr-1" />
            <span className="text-xs text-white">Proposed Projects</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#FFDD4A] mr-2"></div>
            <Sparkles className="h-3 w-3 text-[#FFDD4A] mr-1" />
            <span className="text-xs text-white">Priority Areas</span>
          </div>
        </div>
      </div>
      
      {/* Fun personality badge */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-70 backdrop-blur-md p-2 rounded-full shadow-lg animate-bounce">
        <div className="px-3 py-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full">
          <span className="text-xs font-bold tracking-wide text-white">COSMICALLY FABULOUS!</span>
        </div>
      </div>
      
      {/* Cosmic elements */}
      <div className="absolute bottom-4 right-4 text-xs text-white bg-black bg-opacity-50 backdrop-blur-sm p-2 rounded-lg animate-pulse">
        <div className="flex items-center">
          <Sparkles className="h-3 w-3 mr-1 text-yellow-400" />
          <span>Queer spaces mapped across all galaxies</span>
        </div>
      </div>
    </div>
  );
}
