
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Wanderlust Unveiled</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/destinations" className="text-foreground hover:text-primary transition-colors">
              Destinations
            </Link>
            <Link to="/local-experiences" className="text-foreground hover:text-primary transition-colors">
              Local Experiences
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Button variant="outline" size="sm" className="gap-2">
              <Search className="h-4 w-4" />
              <span>Search</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/destinations" 
              className="py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link 
              to="/local-experiences" 
              className="py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Local Experiences
            </Link>
            <Link 
              to="/about" 
              className="py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button variant="outline" size="sm" className="gap-2 w-full justify-center">
              <Search className="h-4 w-4" />
              <span>Search</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
