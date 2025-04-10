import { apiRequest } from "./queryClient";
import { Campaign, Donation } from "@shared/schema";

// AI Assistant API
export const askAssistant = async (query: string): Promise<string> => {
  const response = await apiRequest("POST", "/api/assistant", { query });
  const data = await response.json();
  return data.response;
};

// Campaign API
export const fetchCampaigns = async (): Promise<Campaign[]> => {
  const response = await apiRequest("GET", "/api/campaigns");
  return response.json();
};

export const fetchCampaign = async (id: number): Promise<Campaign> => {
  const response = await apiRequest("GET", `/api/campaigns/${id}`);
  return response.json();
};

export const createCampaign = async (campaign: any): Promise<Campaign> => {
  const response = await apiRequest("POST", "/api/campaigns", campaign);
  return response.json();
};

// Donation API
export const createDonation = async (donation: any): Promise<Donation> => {
  const response = await apiRequest("POST", "/api/donations", donation);
  return response.json();
};

export const fetchDonationsByCampaign = async (campaignId: number): Promise<Donation[]> => {
  const response = await apiRequest("GET", `/api/donations/${campaignId}`);
  return response.json();
};
