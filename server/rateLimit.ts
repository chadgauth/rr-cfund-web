
import { Request, Response, NextFunction } from 'express';

// Store IPs and their message counts
const messageCountsByIP: Map<string, number> = new Map();

// Clear the map periodically (every hour)
setInterval(() => {
  messageCountsByIP.clear();
}, 3600000);

export function rateLimitAIChat(req: Request, res: Response, next: NextFunction) {
  // Skip rate limiting if user is authenticated
  if (req.headers['x-user-id']) {
    return next();
  }

  const clientIP = req.ip;
  const currentCount = messageCountsByIP.get(clientIP) || 0;

  if (currentCount >= 2) {
    return res.status(429).json({ 
      message: "Free message limit reached. Please log in to continue chatting." 
    });
  }

  messageCountsByIP.set(clientIP, currentCount + 1);
  next();
}
