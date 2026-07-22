'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { OutcrowdLottie } from './OutcrowdLottie';

gsap.registerPlugin(ScrollTrigger);

export const StatsCardsSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [activeHover, setActiveHover] = useState<number | null>(null);

  const headlineText = "We solve business problems through design and technology. Serving clients globally from Sri Lanka.";
  const words = headlineText.split(" ");

  useEffect(() => {
    if (!headingRef.current) return;

    const wordElements = headingRef.current.querySelectorAll('.scrub-word');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordElements,
        { opacity: 0.15, y: 8, color: '#94A3B8' },
        {
          opacity: 1,
          y: 0,
          color: '#0F172A',
          stagger: 0.1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            end: 'bottom 40%',
            scrub: 0.8,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 md:py-32 bg-white border-y border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outcrowd Character/Word Scrubbing Scroll Heading */}
        <div className="max-w-4xl mb-20">
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.12] tracking-tight"
          >
            {words.map((word, idx) => (
              <span key={idx} className="scrub-word inline-block mr-[0.25em] transition-colors duration-200">
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* 4 Stats Cards Grid with Exact Outcrowd Lottie Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: 50+ Projects Delivered */}
          <div
            onMouseEnter={() => setActiveHover(1)}
            onMouseLeave={() => setActiveHover(null)}
            className={`relative rounded-3xl p-7 transition-all duration-300 border flex flex-col justify-between overflow-hidden cursor-pointer ${
              activeHover === 1
                ? 'bg-white border-indigo-300 shadow-2xl shadow-indigo-500/10 -translate-y-1.5'
                : 'bg-[#FAFAFD] border-slate-200/80 hover:border-slate-300'
            }`}
          >
            <div className="mb-6">
              {/* Chat Popup Image overlay */}
              <div className="relative mb-6 overflow-hidden rounded-2xl border border-slate-200/80 shadow-md group">
                <img
                  src="https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66c83397d4e9225b89268b44_chat%20popup.webp"
                  alt="Chat Popup"
                  className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-emerald-500 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow-xs">
                  50+ PROJECTS
                </div>
              </div>

              <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
                50+
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed">
                Projects delivered to startups, enterprises, and international organizations.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-extrabold text-indigo-600">
              <span>Enterprise & Scale</span>
              <span>50+ Deliveries</span>
            </div>
          </div>

          {/* Card 2: 12+ Countries Served */}
          <div
            onMouseEnter={() => setActiveHover(2)}
            onMouseLeave={() => setActiveHover(null)}
            className={`relative rounded-3xl p-7 transition-all duration-300 border flex flex-col justify-between overflow-hidden cursor-pointer ${
              activeHover === 2
                ? 'bg-white border-purple-300 shadow-2xl shadow-purple-500/10 -translate-y-1.5'
                : 'bg-[#FAFAFD] border-slate-200/80 hover:border-slate-300'
            }`}
          >
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  12+
                </h3>

                {/* Exact Outcrowd Lottie Widget 13 Animation */}
                <OutcrowdLottie
                  url="https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66b4c978a3d27cd1602dbf83_vidget%2013.json"
                  className="w-20 h-20"
                />
              </div>

              <p className="text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed mt-4">
                Countries served globally, from South Asia to Europe and the United States.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex gap-1.5 flex-wrap">
              <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[10px] font-bold">
                ★ Global Outreach
              </span>
              <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold">
                ★ 12+ Nations
              </span>
            </div>
          </div>

          {/* Card 3: 6 Years In Business */}
          <div
            onMouseEnter={() => setActiveHover(3)}
            onMouseLeave={() => setActiveHover(null)}
            className={`relative rounded-3xl p-7 transition-all duration-300 border flex flex-col justify-between overflow-hidden cursor-pointer ${
              activeHover === 3
                ? 'bg-white border-blue-300 shadow-2xl shadow-blue-500/10 -translate-y-1.5'
                : 'bg-[#FAFAFD] border-slate-200/80 hover:border-slate-300'
            }`}
          >
            <div className="mb-6">
              {/* Exact Outcrowd Lottie Widget 14 Animation above 100M */}
              <div className="w-full h-24 mb-4 flex items-center justify-center">
                <OutcrowdLottie
                  url="https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66b4c97780a7b9ca43accca2_vidget%2014.json"
                  className="w-24 h-24"
                />
              </div>

              <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
                6 yr
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed">
                Successfully operating and growing since our launch in 2020.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 text-[11px] font-extrabold text-blue-600">
              Proven Experience
            </div>
          </div>

          {/* Card 4: 1st Place Microsoft Imagine Cup */}
          <div
            onMouseEnter={() => setActiveHover(4)}
            onMouseLeave={() => setActiveHover(null)}
            className={`relative rounded-3xl p-7 transition-all duration-300 border flex flex-col justify-between overflow-hidden cursor-pointer ${
              activeHover === 4
                ? 'bg-white border-pink-300 shadow-2xl shadow-pink-500/10 -translate-y-1.5'
                : 'bg-[#FAFAFD] border-slate-200/80 hover:border-slate-300'
            }`}
          >
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                {/* Exact Outcrowd Lottie Widget 15 Animation */}
                <OutcrowdLottie
                  url="https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66b4c977eb0e529c9b631be6_vidget%2015.json"
                  className="w-16 h-16"
                />

                <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  1st
                </h3>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed mt-4">
                Place winners at the SE Asia regional Microsoft Imagine Cup for tech innovation.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 text-[11px] font-extrabold text-rose-600 flex items-center justify-between">
              <span>Imagine Cup Champions</span>
              <span>1st Place</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
