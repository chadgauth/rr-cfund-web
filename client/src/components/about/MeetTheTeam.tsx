import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generateAvatarSvg } from "@/lib/imageUtils";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  pronouns: string;
  image?: string;
  quirk: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export function MeetTheTeam() {
  const teamMembers: TeamMember[] = [
    {
      name: "Luna Stardust",
      title: "Cosmic Founder & CEO",
      pronouns: "she/they",
      bio: "Luna founded Rainbow Rise after noticing a distinct lack of queer spaces that truly embraced the full spectrum of LGBTQ+ identity. With a background in astrophysics and community organizing, she believes every queer person deserves a place among the stars.",
      quirk: "Claims to have once seen a double rainbow on Mars.",
      socialLinks: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Orion Bellatrix",
      title: "Chief Community Connector",
      pronouns: "they/them",
      bio: "Orion spends their days connecting queer folks across the galaxy. Prior to Rainbow Rise, they organized underground dance parties in abandoned planetariums and led the largest queer choir in the solar system.",
      quirk: "Can communicate with cats using only eyebrow movements.",
      socialLinks: {
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Alan Sy Sithier",
      title: "Chief AI Compliance Officer",
      pronouns: "he/him",
      bio: "As our beloved CAICO (pronounced like the friendly ghost!), Alan ensures all our AI systems are as queer-friendly as our physical spaces. He specializes in teaching neural networks to recognize and celebrate cosmic queerness in all its forms.",
      quirk: "His name abbreviates to A.S.S. and he refuses to let anyone forget it.",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Nova Shimmer",
      title: "Galactic Design Director",
      pronouns: "she/her",
      bio: "Nova creates visual experiences that make queer hearts flutter across dimensions. Her background in holographic art and zero-gravity installation pieces brings a unique perspective to our campaign visuals and space designs.",
      quirk: "Only wears clothes that sparkle, even in her sleep.",
      socialLinks: {
        twitter: "#"
      }
    },
    {
      name: "Zenith Quasar",
      title: "Interstellar Finance Wizard",
      pronouns: "he/they",
      bio: "Zenith handles the financial wormholes that keep Rainbow Rise expanding. Their unique ability to translate complex financial concepts into simple rainbow charts has saved us from many black holes.",
      quirk: "Has a collection of calculators from every planet in our solar system.",
      socialLinks: {
        linkedin: "#"
      }
    },
    {
      name: "Celeste Nebula",
      title: "Community Safety Guardian",
      pronouns: "any/all",
      bio: "Celeste ensures that all Rainbow Rise spaces remain safe havens for queer folks. Their background in conflict resolution and protective force-field engineering makes them the perfect person to keep our communities secure.",
      quirk: "Can defuse any tense situation with spontaneous harmonica playing.",
      socialLinks: {
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Meet Our Cosmic Crew</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The extraordinary beings who make Rainbow Rise's mission possible across the universe. We're a diverse group of dreamers, doers, and occasional galaxy-hoppers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  // Generate avatar if no image is provided
  const avatarSvg = generateAvatarSvg(member.name);
  const avatarUrl = member.image || `data:image/svg+xml;utf8,${encodeURIComponent(avatarSvg)}`;

  return (
    <Card className="overflow-hidden flex flex-col h-full border-2 hover:border-primary transition-colors duration-300">
      <div 
        className="h-40 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-400 flex items-center justify-center"
      >
        <div 
          className="w-24 h-24 rounded-full bg-white p-1 overflow-hidden"
          style={{ 
            backgroundImage: `url(${avatarUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{member.name}</CardTitle>
            <CardDescription className="font-medium">{member.title}</CardDescription>
          </div>
          <Badge variant="outline" className="ml-2">
            {member.pronouns}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm mb-4">{member.bio}</p>
        <div className="bg-muted p-3 rounded-md text-sm italic">
          <span className="font-semibold">Cosmic Quirk:</span> {member.quirk}
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4">
        <div className="flex space-x-3">
          {member.socialLinks?.twitter && (
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <FaTwitter />
              <span className="sr-only">Twitter</span>
            </Button>
          )}
          {member.socialLinks?.linkedin && (
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <FaLinkedin />
              <span className="sr-only">LinkedIn</span>
            </Button>
          )}
          {member.socialLinks?.github && (
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <FaGithub />
              <span className="sr-only">GitHub</span>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}