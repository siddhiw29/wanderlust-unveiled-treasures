
import { useState } from 'react';
import { MapPin, Info, CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface HiddenGemCardProps {
  name: string;
  image: string;
  description: string;
  location: string;
}

const HiddenGemCard = ({ name, image, description, location }: HiddenGemCardProps) => {
  const [addedToItinerary, setAddedToItinerary] = useState(false);
  
  const addToItinerary = () => {
    setAddedToItinerary(true);
    toast({
      title: "Added to Itinerary",
      description: `${name} has been added to your travel plans`,
    });
  };

  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="text-muted-foreground text-xs flex items-center gap-1 mb-2">
          <MapPin className="h-3 w-3" />
          <span>{location}</span>
        </p>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{description}</p>
        
        <div className="flex justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="text-xs flex items-center gap-1">
                <Info className="h-3 w-3" />
                Learn More
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{name}</DialogTitle>
                <DialogDescription className="text-muted-foreground text-xs flex items-center gap-1 pt-1">
                  <MapPin className="h-3 w-3" />
                  <span>{location}</span>
                </DialogDescription>
              </DialogHeader>
              <div className="mt-2">
                <div className="mb-4 rounded-md overflow-hidden">
                  <img src={image} alt={name} className="w-full h-48 object-cover" />
                </div>
                <p className="text-sm text-muted-foreground">{description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold text-sm mb-2">Best Time to Visit</h4>
                  <p className="text-xs text-muted-foreground">October to March when the weather is pleasant and comfortable for exploration.</p>
                  
                  <h4 className="font-semibold text-sm mt-3 mb-2">How to Get There</h4>
                  <p className="text-xs text-muted-foreground">Available through local transportation or specialized tour guides that can provide deeper insights.</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button 
            variant={addedToItinerary ? "ghost" : "default"} 
            size="sm" 
            className="text-xs flex items-center gap-1"
            onClick={addToItinerary}
            disabled={addedToItinerary}
          >
            {addedToItinerary ? (
              <>
                <CheckCircle className="h-3 w-3" />
                Added
              </>
            ) : 'Add to Itinerary'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HiddenGemCard;
