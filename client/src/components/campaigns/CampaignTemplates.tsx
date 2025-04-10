import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface CampaignTemplateProps {
  onSelect: (templateData: any) => void;
}

export function CampaignTemplates({ onSelect }: CampaignTemplateProps) {
  const { toast } = useToast();

  const inspirationalTemplate = {
    title: "Spark a Brighter Queer Future",
    description: "We're creating a safe, inclusive haven where queer youth and adults alike can explore art, music, and creativity without fear or shame. This space will empower us to live proudly, protect those who might feel alone, and celebrate the beautiful spectrum of queer existence.",
    content: `# Our Cosmic Vision

I never planned on being a dad so soon, but when my nephew needed someone to step in as a father figure, I did what felt right. Overnight, I found myself balancing parenthood with my passion for engineering, while fighting to keep my head above water. Throughout these challenges, one thing remained clear: our LGBTQ+ community needs—and deserves—spaces where we can fully be ourselves.

I've felt firsthand how stifling it is to hide your sparkle, to play it small when you're bursting with brilliance. Why shouldn't we wear a cape to the bar if it makes us feel powerful, or shout our truths from the rooftops? We should never have to shrink or be shoved back in a closet. Our identities are worth celebrating every single day.

For me, building a community space is the ultimate act of love—for my nephew, for every queer kid out there, and for those of us who just need a place to unapologetically shine.

## What We're Creating

Our mission is to create a safe, inclusive haven where queer youth and adults alike can explore art, music, and creativity without fear or shame. Picture:

- Open-mic nights showcasing queer voices in poetry, drag, comedy, and beyond.
- Workshops and mentorship programs for LGBTQ+ youth to discover their talents, passions, and confidence.
- All-ages events so our younger generation can see there's a community that loves and supports them just as they are.

## Funding Breakdown

We're aiming to raise $75,000 to cover:

- First and Last Month's Rent: $15,000 for a safe, accessible location
- Renovations & Equipment: $35,000 for sound systems, lighting, comfortable seating, and accessibility features
- Programming & Outreach: $25,000 for free or low-cost events and workshops, plus essential marketing

## Rewards for Our Cosmic Community

- $25+ | Rainbow Supporter: Limited-edition "Shine Bright" enamel pin
- $50+ | Stellar Friend: Custom tote bag featuring our space's design + previous rewards
- $100+ | Galactic Contributor: Your name on our Supporters Wall + VIP invite to grand opening + previous rewards
- $250+ | Universal Champion: Private tour before opening + limited-edition art print by local queer artist + previous rewards
- $500+ | Cosmic Creator: Name a section of our space + personalized thank you video + previous rewards
- $1000+ | Supernova Patron: Reserved seating at all events for first year + your story featured in our community journal + previous rewards

## Join Our Journey

With your support, we'll create a space that welcomes every cape-wearing dreamer, every questioning teen, and every fabulous soul hungry for authenticity. Let's transform our world into what we know it can be—vibrant, loving, and truly inclusive.

Thank you for believing in this vision and for helping us light the path forward.`,
    goal: 75000,
    category: "Community Space"
  };

  const venueRescueTemplate = {
    title: "Save Our Queer Space",
    description: "Help us preserve a historic LGBTQ+ venue that has been a cornerstone of our community for decades. This space has provided shelter, connection, and celebration for generations of queer folks in Austin.",
    content: `# Preserving Our Queer History

Our beloved venue is at risk of being lost forever. For over 30 years, this space has been a sanctuary for LGBTQ+ individuals seeking community, acceptance, and joy. From hosting groundbreaking drag performances to providing meeting space for activism during the AIDS crisis, these walls hold our community's history.

Now, due to rising rents and the economic impact of recent global events, we're in danger of losing this irreplaceable landmark. We can't let another queer space disappear from our city's landscape.

## Why This Venue Matters

This space isn't just a building—it's a living archive of our community's resilience, creativity, and love. It has been:

- A safe haven for those exploring their identity
- A launchpad for countless queer artists and performers
- A gathering place for community organizing and mutual aid
- A celebration space for our victories and a sanctuary during our losses

## How Your Support Helps

We need to raise $65,000 to:

- Cover back rent and secure a 5-year lease: $40,000
- Essential building repairs and code updates: $15,000
- Community programming fund: $10,000

## Rewards for Preserving History

- $20+ | Memory Keeper: Digital thank you card featuring historic photos of the venue
- $50+ | Legacy Supporter: Limited-edition "Preserve Our Spaces" t-shirt + previous rewards
- $100+ | History Guardian: Your name on our permanent Saviors Plaque + previous rewards
- $250+ | Archive Defender: Invitation to exclusive reopening party + commemorative photo book + previous rewards
- $500+ | Heritage Champion: Private guided tour of the venue with stories of its history + previous rewards
- $1000+ | Landmark Protector: Dedicated bar stool or table with your name + lifetime membership perks + previous rewards

## Join Us in Making History

By contributing to this campaign, you're not just saving a building—you're preserving a crucial part of our collective queer history and ensuring future generations have spaces to call their own. Our community has always survived through mutual support and care. Let's continue that tradition by protecting the spaces that have protected us.`,
    goal: 65000,
    category: "Venue Preservation"
  };

  const performanceTemplate = {
    title: "Queer Voices: Cosmic Performance Series",
    description: "Fund our celestial performance series featuring LGBTQ+ artists, musicians, drag performers, poets, and storytellers sharing their authentic cosmic expressions across the universe.",
    content: `# Amplifying Queer Voices Across the Universe

In a world that often silences marginalized voices, we're creating a platform for LGBTQ+ performers to share their authentic stories, art, and brilliance with our community and beyond. The Cosmic Performance Series will showcase the incredible diversity and talent within our queer constellation.

## Our Stellar Vision

The Cosmic Performance Series will be a monthly event featuring:

- Drag performances that push boundaries and celebrate gender expression
- Spoken word poetry and storytelling centered on queer experiences
- Musical performances by LGBTQ+ artists across genres
- Performance art and experimental works exploring queer identity

Each event will be professionally recorded, creating an archive of queer artistic expression that can be shared with broader audiences and preserved for future generations.

## Funding Our Cosmic Stage

We need $30,000 to make this vision reality:

- Performer stipends: $15,000 (ensuring artists are fairly compensated)
- Venue rental and production costs: $8,000
- Recording equipment and documentation: $5,000 
- Accessibility services (interpreters, captioning): $2,000

## Cosmic Rewards

- $25+ | Star Gazer: Digital access to performance recordings + thank you in program
- $50+ | Nebula Supporter: Limited-edition event poster + previous rewards
- $75+ | Galactic Fan: Reserved seating at one performance + previous rewards
- $150+ | Universal Patron: Season pass to all performances + previous rewards
- $300+ | Cosmic Producer: Meet & greet with performers + your name as event sponsor + previous rewards
- $500+ | Stellar Executive: Help curate one month's performances + previous rewards

## Join Our Creative Constellation

Art has always been at the heart of queer resistance, celebration, and community. By supporting this series, you're ensuring that queer voices continue to be heard, celebrated, and preserved. Together, we'll create a space where artistic expression can flourish and where our community can see itself reflected and celebrated.`,
    goal: 30000,
    category: "Arts & Culture"
  };

  const handleSelectTemplate = (template: any) => {
    onSelect(template);
    toast({
      title: "Template Selected",
      description: "Campaign template has been loaded. You can now customize it!",
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Campaign Templates</h2>
      <p className="text-muted-foreground">
        Choose a template to jumpstart your campaign. You can customize all details after selecting.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <TemplateCard
          title="Community Space"
          description="Create a safe, vibrant space for LGBTQ+ community gatherings, events, and support."
          onClick={() => handleSelectTemplate(inspirationalTemplate)}
        />
        
        <TemplateCard
          title="Venue Preservation"
          description="Save and preserve existing queer spaces that are at risk of closing."
          onClick={() => handleSelectTemplate(venueRescueTemplate)}
        />
        
        <TemplateCard
          title="Performance Series"
          description="Fund performances, shows, and artistic expressions by LGBTQ+ creators."
          onClick={() => handleSelectTemplate(performanceTemplate)}
        />
      </div>
      
      <div className="mt-8 text-center">
        <Button variant="outline" onClick={() => onSelect({
          title: "",
          description: "",
          content: "",
          goal: 10000,
          category: ""
        })}>
          Start from Scratch
        </Button>
      </div>
    </div>
  );
}

function TemplateCard({ title, description, onClick }: { 
  title: string; 
  description: string; 
  onClick: () => void; 
}) {
  return (
    <div 
      className="border rounded-lg p-6 cursor-pointer hover:border-primary hover:shadow-md transition-all"
      onClick={onClick}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <Button size="sm" className="w-full">Use Template</Button>
    </div>
  );
}