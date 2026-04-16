import { useEffect, useRef } from 'react';

const UniqueAbout = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      className="relative section py-10 overflow-hidden"
      ref={sectionRef}
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/19025671/pexels-photo-19025671.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/75" />

      <div className="container relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="fade-in text-4xl md:text-5xl font-extrabold text-white uppercase leading-tight mb-1 tracking-tight">
          WHAT <span className="text-[#7A725E]">WE'll GIVE YOU</span>
        </h2>
        <p className="fade-in text-white font-semibold text-sm uppercase tracking-widest mb-6">
          "If I give you a fish, you'll eat for a day. If I teach you how to fish, you'll eat for a lifetime."
        </p>

        <p className="fade-in text-white font-bold text-lg md:text-xl leading-relaxed mb-6">
          We focus on more than just giving you a program. We show you how to train properly, stay consistent, and build habits that you choose to stay.
        </p>

        <p className="fade-in text-white/90 font-semibold text-sm md:text-base leading-relaxed mb-4">
          You will be held accountable throughout the process, with regular check ins and updates to your program so you keep progressing.
        </p>

        <p className="fade-in text-white/80 font-semibold text-sm md:text-base leading-relaxed mb-4">
          Our coaches have real experience across powerlifting, bodybuilding, weight loss and overall lifestyle consulting, so you'll be taught from people who have genuinely been through it themselves.
        </p>

        <p className="fade-in text-white/70 italic text-sm md:text-base leading-relaxed">
          We want to help you build a balanced lifestyle where your biggest asset (your health) is optimised to support everything else you do, without taking away from your work, your social life, or your relationships.
        </p>
      </div>
    </section>
  );
};

export default UniqueAbout;