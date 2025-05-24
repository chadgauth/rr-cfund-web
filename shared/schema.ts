import { pgTable, text, serial, integer, boolean, timestamp, doublePrecision, varchar, jsonb, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table.
// (IMPORTANT) This table is mandatory for Replit Auth, don't drop it.
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table.
// (IMPORTANT) This table is mandatory for Replit Auth, don't drop it.
export const users = pgTable("users", {
  id: varchar("id").primaryKey().notNull(),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const campaigns = pgTable("campaigns", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content"),  // Detailed campaign content with markdown support
  category: text("category").notNull(),
  goal: integer("goal").notNull(),
  raised: integer("raised").default(0),
  backers: integer("backers").default(0),
  daysLeft: integer("days_left").default(30),
  imageUrl: text("image_url"),
  userId: varchar("user_id").notNull(),
  location: text("location"),
  createdAt: timestamp("created_at").defaultNow(),
  deadline: timestamp("deadline"),
  ownerName: text("owner_name"),
});

export const donations = pgTable("donations", {
  id: serial("id").primaryKey(),
  amount: integer("amount").notNull(),
  campaignId: integer("campaign_id").notNull(),
  userId: varchar("user_id").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  anonymous: boolean("anonymous").default(false),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url"),
});

export const locations = pgTable("locations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  latitude: doublePrecision("latitude").notNull(),
  longitude: doublePrecision("longitude").notNull(),
  type: text("type").notNull(),
  campaignId: integer("campaign_id"),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users);
export const insertCampaignSchema = createInsertSchema(campaigns).omit({ createdAt: true, raised: true, backers: true });
export const insertDonationSchema = createInsertSchema(donations).omit({ createdAt: true });
export const insertTestimonialSchema = createInsertSchema(testimonials);
export const insertLocationSchema = createInsertSchema(locations);

// Types for Replit Auth
export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

// Other types
export type InsertUser = z.infer<typeof insertUserSchema>;

export type InsertCampaign = z.infer<typeof insertCampaignSchema>;
export type Campaign = typeof campaigns.$inferSelect;

export type InsertDonation = z.infer<typeof insertDonationSchema>;
export type Donation = typeof donations.$inferSelect;

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

export type InsertLocation = z.infer<typeof insertLocationSchema>;
export type Location = typeof locations.$inferSelect;
