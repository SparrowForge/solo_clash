"use client";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import FeatureCard from "./WhyChooseUsCard";
import HomeButton from "../HomeButton";
import Heading from "../common/Heading";
import Image from "next/image";
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
    title: "Precision. Control. Freedom.",
    description: "Built for traders who demand more.",
    icon: <TrendingUp size={36} color="#F5A623" />,
    iconSrc: "/icons/slider/1.png",
    rotate: 0,
  },
  {
    id: 2,
    title: "No distractions. No noise.",
    description: "Just pure performance.",
    icon: <Antenna size={36} color="#F5A623" />,
    iconSrc: "/icons/slider/2.png",
    rotate: -2.5,
  },
  {
    id: 3,
    title: "Every parameter makes sense.",
    description: "Transparent, balanced, and fair, from day one.",
    icon: <SlidersHorizontal size={36} color="#F5A623" />,
    iconSrc: "/icons/slider/3.png",
    rotate: 0,
  },
  {
    id: 4,
    title: "Trade with clarity.",
    description: "Every rule exists to empower, not restrict.",
    icon: <Sprout size={36} color="#F5A623" />,
    iconSrc: "/icons/slider/4.png",
    rotate: -1.5,
  },
  {
    id: 5,
    title: "We don’t follow trends.",
    description: "We design what prop trading should feel like.",
    icon: <ChartNoAxesCombined size={36} color="#F5A623" />,
    iconSrc: "/icons/slider/5.png",
    rotate: -3,
  },
  {
    id: 6,
    title: "You focus on the charts.",
    description: "We handle everything else, from funding to payouts.",
    icon: <VolumeOff size={36} color="#F5A623" />,
    iconSrc: "/icons/slider/6.png",
    rotate: -4,
  },
  {
    id: 7,
    title: "Grow without limits",
    description: "The better you perform, the more we scale with you.",
    icon: <Crosshair size={36} color="#F5A623" />,
    iconSrc: "/icons/slider/7.png",
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
      className={`sticky top-20 mb-6 text-white rounded-2xl sm:rounded-3xl bg-cover bg-center w-full sm:w-[600px] md:w-[800px] lg:w-[1071px] h-[280px] sm:h-[300px] md:h-[320px] lg:h-[350px] p-6 sm:p-8 md:p-10 lg:p-12`}
      title={card.title}
    >
      <div
        className="absolute inset-0 rounded-2xl sm:rounded-3xl"
        style={{
          backgroundImage: "url('/slider_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />
      <div className="relative z-10">
        <div className="mb-3 sm:mb-4">
          <Image
            src={card.iconSrc}
            alt={card.title}
            width={100}
            height={100}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25"
          />
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-left">
          {card.title}
        </h2>
        <p className="text-sm sm:text-base text-gray-300 sm:text-gray-400 text-left">
          {card.description}
        </p>
      </div>
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
        <div className="w-full relative flex flex-col items-center" ref={ref}>
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
