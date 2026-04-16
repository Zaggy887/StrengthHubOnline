import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      let maxVisible = 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        if (section.id === 'pricing') {
          const referralElement = document.querySelector('#referral');
          if (referralElement) {
            const referralRect = referralElement.getBoundingClientRect();
            if (referralRect.top < window.innerHeight / 2 && referralRect.bottom > window.innerHeight / 2) {
              current = 'referral';
              maxVisible = Infinity;
              return;
            }
          }
        }

        if (visible > maxVisible) {
          maxVisible = visible;
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const el = id === 'referral'
      ? document.querySelector('#referral')
      : document.getElementById(id);

    if (!el) return;

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      setIsMenuOpen(false);
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 350);
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navLink = (id: string, label: string, mobile = false) => {
    const base = mobile
      ? "text-white text-lg font-light hover:text-[#5BB6FF] transition-colors"
      : `transition-colors ${
          activeSection === id
            ? "text-[#5BB6FF] font-medium"
            : "text-white hover:text-[#5BB6FF]"
        }`;

    return (
      <button onClick={() => scrollToSection(id)} className={base}>
        {label}
      </button>
    );
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/" className="flex flex-col leading-none">
          <span className="text-white font-black uppercase tracking-tight text-2xl sm:text-3xl">
            STRENGTH
          </span>
          <span className="text-white font-black italic uppercase tracking-tight text-xl sm:text-2xl -mt-1">
            HUB
            <sup className="text-white text-xs font-bold not-italic align-super ml-0.5">
              ONLINE
            </sup>
          </span>
        </a>


        {/* Desktop Contact Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block px-5 py-2 rounded-full text-white/90 font-medium
                     border border-white/30
                     bg-white/10 backdrop-blur-md
                     hover:bg-white/20 hover:border-white/50
                     transition-all duration-300"
        >
          Contact Us
        </button>

        {/* Mobile Contact Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="md:hidden px-5 py-2 rounded-full text-white/90 font-medium
                     border border-white/30
                     bg-white/10 backdrop-blur-md
                     hover:bg-white/20 hover:border-white/50
                     transition-all duration-300"
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-lg transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-[#48A3EB] transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Links */}
        <div className="h-full flex flex-col items-center justify-center space-y-6 px-6 animate-mobile-nav">
          {navLink("about", "About", true)}
          {navLink("process", "Process", true)}
          {navLink("universities", "Universities", true)}
          {navLink("articles", "Insights", true)}
          {navLink("pricing", "Pricing", true)}
          {navLink("referral", "Referral", true)}

          {/* Mobile CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-4 px-6 py-2 rounded-full text-white/90 font-medium 
                       border border-white/30 
                       bg-white/10 backdrop-blur-md 
                       hover:bg-white/20 hover:border-white/50 
                       transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;