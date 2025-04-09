
import { Button } from "@/components/ui/button";

interface RegionSelectorProps {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}

// Define region categories
const regions = [
  { id: 'north', name: 'North India' },
  { id: 'south', name: 'South India' },
  { id: 'east', name: 'East India' },
  { id: 'west', name: 'West India' },
  { id: 'central', name: 'Central India' },
  { id: 'northeast', name: 'Northeast India' }
];

const RegionSelector = ({ selectedRegion, setSelectedRegion }: RegionSelectorProps) => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-6">Explore India By Region</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {regions.map((region) => (
            <Button 
              key={region.id}
              variant={selectedRegion === region.id ? "default" : "outline"}
              className="w-full"
              onClick={() => setSelectedRegion(region.id)}
            >
              {region.name}
            </Button>
          ))}
          <Button 
            variant={selectedRegion === 'all' ? "default" : "outline"}
            className="w-full"
            onClick={() => setSelectedRegion('all')}
          >
            All India
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RegionSelector;
