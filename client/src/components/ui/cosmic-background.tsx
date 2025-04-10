import React from 'react';

interface CosmicBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'soft' | 'medium' | 'intense';
  animationSpeed?: 'slow' | 'medium' | 'fast';
}

export function CosmicBackground({
  children,
  className = '',
  intensity = 'medium',
  animationSpeed = 'medium',
}: CosmicBackgroundProps) {
  // Configure animation based on props
  const intensityClass = {
    soft: 'bg-opacity-40',
    medium: 'bg-opacity-70',
    intense: 'bg-opacity-90'
  }[intensity];
  
  const speedClass = {
    slow: 'animate-cosmic-slow',
    medium: 'animate-cosmic-medium',
    fast: 'animate-cosmic-fast'
  }[animationSpeed];
  
  // Radial gradients - different sizes and colors for a cosmic effect
  const bubbles = [
    { size: '40%', left: '10%', top: '25%', color: 'from-purple-600 to-transparent', delay: '0s' },
    { size: '30%', left: '60%', top: '50%', color: 'from-pink-500 to-transparent', delay: '2s' },
    { size: '25%', left: '25%', top: '10%', color: 'from-violet-600 to-transparent', delay: '4s' },
    { size: '20%', left: '80%', top: '15%', color: 'from-indigo-600 to-transparent', delay: '1s' },
    { size: '35%', left: '40%', top: '70%', color: 'from-fuchsia-500 to-transparent', delay: '3s' },
  ];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Dark cosmic background with stars */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-fuchsia-950 z-0">
        {/* Animated star field - different size stars */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNyIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjE1Ii8+PC9zdmc+')] bg-repeat opacity-90"></div>
        
        {/* Cosmic bubbles - radial gradients with animation */}
        {bubbles.map((bubble, index) => (
          <div 
            key={index}
            className={`absolute rounded-full bg-gradient-radial ${bubble.color} ${speedClass} opacity-0`}
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              top: bubble.top,
              animationDelay: bubble.delay
            }}
          />
        ))}
      </div>
      
      {/* Overlay to ensure text readability */}
      <div className={`absolute inset-0 bg-black ${intensityClass} z-10`}></div>
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}

// Rainbow text effect
export function CosmicText({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string 
}) {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x font-bold ${className}`}>
      {children}
    </span>
  );
}

// Glowing text effect
export function GlowingText({ 
  children, 
  color = 'pink', 
  className = '' 
}: { 
  children: React.ReactNode; 
  color?: 'pink' | 'purple' | 'blue'; 
  className?: string 
}) {
  const colorClass = {
    pink: 'text-pink-500 shadow-pink-500/50',
    purple: 'text-purple-500 shadow-purple-500/50',
    blue: 'text-blue-500 shadow-blue-500/50'
  }[color];
  
  return (
    <span className={`text-shadow-glow ${colorClass} ${className}`}>
      {children}
    </span>
  );
}