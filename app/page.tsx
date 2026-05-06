import Cover from "@/components/Cover";
import Hero from "@/components/Hero";
import ArRumSection from "@/components/ArRumSection";
import Profiles from "@/components/Profiles";
import WeddingDetails from "@/components/WeddingDetails";
import OurJourney from "@/components/OurJourney";
import Gallery from "@/components/Gallery";
import WeddingGift from "@/components/WeddingGift";
import Closing from "@/components/Closing";
import DressCode from "@/components/DressCode";
import LoveStory from "@/components/LoveStory";
import FloatingNav from "@/components/FloatingNav";

export default function Home() {
  return (
    <main className="invitation-wrapper flex flex-col w-full relative">
      <Cover />
      <Hero />
      <ArRumSection />
      <Profiles />
      <WeddingDetails />
      <LoveStory />
      <DressCode />
      <OurJourney />
      <Gallery />
      <WeddingGift />
      <Closing />
      <FloatingNav />
    </main>
  );
}
