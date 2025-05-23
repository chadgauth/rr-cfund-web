import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertCampaignSchema, 
  insertDonationSchema, 
  insertUserSchema
} from "@shared/schema";
import { handleAssistantQuery, handleImageGeneration } from "./openRouter";
import { rateLimitAIChat } from "./rateLimit";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // API Error Handler
  const handleError = (err: any, res: Response) => {
    console.error(err);
    if (err instanceof ZodError) {
      const validationError = fromZodError(err);
      return res.status(400).json({ message: validationError.message });
    }
    return res.status(500).json({ message: err.message || "Internal Server Error" });
  };

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Campaign routes
  app.get("/api/campaigns", async (req, res) => {
    try {
      const campaigns = await storage.getCampaigns();
      res.json(campaigns);
    } catch (err) {
      handleError(err, res);
    }
  });

  app.get("/api/campaigns/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const campaign = await storage.getCampaign(id);
      
      if (!campaign) {
        return res.status(404).json({ message: "Campaign not found" });
      }
      
      res.json(campaign);
    } catch (err) {
      handleError(err, res);
    }
  });

  app.get("/api/campaigns/category/:category", async (req, res) => {
    try {
      const category = req.params.category;
      const campaigns = await storage.getCampaignsByCategory(category);
      res.json(campaigns);
    } catch (err) {
      handleError(err, res);
    }
  });

  app.post("/api/campaigns", async (req, res) => {
    try {
      const campaignData = insertCampaignSchema.parse(req.body);
      const campaign = await storage.createCampaign(campaignData);
      res.status(201).json(campaign);
    } catch (err) {
      handleError(err, res);
    }
  });

  // Donation routes
  app.get("/api/donations/:campaignId", async (req, res) => {
    try {
      const campaignId = parseInt(req.params.campaignId);
      const donations = await storage.getDonationsByCampaign(campaignId);
      res.json(donations);
    } catch (err) {
      handleError(err, res);
    }
  });

  app.post("/api/donations", async (req, res) => {
    try {
      const donationData = insertDonationSchema.parse(req.body);
      const donation = await storage.createDonation(donationData);
      
      res.status(201).json(donation);
    } catch (err) {
      handleError(err, res);
    }
  });

  // Users are managed through authentication - no manual user creation needed

  // Testimonials route
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (err) {
      handleError(err, res);
    }
  });

  // Locations route
  app.get("/api/locations", async (req, res) => {
    try {
      const locations = await storage.getLocations();
      res.json(locations);
    } catch (err) {
      handleError(err, res);
    }
  });

  // AI Assistant route
  // app.post("/api/assistant", rateLimitAIChat, handleAssistantQuery);
  
  // AI Image Generation route
  // app.post("/api/generate-image", handleImageGeneration);

  const httpServer = createServer(app);
  return httpServer;
}
