import { Link } from "wouter";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { generateAvatarSvg, generateRainbowGradient, svgToDataURL } from "@/lib/imageUtils";
import { ArrowRight, Sparkles } from "lucide-react";
import { pastelColors, pastelGradients } from "@/lib/colors";

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
    const generatePastelPlaceholder = (text: string) => {
      // Get consistent colors based on campaign title
      const color1 = pastelColors.lavender;
      const color2 = pastelColors.babyBlue;
      
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
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="2" flood-opacity="0.3" flood-color="white" />
            </filter>
          </defs>
          <rect width="600" height="400" fill="url(#grad)" rx="20" ry="20" />
          
          <!-- Pattern overlay -->
          <g opacity="0.1">
            ${Array.from({ length: 10 }).map((_, i) => 
              `<circle cx="${Math.random() * 600}" cy="${Math.random() * 400}" r="${Math.random() * 30 + 10}" fill="white" />`
            ).join('')}
          </g>
          
          <!-- Campaign title -->
          <g filter="url(#shadow)">
            <text 
              x="300" 
              y="200" 
              font-family="Arial, sans-serif" 
              font-size="32" 
              font-weight="bold" 
              text-anchor="middle" 
              fill="white"
            >${displayTitle}</text>
          </g>
        </svg>
      `;
      return svg;
    };
    
    const placeholder = generatePastelPlaceholder(title);
    return svgToDataURL(placeholder);
  };
  
  // Generate avatar images for community members
  const memberImages = communityMembers.map(member => 
    member.image || svgToDataURL(generateAvatarSvg(member.name))
  );
  
  return (
    <section className="py-6" style={{ background: `linear-gradient(to bottom right, ${pastelColors.lavender}20, ${pastelColors.pinkLight}30)` }}>
      <div className="container mx-auto px-4">
        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main Banner Box */}
          <div 
            className="md:col-span-2 rounded-xl overflow-hidden relative shadow-md" 
            style={{ 
              background: `linear-gradient(to right, ${pastelColors.lavender}, ${pastelColors.pink})` 
            }}
          >
            <div className="absolute inset-0 opacity-15 mix-blend-overlay">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <radialGradient id="stars" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="100" height="100" fill="url(#stars)" />
                {/* Bubbles/stars */}
                {Array.from({ length: 30 }).map((_, i) => (
                  <circle 
                    key={i}
                    cx={Math.random() * 100}
                    cy={Math.random() * 100}
                    r={Math.random() * 0.7 + 0.3}
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
            <div className="bg-white rounded-xl p-5 shadow-sm" style={{ backgroundColor: `${pastelColors.peach}25` }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: pastelColors.mauve }}>Top Campaigns</h3>
              
              <div className="space-y-3">
                {topCampaigns.map((campaign, index) => {
                  const campaignImage = campaign.imageUrl || generateImage(campaign.title);
                  const progress = Math.round((campaign.raised / campaign.goal) * 100);
                  
                  return (
                    <Link key={index} href={`/campaigns/${campaign.id}`}>
                      <div className="flex items-center gap-3 hover:bg-white hover:bg-opacity-60 p-2 rounded-lg transition-colors">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                          <img src={campaignImage} alt={campaign.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate" style={{ color: pastelColors.mauve }}>{campaign.title}</h4>
                          <div className="w-full bg-white bg-opacity-50 rounded-full h-1.5 my-1">
                            <div 
                              className="h-1.5 rounded-full" 
                              style={{ 
                                width: `${progress}%`,
                                background: `linear-gradient(to right, ${pastelColors.lavender}, ${pastelColors.pink})`
                              }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs opacity-70">
                            <span style={{ color: pastelColors.mauve }}>${campaign.raised.toLocaleString()}</span>
                            <span style={{ color: pastelColors.mauve }}>{progress}%</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              
              <Link href="/campaigns" className="text-sm font-medium flex items-center mt-3 hover:underline" style={{ color: pastelColors.mauve }}>
                View all campaigns
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="rounded-xl p-5 shadow-sm" style={{ background: `linear-gradient(to bottom right, ${pastelColors.mintGreen}40, ${pastelColors.babyBlue}40)` }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: pastelColors.mauve }}>Our Impact</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white bg-opacity-60 p-3 rounded-lg">
                  <div className="text-2xl font-bold" style={{ color: pastelColors.lavender }}>28+</div>
                  <div className="text-xs opacity-70" style={{ color: pastelColors.mauve }}>Venues Funded</div>
                </div>
                <div className="bg-white bg-opacity-60 p-3 rounded-lg">
                  <div className="text-2xl font-bold" style={{ color: pastelColors.pink }}>$321K</div>
                  <div className="text-xs opacity-70" style={{ color: pastelColors.mauve }}>Total Raised</div>
                </div>
                <div className="bg-white bg-opacity-60 p-3 rounded-lg">
                  <div className="text-2xl font-bold" style={{ color: pastelColors.babyBlue }}>3.7K+</div>
                  <div className="text-xs opacity-70" style={{ color: pastelColors.mauve }}>Supporters</div>
                </div>
                <div className="bg-white bg-opacity-60 p-3 rounded-lg">
                  <div className="text-2xl font-bold" style={{ color: pastelColors.mintGreen }}>12</div>
                  <div className="text-xs opacity-70" style={{ color: pastelColors.mauve }}>Cities</div>
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
