
import { MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface HiddenGemCardProps {
  name: string;
  image: string;
  description: string;
  location: string;
}

const HiddenGemCard = ({ name, image, description, location }: HiddenGemCardProps) => {
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
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  );
};

export default HiddenGemCard;
