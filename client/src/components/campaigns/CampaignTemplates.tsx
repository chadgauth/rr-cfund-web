import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { generateRainbowGradient } from "@/lib/imageUtils";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { MarkdownPreview } from "@/components/ui/md-editor";

interface CampaignTemplateProps {
  onSelect: (templateData: any) => void;
}

interface Template {
  id: number;
  title: string;
  description: string;
  content: string;
  category: string;
  goal: number;
  imageUrl?: string;
}

export function CampaignTemplates({ onSelect }: CampaignTemplateProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const templates: Template[] = [
    {
      id: 1,
      title: "Cosmic Queer Haven",
      description: "Create a safe, inclusive place for LGBTQ+ community members to connect, create, and celebrate their authentic selves in a supportive environment.",
      content: `# A Cosmic Haven for Every Queer Soul

## Our Origin Story
I never planned on being a dad so soon, but when my nephew needed someone to step in as a father figure, I did what felt right. Overnight, I found myself balancing parenthood with my passion for engineering, while fighting to keep my head above water. Throughout these challenges, one thing remained clear: our LGBTQ+ community needs—and deserves—spaces where we can fully be ourselves.

I've felt firsthand how stifling it is to hide your sparkle, to play it small when you're bursting with brilliance. Why shouldn't we wear a cape to the bar if it makes us feel powerful, or shout our truths from the rooftops? We should never have to shrink or be shoved back in a closet. Our identities are worth celebrating every single day.

## Our Cosmic Impact
Our mission is to create a safe, inclusive haven where queer youth and adults alike can explore art, music, and creativity without fear or shame. Picture:

- Open-mic nights showcasing queer voices in poetry, drag, comedy, and beyond
- Workshops and mentorship programs for LGBTQ+ youth to discover their talents
- All-ages events so our younger generation can see there's a community that supports them

This space will empower us to live proudly, protect those who might feel alone, and celebrate the beautiful spectrum of queer existence throughout the universe.

## What We Need
We're aiming to raise $25,000 to cover:

- First and Last Month's Rent: Ensuring we can secure a safe, accessible location
- Renovations & Equipment: From sound systems for performances to comfortable seating
- Programming & Outreach: Fund free or low-cost events and workshops for LGBTQ+ youth

## Join Our Constellation
With your support, we'll create a space that welcomes every cape-wearing dreamer, every questioning teen, and every fabulous soul hungry for authenticity. Let's transform our world into what we know it can be—vibrant, loving, and truly inclusive.

Thank you for believing in this vision and for helping us light the path forward.`,
      category: "Community Center",
      goal: 25000,
    },
    {
      id: 2,
      title: "Queer Nebula Lounge",
      description: "Launch a vibrant lounge and bar where LGBTQ+ individuals can socialize, enjoy performances, and find community in a judgment-free atmosphere.",
      content: `# Queer Nebula Lounge: Where Stars Like Us Shine

## A Place to Shine Bright
Every queer person deserves a space where they can shine as brightly as the stars they are. That's why we're creating Queer Nebula Lounge - a cosmic-themed bar and lounge that celebrates the full spectrum of LGBTQ+ identities.

For too long, many of us have felt like aliens in our own communities. At Queer Nebula, we'll create a space where everyone can feel at home among the stars.

## What Makes Us Special
Queer Nebula will be more than just another bar:

- Celestial-themed cocktails and non-alcoholic options for every taste
- Weekly drag shows, karaoke nights, and talent showcases
- Comfortable seating areas for meaningful conversations
- State-of-the-art sound system for dancing under our cosmic light display
- Inclusive policies that ensure everyone feels welcome and safe

## Our Funding Needs
We're seeking $35,000 to launch our stellar space:

- Lease and renovations: $20,000
- Bar equipment and initial inventory: $8,000
- Sound and lighting systems: $5,000
- Staff training and operating costs: $2,000

## Join Our Galactic Community
Every donation helps us create this safe harbor in the vast universe. Whether you contribute $5 or $500, you're helping build a community where queer people can celebrate who they are without apology or fear.

The stars have guided travelers for centuries. Now, let's create our own constellation - a beacon of hope, joy, and pride for our community.

Shine with us! ✨`,
      category: "Bar & Lounge",
      goal: 35000,
    },
    {
      id: 3,
      title: "Stardust Dance Club",
      description: "Create an energetic, inclusive dance club where the LGBTQ+ community can express themselves freely through movement, music, and connection.",
      content: `# Stardust Dance Club: Move Freely Among the Stars

## Dance Like Nobody's Watching (But Everybody's Welcome)
In a world that often tells queer people to take up less space, we're creating a place where you can move, express, and exist without boundaries. Stardust Dance Club will be Austin's premier LGBTQ+ dance venue, where the music pulses like a cosmic heartbeat and everyone is free to orbit in their own unique way.

## Our Cosmic Vision
Stardust will transform nightlife with:

- World-class sound system and light shows that transform our space into a living galaxy
- Multiple dance floors for different music styles and energy levels
- Regular events featuring LGBTQ+ DJs and performers from across the universe
- Accessible layout and sensory-friendly zones for dancers of all abilities
- Strict consent and anti-harassment policies to keep our celestial community safe

## The Stardust Experience
Beyond regular club nights, we'll offer:

- Dance classes and workshops during off-hours
- Special 18+ nights (no alcohol) for younger community members
- Themed parties celebrating different facets of queer culture
- Community fundraisers supporting local LGBTQ+ organizations

## Launch Funding
To create this dancing dimension, we need $40,000:

- Venue renovations and sound insulation: $15,000
- Professional sound and lighting: $10,000
- Bar setup and initial inventory: $8,000
- Dance floor installation: $5,000
- Operating expenses until we achieve orbit: $2,000

## Join Our Dance Revolution
Every contribution brings us closer to creating a space where dancing isn't just about movement—it's about freedom, expression, and joy. A place where the LGBTQ+ community can move without fear, connect without judgment, and celebrate who we are through the universal language of dance.

Let's create gravitational waves together! 💫`,
      category: "Dance Club",
      goal: 40000,
    },
    {
      id: 4,
      title: "Rainbow Orbit Cafe",
      description: "Establish a welcoming cafe and gathering space for the LGBTQ+ community to enjoy good food, conversation, and programming in a cozy atmosphere.",
      content: `# Rainbow Orbit Cafe: Nourishment for Body & Soul

## A Safe Orbit for Everyone
Not everyone wants to connect in bars or clubs. Rainbow Orbit Cafe will be a alcohol-free space where LGBTQ+ folks of all ages can gather, work, create, and connect over excellent coffee, tea, and food in a space that celebrates who we are.

## What Makes Us Special
Rainbow Orbit isn't just another cafe:

- Delicious, locally-sourced food with options for every dietary need
- Warm, inviting atmosphere with comfortable seating for working or socializing
- Free community library featuring LGBTQ+ authors and resources
- Gallery space showcasing queer artists on rotation
- Regular events like book clubs, game nights, and open mics

## Beyond Coffee
Our space will serve as:

- A daytime work space for LGBTQ+ remote workers and students
- A meeting place for community groups and organizations
- A venue for author readings and small performances
- A safe space for queer youth after school

## Launch Funding 
We need $30,000 to create this nurturing space:

- Kitchen equipment and initial inventory: $12,000
- Furniture and decor: $8,000
- Rent and utilities for first three months: $6,000
- Staff training and living wages: $4,000

## Join Our Community Table
Every contribution helps us create a space where there's always a seat for you at the table. Where conversations flow freely, where ideas are born, and where the simple act of sharing a meal or a cup of coffee becomes an affirmation of our right to exist and thrive together.

Help us create this gravitational center for our community! ☕`,
      category: "Cafe & Restaurant",
      goal: 30000,
    }
  ];

  const handleSelect = (template: Template) => {
    setSelectedTemplate(template);
  };

  const confirmSelection = () => {
    if (selectedTemplate) {
      onSelect(selectedTemplate);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Choose a Campaign Template</h2>
        <p className="text-muted-foreground">
          Select a template to jumpstart your campaign. You can customize all details after selecting.
        </p>
      </div>

      {selectedTemplate ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={() => setSelectedTemplate(null)}>
              Back to Templates
            </Button>
            <RainbowButton onClick={confirmSelection}>
              Use This Template
            </RainbowButton>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>{selectedTemplate.title}</CardTitle>
              <CardDescription>{selectedTemplate.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video mb-4 rounded-md overflow-hidden" 
                   style={{ 
                     background: `url("data:image/svg+xml;utf8,${encodeURIComponent(generateRainbowGradient())}")`,
                     backgroundSize: 'cover'
                   }}>
              </div>
              <p className="mb-2 font-medium">Description:</p>
              <p className="text-muted-foreground mb-4">{selectedTemplate.description}</p>
              
              <p className="mb-2 font-medium">Preview of Content:</p>
              <div className="bg-muted p-4 rounded-md max-h-96 overflow-y-auto">
                <MarkdownPreview content={selectedTemplate.content} />
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Category:</p>
                  <p className="text-sm">{selectedTemplate.category}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Suggested Goal:</p>
                  <p className="text-sm">${selectedTemplate.goal.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <RainbowButton 
                className="w-full" 
                onClick={confirmSelection}
              >
                Use This Template
              </RainbowButton>
            </CardFooter>
          </Card>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              title={template.title}
              description={template.description}
              category={template.category}
              onClick={() => handleSelect(template)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function TemplateCard({ 
  title, 
  description, 
  category,
  onClick 
}: { 
  title: string; 
  description: string; 
  category: string;
  onClick: () => void;
}) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="aspect-video mb-4 rounded-md overflow-hidden" 
             style={{ 
               background: `url("data:image/svg+xml;utf8,${encodeURIComponent(generateRainbowGradient())}")`,
               backgroundSize: 'cover'
             }}>
        </div>
        <p className="line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          variant="outline"
          onClick={onClick}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}