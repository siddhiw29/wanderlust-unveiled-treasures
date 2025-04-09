
import { Award } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtisanCard;
