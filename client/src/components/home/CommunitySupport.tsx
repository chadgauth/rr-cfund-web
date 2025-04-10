import { Star } from "lucide-react";
import { generateAvatarSvg } from "@/lib/imageUtils";

interface PartnerProps {
  name: string;
  type: string;
  description: string;
  logo?: string;
}

const Partner = ({ name, type, description, logo }: PartnerProps) => {
  // Generate a placeholder if no logo is provided
  const logoPlaceholder = !logo ? 
    `data:image/svg+xml;utf8,${encodeURIComponent(generateAvatarSvg(name, 80))}` : 
    logo;
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-100 flex-shrink-0">
          <img 
            src={logoPlaceholder}
            alt={`${name} logo`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <p className="text-sm text-purple-600">{type}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default function CommunitySupport() {
  const partners = [
    {
      name: "Queer Spaces Alliance",
      type: "Non-Profit Organization",
      description: "Dedicated to preserving and creating LGBTQ+ venues across the solar system."
    },
    {
      name: "Stellar Pride Foundation",
      type: "Community Foundation",
      description: "Supporting queer communities with grants and resources since the early cosmic era."
    },
    {
      name: "Galactic Art Collective",
      type: "Artist Organization",
      description: "A collective of queer artists bringing vibrant visuals to LGBTQ+ spaces."
    },
    {
      name: "Interstellar Inclusivity Initiative",
      type: "Advocacy Group",
      description: "Working to ensure queer spaces are accessible to all beings in the universe."
    },
    {
      name: "Quantum Queer Business Network",
      type: "Business Alliance",
      description: "Connecting LGBTQ+ owned businesses across dimensions and realities."
    },
    {
      name: "Cosmic Pride Events",
      type: "Event Organization",
      description: "Creating unforgettable celebrations in queer spaces throughout the galaxy."
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 py-1 px-4 bg-purple-100 text-purple-800 rounded-full mb-6">
            <Star className="h-4 w-4" />
            <span className="text-sm font-medium">Constellations of Support</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Our Cosmic Community Partners</h2>
          <p className="text-xl text-gray-600">
            Rainbow Rise is part of a galaxy of organizations working together to create and preserve queer spaces. These stellar partners help make our mission possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {partners.map((partner, index) => (
            <Partner key={index} {...partner} />
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-md max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Join Our Galaxy of Partners</h3>
            <p className="text-gray-600">
              Is your organization interested in supporting queer spaces across the cosmos? Let's collaborate and expand our universe together!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-50 p-5 rounded-xl text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-bold mb-2">Partnership Opportunities</h4>
              <p className="text-sm">Co-sponsor campaigns and events together</p>
            </div>
            
            <div className="bg-pink-50 p-5 rounded-xl text-center">
              <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-bold mb-2">Resource Sharing</h4>
              <p className="text-sm">Share expertise, networks, and cosmic resources</p>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-xl text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="font-bold mb-2">Joint Programs</h4>
              <p className="text-sm">Create initiatives that benefit all queer life forms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}