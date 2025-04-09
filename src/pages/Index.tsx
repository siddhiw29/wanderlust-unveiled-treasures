
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Compass, Utensils, Palette } from 'lucide-react';
import { Button } from "@/components/ui/button";

import Navbar from "@/components/Navbar";
import SearchHero from "@/components/SearchHero";
import DestinationCard from "@/components/DestinationCard";
import HiddenGemCard from "@/components/HiddenGemCard";
import CuisineCard from "@/components/CuisineCard";
import ArtisanCard from "@/components/ArtisanCard";
import Footer from "@/components/Footer";

// Mock data for featured destinations
const featuredDestinations = [
  {
    id: 'kyoto',
    name: 'Kyoto',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Experience the ancient traditions and breathtaking temples of Japan\'s cultural heart.',
    country: 'Japan',
    featuredLabel: 'Popular'
  },
  {
    id: 'marrakech',
    name: 'Marrakech',
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    description: 'Explore the vibrant markets, stunning palaces, and rich Berber culture of this Moroccan gem.',
    country: 'Morocco',
    featuredLabel: 'Trending'
  },
  {
    id: 'cartagena',
    name: 'Cartagena',
    image: 'https://images.unsplash.com/photo-1593014109521-48ea09f22592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    description: 'Wander through colorful colonial streets and experience the unique blend of Caribbean and Colombian culture.',
    country: 'Colombia'
  },
  {
    id: 'santorini',
    name: 'Santorini',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description: 'Discover the iconic blue-domed churches and stunning sunsets of this breathtaking Greek island.',
    country: 'Greece'
  }
];

// Mock data for hidden gems
const hiddenGems = [
  {
    name: 'Kiyomizu-dera Trail',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'A lesser-known path leading to the famous temple, offering stunning views and peaceful moments away from the crowds.',
    location: 'Kyoto, Japan'
  },
  {
    name: 'Le Jardin Secret',
    image: 'https://images.unsplash.com/photo-1560095633-7e9c5b4c1e0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    description: 'A hidden oasis in the heart of the medina, featuring Islamic gardens and architecture away from the bustling souks.',
    location: 'Marrakech, Morocco'
  },
  {
    name: 'Getsemani Neighborhood',
    image: 'https://images.unsplash.com/photo-1616091278398-3bc5313ecb0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description: 'An emerging district with vibrant street art, local cafes, and authentic Colombian life just outside the walled city.',
    location: 'Cartagena, Colombia'
  }
];

// Mock data for cuisines
const localCuisines = [
  {
    name: 'Kaiseki Ryori',
    image: 'https://images.unsplash.com/photo-1577004686904-1a4f118bd274?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    description: 'Traditional multi-course Japanese dinner featuring seasonal ingredients prepared with exquisite attention to detail and presentation.',
    type: 'Fine Dining'
  },
  {
    name: 'Tagine',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description: 'Slow-cooked Moroccan stew named after the earthenware pot it\'s cooked in, typically combining meat, vegetables, fruits, and aromatic spices.',
    type: 'Street Food'
  }
];

// Mock data for artisans
const localArtisans = [
  {
    name: 'Hiroshi Tanaka',
    image: 'https://images.unsplash.com/photo-1619525518022-b8eec7a32dcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    portrait: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80',
    description: 'Third-generation master of the ancient art of Kyoto pottery, creating exquisite ceramics using traditional techniques passed down through generations.',
    craft: 'Ceramics',
    years: 30
  },
  {
    name: 'Fatima Zahra',
    image: 'https://images.unsplash.com/photo-1579873542903-b9064ba3c9ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    portrait: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    description: 'Skilled artisan specializing in traditional Moroccan textiles and rugs, using natural dyes and ancient Berber patterns in her stunning creations.',
    craft: 'Textiles',
    years: 25
  }
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      <Navbar />
      <main className="flex-1">
        <SearchHero />
        
        {/* Featured Destinations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="section-heading">Featured Destinations</h2>
              <Link to="/destinations" className="text-primary flex items-center gap-1 hover:underline text-sm">
                View all <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  id={destination.id}
                  name={destination.name}
                  image={destination.image}
                  description={destination.description}
                  country={destination.country}
                  featuredLabel={destination.featuredLabel}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-heading text-center mx-auto">Explore Local Treasures</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Discover authentic experiences through hidden gems, local cuisines, and traditional crafts
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center card-hover">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hidden Gems</h3>
                <p className="text-muted-foreground mb-4">
                  Discover off-the-beaten-path locations that even locals treasure
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
                  Taste authentic dishes that tell the story of local culture and traditions
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
                  Meet skilled craftspeople and shop unique handmade treasures
                </p>
                <Button variant="outline" asChild>
                  <Link to="/category/traditional-crafts">Meet Artisans</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Hidden Gems */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="section-heading">Hidden Gems</h2>
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
        
        {/* Local Cuisines */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="section-heading">Local Flavors</h2>
              <Link to="/category/local-cuisine" className="text-primary flex items-center gap-1 hover:underline text-sm">
                View all <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="space-y-6">
              {localCuisines.map((cuisine, index) => (
                <CuisineCard
                  key={index}
                  name={cuisine.name}
                  image={cuisine.image}
                  description={cuisine.description}
                  type={cuisine.type}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Artisans */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="section-heading">Meet the Artisans</h2>
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
        
        {/* Newsletter */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community of Travelers</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive travel tips, hidden gems, and special offers from local artisans
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 w-full rounded-l-md text-foreground focus:outline-none"
              />
              <Button className="rounded-l-none px-6">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
