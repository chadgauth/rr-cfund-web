import { AIChatAssistant } from "@/components/assistant/AIChatAssistant";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from 'react-helmet';

export default function Assistant() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Helmet>
        <title>Rainbow Guide Assistant | Rainbow Rise</title>
        <meta name="description" content="Get help from our cosmic AI assistant to find and support queer spaces." />
      </Helmet>
      
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">
          Rainbow Guide Assistant
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          Our cosmic AI helper is here to guide you through the queer universe
        </p>
        
        <div className="grid gap-8">
          <AIChatAssistant />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <Card className="p-4">
              <CardHeader className="p-0 pb-2">
                <CardTitle className="text-lg">How can Rainbow Guide help?</CardTitle>
                <CardDescription>
                  Our AI assistant is designed to support your journey through Rainbow Rise
                </CardDescription>
              </CardHeader>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg">✦</span>
                  <span>Find campaigns that match your interests and values</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg">✦</span>
                  <span>Learn about LGBTQ+ space history and significance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg">✦</span>
                  <span>Get tips for creating successful funding campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg">✦</span>
                  <span>Discover the cosmic significance of queer community spaces</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-4">
              <CardHeader className="p-0 pb-2">
                <CardTitle className="text-lg">About our AI</CardTitle>
                <CardDescription>
                  Powered by advanced language models with cosmic vibes
                </CardDescription>
              </CardHeader>
              <div className="mt-2 space-y-2 text-sm">
                <p>
                  Rainbow Guide is built using OpenRouter, connecting to state-of-the-art 
                  AI models specifically tuned to understand LGBTQ+ community needs and the 
                  importance of safe, inclusive spaces.
                </p>
                <p className="text-muted-foreground italic">
                  While our AI assistant is knowledgeable and helpful, it's still evolving. 
                  For official platform information, please refer to our About page or 
                  contact the Rainbow Rise team directly.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}