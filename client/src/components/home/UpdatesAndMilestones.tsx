import { Milestone, PartyPopper, Award, Rocket, MapPin, Star, Flag } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface UpdateProps {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  type: "update" | "milestone";
}

const UpdateCard = ({ date, title, description, icon, type }: UpdateProps) => {
  return (
    <div className={`border-l-4 ${type === "milestone" ? "border-pink-500" : "border-purple-500"} pl-4 mb-8`}>
      <div className="flex items-center mb-2">
        <div className={`p-2 rounded-full mr-3 ${type === "milestone" ? "bg-pink-100 text-pink-600" : "bg-purple-100 text-purple-600"}`}>
          {icon}
        </div>
        <div>
          <div className="text-sm text-gray-500">{date}</div>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </div>
      <p className="text-gray-600 ml-12">{description}</p>
    </div>
  );
};

export default function UpdatesAndMilestones() {
  const updates = [
    {
      date: "April 5, 2025",
      title: "Launch of Queer Artist Support Fund",
      description: "We're thrilled to announce our new initiative to provide direct funding to queer artists creating work for our community spaces.",
      icon: <Star className="h-5 w-5" />,
      type: "update" as const
    },
    {
      date: "March 15, 2025",
      title: "Milestone: 200th Backer Joined!",
      description: "We've reached 200 cosmic supporters! Thank you to everyone who has joined our mission to create queer spaces across the universe.",
      icon: <PartyPopper className="h-5 w-5" />,
      type: "milestone" as const
    },
    {
      date: "February 28, 2025",
      title: "New Partnership with Galactic Art Collective",
      description: "We're partnering with the Galactic Art Collective to bring queer art installations to all our supported venues.",
      icon: <Rocket className="h-5 w-5" />,
      type: "update" as const
    },
    {
      date: "January 20, 2025",
      title: "Milestone: First Venue Opens in Andromeda District",
      description: "Our first fully funded venue has opened its doors! The Nova Lounge is now a beacon for queer folks in the Andromeda District.",
      icon: <Flag className="h-5 w-5" />,
      type: "milestone" as const
    },
    {
      date: "December 12, 2024",
      title: "Year-End Impact Report Released",
      description: "Our first annual impact report details how we've helped create and preserve queer spaces across multiple star systems.",
      icon: <Award className="h-5 w-5" />,
      type: "update" as const
    },
    {
      date: "November 5, 2024",
      title: "Milestone: $100K Funding Goal Reached!",
      description: "Thanks to our amazing community, we've crossed the $100,000 mark in funding for queer spaces!",
      icon: <PartyPopper className="h-5 w-5" />,
      type: "milestone" as const
    },
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="sticky top-24">
              <div className="mb-6">
                <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-semibold mb-2">
                  Updates & Gratitude
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cosmic Journey So Far</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Every new supporter is a star added to our sky! Follow our journey as we build queer spaces across the universe, celebrating each milestone with cosmic gratitude.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  These updates show our commitment to transparency and our dedication to keeping our community informed about how their support is creating real change.
                </p>
                <Link href="/about">
                  <Button variant="outline" className="mt-4">
                    View Full Timeline
                  </Button>
                </Link>
              </div>
              
              <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-purple-700" />
                  Next Milestone
                </h3>
                <p className="text-gray-700 mb-3">
                  We're working toward opening our next venue in the Cosmic Junction district! Help us reach our goal.
                </p>
                <div className="w-full bg-white rounded-full h-4 mb-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Current: $32,500</span>
                  <span className="font-semibold">Goal: $50,000</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative pl-6">
              <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gray-200"></div>
              
              {updates.map((update, index) => (
                <UpdateCard 
                  key={index}
                  date={update.date}
                  title={update.title}
                  description={update.description}
                  icon={update.icon}
                  type={update.type}
                />
              ))}
              
              <div className="pl-4 flex items-center">
                <div className="bg-purple-100 p-2 rounded-full text-purple-600 mr-3">
                  <Milestone className="h-5 w-5" />
                </div>
                <div className="text-gray-500">Our journey continues...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}