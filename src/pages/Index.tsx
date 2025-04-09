
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import SearchHero from "@/components/SearchHero";
import Footer from "@/components/Footer";
import RegionSelector from "@/components/RegionSelector";
import SeasonTabs from "@/components/SeasonTabs";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import CategoryFeatures from "@/components/CategoryFeatures";
import HiddenGemsSection from "@/components/HiddenGemsSection";
import CuisineSection from "@/components/CuisineSection";
import ArtisanSection from "@/components/ArtisanSection";
import GroupTravelCTA from "@/components/GroupTravelCTA";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [currentSeason, setCurrentSeason] = useState(() => {
    const month = new Date().getMonth();
    // Determine current season based on month
    if (month >= 2 && month <= 5) return 'summer';
    if (month >= 6 && month <= 8) return 'monsoon';
    return 'winter';
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      <Navbar />
      <main className="flex-1">
        <SearchHero />
        <RegionSelector selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
        <SeasonTabs currentSeason={currentSeason} />
        <FeaturedDestinations />
        <CategoryFeatures />
        <HiddenGemsSection />
        <CuisineSection />
        <ArtisanSection />
        <GroupTravelCTA />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
