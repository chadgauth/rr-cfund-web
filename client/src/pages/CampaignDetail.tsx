import { useParams } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CampaignDetail from "@/components/campaigns/CampaignDetail";

const CampaignDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <CampaignDetail campaignId={id} />
      </main>
      <Footer />
    </div>
  );
};

export default CampaignDetailPage;
