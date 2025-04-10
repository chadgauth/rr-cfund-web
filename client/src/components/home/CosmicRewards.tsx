import { Star, Gift, Ticket, Shirt, Image, Award, PartyPopper, HeartHandshake } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Link } from "wouter";

interface RewardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  level: string;
  amount: string;
}

const RewardCard = ({ icon, title, description, level, amount }: RewardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl border border-purple-100">
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 flex justify-between items-center">
        <div className="text-white font-semibold">{level}</div>
        <div className="bg-white text-purple-700 px-3 py-1 rounded-full text-sm font-bold">{amount}</div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-purple-100 p-3 rounded-full mr-4">{icon}</div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default function CosmicRewards() {
  const rewards = [
    {
      icon: <Star className="h-6 w-6 text-purple-600" />,
      title: "Cosmic Supporter",
      description: "Your name on our digital constellation wall + exclusive updates on the venue's progress.",
      level: "Stardust",
      amount: "$25"
    },
    {
      icon: <Gift className="h-6 w-6 text-pink-600" />,
      title: "Galaxy Builder",
      description: "Everything above + a limited edition enamel pin that says 'I helped build this universe'.",
      level: "Nebula",
      amount: "$50"
    },
    {
      icon: <Ticket className="h-6 w-6 text-blue-600" />,
      title: "Celestial VIP",
      description: "Everything above + exclusive invite to pre-opening celebration + drink vouchers.",
      level: "Comet",
      amount: "$100"
    },
    {
      icon: <Shirt className="h-6 w-6 text-green-600" />,
      title: "Queer Constellation",
      description: "Everything above + limited edition Rainbow Rise t-shirt with cosmic queer design.",
      level: "Supernova",
      amount: "$250"
    },
    {
      icon: <Image className="h-6 w-6 text-yellow-600" />,
      title: "Astral Creator",
      description: "Everything above + digital art piece from a local queer artist thanking you for your support.",
      level: "Pulsar",
      amount: "$500"
    },
    {
      icon: <Award className="h-6 w-6 text-red-600" />,
      title: "Universal Guardian",
      description: "Everything above + your name on a dedicated plaque in the venue + annual VIP pass.",
      level: "Quasar",
      amount: "$1,000+"
    },
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-semibold mb-4">
            <PartyPopper className="inline-block h-4 w-4 mr-1" /> Supporter Perks
          </span>
          <h2 className="text-4xl font-bold mb-4">Cosmic Thank-You Rewards</h2>
          <p className="text-xl text-gray-600">
            Join our celestial journey and receive these stellar rewards for your support. Every contribution helps build safe queer spaces across the universe!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {rewards.map((reward, index) => (
            <RewardCard key={index} {...reward} />
          ))}
        </div>
        
        <div className="text-center">
          <div className="flex flex-col md:flex-row justify-center items-center bg-white p-6 rounded-xl shadow-md inline-block mb-8">
            <HeartHandshake className="h-12 w-12 text-pink-500 mr-4" />
            <div className="text-left">
              <h3 className="text-xl font-bold mb-1">Custom Supporter Packages</h3>
              <p className="text-gray-600">For businesses and larger donors, we offer custom partnership opportunities.</p>
            </div>
          </div>
          <div>
            <Link href="/campaigns">
              <RainbowButton className="px-8 py-4 text-lg">
                Find a Campaign to Support
              </RainbowButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}