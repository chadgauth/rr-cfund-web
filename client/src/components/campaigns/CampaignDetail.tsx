import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { Campaign } from "@shared/schema";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Users, Clock, Map, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { queryClient } from '@/lib/queryClient';

interface CampaignDetailProps {
  campaignId: string;
}

const CampaignDetail = ({ campaignId }: CampaignDetailProps) => {
  const [amount, setAmount] = useState("25");
  const [donationLoading, setDonationLoading] = useState(false);
  const [_, navigate] = useLocation();
  const { toast } = useToast();
  
  const { data: campaign, isLoading } = useQuery<Campaign>({
    queryKey: [`/api/campaigns/${campaignId}`],
  });

  const handleDonation = async () => {
    if (!campaign) return;
    
    try {
      setDonationLoading(true);
      
      await apiRequest("POST", "/api/donations", {
        amount: parseInt(amount),
        campaignId: campaign.id,
        userId: 1, // Demo user ID
        anonymous: false
      });
      
      // Invalidate campaign data to refresh
      queryClient.invalidateQueries({ queryKey: [`/api/campaigns/${campaignId}`] });
      
      toast({
        title: "Thank you for your donation!",
        description: `You've donated $${amount} to ${campaign.title}.`,
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process donation. Please try again.",
        variant: "destructive"
      });
      console.error(error);
    } finally {
      setDonationLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <Button variant="ghost" onClick={() => navigate("/campaigns")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Campaigns
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Skeleton className="w-full h-64 rounded-2xl mb-6" />
            <Skeleton className="h-10 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3 mb-6" />
          </div>
          
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-full mb-2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-2.5 w-full mb-6" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-12 w-full my-4" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (!campaign) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Campaign not found</h2>
        <p className="mb-6">The campaign you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/campaigns">Browse Campaigns</Link>
        </Button>
      </div>
    );
  }

  const percentRaised = Math.round((campaign.raised / campaign.goal) * 100);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Button variant="ghost" onClick={() => navigate("/campaigns")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Campaigns
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-gray-300 w-full h-64 rounded-2xl mb-6"></div>
          
          <h1 className="text-3xl font-bold mb-4">{campaign.title}</h1>
          
          <div className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-medium inline-block mb-4">
            {campaign.category}
          </div>
          
          <Tabs defaultValue="about">
            <TabsList className="mb-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="updates">Updates</TabsTrigger>
              <TabsTrigger value="backers">Backers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="text-gray-700">
              <p className="mb-6">{campaign.description}</p>
              
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <div className="bg-gray-100 p-4 rounded-xl mb-6">
                <div className="flex items-center">
                  <Map className="h-5 w-5 mr-2 text-primary" />
                  <span>{campaign.location}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Campaign Details</h3>
              <p className="mb-4">
                This campaign was created to establish a new LGBTQ+ venue in Austin.
                The funds will go towards securing a location, renovations, permits, and initial operating costs.
              </p>
            </TabsContent>
            
            <TabsContent value="updates">
              <div className="bg-gray-100 p-8 rounded-xl text-center">
                <h3 className="text-xl font-medium mb-2">No Updates Yet</h3>
                <p className="text-gray-600">
                  The campaign owner hasn't posted any updates yet. 
                  Check back soon for news about this project.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="backers">
              <div className="bg-gray-100 p-8 rounded-xl text-center">
                <div className="flex items-center justify-center mb-4">
                  <Users className="h-12 w-12 text-primary mb-2" />
                </div>
                <h3 className="text-xl font-medium mb-2">{campaign.backers} Backers</h3>
                <p className="text-gray-600">
                  Thanks to everyone who has supported this campaign so far!
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Progress</CardTitle>
              <CardDescription>
                ${campaign.raised.toLocaleString()} raised of ${campaign.goal.toLocaleString()} goal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProgressBar 
                value={campaign.raised} 
                max={campaign.goal} 
                className="mb-4" 
              />
              
              <div className="flex justify-between text-sm mb-6">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{campaign.backers} backers</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{campaign.daysLeft} days left</span>
                </div>
              </div>
              
              <Dialog>
                <DialogTrigger asChild>
                  <RainbowButton className="w-full mb-4">
                    Support This Campaign
                  </RainbowButton>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Make a Donation</DialogTitle>
                    <DialogDescription>
                      Your support helps make {campaign.title} a reality.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="amount">Donation Amount ($)</Label>
                      <Input
                        id="amount"
                        type="number"
                        min="5"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {[25, 50, 100, 250].map((value) => (
                        <Button
                          key={value}
                          type="button"
                          variant="outline"
                          onClick={() => setAmount(value.toString())}
                          className={parseInt(amount) === value ? "bg-primary text-white" : ""}
                        >
                          ${value}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <Button
                      onClick={handleDonation}
                      disabled={donationLoading}
                      className="bg-primary hover:bg-primary/90"
                    >
                      {donationLoading ? "Processing..." : "Complete Donation"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              
              <Button variant="outline" className="w-full">
                Share Campaign
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
