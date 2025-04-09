
import { useState } from 'react';
import { Award, MessageCircle, ShoppingBag } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface ArtisanCardProps {
  name: string;
  image: string;
  portrait: string;
  description: string;
  craft: string;
  years: number;
}

const ArtisanCard = ({ 
  name, 
  image, 
  portrait, 
  description, 
  craft, 
  years 
}: ArtisanCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const handleContactClick = () => {
    toast({
      title: "Contact Request Sent",
      description: `${name} will respond to your inquiry soon`,
    });
  };
  
  const handleShopClick = () => {
    toast({
      title: "Shopping Section",
      description: `Browsing ${name}'s ${craft} collection`,
    });
  };

  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`${name}'s craft`} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <CardContent className="p-4 relative">
        <div className="absolute -top-8 left-4 w-16 h-16 rounded-full overflow-hidden border-4 border-white">
          <img src={portrait} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="pt-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg">{name}</h3>
            <Badge variant="outline" className="flex items-center gap-1">
              <Award className="h-3 w-3" />
              {years}+ years
            </Badge>
          </div>
          <Badge className="mb-2" variant="secondary">{craft}</Badge>
          <p className="text-sm text-muted-foreground mb-4">
            {showDetails ? description : `${description.substring(0, 100)}...`}
            <button 
              className="text-primary font-medium ml-1"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? 'Show less' : 'Read more'}
            </button>
          </p>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1"
              onClick={handleContactClick}
            >
              <MessageCircle className="h-4 w-4" />
              Contact Artisan
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              className="flex items-center gap-1"
              onClick={handleShopClick}
            >
              <ShoppingBag className="h-4 w-4" />
              Shop Crafts
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtisanCard;
