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

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private campaigns: Map<number, Campaign>;
  private donations: Map<number, Donation>;
  private testimonials: Map<number, Testimonial>;
  private locations: Map<number, Location>;
  
  private userIdCounter: number;
  private campaignIdCounter: number;
  private donationIdCounter: number;
  private testimonialIdCounter: number;
  private locationIdCounter: number;

  constructor() {
    this.users = new Map();
    this.campaigns = new Map();
    this.donations = new Map();
    this.testimonials = new Map();
    this.locations = new Map();
    
    this.userIdCounter = 1;
    this.campaignIdCounter = 1;
    this.donationIdCounter = 1;
    this.testimonialIdCounter = 1;
    this.locationIdCounter = 1;
    
    // Initialize with sample testimonials
    this.initializeTestimonials();
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Campaign operations
  async getCampaigns(): Promise<Campaign[]> {
    return Array.from(this.campaigns.values());
  }
  
  async getCampaign(id: number): Promise<Campaign | undefined> {
    return this.campaigns.get(id);
  }
  
  async getCampaignsByCategory(category: string): Promise<Campaign[]> {
    return Array.from(this.campaigns.values()).filter(
      (campaign) => campaign.category === category,
    );
  }
  
  async createCampaign(insertCampaign: InsertCampaign): Promise<Campaign> {
    const id = this.campaignIdCounter++;
    const now = new Date();
    const campaign: Campaign = { 
      ...insertCampaign, 
      id, 
      raised: 0, 
      backers: 0,
      createdAt: now
    };
    this.campaigns.set(id, campaign);
    return campaign;
  }
  
  async updateCampaign(id: number, updates: Partial<Campaign>): Promise<Campaign | undefined> {
    const campaign = this.campaigns.get(id);
    if (!campaign) return undefined;
    
    const updatedCampaign = { ...campaign, ...updates };
    this.campaigns.set(id, updatedCampaign);
    return updatedCampaign;
  }
  
  // Donation operations
  async getDonationsByCampaign(campaignId: number): Promise<Donation[]> {
    return Array.from(this.donations.values()).filter(
      (donation) => donation.campaignId === campaignId,
    );
  }
  
  async createDonation(insertDonation: InsertDonation): Promise<Donation> {
    const id = this.donationIdCounter++;
    const now = new Date();
    const donation: Donation = { ...insertDonation, id, createdAt: now };
    this.donations.set(id, donation);
    
    // Update campaign raised amount and backers count
    const campaign = this.campaigns.get(donation.campaignId);
    if (campaign) {
      const raised = campaign.raised + donation.amount;
      const backers = campaign.backers + 1;
      this.campaigns.set(donation.campaignId, { ...campaign, raised, backers });
    }
    
    return donation;
  }
  
  // Testimonial operations
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
  
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.testimonialIdCounter++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
  
  // Location operations
  async getLocations(): Promise<Location[]> {
    return Array.from(this.locations.values());
  }
  
  async getLocationsByCampaign(campaignId: number): Promise<Location[]> {
    return Array.from(this.locations.values()).filter(
      (location) => location.campaignId === campaignId,
    );
  }
  
  async createLocation(insertLocation: InsertLocation): Promise<Location> {
    const id = this.locationIdCounter++;
    const location: Location = { ...insertLocation, id };
    this.locations.set(id, location);
    return location;
  }
  
  // Initialize sample data
  private initializeTestimonials() {
    const testimonials = [
      {
        id: this.testimonialIdCounter++,
        name: "Jamie Rodriguez",
        role: "Founder, Spectrum Lounge",
        content: "Rainbow Rise gave us the platform we needed to connect with the community and raise funds for our bar. The support has been overwhelming — we can't wait to open our doors!",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
      },
      {
        id: this.testimonialIdCounter++,
        name: "Alex Kim",
        role: "Backer & Community Member",
        content: "I've backed three campaigns on Rainbow Rise because I believe in preserving queer spaces in Austin. It feels amazing to be part of something so important to our community.",
        imageUrl: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
      }
    ];
    
    testimonials.forEach(testimonial => {
      this.testimonials.set(testimonial.id, testimonial);
    });
    
    // Initialize sample campaigns
    this.initializeCampaigns();
  }
  
  private initializeCampaigns() {
    const campaigns = [
      {
        id: this.campaignIdCounter++,
        title: "Spectrum Lounge",
        description: "A new inclusive cocktail bar with a focus on craft drinks and community events in East Austin.",
        category: "Bar & Lounge",
        goal: 75000,
        raised: 47500,
        backers: 214,
        daysLeft: 14,
        imageUrl: "https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        userId: 1,
        location: "East Austin",
        createdAt: new Date()
      },
      {
        id: this.campaignIdCounter++,
        title: "Rainbow Hub",
        description: "A multi-purpose community center offering resources, meeting spaces, and support for LGBTQ+ individuals.",
        category: "Community Center",
        goal: 120000,
        raised: 89250,
        backers: 432,
        daysLeft: 21,
        imageUrl: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        userId: 1,
        location: "Central Austin",
        createdAt: new Date()
      },
      {
        id: this.campaignIdCounter++,
        title: "Neon Nights",
        description: "A vibrant dance club with multiple floors offering diverse music styles and inclusive theme nights.",
        category: "Dance Club",
        goal: 150000,
        raised: 32800,
        backers: 165,
        daysLeft: 45,
        imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        userId: 1,
        location: "South Austin",
        createdAt: new Date()
      }
    ];
    
    campaigns.forEach(campaign => {
      this.campaigns.set(campaign.id, campaign);
    });
    
    // Add a default user
    this.users.set(1, {
      id: 1,
      username: "demo",
      password: "password",
      email: "demo@example.com",
      name: "Demo User"
    });
  }
}

export const storage = new MemStorage();
