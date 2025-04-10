import { MapPlaceholder } from "@/components/ui/map-placeholder";

const LocationMap = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Austin's Queer Spaces Map</h2>
          <div className="h-1 w-20 bg-[#FFDD4A] mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Explore current and proposed LGBTQ+ friendly venues and spaces across Austin.
          </p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-2xl shadow-lg">
          <MapPlaceholder 
            title="Interactive Map Coming Soon" 
            description="Our interactive map will show existing spaces, planned venues, and areas in need of queer-friendly establishments."
          />
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
