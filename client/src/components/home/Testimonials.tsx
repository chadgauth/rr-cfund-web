import { useQuery } from "@tanstack/react-query";
import { Testimonial } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";
import { getAvatarUrl } from "@/lib/imageUtils";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Voices</h2>
          <div className="h-1 w-20 bg-[#3772FF] mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Hear from entrepreneurs and supporters who are part of the Rainbow Rise movement.
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-md">
                <div className="flex items-center mb-4">
                  <Skeleton className="h-16 w-16 rounded-full mr-4" />
                  <div>
                    <Skeleton className="h-5 w-32 mb-1" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative mb-6">
                  <Quote className="absolute top-0 left-0 text-primary opacity-20 w-8 h-8 -mt-2 -ml-2" />
                  <p className="italic text-gray-600 pl-6 leading-relaxed">"{testimonial.content}"</p>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary shadow-md">
                    <img 
                      src={getAvatarUrl(testimonial.name, testimonial.imageUrl || undefined)} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
