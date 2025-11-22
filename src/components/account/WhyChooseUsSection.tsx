"use client";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import FeatureCard from "./WhyChooseUsCard";
import HomeButton from "../HomeButton";
import Heading from "../common/Heading";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import {
  Antenna,
  ChartNoAxesCombined,
  Crosshair,
  SlidersHorizontal,
  Sprout,
  TrendingUp,
  VolumeOff,
} from "lucide-react";

const cards = [
  {
    id: 1,
    title: "We don’t follow trends",
    description: "We design what proper trading should feel like",
    icon: <TrendingUp size={36} color="#F5A623" />,
    rotate: 0,
  },
  {
    id: 2,
    title: "Trade with clarity",
    description: "Every rule exists to empower, not restrict",
    icon: <Antenna size={36} color="#F5A623" />,
    rotate: -2.5,
  },
  {
    id: 3,
    title: "Every parameter matters",
    description: "Transparent, balanced, and fair from day one",
    icon: <SlidersHorizontal size={36} color="#F5A623" />,
    rotate: 0,
  },
  {
    id: 4,
    title: "Grow without limits",
    description: "The better you perform, the more we scale with you",
    icon: <Sprout size={36} color="#F5A623" />,
    rotate: -1.5,
  },
  {
    id: 5,
    title: "Your focus on the charts",
    description: "We handle everything else from funding to payouts",
    icon: <ChartNoAxesCombined size={36} color="#F5A623" />,
    rotate: -3,
  },
  {
    id: 6,
    title: "No distractions, No noise",
    description: "Just pure performance",
    icon: <VolumeOff size={36} color="#F5A623" />,
    rotate: -4,
  },
  {
    id: 7,
    title: "Precision. Control. Freedom",
    description: "Built for traders who demand more",
    icon: <Crosshair size={36} color="#F5A623" />,
    rotate: 0,
  },
];

function Card({
  card,
  index,
  scrollYProgress,
}: {
  card: (typeof cards)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.95 + index * 0.01, 1]);

  const y = useTransform(scrollYProgress, [0, 1], [index * 85, 0]);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2 + index * 0.05, 0.4 + index * 0.05],
    [0, 1, 1]
  );

  return (
    <motion.div
      style={{ scale, y, opacity, rotate: card.rotate }}
      className={`sticky top-20 mb-6 text-white bg-gradient-to-tr from-black via-gray-900 to-amber-900/40 rounded-2xl shadow-lg p-6 border border-gray-500`}
    >
      <div className="mb-4">{card.icon}</div>
      <h2 className="text-xl font-bold mb-2">{card.title}</h2>
      <p className="text-gray-400">{card.description}</p>
    </motion.div>
  );
}

export default function StackingStickyCards() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const t = useTranslations();
  const router = useRouter();
  return (
    <section
      className="justify-center text-center px-4 sm:px-6 lg:px-20 py-10 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6">
        {/* Top Badge */}
        <HomeButton onClick={() => router.push("/account")}>
          {t("accountPage.featureSection.badge")}
        </HomeButton>

        {/* Heading */}
        <Heading>
          {" "}
          {t("accountPage.featureSection.heading1")}{" "}
          <br className="hidden md:block" />
          {t("accountPage.featureSection.heading2")}
        </Heading>
        <div className="w-full max-w-lg relative" ref={ref}>
          {cards.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
