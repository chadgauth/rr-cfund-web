import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { SassyHelper } from "@/components/ui/sassy-helper"; 

// Import pages
import Home from "@/pages/Home";
import Campaigns from "@/pages/Campaigns";
import CampaignDetail from "@/pages/CampaignDetail";
import CreateCampaign from "@/pages/CreateCampaign";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Assistant from "@/pages/Assistant";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/campaigns" component={Campaigns} />
      <Route path="/campaigns/:id" component={CampaignDetail} />
      <Route path="/create-campaign" component={CreateCampaign} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/assistant" component={Assistant} />
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
