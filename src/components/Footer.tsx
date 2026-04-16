import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="flex flex-col leading-none">
              <span className="text-white font-black uppercase tracking-tight text-2xl">STRENGTH</span>
              <span className="text-white font-black italic uppercase tracking-tight text-xl -mt-1">
                HUB<sup className="text-white text-xs font-bold not-italic align-super ml-0.5">ONLINE</sup>
              </span>
            </div>
            <p className="mt-2 text-white/50 max-w-md">
              Expert online personal training for clients worldwide, built around real results.
            </p>
          </div>

          <div className="text-center md:text-right space-y-4">
            <h4 className="text-white/70 font-semibold mb-4">Connect with Us</h4>
            <div className="flex flex-col items-center md:items-end space-y-4">
              <a
                href="mailto:contact@strengthhubonline.com"
                className="flex items-center text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                contact@strengthhubonline.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/30">
          © {new Date().getFullYear()} StrengthHubOnline. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
