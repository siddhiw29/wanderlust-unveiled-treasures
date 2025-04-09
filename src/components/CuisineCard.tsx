
import { useState } from 'react';
import { Utensils, ThumbsUp, Share2 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface CuisineCardProps {
  name: string;
  image: string;
  description: string;
  type: string;
}

const CuisineCard = ({ name, image, description, type }: CuisineCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 50) + 5);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
      toast({
        title: "Thanks for your appreciation!",
        description: `You liked ${name}`,
      });
    }
    setLiked(!liked);
  };

  const handleShare = () => {
    toast({
      title: "Share this cuisine",
      description: `${name} has been copied to clipboard`,
    });
    // In a real app, we would actually copy to clipboard or open share dialog
  };

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
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`flex items-center gap-1 ${liked ? 'text-primary' : ''}`}
              onClick={handleLike}
            >
              <ThumbsUp className="h-4 w-4" />
              <span>{likes}</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" size="sm" className="text-xs">
            Find Restaurants
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CuisineCard;
