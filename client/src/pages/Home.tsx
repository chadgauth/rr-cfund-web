import Header from "@/components/layout/Header";
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

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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
