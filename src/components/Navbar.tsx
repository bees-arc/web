import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Menu, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  onBookCallClick: () => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookCallClick, onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState<{ [key: string]: { x: number; y: number } }>({});

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setIsCompact(false);
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos(prev => ({ ...prev, [id]: { x, y } }));
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
        <nav
          className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between rounded-full px-4 py-2.5 md:px-6 md:py-3.5 border border-slate-900/10 shadow-lg shadow-slate-900/5 ${
            scrolled ? 'bg-white/85 backdrop-blur-xl shadow-slate-900/10 border-slate-900/10' : 'bg-white/90 backdrop-blur-md'
          } ${isCompact ? 'w-[280px] md:w-[320px]' : 'w-full max-w-5xl'}`}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/Nav Logo B.webp"
              alt="ThewebAgency Logo"
              className="w-36 h-8 md:w-40 md:h-9 rounded-xl object-contain shadow-md shadow-slate-900/5 group-hover:rotate-6 transition-transform"
            />
          </a>

          {/* Desktop Links (Hidden when compact scroll) */}
          <div
            className={`hidden md:flex items-center gap-1 transition-all duration-500 overflow-hidden ${
              isCompact ? 'max-w-0 opacity-0 pointer-events-none' : 'max-w-md opacity-100'
            }`}
          >
            {[
              { label: 'Stories', href: '#cases' },
              { label: 'Services', href: '#services' },
              { label: 'Stages', href: '#stages' },
              { label: 'Awards', href: '#awards' },
              { label: 'Reviews', href: '#testimonials' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-2">
            {/* Book a call button */}
            <button
              onClick={onBookCallClick}
              onMouseMove={e => handleMouseMove(e, 'book')}
              className={`explode-btn relative hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-xs font-bold transition-all duration-300 hover:text-white border border-slate-200/80 shadow-sm ${
                isCompact ? 'px-3 py-1.5 text-[11px]' : ''
              }`}
            >
              <div
                className="explode-circle bg-indigo-600"
                style={{
                  left: `${mousePos['book']?.x || 0}px`,
                  top: `${mousePos['book']?.y || 0}px`,
                }}
              />
              <Calendar className="w-3.5 h-3.5 relative z-10 text-indigo-600 group-hover:text-white transition-colors" />
              <span className="relative z-10">Book a Call</span>
            </button>

            {/* Main Contact button */}
            <button
              onClick={onContactClick}
              onMouseMove={e => handleMouseMove(e, 'contact')}
              className="explode-btn relative flex items-center gap-1.5 px-4 py-2 md:px-5 md:py-2 rounded-full bg-indigo-600 text-white text-xs md:text-sm font-bold shadow-md shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:scale-[1.02]"
            >
              <div
                className="explode-circle bg-slate-900"
                style={{
                  left: `${mousePos['contact']?.x || 0}px`,
                  top: `${mousePos['contact']?.y || 0}px`,
                }}
              />
              <span className="relative z-10">Contact</span>
              <ArrowUpRight className="w-4 h-4 relative z-10" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-20 right-4 left-4 bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex flex-col gap-3 mb-6">
            <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              Navigation
            </span>
            {[
              { label: 'Stories', href: '#cases' },
              { label: 'Services', href: '#services' },
              { label: 'Stages of Growth', href: '#stages' },
              { label: 'Awards & Honours', href: '#awards' },
              { label: 'What Clients Say', href: '#testimonials' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-slate-800 hover:text-indigo-600 transition-colors py-1 flex items-center justify-between"
              >
                {link.label}
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookCallClick();
              }}
              className="w-full py-3 rounded-2xl bg-slate-100 font-bold text-slate-800 text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
            >
              <Calendar className="w-4 h-4 text-indigo-600" />
              Book a Intro Call
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-3 rounded-2xl bg-indigo-600 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
            >
              Contact Us Directly
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
