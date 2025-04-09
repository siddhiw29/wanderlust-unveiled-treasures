
import { useState } from 'react';
import { Calendar as CalendarIcon, Users, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";

const TravelPlannerWidget = () => {
  const [date, setDate] = useState<Date>();
  const [destination, setDestination] = useState('');
  const [travelers, setTravelers] = useState('2');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send this data to the backend
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {showSuccess ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Plan Submitted!</h3>
          <p className="text-muted-foreground">
            We'll send you a personalized itinerary for your trip to {destination} soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-semibold mb-4">Plan Your Indian Adventure</h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="destination">Where in India?</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  id="destination"
                  placeholder="Enter a destination" 
                  className="pl-10"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>When do you plan to visit?</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="travelers">Number of travelers</Label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  id="travelers"
                  type="number" 
                  min="1" 
                  max="15"
                  className="pl-10"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          
          <Button className="w-full mt-6">Get Custom Itinerary</Button>
        </form>
      )}
    </div>
  );
};

export default TravelPlannerWidget;
