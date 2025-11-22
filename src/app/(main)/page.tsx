import HeroSection from "@/components/account/HeroSection";
import WhyChooseUsSectionNew from "@/components/account/WhyChooseUsSectionNew";
import HowItWorksSection from "@/components/account/HowItWorksSection";
import SpinWinTradeSection from "@/components/account/SpinWinTradeSection";
import FaqSection from "@/components/account/FaqSection";
import Banner from "@/components/Banner";
import SubscriptionsSectionNew from "@/components/account/SubscriptionsSectionNew";
import TradePlatform from "@/components/account/TradePlatform";

export default async function Home() {
  return (
    <main
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#030303" }}
    >
      <HeroSection />
      <SubscriptionsSectionNew />
      <WhyChooseUsSectionNew />
      <TradePlatform />
      <HowItWorksSection />

      <SpinWinTradeSection />
      <FaqSection />
      <Banner page="account" title="Banner Title" />
    </main>
  );
}
