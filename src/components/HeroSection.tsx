import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Star, Award, TrendingUp, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface HeroSectionProps {
  onBookCallClick: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookCallClick, onContactClick }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Dynamic Scroll Scaling State (Matches Outcrowd's JS formula)
  const [videoWidth, setVideoWidth] = useState<number>(60); // Percentage 60% -> 100%
  const [borderRadius, setBorderRadius] = useState<number>(1.7); // vw (1.7vw -> 0vw)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const sectionHeight = heroRef.current.offsetHeight || 1000;
      const scrollPosition = window.scrollY;
      const scrollFraction = scrollPosition / sectionHeight;

      const startSize = window.innerWidth >= 1920 ? 60 : 54;
      const endSize = 100;

      if (scrollFraction <= 0.15) {
        setVideoWidth(startSize);
        setBorderRadius(1.7);
      } else if (scrollFraction > 0.15 && scrollFraction <= 0.38) {
        const progress = (scrollFraction - 0.15) / 0.23;
        const newSize = startSize + (endSize - startSize) * progress;
        const newRadius = 1.7 - 1.7 * progress;
        setVideoWidth(Math.min(100, Math.max(startSize, newSize)));
        setBorderRadius(Math.max(0, newRadius));
      } else {
        setVideoWidth(100);
        setBorderRadius(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Floating Badges */}
        <div className="hidden lg:flex absolute top-12 left-4 animate-float-slow items-center gap-3 bg-white/90 backdrop-blur-md p-3 px-4 rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-900/5 z-20 hover:scale-105 transition-transform cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
            <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-1 text-slate-900 font-bold text-xs">
              5.0 Clutch Rating
              <span className="text-[10px] text-indigo-600 font-semibold">★★★★★</span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">Based on verified client reviews</p>
          </div>
        </div>

        <div className="hidden lg:flex absolute top-16 right-4 animate-float-reverse items-center gap-3 bg-white/90 backdrop-blur-md p-3 px-4 rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-900/5 z-20 hover:scale-105 transition-transform cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-slate-900 font-bold text-xs flex items-center gap-1.5">
              <span>Microsoft Imagine Cup Winner</span>
              <span className="px-1.5 py-0.5 rounded bg-purple-100 text-purple-700 text-[9px] font-bold">1ST PLACE</span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">South East Asia Champions</p>
          </div>
        </div>

        {/* Tag Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-sm hover:border-indigo-300 transition-colors group cursor-default">
            <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-xs font-bold tracking-wide uppercase text-slate-700">
              Sri Lanka · Global Impact
            </span>
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 group-hover:rotate-12 transition-transform" />
          </div>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
            Building digital<br />experiences{' '}
            <span className="font-serif italic font-normal text-indigo-600 relative inline-block">
              that matter.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-indigo-300/60" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            We help startups, enterprises, and international organizations build powerful digital products. We don't just build websites — we solve business problems through design and technology.
          </p>
        </div>

        {/* CTA Button Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={onContactClick}
            className="px-7 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm shadow-xl shadow-slate-900/15 hover:bg-indigo-600 hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={onBookCallClick}
            className="px-7 py-3.5 rounded-full bg-white text-slate-800 font-bold text-sm border border-slate-200 shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span>Book a Discovery Call</span>
          </button>
        </div>

        {/* Exact Outcrowd Scroll-Scaling Video Laptop Frame Container */}
        <div className="flex justify-center w-full">
          <div
            style={{
              width: `${videoWidth}%`,
              borderRadius: `${borderRadius}vw`,
              transition: 'width 0.15s ease-out, border-radius 0.15s ease-out',
            }}
            className="relative overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-950 group"
          >
            {/* Showreel Header Bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-slate-950 text-white/90 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-slate-400 font-semibold ml-2">thewebagency-showreel.mp4</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 transition-colors text-[11px]"
                >
                  {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
              <video
                autoPlay={isPlaying}
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src="https://dl.dropboxusercontent.com/scl/fi/ok2coppn7h6oszgfy30y4/showreel-home.mp4?rlkey=k7sd1apdwi6fyy3wxhk6dz87v&st=am36ikxc&dl=0"
              />

              {/* Floating Live Badge inside Video */}
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200 shadow-xl">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <div>
                  <span className="block text-xs font-bold text-slate-900">ThewebAgency Showreel</span>
                  <span className="text-[10px] font-semibold text-slate-500">Building experiences that matter</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
