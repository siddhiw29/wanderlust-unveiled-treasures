
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ArtisanCard from "@/components/ArtisanCard";

// Mock data for artisans
const localArtisans = [
  {
    name: 'Ramesh Sharma',
    image: 'https://images.unsplash.com/photo-1576595580361-90a855b84b20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    portrait: 'https://images.unsplash.com/photo-1621695981330-26a0ff06f33f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80',
    description: 'Master craftsman specializing in the ancient art of Banarasi silk weaving, creating intricate patterns that have been passed down through generations.',
    craft: 'Silk Weaving',
    years: 35
  },
  {
    name: 'Lakshmi Devi',
    image: 'https://images.unsplash.com/photo-1605188040921-c95e94a2c03d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    portrait: 'https://images.unsplash.com/photo-1604077971411-37dec2daa794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    description: 'Skilled artisan creating vibrant Madhubani paintings that depict ancient stories and folklore using natural dyes and traditional techniques.',
    craft: 'Madhubani Art',
    years: 28
  }
];

const ArtisanSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="section-heading">Meet Indian Artisans</h2>
          <Link to="/category/artisans" className="text-primary flex items-center gap-1 hover:underline text-sm">
            View all <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {localArtisans.map((artisan, index) => (
            <ArtisanCard
              key={index}
              name={artisan.name}
              image={artisan.image}
              portrait={artisan.portrait}
              description={artisan.description}
              craft={artisan.craft}
              years={artisan.years}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtisanSection;
