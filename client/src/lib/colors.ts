/**
 * Pastel Color Palette for Rainbow Rise
 * Based on the provided color palette image
 */

export const pastelColors = {
  // Left palette
  lavender: '#C8ABDC',  // Light purple/lavender
  pinkLight: '#FFC0CB', // Light pink
  pink: '#FFB6C1',      // Medium pink
  babyBlue: '#B0E0E6',  // Light sky blue
  skyBlue: '#87CEEB',   // Sky blue
  
  // Right palette
  mintGreen: '#C5E1A5', // Mint green
  peach: '#FFDAB9',     // Peach
  salmon: '#FFA07A',    // Light salmon
  rose: '#F08080',      // Light coral/rose
  mauve: '#9E7F86',     // Mauve/dusty rose
  
  // Additional pastel shades
  lilac: '#DDA0DD',     // Lilac
  buttermilk: '#FFEFD5', // Buttermilk/cream
  periwinkle: '#CCCCFF', // Periwinkle
  aqua: '#7FFFD4',      // Aquamarine
  lemon: '#FFFACD',     // Light yellow/lemon
};

// Gradient combinations
export const pastelGradients = {
  purplePink: `linear-gradient(to right, ${pastelColors.lavender}, ${pastelColors.pink})`,
  blueGreen: `linear-gradient(to right, ${pastelColors.skyBlue}, ${pastelColors.mintGreen})`,
  peachRose: `linear-gradient(to right, ${pastelColors.peach}, ${pastelColors.rose})`,
  mintPeach: `linear-gradient(to right, ${pastelColors.mintGreen}, ${pastelColors.peach})`,
  lavenderBlue: `linear-gradient(to right, ${pastelColors.lavender}, ${pastelColors.babyBlue})`,
  rainbow: `linear-gradient(to right, ${pastelColors.lavender}, ${pastelColors.pinkLight}, ${pastelColors.peach}, ${pastelColors.mintGreen}, ${pastelColors.babyBlue})`,
};

// Utility function to get a random pastel color
export const getRandomPastelColor = (): string => {
  const colors = Object.values(pastelColors);
  return colors[Math.floor(Math.random() * colors.length)];
};

// Function to get a color based on a string (like a name or category)
export const getConsistentColor = (str: string): string => {
  const colors = Object.values(pastelColors);
  // Simple hash function to get a consistent color for the same string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};