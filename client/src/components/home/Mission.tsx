import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const Mission = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <div className="h-1 w-20 bg-[#E71D36] mb-6"></div>
            <p className="text-lg mb-6">
              From Earth's vibrant cities to the farthest reaches of the cosmos, we're on a mission to create, preserve, and celebrate queer spaces that transcend planetary boundaries and serve all beings across the universe.
            </p>
            <p className="text-lg mb-6">
              Rainbow Rise empowers LGBTQ+ communities everywhere—whether in Austin, Alpha Centauri, or anywhere in between—to fund and build the venues, bars, cafes, and community centers that every queer being in the universe deserves.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-gray-100 p-4 rounded-xl">
                <div className="text-primary text-2xl font-bold">15+</div>
                <div className="text-sm">Campaign Ideas</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-xl">
                <div className="text-[#70C1B3] text-2xl font-bold">$125K</div>
                <div className="text-sm">Pledged So Far</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-xl">
                <div className="text-[#FF8C42] text-2xl font-bold">1,200+</div>
                <div className="text-sm">Supporters</div>
              </div>
            </div>
            <Link href="/about" className="text-primary font-medium flex items-center hover:underline">
              Learn more about our cosmic story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden h-48 bg-gray-200"></div>
            <div className="rounded-2xl overflow-hidden h-48 mt-8 bg-gray-200"></div>
            <div className="rounded-2xl overflow-hidden h-48 mt-8 bg-gray-200"></div>
            <div className="rounded-2xl overflow-hidden h-48 bg-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
