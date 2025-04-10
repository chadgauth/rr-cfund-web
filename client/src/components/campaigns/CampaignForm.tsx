import { useState } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertCampaignSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { CampaignTemplates } from "./CampaignTemplates";
import { MarkdownEditor } from "@/components/ui/md-editor";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RainbowButton } from "@/components/ui/rainbow-button";

// Extend the schema with validation rules
const formSchema = insertCampaignSchema.extend({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }),
  content: z.string().optional(),
  goal: z.coerce.number().min(1000, {
    message: "Funding goal must be at least $1,000.",
  }),
  daysLeft: z.coerce.number().min(7).max(90, {
    message: "Campaign duration must be between 7 and 90 days.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const CampaignForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTemplates, setShowTemplates] = useState(true);
  const [_, navigate] = useLocation();
  const { toast } = useToast();

  const defaultValues: Partial<FormValues> = {
    title: "",
    description: "",
    content: "",
    category: "Bar & Lounge",
    goal: 10000,
    daysLeft: 30,
    imageUrl: "",
    location: "",
    userId: 1, // Demo user
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  
  const applyTemplate = (template: any) => {
    form.setValue("title", template.title);
    form.setValue("description", template.description);
    form.setValue("content", template.content);
    form.setValue("goal", template.goal);
    form.setValue("category", template.category);
    setShowTemplates(false);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await apiRequest("POST", "/api/campaigns", data);
      const campaign = await response.json();
      
      // Invalidate campaigns query
      queryClient.invalidateQueries({ queryKey: ['/api/campaigns'] });
      
      toast({
        title: "Campaign created!",
        description: "Your campaign has been created successfully.",
      });
      
      // Redirect to the new campaign
      navigate(`/campaigns/${campaign.id}`);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to create campaign. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {showTemplates ? (
        <div className="mb-8">
          <CampaignTemplates onSelect={applyTemplate} />
        </div>
      ) : (
        <div className="mb-6 text-right">
          <Button 
            variant="outline" 
            onClick={() => setShowTemplates(true)}
            className="text-sm"
          >
            Browse Templates
          </Button>
        </div>
      )}
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Campaign Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the name of your venue or space" {...field} />
                </FormControl>
                <FormDescription>
                  A clear, memorable name for your LGBTQ+ venue or space.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Campaign Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your vision, goals, and what makes your space unique"
                    className="min-h-32"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Tell the community about your space, what makes it special, and how it will serve the LGBTQ+ community.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Campaign Content</FormLabel>
                <FormControl>
                  <MarkdownEditor
                    value={field.value || ''}
                    onChange={(value) => field.onChange(value || '')}
                    placeholder="Add detailed content for your campaign, including your story, goals, rewards, etc."
                    minHeight={400}
                  />
                </FormControl>
                <FormDescription>
                  Use the editor to format your cosmic story. Tell us how your space will shine in the queer universe.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Bar & Lounge">Bar & Lounge</SelectItem>
                      <SelectItem value="Community Center">Community Center</SelectItem>
                      <SelectItem value="Dance Club">Dance Club</SelectItem>
                      <SelectItem value="Cafe & Restaurant">Cafe & Restaurant</SelectItem>
                      <SelectItem value="Retail & Service">Retail & Service</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Choose the category that best fits your venue.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="goal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Funding Goal ($)</FormLabel>
                  <FormControl>
                    <Input type="number" min="1000" {...field} />
                  </FormControl>
                  <FormDescription>
                    How much funding do you need to make this happen?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="daysLeft"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campaign Duration (days)</FormLabel>
                  <FormControl>
                    <Input type="number" min="7" max="90" {...field} />
                  </FormControl>
                  <FormDescription>
                    Campaigns can run between 7 and 90 days.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="East Austin, Downtown, etc." 
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>
                  <FormDescription>
                    Which area of Austin are you targeting?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
            <RainbowButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating Campaign..." : "Create Campaign"}
            </RainbowButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CampaignForm;
