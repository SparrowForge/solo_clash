// app/rules/page.tsx (Next.js 13+ App Router)

import FeaturesSection from "../../../components/FeaturesSection";
import HeroSection from "../../../components/clash-shop/HeroSection";
import SpinDetailsSection from "../../../components/clash-shop/SpinDetailsSection";
import HowItWorks from "../../../components/HowItWorks";
import Subscriptions from "../../../components/Subscriptions";
import SpinWinTrade from "../../../components/SpinWinTrade";
import Faq from "../../../components/Faq";
import Banner from "../../../components/Banner";
import RulesSection from "@/components/rules/RulesSection";
import HowToEarnCoins from "@/components/clash-shop/HowToEarnCoins";

export const metadata = {
  title: "Rules & Guidelines | Clash Shop",
  description:
    "Read the official rules and guidelines before participating in Clash Shop challenges.",
};

export default function RulesPage() {
  return (
    <main
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#030303" }}
    >
      <HeroSection />
      <SpinDetailsSection />
      <HowToEarnCoins />

      <Banner
        page="clash-shop"
        bannerIconPath="/icons/spins/shop_banner_icon.png"
        title="Want a guaranteed entry to the next tournament?"
        description="Redeem a free tournament ticket now and secure your spot in our weekly trading competition.By proceeding, you confirm that you have read, understood, and agree to abide by all trading rules and policies outlined above."
      />
    </main>
  );
}
