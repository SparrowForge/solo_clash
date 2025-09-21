// app/page.js (Next.js 13+ App Router)
// or pages/index.js (Pages Router)

import FeaturesSection from "../../components/FeaturesSection";
import HeroSection from "../../components/HeroSection";
import HowItWorks from "../../components/HowItWorks";
import Subscriptions from "../../components/Subscriptions";
import SpinWinTrade from "../../components/SpinWinTrade";
import Faq from "../../components/Faq";
import Banner from "../../components/Banner";

export default function Home() {
  return (
    <main
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#030303" }}
    >
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Subscriptions />
      <SpinWinTrade />
      <Faq />
      <Banner page="account" title="Ready to trade real capital?" />
    </main>
  );
}
