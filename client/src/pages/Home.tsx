import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import FeaturedCampaigns from "@/components/home/FeaturedCampaigns";
import LocationMap from "@/components/home/LocationMap";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import CosmicRewards from "@/components/home/CosmicRewards";
import CommunitySupport from "@/components/home/CommunitySupport";
import UpdatesAndMilestones from "@/components/home/UpdatesAndMilestones";
import { Link } from "wouter";
import { Home as HomeIcon, Users, Heart, Info, MessageCircle, Sparkles } from "lucide-react";

// Bento box navigation
const Navigation = () => {
  return (
    <div className="container mx-auto px-4 my-4">
      <div className="bg-white p-3 rounded-full shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="font-semibold text-purple-800 ml-2">Rainbow Rise</span>
        </div>
        
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex items-center gap-1 px-3 py-2 rounded-full hover:bg-purple-50 text-sm font-medium text-purple-700">
            <HomeIcon size={18} />
            <span className="hidden md:inline">Home</span>
          </Link>
          <Link href="/campaigns" className="inline-flex items-center gap-1 px-3 py-2 rounded-full hover:bg-purple-50 text-sm font-medium text-purple-700">
            <Sparkles size={18} />
            <span className="hidden md:inline">Campaigns</span>
          </Link>
          <Link href="/about" className="inline-flex items-center gap-1 px-3 py-2 rounded-full hover:bg-purple-50 text-sm font-medium text-purple-700">
            <Info size={18} />
            <span className="hidden md:inline">About</span>
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-1 px-3 py-2 rounded-full hover:bg-purple-50 text-sm font-medium text-purple-700">
            <MessageCircle size={18} />
            <span className="hidden md:inline">Contact</span>
          </Link>
          <Link href="/assistant" className="inline-flex items-center gap-1 px-3 py-2 bg-purple-100 rounded-full hover:bg-purple-200 text-sm font-medium text-purple-700">
            <Heart size={18} />
            <span className="hidden md:inline">Assistant</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Mission />
        <FeaturedCampaigns />
        <CosmicRewards />
        <CommunitySupport />
        <UpdatesAndMilestones />
        <LocationMap />
        <HowItWorks />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
