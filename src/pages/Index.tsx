import { HeroSection } from "@/components/HeroSection";
import { ValueBreakdown } from "@/components/ValueBreakdown";
import { MobileCarousel } from "@/components/MobileCarousel";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { StickyHeader } from "@/components/StickyHeader";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <ValueBreakdown />
      <MobileCarousel />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
};

export default Index;
