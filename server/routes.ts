import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertCampaignSchema, 
  insertDonationSchema, 
  insertUserSchema
} from "@shared/schema";
import { handleAssistantQuery } from "./openRouter";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Error Handler
  const handleError = (err: any, res: Response) => {
    console.error(err);
    if (err instanceof ZodError) {
      const validationError = fromZodError(err);
      return res.status(400).json({ message: validationError.message });
    }
    return res.status(500).json({ message: err.message || "Internal Server Error" });
  };

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

  // User routes
  app.post("/api/users", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      
      // Check if username or email already exists
      const existingUser = await storage.getUserByUsername(userData.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }
      
      const user = await storage.createUser(userData);
      
      // Don't return the password
      const { password, ...userWithoutPassword } = user;
      res.status(201).json(userWithoutPassword);
    } catch (err) {
      handleError(err, res);
    }
  });

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
  app.post("/api/assistant", handleAssistantQuery);

  const httpServer = createServer(app);
  return httpServer;
}
