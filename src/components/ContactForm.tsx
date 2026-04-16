import { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    goals: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));
    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const netlifyPayload = new URLSearchParams({
        'form-name': 'contact',
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        goals: formData.goals,
      }).toString();

      const [netlifyRes] = await Promise.all([
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: netlifyPayload,
        }),
        supabase.from('contact_submissions').insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          goals: formData.goals,
        }),
      ]);

      if (!netlifyRes.ok) throw new Error(`Netlify form error: ${netlifyRes.status}`);

      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', goals: '' });
    } catch (err) {
      console.error(err);
      setErrorMsg('Something went wrong. Please try again or contact us directly.');
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-[#111] border border-white/10 text-white placeholder-white/25 focus:ring-1 focus:ring-[#7A725E] focus:border-[#7A725E] outline-none transition-colors text-sm';

  return (
    <section id="contact" className="section bg-[#0a0a0a] relative" ref={sectionRef}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="fade-in mb-4 text-3xl font-bold text-white tracking-tight">
            <span className="text-[#7A725E]">Contact Us for a</span> Free Consultation
          </h2>
          <p className="fade-in text-white/50 text-sm leading-relaxed">
            Whether you're ready to transform your physique or just have a question, there's no hurt in just asking. We're here to help.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {status === 'success' ? (
            <div className="bg-[#111] border border-white/10 p-10 text-center animate-fade-in-up">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <svg className="w-20 h-20" viewBox="0 0 80 80">
                  <circle
                    cx="40" cy="40" r="36"
                    fill="none"
                    stroke="#2e3d30"
                    strokeWidth="4"
                  />
                  <circle
                    cx="40" cy="40" r="36"
                    fill="none"
                    stroke="#7A725E"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="226"
                    strokeDashoffset="0"
                    className="animate-circle-draw"
                    style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }}
                  />
                  <polyline
                    points="24,40 35,52 56,28"
                    fill="none"
                    stroke="#7A725E"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="50"
                    strokeDashoffset="0"
                    className="animate-check-draw"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">You're all set!</h3>
              <p className="text-white/50 text-sm mb-2">We've received your message.</p>
              <p className="text-white/30 text-xs mb-8">We'll be in touch with you shortly.</p>
              <button
                onClick={() => setStatus('idle')}
                className="bg-[#2e3d30] hover:opacity-90 text-white py-3 px-8 font-bold uppercase tracking-widest text-xs transition-opacity"
              >
                Done
              </button>
            </div>
          ) : (
            <form
              name="contact"
              onSubmit={handleSubmit}
              className="fade-in bg-[#111] border border-white/10 p-8"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>Don't fill this out: <input name="bot-field" /></label>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block mb-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
                    Full Name <span className="text-[#7A725E]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
                    Email Address <span className="text-[#7A725E]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
                    Phone Number <span className="text-[#7A725E]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="goals" className="block mb-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
                    Your Goals <span className="text-[#7A725E]">*</span>
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={inputClass}
                  />
                </div>
              </div>

              {status === 'error' && (
                <p className="mt-4 text-sm text-red-400">{errorMsg}</p>
              )}

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#2e3d30] hover:opacity-90 disabled:opacity-50 text-white py-4 px-6 font-bold uppercase tracking-widest text-sm transition-opacity flex items-center justify-center gap-3"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                      Sending...
                    </>
                  ) : (
                    "I'M READY"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
