import { useState } from 'react';
import { askAssistant } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Loader2, Send, Sparkles, Stars } from 'lucide-react';
import { generateRainbowGradient } from '@/lib/imageUtils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function AIChatAssistant() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    // Add user message
    const userMessage: Message = { role: 'user', content: query };
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input field
    setQuery('');
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Get AI response
      const response = await askAssistant(query);
      
      // Add AI response message
      const assistantMessage: Message = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      toast({
        title: "Communication Error",
        description: "Unable to reach our cosmic AI assistant. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="border-2 border-primary/30 shadow-lg">
        <CardHeader 
          className="bg-gradient-to-r from-purple-700 via-pink-600 to-violet-800 text-white"
          style={{ 
            backgroundImage: `linear-gradient(135deg, rgba(147, 51, 234, 0.9), rgba(238, 79, 132, 0.9))`,
            borderBottom: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          <CardTitle className="flex items-center gap-2 text-xl">
            <Sparkles className="h-5 w-5" />
            Rainbow Guide
            <div className="ml-2 bg-white/20 px-2 py-1 rounded text-xs font-normal">
              AI Assistant
            </div>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-4 h-[400px] overflow-y-auto space-y-4 mt-2">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center p-4">
              <div 
                className="h-24 w-24 rounded-full flex items-center justify-center"
                style={{ 
                  background: `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(generateRainbowGradient(200, 200))}")`,
                  backgroundSize: 'cover'
                }}
              >
                <Stars className="h-10 w-10 text-white" />
              </div>
              <div className="text-lg font-medium">Rainbow Guide Assistant</div>
              <p className="text-muted-foreground">
                Ask me anything about LGBTQ+ spaces, crowdfunding campaigns, or how to create your own cosmic queer venue!
              </p>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                <SuggestionChip onClick={() => setQuery("What makes a good queer space?")}>
                  What makes a good queer space?
                </SuggestionChip>
                <SuggestionChip onClick={() => setQuery("Tell me about Austin's historic queer venues")}>
                  Austin's historic queer venues
                </SuggestionChip>
                <SuggestionChip onClick={() => setQuery("How can I make my campaign successful?")}>
                  Campaign success tips
                </SuggestionChip>
              </div>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "p-4 rounded-lg max-w-[85%]",
                  message.role === "user"
                    ? "bg-primary/10 ml-auto"
                    : "bg-muted mr-auto"
                )}
              >
                <div className="font-medium mb-1">
                  {message.role === "user" ? "You" : "Rainbow Guide"}
                </div>
                <div className="whitespace-pre-wrap">{message.content}</div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="bg-muted p-4 rounded-lg max-w-[85%] mr-auto flex items-center gap-3">
              <Loader2 className="h-4 w-4 animate-spin text-primary" />
              <span>Rainbow Guide is thinking...</span>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="p-4 border-t">
          <form onSubmit={handleSubmit} className="flex w-full gap-2 items-center">
            <Input
              placeholder="Ask the Rainbow Guide..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="icon"
              disabled={isLoading || !query.trim()}
              className="rounded-full"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}

// Optional suggestion chip component
function SuggestionChip({ 
  children, 
  onClick 
}: { 
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-sm rounded-full transition-colors"
    >
      {children}
    </button>
  );
}