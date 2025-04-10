/**
 * Image utility functions for Rainbow Rise
 */

// Color pallette for gradient backgrounds
const COLORS = {
  primary: '#8E44AD', // Purple
  secondary: '#3498DB', // Blue
  tertiary: '#E74C3C', // Red
  quaternary: '#F1C40F', // Yellow
  quinary: '#2ECC71', // Green
  senary: '#E67E22', // Orange
};

/**
 * Generate SVG placeholder for campaigns
 * Creates a vibrant gradient background with text overlay
 */
export function generateCampaignPlaceholder(
  title: string,
  category: string,
  width = 600,
  height = 400
): string {
  // Determine gradient colors based on category
  let color1 = COLORS.primary;
  let color2 = COLORS.secondary;
  
  switch(category) {
    case "Bar & Lounge":
      color1 = COLORS.primary;
      color2 = COLORS.secondary;
      break;
    case "Community Center":
      color1 = COLORS.secondary;
      color2 = COLORS.quinary;
      break;
    case "Dance Club":
      color1 = COLORS.primary;
      color2 = COLORS.tertiary;
      break;
    case "Cafe & Restaurant":
      color1 = COLORS.quaternary;
      color2 = COLORS.senary;
      break;
    case "Retail & Service":
      color1 = COLORS.tertiary;
      color2 = COLORS.quinary;
      break;
  }

  // Create short title for display
  const displayTitle = title.length > 20 ? title.substring(0, 20) + '...' : title;
  
  // SVG with gradient background and text
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${color1}" />
          <stop offset="100%" stop-color="${color2}" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.3" />
        </filter>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)" />
      
      <!-- Rainbow Pride Flag Pattern -->
      <g opacity="0.15">
        <rect y="${height * 0.8}" width="${width}" height="${height * 0.033}" fill="#E70000" />
        <rect y="${height * 0.833}" width="${width}" height="${height * 0.033}" fill="#FF8C00" />
        <rect y="${height * 0.866}" width="${width}" height="${height * 0.033}" fill="#FFEF00" />
        <rect y="${height * 0.9}" width="${width}" height="${height * 0.033}" fill="#00811F" />
        <rect y="${height * 0.933}" width="${width}" height="${height * 0.033}" fill="#0044FF" />
        <rect y="${height * 0.966}" width="${width}" height="${height * 0.033}" fill="#760089" />
      </g>
      
      <!-- Campaign Title and Category -->
      <g filter="url(#shadow)">
        <text 
          x="${width / 2}" 
          y="${height / 2 - 20}" 
          font-family="Arial, sans-serif" 
          font-size="32" 
          font-weight="bold" 
          text-anchor="middle" 
          fill="white"
        >${displayTitle}</text>
        <text 
          x="${width / 2}" 
          y="${height / 2 + 20}" 
          font-family="Arial, sans-serif" 
          font-size="24" 
          text-anchor="middle" 
          fill="white"
        >${category}</text>
      </g>
    </svg>
  `;
}

/**
 * Generate a data URL from an SVG string
 */
export function svgToDataURL(svg: string): string {
  const encoded = encodeURIComponent(svg)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');
    
  return `data:image/svg+xml;charset=utf-8,${encoded}`;
}

/**
 * Get an image URL for a campaign
 * Returns SVG placeholder if imageUrl is not provided
 */
export function getCampaignImageUrl(campaign: { 
  title: string; 
  category: string; 
  imageUrl?: string; 
}): string {
  if (campaign.imageUrl) {
    return campaign.imageUrl;
  }
  
  // Generate SVG placeholder
  const svg = generateCampaignPlaceholder(campaign.title, campaign.category);
  return svgToDataURL(svg);
}

/**
 * Generate profile avatar SVG for testimonials
 */
export function generateAvatarSvg(name: string, size = 80): string {
  // Generate a color based on the name
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue = hash % 360;
  
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
    
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="hsl(${hue}, 80%, 70%)" />
      <text 
        x="${size/2}" 
        y="${size/2 + 8}" 
        font-family="Arial, sans-serif" 
        font-size="${size/2}" 
        font-weight="bold" 
        text-anchor="middle" 
        dominant-baseline="middle"
        fill="white"
      >${initials}</text>
    </svg>
  `;
}

/**
 * Generate a data URL for an avatar
 */
export function getAvatarUrl(name: string, imageUrl?: string): string {
  if (imageUrl) {
    return imageUrl;
  }
  
  const svg = generateAvatarSvg(name);
  return svgToDataURL(svg);
}

/**
 * Generates a rainbow gradient SVG
 */
export function generateRainbowGradient(width = 1200, height = 600): string {
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E70000" />
          <stop offset="16.67%" stop-color="#FF8C00" />
          <stop offset="33.33%" stop-color="#FFEF00" />
          <stop offset="50%" stop-color="#00811F" />
          <stop offset="66.67%" stop-color="#0044FF" />
          <stop offset="83.33%" stop-color="#760089" />
          <stop offset="100%" stop-color="#E70000" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#rainbow)" opacity="0.9" />
    </svg>
  `;
}