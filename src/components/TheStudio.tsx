const offerings = [
  "100% online personalised training built around your goals, experience, and lifestyle, with the flexibility to adapt to travel, changing routines, or uncertainty",
  "Ongoing coaching and accountability through weekly check-ins, progress tracking, and structured goal setting to keep you moving forward",
  "24/7 support with fast responses, plus flexible consultations that work around your schedule and can change week to week",
  "Detailed technique feedback and exercise guidance to maximise results while reducing risk of injury",
  "Practical nutrition support focused on sustainable habits, not restrictive dieting",
  "An education driven approach so you understand what you are doing and build long term confidence in your fitness",
];

const bonusOfferings = [
  "Personalised habit and routine planning to create consistency outside of training",
  "Access to a private client hub with workouts, guides, and resources",
];

const TheStudio = () => {
  return (
    <section className="bg-[#0a0a0a] text-white pb-10 sm:pb-14">
      <div className="w-full overflow-hidden mb-8">
        <img
          src="/Battleropes.webp"
          alt="How to"
          className="w-full object-cover h-[150px] sm:h-[260px] md:h-[320px]" style={{ objectPosition: '50% 20%' }}
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black mb-5 tracking-tight">
          <span className="text-white">OUR OFFER TO </span>
          <span className="text-[#7A725E]">YOU</span>
        </h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* MAIN OFFERINGS */}
          <ul className="mb-10 space-y-6 md:flex md:flex-col md:items-center">
            {offerings.map((item, i) => (
              <li key={i} className="flex items-start gap-4 group w-full max-w-xl">

                {/* Number */}
                <div className="flex-shrink-0 w-8">
                  <span className="text-[#7A725E] text-sm font-semibold tabular-nums tracking-widest">
                    {`0${i + 1}`}
                  </span>
                </div>

                {/* Divider line */}
                <div className="w-[1px] self-stretch bg-white/10 group-hover:bg-[#7A725E]/40 transition-colors" />

                {/* Text */}
                <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          {/* BONUS */}
          <p className="text-[#7A725E] font-bold tracking-[0.25em] text-xs uppercase mb-4 md:text-center">
            Bonus
          </p>

          <ul className="mb-10 space-y-4">
            {bonusOfferings.map((item, i) => (
              <li key={i} className="flex items-start gap-3 md:justify-center">
                <span className="mt-[7px] w-2 h-2 rounded-full bg-[#7A725E] flex-shrink-0" />
                <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#contact"
              className="inline-block rounded-full px-8 sm:px-10 py-3.5 bg-[#2e3d30] text-white font-bold tracking-[0.18em] text-xs sm:text-sm uppercase hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheStudio;