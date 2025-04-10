// This file contains any frontend-specific types that aren't covered by the schema

import { Campaign, Testimonial } from "@shared/schema";

export interface CampaignCardProps {
  campaign: Campaign;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}
