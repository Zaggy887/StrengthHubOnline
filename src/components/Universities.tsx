import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const Universities = () => {
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

  const universities = [
    { logo: '/Uni_Melbourne_LOGO', name: 'The University of Melbourne' },
    { logo: '/Monash_LOGO.png', name: 'Monash University' },
    { logo: '/Deakin_LOGO.png', name: 'Deakin University' },
    { logo: '/Swinburne_LOGO.png', name: 'Swinburne University' },
    { logo: '/RMIT_LOGO.png', name: 'RMIT University' },
  ];

  return (
    <section
      id="universities"
      className="section bg-[#111] text-white py-16"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="fade-in text-white text-3xl font-bold mb-4">University Talent</h2>
          <p className="fade-in text-white/60 text-lg">
            We regularly engage with students and societies from Melbourne's top universities, helping us connect with driven talent across business and commerce fields.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex md:hidden gap-6 overflow-x-auto overflow-y-hidden px-2 pb-2 snap-x snap-mandatory">
            {universities.map((uni, index) => (
              <div key={index} className="flex-shrink-0 snap-start w-40">
                <img
                  src={uni.logo}
                  alt={`${uni.name} logo`}
                  className={`${
                    uni.name === 'The University of Melbourne' ? 'h-24 mt-[-12px]' : 'h-20'
                  } w-full object-contain mx-auto transition-opacity duration-700 fade-in brightness-0 invert opacity-60`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="hidden md:flex flex-wrap justify-center gap-10">
            {universities.map((uni, index) => (
              <div key={index} className="w-[180px]">
                <img
                  src={uni.logo}
                  alt={`${uni.name} logo`}
                  className={`${
                    uni.name === 'The University of Melbourne' ? 'h-24 mt-[-12px]' : 'h-20'
                  } w-full object-contain mx-auto transition-opacity duration-700 fade-in brightness-0 invert opacity-60`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="fade-in flex items-start">
            <CheckCircle className="flex-shrink-0 w-6 h-6 text-[#7A725E] mr-3 mt-1" />
            <div>
              <h3 className="text-white text-xl font-semibold mb-2">Direct University Access</h3>
              <p className="text-white/60">
                We connect with student societies and attend university events to engage with top student talent.
              </p>
            </div>
          </div>

          <div className="fade-in flex items-start" style={{ transitionDelay: '0.2s' }}>
            <CheckCircle className="flex-shrink-0 w-6 h-6 text-[#7A725E] mr-3 mt-1" />
            <div>
              <h3 className="text-white text-xl font-semibold mb-2">Top Academic Performers</h3>
              <p className="text-white/60">
                We select students with strong academics, extracurricular involvement, and high growth potential.
              </p>
            </div>
          </div>

          <div className="fade-in flex items-start" style={{ transitionDelay: '0.4s' }}>
            <CheckCircle className="flex-shrink-0 w-6 h-6 text-[#7A725E] mr-3 mt-1" />
            <div>
              <h3 className="text-white text-xl font-semibold mb-2">Diverse Talent Pool</h3>
              <p className="text-white/60">
                Our influence spans across multiple universities, ensuring a diverse range of skills and perspectives.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-white/25">
          *We are not directly affiliated with any university.
        </p>
      </div>
    </section>
  );
};

export default Universities;
