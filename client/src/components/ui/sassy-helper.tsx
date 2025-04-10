import { useState, useEffect } from 'react';
import { 
  Sparkles,
  Heart,
  PartyPopper,
  Rocket, 
  MessageSquare,
  X,
  Crown,
  Zap
} from 'lucide-react';
import { generateRainbowGradient, svgToDataURL } from '@/lib/imageUtils';

const sassyMessages = [
  "Honey, this venue's gonna be FIERCE! 💅",
  "werk werk werk! Support this campaign now! 👑",
  "Slaaaaay! This space is gonna be LEGENDARY!",
  "We're taking over Austin, one fabulous venue at a time!",
  "That's not just a bar, that's a cultural RESET!",
  "Did someone say 'iconic'? Because that's what this is! ✨",
  "I'm gagged, I'm gooped, I'm supporting this campaign!",
  "Serving looks and serving drinks - a vibe! 💖",
  "YASSSS! This campaign is EVERYTHING!",
  "Get into it, bestie! This venue is the tea!",
  "The girlies are gonna EAT THIS UP!",
  "Austin isn't ready for this level of FABULOUSNESS!",
  "This venue? MOTHER behavior only! 🌈"
];

export function SassyHelper() {
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  
  // Generate rainbow background
  const rainbowGradient = svgToDataURL(generateRainbowGradient(400, 100));
  
  // Choose a random sassy message on first mount or when reopened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      const randomIndex = Math.floor(Math.random() * sassyMessages.length);
      setMessage(sassyMessages[randomIndex]);
    }
  }, [isOpen, isMinimized]);
  
  // Auto-open after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000); // 15 seconds
    
    return () => clearTimeout(timer);
  }, []);
  
  // Auto-close after a period
  useEffect(() => {
    if (isOpen && !isMinimized) {
      const timer = setTimeout(() => {
        setIsMinimized(true);
      }, 10000); // 10 seconds
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, isMinimized, message]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-xs">
      {!isMinimized ? (
        <div className="relative">
          {/* Glow effect behind the message bubble */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-md rounded-2xl opacity-70"></div>
          <div 
            className="relative p-4 rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-80 border-2 border-white"
            style={{ backgroundImage: `url(${rainbowGradient})` }}
          >
            <button 
              onClick={() => setIsMinimized(true)}
              className="absolute -top-3 -right-3 bg-black text-white p-1 rounded-full hover:bg-gray-800 transition-colors"
            >
              <X size={16} />
            </button>
            
            <div className="flex mb-2 items-center">
              <div className="bg-purple-600 p-2 rounded-full">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div className="font-bold ml-2 text-white drop-shadow-sm">
                Rainbow Rise Assistant
              </div>
            </div>
            
            <div className="text-white font-medium p-2 bg-black bg-opacity-60 backdrop-blur-sm rounded-lg mb-3">
              {message}
            </div>
            
            <div className="flex justify-end gap-2">
              <button 
                className="bg-white bg-opacity-30 backdrop-blur-sm py-1 px-3 rounded-full text-white text-xs font-bold hover:bg-opacity-40 transition-colors flex items-center"
                onClick={() => {
                  const randomIndex = Math.floor(Math.random() * sassyMessages.length);
                  setMessage(sassyMessages[randomIndex]);
                }}
              >
                <Zap size={12} className="mr-1" />
                MORE TEA
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform animate-pulse"
        >
          <PartyPopper className="h-6 w-6 text-white" />
          <div className="absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full"></div>
        </button>
      )}
    </div>
  );
}