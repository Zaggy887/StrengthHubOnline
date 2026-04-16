const Hero = () => {
  return (
    <div className="bg-black text-white">
      <div className="relative h-[40vh] sm:h-[50vh] lg:h-[55vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.45)" }}
        >
          <source src="/newhome.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/35" />
      </div>

      {/* Text content section */}
      <div className="bg-black px-6 pb-10 pt-8 sm:px-8 sm:pt-10 lg:px-10 lg:pt-12">
        <div className="mx-auto max-w-[860px] text-center">
          <h1 className="font-extrabold tracking-tight leading-tight">
            <span className="block text-white text-3xl sm:text-4xl lg:text-[48px]">
              Online Personal Training{" "}
              <span className="text-[#7A725E]">built for</span>
            </span>
            <span className="block text-[#7A725E] text-3xl sm:text-4xl lg:text-[48px] mt-1">
              Real Results
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-[700px] text-sm font-bold leading-6 text-white sm:text-base sm:leading-7">
            Expert coaches in body composition, delivering real results through{" "}
            <span className="text-[#7A725E] underline underline-offset-2">personalised 1-on-1 online coaching</span>.{" "}
            Train on your schedule with a{" "}
            <span className="text-[#7A725E] underline underline-offset-2">clear plan</span>,{" "}
            <span className="text-[#7A725E] underline underline-offset-2">accountability</span>, and{" "}
            <span className="text-[#7A725E] underline underline-offset-2">guidance</span> that keeps you moving forward.
          </p>

          <div className="mt-7">
            <a
              href="#contact"
              className="inline-flex min-w-[280px] items-center justify-center bg-[#2e3d30] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:opacity-90"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
