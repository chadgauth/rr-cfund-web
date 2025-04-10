import { MapPin } from "lucide-react";

interface MapPlaceholderProps {
  title: string;
  description: string;
  className?: string;
}

export function MapPlaceholder({ title, description, className }: MapPlaceholderProps) {
  return (
    <div className={`relative rounded-xl overflow-hidden h-96 ${className}`}>
      <div className="absolute inset-0 bg-gray-200"></div>
      
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Map Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <MapPin className="h-16 w-16 mx-auto mb-4 text-[#E71D36]" />
          <p className="text-xl font-medium mb-4">{title}</p>
          <p className="max-w-md mx-auto">{description}</p>
        </div>
      </div>
      
      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
        <div className="text-sm font-medium mb-2">Map Legend</div>
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 rounded-full bg-[#E71D36] mr-2"></div>
          <span className="text-xs">Existing Venues</span>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 rounded-full bg-[#3772FF] mr-2"></div>
          <span className="text-xs">Proposed Projects</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#FFDD4A] mr-2"></div>
          <span className="text-xs">Priority Areas</span>
        </div>
      </div>
    </div>
  );
}
