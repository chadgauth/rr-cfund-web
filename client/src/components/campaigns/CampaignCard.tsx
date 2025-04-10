import { Link } from "wouter";
import { Campaign } from "@shared/schema";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCampaignImageUrl } from "@/lib/imageUtils";

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard = ({ campaign }: CampaignCardProps) => {
  const { 
    id, 
    title, 
    description, 
    category, 
    goal, 
    raised, 
    backers, 
    daysLeft, 
    imageUrl 
  } = campaign;

  // Calculate percentage raised
  const percentRaised = Math.round((raised / goal) * 100);
  
  // Get campaign image (either actual image or generated SVG)
  const campaignImageUrl = getCampaignImageUrl({ title, category, imageUrl });
  
  // Determine the progress bar color based on category
  const getBarColor = (category: string) => {
    switch(category) {
      case "Bar & Lounge": return "bg-primary";
      case "Community Center": return "bg-[#70C1B3]";
      case "Dance Club": return "bg-[#3772FF]";
      case "Cafe & Restaurant": return "bg-[#FF8C42]";
      case "Retail & Service": return "bg-[#E71D36]";
      default: return "bg-primary";
    }
  };

  return (
    <div className="campaign-card bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative">
        <div className="w-full h-48 bg-gray-200 overflow-hidden">
          <img 
            src={campaignImageUrl} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-lg text-sm font-medium shadow-md">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium">${raised.toLocaleString()} raised</span>
            <span className="text-gray-500">of ${goal.toLocaleString()} goal</span>
          </div>
          <ProgressBar 
            value={raised} 
            max={goal} 
            barColor={getBarColor(category)}
          />
        </div>
        
        <div className="flex justify-between text-sm text-gray-500 mb-6">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{backers} backers</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{daysLeft} days left</span>
          </div>
        </div>
        
        <Button asChild className="w-full py-6 bg-primary text-white rounded-xl hover:bg-opacity-90">
          <Link href={`/campaigns/${id}`}>Support This Project</Link>
        </Button>
      </div>
    </div>
  );
};

export default CampaignCard;
