import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Loader2, Image as ImageIcon } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ImageGeneratorProps {
  prompt: string;
  onImageGenerated: (imageUrl: string) => void;
}

export function ImageGenerator({ prompt, onImageGenerated }: ImageGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const generateImage = async () => {
    if (!prompt || prompt.length < 3) {
      toast({
        title: "Title needed",
        description: "Please enter a campaign title first",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const response = await apiRequest("POST", "/api/generate-image", { prompt });
      const data = await response.json();

      if (data.success && data.imageUrl) {
        onImageGenerated(data.imageUrl);
        toast({
          title: "Image created!",
          description: "Your cosmic campaign image has been generated",
        });
      } else {
        throw new Error(data.message || "Failed to generate image");
      }
    } catch (err: any) {
      console.error("Image generation error:", err);
      setError(err.message || "Something went wrong generating your image");
      toast({
        title: "Image generation failed",
        description: "We couldn't create your image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-2">
      <Button
        type="button"
        onClick={generateImage}
        disabled={isGenerating || !prompt}
        className="w-full flex items-center gap-2"
        variant="outline"
      >
        {isGenerating ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Creating cosmic image...</span>
          </>
        ) : (
          <>
            <ImageIcon className="h-4 w-4" />
            <span>Generate AI Campaign Image</span>
          </>
        )}
      </Button>
      
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
      
      <p className="text-xs text-muted-foreground">
        Create a unique cosmic-themed image for your campaign based on its title and description.
        This might take 10-15 seconds.
      </p>
    </div>
  );
}