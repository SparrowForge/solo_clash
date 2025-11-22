import HeroSection from "@/components/account/HeroSection";
import WhyChooseUsSection from "@/components/account/WhyChooseUsSection";
import ChallengeSection from "@/components/account/ChallengeSection";
import HowItWorksSection from "@/components/account/HowItWorksSection";
import SpinWinTradeSection from "@/components/account/SpinWinTradeSection";
import FaqSection from "@/components/account/FaqSection";
import Banner from "@/components/Banner";
import SubscriptionsSectionNew from "@/components/account/SubscriptionsSectionNew";
import TradePlatform from "@/components/account/TradePlatform";

export default async function Home() {
  return (
    <main className="text-white" style={{ backgroundColor: "#030303" }}>
      <HeroSection />
      <SubscriptionsSectionNew />
      <WhyChooseUsSection />
      <ChallengeSection />

      <TradePlatform />
      <HowItWorksSection />

      <SpinWinTradeSection />
      <FaqSection />
      <Banner page="account" title="Banner Title" />
    </main>
  );
}
