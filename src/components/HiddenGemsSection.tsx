
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import HiddenGemCard from "@/components/HiddenGemCard";

// Mock data for hidden gems
const hiddenGems = [
  {
    name: 'Majuli Island',
    image: 'https://images.unsplash.com/photo-1623953943058-1626330a502a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Visit the world\'s largest river island in Assam, known for its vibrant neo-Vaishnavite culture and traditional crafts.',
    location: 'Assam, India'
  },
  {
    name: 'Spiti Valley',
    image: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Discover this remote Himalayan valley with its lunar-like landscapes, ancient monasteries, and traditional villages far from tourist crowds.',
    location: 'Himachal Pradesh, India'
  },
  {
    name: 'Ziro Valley',
    image: 'https://images.unsplash.com/photo-1631683536425-7c348512cb2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Explore this picturesque valley in Arunachal Pradesh, home to the Apatani tribe and known for its rich biodiversity and rice cultivation.',
    location: 'Arunachal Pradesh, India'
  }
];

const HiddenGemsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="section-heading">Hidden Gems of India</h2>
          <Link to="/category/hidden-gems" className="text-primary flex items-center gap-1 hover:underline text-sm">
            View all <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hiddenGems.map((gem, index) => (
            <HiddenGemCard
              key={index}
              name={gem.name}
              image={gem.image}
              description={gem.description}
              location={gem.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiddenGemsSection;
