export default function FaqHeroSection() {
  return (
    <section className="justify-center text-center px-6 lg:px-20">
      <div className="relative z-10 max-w-4xl mx-auto pt-[217px]">
        <p
          className="text-center"
          style={{
            fontWeight: 700,
            fontSize: "55px",
            lineHeight: "110%",
            textAlign: "center",
            letterSpacing: "0.005em",
            background:
              "linear-gradient(91.74deg, #FFFFFF 23.44%, #FB782D 73.27%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Frequently Asked Questions
        </p>
        <p className="mt-9 max-w-3xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed w-[667px">
          Everything you need to know about getting started
        </p>
      </div>
    </section>
  );
}
