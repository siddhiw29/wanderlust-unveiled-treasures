
import { useState } from 'react';
import { ExternalLink, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

interface DestinationCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  country: string;
  featuredLabel?: string;
}

const DestinationCard = ({ 
  id, 
  name, 
  image, 
  description, 
  country, 
  featuredLabel 
}: DestinationCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: `${name} has been ${isFavorite ? "removed from" : "added to"} your favorites`,
    });
  };

  return (
    <Link to={`/destination/${id}`}>
      <Card className="overflow-hidden card-hover h-full group">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {featuredLabel && (
            <div className="absolute top-4 left-4 bg-secondary px-3 py-1 rounded-full text-white text-xs font-medium">
              {featuredLabel}
            </div>
          )}
          <button 
            className="absolute top-4 right-4 bg-white/80 p-2 rounded-full text-foreground hover:bg-white transition-colors"
            onClick={toggleFavorite}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-white/80 text-sm flex items-center gap-1">
              <span>{country}</span>
            </p>
          </div>
        </div>
        <CardContent className="p-4">
          <p className="text-muted-foreground text-sm line-clamp-3">{description}</p>
          <div className="mt-4 flex justify-between items-center">
            <Badge variant="outline" className="text-xs">Best in {new Date().getMonth() < 3 || new Date().getMonth() > 9 ? 'Winter' : 'Summer'}</Badge>
            <span className="flex items-center gap-1 text-primary text-sm font-medium">
              Explore
              <ExternalLink className="h-3 w-3" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DestinationCard;
