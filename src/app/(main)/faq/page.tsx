import WhyChooseProgram from "@/components/affiliates/WhyChoosePrograms";

import HowItWorksAffiliates from "../../../components/affiliates/HowItWorksAffiliates";

import Banner from "../../../components/Banner";

import TiredRewards from "@/components/affiliates/TiredRewards";
import CommissionSection from "@/components/affiliates/CommissionSection";
import FaqHeroSection from "./FaqHeroSection";

import FaqPageFaq from "@/components/faq/FaqPageFaq";

export const metadata = {
  title: "Faq | Clash Shop",
  description:
    "Read the official rules and guidelines before participating in Clash Shop challenges.",
};

export default function FaqPage() {
  return (
    <main
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#030303" }}
    >
      <FaqHeroSection />

      <FaqPageFaq />

      <Banner
        page="clash-shop"
        bannerIconPath="/icons/spins/shop_banner_icon.png"
        title="Want a guaranteed entry to the next tournament?"
        description="Redeem a free tournament ticket now and secure your spot in our weekly trading competition.By proceeding, you confirm that you have read, understood, and agree to abide by all trading rules and policies outlined above."
      />
    </main>
  );
}
