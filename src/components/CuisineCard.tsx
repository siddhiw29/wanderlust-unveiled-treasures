
import { Utensils } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface CuisineCardProps {
  name: string;
  image: string;
  description: string;
  type: string;
}

const CuisineCard = ({ name, image, description, type }: CuisineCardProps) => {
  return (
    <Card className="overflow-hidden card-hover flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <CardContent className="p-4 flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-lg">{name}</h3>
          <span className="bg-muted px-2 py-1 rounded-full text-xs text-muted-foreground flex items-center gap-1">
            <Utensils className="h-3 w-3" />
            {type}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default CuisineCard;
