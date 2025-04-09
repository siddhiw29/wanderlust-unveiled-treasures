
import { Link } from 'react-router-dom';
import { Compass, Utensils, Palette } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CategoryFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto">Discover Incredible India</h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Explore India's rich cultural heritage through hidden gems, local cuisines, and traditional crafts
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm text-center card-hover">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Compass className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hidden Gems</h3>
            <p className="text-muted-foreground mb-4">
              Discover off-the-beaten-path locations across India that even locals treasure
            </p>
            <Button variant="outline" asChild>
              <Link to="/category/hidden-gems">Explore Hidden Gems</Link>
            </Button>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm text-center card-hover">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Local Cuisine</h3>
            <p className="text-muted-foreground mb-4">
              Taste authentic regional dishes that tell the story of India's diverse cultural heritage
            </p>
            <Button variant="outline" asChild>
              <Link to="/category/local-cuisine">Discover Flavors</Link>
            </Button>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm text-center card-hover">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Artisan Crafts</h3>
            <p className="text-muted-foreground mb-4">
              Meet skilled Indian craftspeople and shop unique handmade treasures
            </p>
            <Button variant="outline" asChild>
              <Link to="/category/traditional-crafts">Meet Artisans</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryFeatures;
