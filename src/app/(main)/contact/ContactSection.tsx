import SvgButton from "@/components/buttons/svgButton";
import HomeButton from "@/components/HomeButton";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="justify-center text-center px-6 lg:px-20">
      <div className="flex z-10 max-w-4xl mx-auto pt-[217px] gap-[52px]">
        <div className="flex flex-1 flex-col items-start">
          <HomeButton>CONTACT</HomeButton>
          <h3
            className="pt-6"
            style={{
              fontWeight: 700,
              fontSize: "55px",
              lineHeight: "110%",
              letterSpacing: "0.005em",
              background:
                "linear-gradient(91.74deg, #FFFFFF 23.44%, #FB782D 73.27%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Get in Touch
          </h3>
          <p className="font-normal text-[18px] leading-[150%] text-gray-300">
            Everything you need to know about getting started
          </p>
          <div className="flex flex-col gap-8 w-full max-w-md text-[#B7B7B7] mt-[80px]">
            {/* Address */}
            <div className="flex gap-6">
              <Image
                src="/icons/contacts/address_1.png"
                alt="Address"
                width={75}
                height={75}
                className="w-[75px] h-[75px]"
              />
              <div className="text-sm leading-relaxed flex flex-1 flex-col justify-between items-start">
                <span>2118 Thornridge Cir. Syracuse,</span>
                <span>Connecticut 35624</span>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-6">
              <Image
                src="/icons/contacts/address_2.png"
                alt="Address"
                width={75}
                height={75}
                className="w-[75px] h-[75px]"
              />
              <div className="text-sm leading-relaxed flex flex-1 flex-col justify-between items-start">
                <span>Hours</span>
                <span>24/7 Support in 6 Languages and Live Chat</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-6">
              <Image
                src="/icons/contacts/address_3.png"
                alt="Address"
                width={75}
                height={75}
                className="w-[75px] h-[75px]"
              />
              <div className="text-sm leading-relaxed flex flex-1 flex-col justify-between items-start">
                <span>Email</span>
                <span>support@soloclash.com</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-[80px]">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/contacts/contact_youtube.png"
                alt="YouTube"
                width={40}
                height={40}
                className="w-[40px] h-[40px] hover:opacity-80 transition"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/contacts/contact_x.png"
                alt="Twitter"
                width={40}
                height={40}
                className="w-[40px] h-[40px] hover:opacity-80 transition"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/contacts/contact_ig.png"
                alt="Instagram"
                width={40}
                height={40}
                className="w-[40px] h-[40px] hover:opacity-80 transition"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/contacts/contact_linkedin.png"
                alt="LinkedIn"
                width={40}
                height={40}
                className="w-[40px] h-[40px] hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-1">
          <div
            className="max-w-lg mx-auto text-white pl-6 pr-6 pt-8 rounded-2xl"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Title */}
            <h2 className="text-2xl font-bold text-center mb-[50px]">
              Have Questions?
            </h2>

            <form className="space-y-6 text-left">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Your Name</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Your Email</label>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Number */}
              <div className="flex flex-col gap-2">
                <label className="text-sm">Your Number</label>
                <input
                  type="text"
                  placeholder="Your account number"
                  className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-sm">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full mt-[45px] py-3.5 rounded-full text-black font-medium relative
                     bg-gradient-to-r from-orange-500 to-orange-400
                     shadow-[0_4px_30px_rgba(255,100,0,0.6)]
                     hover:shadow-[0_4px_40px_rgba(255,120,0,0.8)]
                     transition"
              >
                Submit →
              </button>
              <SvgButton label="xt →" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
