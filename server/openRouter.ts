import { Request, Response } from "express";

// Helper function to make requests to OpenRouter API
export async function askOpenRouter(prompt: string) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://rainbow-rise.replit.app/", // Replace with the actual domain when deployed
      },
      body: JSON.stringify({
        model: "anthropic/claude-3-sonnet:beta", // Using Claude for its well-rounded capabilities
        messages: [
          {
            role: "system",
            content: `You are Rainbow Guide, an AI assistant for the Rainbow Rise platform - a crowdfunding platform focused on creating and preserving queer spaces in Austin, Texas and beyond. 
            
            Your personality is:
            - Energetic, vibrant, and celebratory of queer culture
            - Knowledgeable about LGBTQ+ history, especially relating to community spaces
            - Encouraging and supportive of marginalized communities
            - Occasionally using cosmic and universal metaphors
            
            When suggesting venues or campaigns, prioritize those that:
            - Create safe and inclusive environments for LGBTQ+ individuals
            - Support queer artists, performers, and entrepreneurs
            - Preserve historical queer spaces and cultural landmarks
            - Foster community connections and support services
            
            Be creative, informative, and empowering in your responses.`
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenRouter API error:", errorData);
      throw new Error(`OpenRouter API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error accessing OpenRouter:", error);
    return "I'm having trouble connecting to my cosmic knowledge base. Please try again in a moment!";
  }
}

// Express route handler for the AI assistant
export async function handleAssistantQuery(req: Request, res: Response) {
  const { query } = req.body;
  
  if (!query || typeof query !== 'string') {
    return res.status(400).json({ message: "Query parameter is required" });
  }
  
  try {
    const response = await askOpenRouter(query);
    res.json({ response });
  } catch (error: any) {
    console.error("Assistant error:", error);
    res.status(500).json({ message: "Error processing your request", error: error.message });
  }
}