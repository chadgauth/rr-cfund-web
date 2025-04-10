import { Lightbulb, Users, Store } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Link } from "wouter";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Lightbulb className="h-8 w-8 text-[#FFDD4A]" />,
      title: "1. Submit Your Idea",
      description: "Create a campaign for your bar, cafe, bookstore, or community space with a detailed plan and funding goal.",
      color: "bg-[#FFDD4A] bg-opacity-20",
      textColor: "text-[#FFDD4A]"
    },
    {
      icon: <Users className="h-8 w-8 text-[#70C1B3]" />,
      title: "2. Build Support",
      description: "Share your campaign with the community and gather supporters who believe in your vision.",
      color: "bg-[#70C1B3] bg-opacity-20",
      textColor: "text-[#70C1B3]"
    },
    {
      icon: <Store className="h-8 w-8 text-primary" />,
      title: "3. Make It Happen",
      description: "When your campaign is successful, receive funding and support to turn your queer space idea into reality.",
      color: "bg-primary bg-opacity-20",
      textColor: "text-primary"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Rainbow Rise Works</h2>
          <div className="h-1 w-20 bg-[#E71D36] mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Our platform connects queer entrepreneurs with community backers to fund new spaces in Austin.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/create-campaign">
            <RainbowButton variant="primary">Start Your Campaign</RainbowButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
