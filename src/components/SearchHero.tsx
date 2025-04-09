
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const popularDestinations = ['Delhi', 'Jaipur', 'Varanasi', 'Kerala', 'Goa'];

const SearchHero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to destination page with the search query
      navigate(`/destination/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handlePopularDestinationClick = (destination: string) => {
    navigate(`/destination/${encodeURIComponent(destination)}`);
  };

  return (
    <div className="hero-section bg-[url('https://images.unsplash.com/photo-1524230659092-07f99a75c673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center">
      <div className="container mx-auto px-4 py-24 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-md">
          Discover India's Hidden Treasures <br className="hidden md:block" />
          <span className="text-primary">Beyond The Guidebooks</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          Explore authentic local experiences, undiscovered gems, and cultural treasures that make Incredible India truly incredible.
        </p>
        
        <form onSubmit={handleSearch} className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Where in India? Try 'Varanasi' or 'Kerala'"
              className="w-full h-14 pl-12 pr-4 text-foreground bg-white/90 border border-gray-200 rounded-full shadow-lg focus:ring-2 focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <Button 
              type="submit" 
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full"
              disabled={!searchQuery.trim()}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </form>
        
        <div className="flex flex-wrap justify-center gap-2 items-center">
          <span className="text-sm text-white/90">Popular in India:</span>
          {popularDestinations.map((destination) => (
            <button
              key={destination}
              onClick={() => handlePopularDestinationClick(destination)}
              className="text-sm py-1 px-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
            >
              {destination}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchHero;
