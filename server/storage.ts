import { 
  users, type User, type InsertUser,
  campaigns, type Campaign, type InsertCampaign,
  donations, type Donation, type InsertDonation,
  testimonials, type Testimonial, type InsertTestimonial,
  locations, type Location, type InsertLocation
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Campaign operations
  getCampaigns(): Promise<Campaign[]>;
  getCampaign(id: number): Promise<Campaign | undefined>;
  getCampaignsByCategory(category: string): Promise<Campaign[]>;
  createCampaign(campaign: InsertCampaign): Promise<Campaign>;
  updateCampaign(id: number, campaign: Partial<Campaign>): Promise<Campaign | undefined>;
  
  // Donation operations
  getDonationsByCampaign(campaignId: number): Promise<Donation[]>;
  createDonation(donation: InsertDonation): Promise<Donation>;
  
  // Testimonial operations
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Location operations
  getLocations(): Promise<Location[]>;
  getLocationsByCampaign(campaignId: number): Promise<Location[]>;
  createLocation(location: InsertLocation): Promise<Location>;
}

import { db } from "./db";
import { eq, and } from "drizzle-orm";

export class DatabaseStorage implements IStorage {
  constructor() {
    // Ensure we have initial data by seeding the database
    this.seedInitialData();
  }
  
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }
  
  // Campaign operations
  async getCampaigns(): Promise<Campaign[]> {
    return db.select().from(campaigns);
  }
  
  async getCampaign(id: number): Promise<Campaign | undefined> {
    const result = await db.select().from(campaigns).where(eq(campaigns.id, id));
    return result[0];
  }
  
  async getCampaignsByCategory(category: string): Promise<Campaign[]> {
    return db.select().from(campaigns).where(eq(campaigns.category, category));
  }
  
  async createCampaign(insertCampaign: InsertCampaign): Promise<Campaign> {
    const now = new Date();
    
    const result = await db.insert(campaigns).values({
      ...insertCampaign,
      createdAt: now,
      raised: 0,
      backers: 0
    }).returning();
    
    return result[0];
  }
  
  async updateCampaign(id: number, updates: Partial<Campaign>): Promise<Campaign | undefined> {
    const result = await db.update(campaigns)
      .set(updates)
      .where(eq(campaigns.id, id))
      .returning();
    
    return result[0];
  }
  
  // Donation operations
  async getDonationsByCampaign(campaignId: number): Promise<Donation[]> {
    return db.select().from(donations).where(eq(donations.campaignId, campaignId));
  }
  
  async createDonation(insertDonation: InsertDonation): Promise<Donation> {
    const now = new Date();
    
    // Create the donation
    const result = await db.insert(donations).values({
      ...insertDonation,
      createdAt: now
    }).returning();
    
    // Update the campaign stats
    const campaign = await this.getCampaign(insertDonation.campaignId);
    if (campaign) {
      await this.updateCampaign(campaign.id, {
        raised: (campaign.raised || 0) + insertDonation.amount,
        backers: (campaign.backers || 0) + 1
      });
    }
    
    return result[0];
  }
  
  // Testimonial operations
  async getTestimonials(): Promise<Testimonial[]> {
    return db.select().from(testimonials);
  }
  
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const result = await db.insert(testimonials).values(insertTestimonial).returning();
    return result[0];
  }
  
  // Location operations
  async getLocations(): Promise<Location[]> {
    return db.select().from(locations);
  }
  
  async getLocationsByCampaign(campaignId: number): Promise<Location[]> {
    return db.select().from(locations).where(eq(locations.campaignId, campaignId));
  }
  
  async createLocation(insertLocation: InsertLocation): Promise<Location> {
    const result = await db.insert(locations).values(insertLocation).returning();
    return result[0];
  }
  
  // Private method to seed initial data
  private async seedInitialData() {
    try {
      // Check if we already have data
      const existingTestimonials = await db.select().from(testimonials);
      const existingCampaigns = await db.select().from(campaigns);
      
      // Only seed if we don't have data
      if (existingTestimonials.length === 0) {
        await this.seedTestimonials();
      }
      
      if (existingCampaigns.length === 0) {
        await this.seedCampaigns();
      }
      
      if (await this.getUserByUsername("demo") === undefined) {
        await this.seedUsers();
      }
    } catch (error) {
      console.error("Error seeding data:", error);
    }
  }
  
  private async seedUsers() {
    await db.insert(users).values({
      username: "demo",
      password: "password",
      email: "demo@example.com",
      name: "Demo User"
    });
  }
  
  private async seedTestimonials() {
    const testimonialsData = [
      {
        name: "Jamie Rodriguez",
        role: "Founder, Spectrum Lounge",
        content: "Rainbow Rise gave us the platform we needed to connect with the community and raise funds for our bar across the galaxy. The support has been overwhelming — we can't wait to open our cosmic doors!",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
      },
      {
        name: "Alex Kim",
        role: "Backer & Community Member",
        content: "I've backed three campaigns on Rainbow Rise because I believe in preserving queer spaces throughout the universe. It feels amazing to be part of something so important to our multidimensional community.",
        imageUrl: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
      }
    ];
    
    for (const testimonial of testimonialsData) {
      await db.insert(testimonials).values(testimonial);
    }
  }
  
  private async seedCampaigns() {
    const now = new Date();
    
    try {
      // First campaign
      await db.insert(campaigns).values([{
        title: "Spectrum Lounge",
        description: "A new inclusive cocktail bar with a focus on craft drinks and community events serving queer communities across all dimensions.",
        category: "Bar & Lounge",
        goal: 75000,
        raised: 47500,
        backers: 214,
        daysLeft: 14,
        imageUrl: "https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        userId: 1,
        location: "East Austin and Beyond",
        deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        ownerName: "Riley Johnson"
      }]);
      
      // Second campaign
      await db.insert(campaigns).values([{
        title: "Cosmic Rainbow Hub",
        description: "A multi-purpose community center offering resources, meeting spaces, and support for LGBTQ+ individuals across all galaxies.",
        category: "Community Center",
        goal: 120000,
        raised: 89250,
        backers: 432,
        daysLeft: 21,
        imageUrl: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        userId: 1,
        location: "Cosmic Central, Austin",
        deadline: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
        ownerName: "Jordan Smith"
      }]);
      
      // Third campaign
      await db.insert(campaigns).values([{
        title: "Interstellar Neon Nights",
        description: "A vibrant dance club with multiple dimensions offering diverse music styles and inclusive theme nights for all beings.",
        category: "Dance Club",
        goal: 150000,
        raised: 32800,
        backers: 165,
        daysLeft: 45,
        imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        userId: 1,
        location: "South Austin's Universe",
        deadline: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000),
        ownerName: "Sam Wilson"
      }]);
    } catch (error) {
      console.error("Error seeding campaigns:", error);
    }
  }
}

export const storage = new DatabaseStorage();
