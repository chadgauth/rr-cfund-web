import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { SassyHelper } from "@/components/ui/sassy-helper"; 
import { useAuth } from "@/hooks/useAuth";

// Import pages
import Home from "@/pages/Home";
import Campaigns from "@/pages/Campaigns";
import CampaignDetail from "@/pages/CampaignDetail";
import CreateCampaign from "@/pages/CreateCampaign";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
// import Assistant from "@/pages/Assistant";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/Landing";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <Switch>
      {/* Public routes available to everyone */}
      <Route path="/" component={isAuthenticated ? Home : Landing} />
      <Route path="/campaigns" component={Campaigns} />
      <Route path="/campaigns/:id" component={CampaignDetail} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
{/* <Route path="/assistant" component={Assistant} /> */} {/* DISABLED: AI features removed */}
      {/* Protected routes that require authentication */}
      <Route path="/create-campaign" component={isAuthenticated ? CreateCampaign : Landing} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <SassyHelper />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
