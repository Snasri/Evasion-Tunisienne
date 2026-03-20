import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { EspritSection } from "@/components/home/EspritSection";
import { SejoursSection } from "@/components/home/SejoursSection";
import { HebergementSection } from "@/components/home/HebergementSection";
import { ArtDeVivreSection } from "@/components/home/ArtDeVivreSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <EspritSection />
      <SejoursSection />
      <ArtDeVivreSection />
      <HebergementSection />
    </Layout>
  );
};

export default Index;
