import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HowItWorks from "@/components/home/HowItWorks";
import { MeetTheTeam } from "@/components/about/MeetTheTeam";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Link } from "wouter";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Rainbow Rise
            </h1>
            <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
              Our mission, values, and vision for Austin's LGBTQ+ community spaces.
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6">
                Rainbow Rise was founded in 2023 in response to the rapid development
                of Austin's historic 4th Street district, which has long been home to the city's
                most beloved LGBTQ+ venues and spaces.
              </p>
              <p className="text-lg mb-6">
                As gentrification and commercial development threatened these important cultural
                landmarks, we saw an opportunity to harness the power of community crowdfunding
                to preserve existing spaces and create new ones throughout Austin.
              </p>
              <p className="text-lg mb-8">
                Our platform connects LGBTQ+ entrepreneurs, venue owners, and community organizers
                with supporters who believe in the importance of physical spaces where our community
                can gather, celebrate, and support each other.
              </p>
              
              <h2 className="text-3xl font-bold mb-6" id="values">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2 text-[#E71D36]">Community First</h3>
                  <p>We prioritize the needs of the LGBTQ+ community in all decisions and actions.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2 text-[#FF8C42]">Inclusivity</h3>
                  <p>We celebrate and support the full spectrum of LGBTQ+ identities and experiences.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2 text-[#70C1B3]">Transparency</h3>
                  <p>We maintain open and honest communication about our process and funding.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2 text-[#3772FF]">Empowerment</h3>
                  <p>We believe in giving community members the tools to create the spaces they need.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="how-it-works" className="bg-gray-50">
          <HowItWorks />
        </section>

        <section id="team" className="py-12 bg-white">
          <MeetTheTeam />
        </section>
        
        <section id="faq" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="h-1 w-20 bg-[#FFDD4A] mx-auto mb-6"></div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">How does Rainbow Rise work?</h3>
                <p className="text-gray-700">
                  Rainbow Rise is a crowdfunding platform specifically for LGBTQ+ venues and spaces in Austin. 
                  Campaign creators set a funding goal and timeline, and supporters can contribute any amount 
                  to help make these spaces a reality.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Who can create a campaign?</h3>
                <p className="text-gray-700">
                  Anyone with a vision for an LGBTQ+ inclusive space in Austin can create a campaign.
                  This includes entrepreneurs, existing business owners, community organizers, and 
                  nonprofit leaders.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">How are funds distributed?</h3>
                <p className="text-gray-700">
                  When a campaign reaches its funding goal, the funds are distributed to the campaign creator
                  to use for their project as outlined in their campaign description. We maintain transparency
                  throughout the process.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">What happens if a campaign doesn't reach its goal?</h3>
                <p className="text-gray-700">
                  Rainbow Rise uses an all-or-nothing funding model. If a campaign doesn't reach its funding
                  goal by the deadline, all contributions are returned to the supporters.
                </p>
              </div>
              
              <div className="text-center mt-12">
                <Link href="/contact">
                  <RainbowButton>Have More Questions? Contact Us</RainbowButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
