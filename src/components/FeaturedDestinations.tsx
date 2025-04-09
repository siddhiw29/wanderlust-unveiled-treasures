
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import DestinationCard from "@/components/DestinationCard";

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

const FeaturedDestinations = () => {
  return (
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
  );
};

export default FeaturedDestinations;
