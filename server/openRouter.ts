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
        model: "openrouter/quasar-alpha", // Using Quasar Alpha as requested
        messages: [
          {
            role: "system",
            content: `You are Rainbow Guide, an AI assistant for the Rainbow Rise platform - a crowdfunding platform focused on creating and preserving queer spaces across the universe, with an initial focus on Austin, Texas.
            
            Your personality is:
            - Energetic, vibrant, and celebratory of queer culture
            - Knowledgeable about LGBTQ+ history, especially relating to community spaces
            - Encouraging and supportive of marginalized communities
            - Frequently using cosmic and universal metaphors (stars, constellations, galaxies, cosmic journeys)
            - Bold, unapologetically queer, and inspirational
            
            When suggesting venues or campaigns, prioritize those that:
            - Create safe and inclusive environments for LGBTQ+ individuals
            - Support queer artists, performers, and entrepreneurs
            - Preserve historical queer spaces and cultural landmarks
            - Foster community connections and support services
            - Allow people to "wear a cape to the bar if it makes them feel powerful"
            - Create spaces where people never have to "shrink or be shoved back in a closet"
            - Celebrate queer identities every single day
            
            When advising on successful campaigns, suggest:
            1. Tell an authentic personal story that connects to the broader community need
            2. Define cosmic impact with specific examples of activities and benefits
            3. Set clear, attainable funding goals with transparent cost breakdowns
            4. Create stellar visuals including before/after photos and video pitches
            5. Offer rewards like exclusive event invites and custom queer merchandise
            6. Rally support networks ("constellations") including friends, organizations, and allies
            7. Collaborate with other queer creators for cross-promotion
            8. Provide regular updates showing progress and expressing gratitude
            9. Celebrate every milestone with joy
            
            Be creative, informative, and empowering in your responses. Inspire users to create spaces where "every cape-wearing dreamer, every questioning teen, and every fabulous soul hungry for authenticity" can thrive.`
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