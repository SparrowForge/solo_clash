"use client";

import SvgButton2 from "../buttons/svgButton2";

export default function ChallengeSection() {
  return (
    <section
      className="justify-center text-center px-4 sm:px-6 lg:px-20 py-10 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6 max-w-4xl mx-auto">
        <h2
          className="font-inter font-bold text-white"
          style={{
            width: "587px",
            height: "44px",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "40px",
            lineHeight: "110%",
            textAlign: "center",
            letterSpacing: "0.005em",
          }}
        >
          This is more than a challenge
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl">
          It's a platform built for your potential.
        </p>
        <div>
          <SvgButton2
            label="start trading"
            fullWidth
            iconSrc="/arrow_right.png"
          />
        </div>
      </div>
    </section>
  );
}
