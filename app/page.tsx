import Hero from "@/components/Hero";
import GettingMarried from "@/components/GettingMarried";
import ArRumSection from "@/components/ArRumSection";
import Profiles from "@/components/Profiles";
import WeddingDetails from "@/components/WeddingDetails";
import LocationSection from "@/components/LocationSection";
import OurJourney from "@/components/OurJourney";
import Gallery from "@/components/Gallery";
import GalleryGrid from "@/components/GalleryGrid";
import WeddingGift from "@/components/WeddingGift";
import Closing from "@/components/Closing";
import DressCode from "@/components/DressCode";
import FloatingNav from "@/components/FloatingNav";

import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main className="invitation-wrapper flex flex-col w-full relative">
      <LoadingScreen />
      <Hero />
      <GettingMarried />
      <ArRumSection />
      <Profiles />
      <WeddingDetails />
      <LocationSection />
      <DressCode />
      <Gallery />
      <OurJourney />
      <GalleryGrid />
      <WeddingGift />
      <Closing />
      <FloatingNav />
    </main>
  );
}
