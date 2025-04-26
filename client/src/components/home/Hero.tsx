import { Link } from "wouter";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { generateAvatarSvg, generateRainbowGradient, svgToDataURL } from "@/lib/imageUtils";
import { ArrowRight, Sparkles } from "lucide-react";

// Top campaigns data
const topCampaigns = [
  {
    id: 1,
    title: "Nebula Dance Club",
    raised: 28500,
    goal: 35000,
    backers: 217,
    imageUrl: ""
  },
  {
    id: 2,
    title: "Cosmic Cafe",
    raised: 19300,
    goal: 25000,
    backers: 148,
    imageUrl: ""
  },
  {
    id: 3,
    title: "Stellar Book Haven",
    raised: 14800,
    goal: 20000,
    backers: 183,
    imageUrl: ""
  }
];

// Real people/community members
const communityMembers = [
  { name: "Alex", role: "Venue Owner", image: null },
  { name: "Sasha", role: "Artist", image: null },
  { name: "Jordan", role: "Organizer", image: null },
  { name: "Riley", role: "Supporter", image: null },
  { name: "Morgan", role: "Volunteer", image: null }
];

const Hero = () => {
  // Generate images for placeholders
  const generateImage = (title: string) => {
    // Custom campaign placeholder generator
    const generateSimplePlaceholder = (text: string) => {
      // Colors for the gradient
      const color1 = '#8E44AD'; // Purple
      const color2 = '#3498DB'; // Blue
      
      // Create short title for display
      const displayTitle = text.length > 20 ? text.substring(0, 20) + '...' : text;
      
      // SVG with gradient background and text
      const svg = `
        <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="${color1}" />
              <stop offset="100%" stop-color="${color2}" />
            </linearGradient>
          </defs>
          <rect width="600" height="400" fill="url(#grad)" />
          <text 
            x="300" 
            y="200" 
            font-family="Arial, sans-serif" 
            font-size="32" 
            font-weight="bold" 
            text-anchor="middle" 
            fill="white"
          >${displayTitle}</text>
        </svg>
      `;
      return svg;
    };
    
    const placeholder = generateSimplePlaceholder(title);
    return svgToDataURL(placeholder);
  };
  
  // Generate avatar images for community members
  const memberImages = communityMembers.map(member => 
    member.image || svgToDataURL(generateAvatarSvg(member.name))
  );
  
  return (
    <section className="py-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main Banner Box */}
          <div className="md:col-span-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-15 mix-blend-overlay">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <radialGradient id="stars" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="100" height="100" fill="url(#stars)" />
                {/* Stars */}
                {Array.from({ length: 30 }).map((_, i) => (
                  <circle 
                    key={i}
                    cx={Math.random() * 100}
                    cy={Math.random() * 100}
                    r={Math.random() * 0.5 + 0.2}
                    fill="white"
                    className={i % 2 === 0 ? "animate-pulse" : ""}
                  />
                ))}
              </svg>
            </div>
            
            <div className="relative z-10 p-8 flex flex-col h-full justify-between">
              <div>
                {/* Community photos strip */}
                <div className="flex -space-x-2 mb-4">
                  {memberImages.map((src, i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                      title={`${communityMembers[i].name}, ${communityMembers[i].role}`}
                    >
                      <img src={src} alt={communityMembers[i].name} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-700 text-xs font-bold">
                    3.7k+
                  </div>
                </div>
                
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  <span className="bg-white bg-opacity-20 px-2 py-1 rounded">Rainbow Rise</span> 
                  {" "}
                  <span className="relative inline-block">
                    Community
                    <Sparkles className="absolute -top-2 -right-4 h-4 w-4 text-yellow-300" />
                  </span>
                </h1>
                
                <p className="text-white text-opacity-90 mb-6 max-w-xl">
                  Celebrating LGBTQ+ spaces where everyone can shine. Together we're building 
                  venues that spark joy, creativity, and connection.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Link href="/campaigns">
                  <RainbowButton variant="primary" className="px-5 py-2 text-sm">
                    Explore Campaigns
                  </RainbowButton>
                </Link>
                <Link href="/create-campaign">
                  <RainbowButton variant="secondary" className="px-5 py-2 text-sm">
                    Start a Campaign
                  </RainbowButton>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="md:col-span-1 space-y-4">
            {/* Top Campaigns */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="text-lg font-bold mb-3 text-purple-800">Top Campaigns</h3>
              
              <div className="space-y-3">
                {topCampaigns.map((campaign, index) => {
                  const campaignImage = campaign.imageUrl || generateImage(campaign.title);
                  const progress = Math.round((campaign.raised / campaign.goal) * 100);
                  
                  return (
                    <Link key={index} href={`/campaigns/${campaign.id}`}>
                      <div className="flex items-center gap-3 hover:bg-purple-50 p-2 rounded-lg transition-colors">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={campaignImage} alt={campaign.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{campaign.title}</h4>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 my-1">
                            <div 
                              className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full" 
                              style={{ width: `${progress}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>${campaign.raised.toLocaleString()}</span>
                            <span>{progress}%</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              
              <Link href="/campaigns" className="text-purple-600 text-sm font-medium flex items-center mt-3 hover:underline">
                View all campaigns
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-5">
              <h3 className="text-lg font-bold mb-3 text-purple-800">Our Impact</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white bg-opacity-60 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-purple-700">28+</div>
                  <div className="text-xs text-purple-600">Venues Funded</div>
                </div>
                <div className="bg-white bg-opacity-60 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600">$321K</div>
                  <div className="text-xs text-pink-500">Total Raised</div>
                </div>
                <div className="bg-white bg-opacity-60 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">3.7K+</div>
                  <div className="text-xs text-blue-500">Supporters</div>
                </div>
                <div className="bg-white bg-opacity-60 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">12</div>
                  <div className="text-xs text-green-500">Cities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
