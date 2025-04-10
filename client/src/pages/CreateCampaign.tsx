import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CampaignForm from "@/components/campaigns/CampaignForm";

const CreateCampaign = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your Campaign
            </h1>
            <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
              Create a campaign to fund your LGBTQ+ venue or community space in Austin.
            </p>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <CampaignForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CreateCampaign;
