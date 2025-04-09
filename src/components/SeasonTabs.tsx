
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "lucide-react";

interface SeasonTabsProps {
  currentSeason: string;
}

// Define season categories
const seasons = [
  { id: 'winter', name: 'Winter (Oct-Feb)' },
  { id: 'summer', name: 'Summer (Mar-Jun)' },
  { id: 'monsoon', name: 'Monsoon (Jul-Sep)' }
];

const SeasonTabs = ({ currentSeason }: SeasonTabsProps) => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-6">Best Time to Visit</h2>
        <Tabs defaultValue={currentSeason} className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            {seasons.map((season) => (
              <TabsTrigger key={season.id} value={season.id}>{season.name}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="winter" className="p-4 bg-white rounded-md mt-2">
            <h3 className="font-bold text-lg mb-2">Winter in India (October-February)</h3>
            <p className="mb-4">Perfect for exploring the deserts of Rajasthan, beaches of Goa, and wildlife sanctuaries. The pleasant weather makes it ideal for sightseeing across most of India.</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Peak tourist season with numerous festivals like Diwali and Christmas</span>
            </div>
          </TabsContent>
          <TabsContent value="summer" className="p-4 bg-white rounded-md mt-2">
            <h3 className="font-bold text-lg mb-2">Summer in India (March-June)</h3>
            <p className="mb-4">Ideal for exploring the Himalayan regions like Ladakh, Himachal Pradesh, and hill stations such as Darjeeling and Ooty, which offer respite from the heat.</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Great for mountain adventures and cultural festivals in the hills</span>
            </div>
          </TabsContent>
          <TabsContent value="monsoon" className="p-4 bg-white rounded-md mt-2">
            <h3 className="font-bold text-lg mb-2">Monsoon in India (July-September)</h3>
            <p className="mb-4">The perfect time to witness lush green landscapes, especially in Kerala, Western Ghats, and Northeast India. Enjoy the rain-washed beauty and fewer tourists.</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Experience verdant scenery and special monsoon activities</span>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SeasonTabs;
