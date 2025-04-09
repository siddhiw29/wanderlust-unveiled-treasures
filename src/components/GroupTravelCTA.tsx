
import { Users } from 'lucide-react';
import { Button } from "@/components/ui/button";

const GroupTravelCTA = () => {
  return (
    <section className="py-16 bg-pattern-section">
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
  );
};

export default GroupTravelCTA;
