import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white text-xl font-bold">RR</span>
            </div>
            <span className="text-xl font-bold font-sans text-primary">Rainbow Rise</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className={`font-medium ${isActive("/") ? "text-primary" : "hover:text-primary"} transition`}>
                Home
              </span>
            </Link>
            <Link href="/campaigns">
              <span className={`font-medium ${isActive("/campaigns") ? "text-primary" : "hover:text-primary"} transition`}>
                Campaigns
              </span>
            </Link>
            <Link href="/about">
              <span className={`font-medium ${isActive("/about") ? "text-primary" : "hover:text-primary"} transition`}>
                About
              </span>
            </Link>
            <Link href="/contact">
              <span className={`font-medium ${isActive("/contact") ? "text-primary" : "hover:text-primary"} transition`}>
                Contact
              </span>
            </Link>
            <Link href="/assistant">
              <span className={`font-medium flex items-center gap-1 ${isActive("/assistant") ? "text-primary" : "hover:text-primary"} transition`}>
                <Sparkles size={16} />
                Assistant
              </span>
            </Link>
            <Button asChild className="bg-primary text-white rounded-xl">
              <Link href="/create-campaign">Start Campaign</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-gray-500 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 space-y-2">
            <Link href="/" onClick={closeMenu}>
              <span className={`block py-2 ${isActive("/") ? "text-primary" : "hover:text-primary"} transition`}>
                Home
              </span>
            </Link>
            <Link href="/campaigns" onClick={closeMenu}>
              <span className={`block py-2 ${isActive("/campaigns") ? "text-primary" : "hover:text-primary"} transition`}>
                Campaigns
              </span>
            </Link>
            <Link href="/about" onClick={closeMenu}>
              <span className={`block py-2 ${isActive("/about") ? "text-primary" : "hover:text-primary"} transition`}>
                About
              </span>
            </Link>
            <Link href="/contact" onClick={closeMenu}>
              <span className={`block py-2 ${isActive("/contact") ? "text-primary" : "hover:text-primary"} transition`}>
                Contact
              </span>
            </Link>
            <Link href="/assistant" onClick={closeMenu}>
              <span className={`flex items-center gap-1 py-2 ${isActive("/assistant") ? "text-primary" : "hover:text-primary"} transition`}>
                <Sparkles size={16} />
                Assistant
              </span>
            </Link>
            <Link href="/create-campaign" onClick={closeMenu}>
              <span className="block py-2 text-primary font-medium">
                Start Campaign
              </span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
