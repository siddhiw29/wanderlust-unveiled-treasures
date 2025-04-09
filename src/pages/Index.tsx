
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Compass, Utensils, Palette, Globe, Calendar, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
    id: 'varanasi',
    name: 'Varanasi',
    image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Experience the spiritual heart of India on the banks of the sacred Ganges river, with ancient temples and vibrant ghats.',
    country: 'Uttar Pradesh, India',
    featuredLabel: 'Popular'
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    image: 'https://images.unsplash.com/photo-1599661046289-e3a4e5a23688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Discover the Pink City with its majestic palaces, vibrant bazaars, and rich Rajasthani culture and history.',
    country: 'Rajasthan, India',
    featuredLabel: 'Trending'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Explore the serene backwaters, lush tea plantations, and pristine beaches of God\'s Own Country.',
    country: 'Kerala, India'
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    image: 'https://images.unsplash.com/photo-1606294836017-088a2d8b9e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Adventure through the breathtaking high-altitude desert landscapes, ancient monasteries, and unique Ladakhi culture.',
    country: 'Ladakh, India'
  }
];

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

// Mock data for cuisines
const localCuisines = [
  {
    name: 'Hyderabadi Biryani',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    description: 'A royal dish with aromatic Basmati rice layered with marinated meat, herbs, and spices, slow-cooked to perfection in the distinctive dum style.',
    type: 'Main Course'
  },
  {
    name: 'Chole Bhature',
    image: 'https://images.unsplash.com/photo-1626777553635-be344d710a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description: 'A popular Punjabi dish featuring spicy chickpea curry served with deep-fried bread, accompanied by pickles and onions.',
    type: 'Street Food'
  }
];

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

// Define region categories
const regions = [
  { id: 'north', name: 'North India' },
  { id: 'south', name: 'South India' },
  { id: 'east', name: 'East India' },
  { id: 'west', name: 'West India' },
  { id: 'central', name: 'Central India' },
  { id: 'northeast', name: 'Northeast India' }
];

// Define season categories
const seasons = [
  { id: 'winter', name: 'Winter (Oct-Feb)' },
  { id: 'summer', name: 'Summer (Mar-Jun)' },
  { id: 'monsoon', name: 'Monsoon (Jul-Sep)' }
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [currentSeason, setCurrentSeason] = useState(() => {
    const month = new Date().getMonth();
    // Determine current season based on month
    if (month >= 2 && month <= 5) return 'summer';
    if (month >= 6 && month <= 8) return 'monsoon';
    return 'winter';
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      <Navbar />
      <main className="flex-1">
        <SearchHero />
        
        {/* Interactive Region Selector */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-heading text-center mb-6">Explore India By Region</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {regions.map((region) => (
                <Button 
                  key={region.id}
                  variant={selectedRegion === region.id ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setSelectedRegion(region.id)}
                >
                  {region.name}
                </Button>
              ))}
              <Button 
                variant={selectedRegion === 'all' ? "default" : "outline"}
                className="w-full"
                onClick={() => setSelectedRegion('all')}
              >
                All India
              </Button>
            </div>
          </div>
        </section>
        
        {/* Best Time to Visit Tabs */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-heading text-center mb-6">Best Time to Visit</h2>
            <Tabs defaultValue={currentSeason} className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                {seasons.map((season) => (
                  <TabsTrigger key={season.id} value={season.id}>{season.name}</TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value="winter" className="p-4 bg-white rounded-md mt-2">
                <h3 className="font-bold text-lg mb-2">Winter in India (October-February)</h3>
                <p className="mb-4">Perfect for exploring the deserts of Rajasthan, beaches of Goa, and wildlife sanctuaries. The pleasant weather makes it ideal for sightseeing across most of India.</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Peak tourist season with numerous festivals like Diwali and Christmas</span>
                </div>
              </TabsContent>
              <TabsContent value="summer" className="p-4 bg-white rounded-md mt-2">
                <h3 className="font-bold text-lg mb-2">Summer in India (March-June)</h3>
                <p className="mb-4">Ideal for exploring the Himalayan regions like Ladakh, Himachal Pradesh, and hill stations such as Darjeeling and Ooty, which offer respite from the heat.</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Great for mountain adventures and cultural festivals in the hills</span>
                </div>
              </TabsContent>
              <TabsContent value="monsoon" className="p-4 bg-white rounded-md mt-2">
                <h3 className="font-bold text-lg mb-2">Monsoon in India (July-September)</h3>
                <p className="mb-4">The perfect time to witness lush green landscapes, especially in Kerala, Western Ghats, and Northeast India. Enjoy the rain-washed beauty and fewer tourists.</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Experience verdant scenery and special monsoon activities</span>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Featured Destinations Carousel */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="section-heading">Featured Destinations</h2>
              <Link to="/destinations" className="text-primary flex items-center gap-1 hover:underline text-sm">
                View all <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            
            <Carousel className="w-full">
              <CarouselContent>
                {featuredDestinations.map((destination) => (
                  <CarouselItem key={destination.id} className="md:basis-1/2 lg:basis-1/4">
                    <DestinationCard
                      id={destination.id}
                      name={destination.name}
                      image={destination.image}
                      description={destination.description}
                      country={destination.country}
                      featuredLabel={destination.featuredLabel}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="mr-2" />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </section>
        
        {/* Categories */}
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
        
        {/* Hidden Gems */}
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
        
        {/* Local Cuisines */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="section-heading">Indian Culinary Delights</h2>
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
        
        {/* Travel with Friends */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Planning a Group Trip?</h2>
              <p className="mb-6">Traveling with friends or family? Get personalized itineraries and special group discounts!</p>
              <Button size="lg">Plan a Group Adventure</Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community of India Travelers</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive travel tips, hidden gems, and special offers from local Indian artisans
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
