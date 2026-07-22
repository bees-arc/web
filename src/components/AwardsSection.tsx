'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Award, ArrowUpRight, Trophy } from 'lucide-react';

interface InnovationAward {
  id: string;
  organization: string;
  project: string;
  awardTitle: string;
  date: string;
  badgeColor: string;
}

export const AwardsSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const audioUnlocked = useRef(false);

  // Pre-warm audio on first user gesture so MP3 plays without browser permission prompt
  useEffect(() => {
    const unlock = () => {
      if (audioUnlocked.current) return;
      audioUnlocked.current = true;
      // Unlock via silent AudioContext resume
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      // Also warm up a silent <audio> so subsequent new Audio() calls work
      const silent = new Audio('https://dl.dropboxusercontent.com/s/03lxlbaek2ye22m/click_min.mp3');
      silent.volume = 0;
      silent.play().catch(() => {});
    };
    window.addEventListener('touchstart', unlock, { once: true, passive: true });
    window.addEventListener('click', unlock, { once: true });
    window.addEventListener('scroll', unlock, { once: true, passive: true });
    return () => {
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('click', unlock);
      window.removeEventListener('scroll', unlock);
    };
  }, []);

  // Original MP3 hover sound (Volume 0.85)
  const playHoverSound = useCallback(() => {
    try {
      const audio = new Audio('https://dl.dropboxusercontent.com/s/03lxlbaek2ye22m/click_min.mp3');
      audio.volume = 0.85;
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } catch (e) {
      // Silent fail
    }
  }, []);

  const innovationAwards: InnovationAward[] = [
    {
      id: '1',
      organization: 'Nordic Ventures',
      project: 'Digital VC Platform',
      awardTitle: 'UI/UX & CMS',
      date: 'Jan 2025',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      id: '2',
      organization: 'Gulf Manufacturing',
      project: 'Industrial ERP Portal',
      awardTitle: 'Backend & APIs',
      date: 'May 2023',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      id: '3',
      organization: 'TechLaunch US',
      project: 'SaaS Mobile App',
      awardTitle: 'React Native App',
      date: 'Oct 2024',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200'
    },
    {
      id: '4',
      organization: 'EduGlobal NGO',
      project: 'Beneficiary Portal',
      awardTitle: 'Next.js Web App',
      date: 'Mar 2024',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      id: '5',
      organization: 'Colombo Startup Hub',
      project: 'Ecosystem Directory',
      awardTitle: 'UX & Frontend',
      date: 'Nov 2024',
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200'
    },
    {
      id: '6',
      organization: 'Healthtech Asia',
      project: 'AI Diagnostics Web',
      awardTitle: 'AI Solutions',
      date: 'Dec 2024',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: '7',
      organization: 'Pacific Hotels Group',
      project: 'Booking Engine',
      awardTitle: 'API & UX Design',
      date: 'Sep 2023',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      id: '8',
      organization: 'Island Brands',
      project: 'Headless E-commerce',
      awardTitle: 'Headless Commerce',
      date: 'Jul 2025',
      badgeColor: 'bg-pink-50 text-pink-700 border-pink-200'
    },
    {
      id: '9',
      organization: 'Apex Logistics',
      project: 'Fleet Dispatch System',
      awardTitle: 'Enterprise Web App',
      date: 'Aug 2024',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      id: '10',
      organization: 'Vivid Media Solutions',
      project: 'Video Streaming Engine',
      awardTitle: 'Cloud Architecture',
      date: 'Feb 2025',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
    }
  ];

  const marqueeAwards = [
    { name: 'Microsoft Imagine Cup Winner', year: '1st Place', org: 'Microsoft' },
    { name: 'Best UX Design Partner', year: '2024', org: 'Colombo Startup Hub' },
    { name: 'Outstanding Tech Delivery', year: '2025', org: 'Nordic Ventures' },
    { name: 'Top Agency on Clutch', year: '5.0 Star', org: 'Clutch Leaders' },
    { name: 'UI/UX Design Excellence', year: '2023', org: 'Gulf Enterprise' },
    { name: 'Innovative Tech Agency', year: '2022', org: 'SLASSCOM National' },
  ];

  return (
    <section id="awards" className="py-20 md:py-32 bg-white border-y border-slate-200/60 overflow-hidden">
      
      {/* Top Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              Global Excellence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Recognition & achievements
            </h2>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex mb-20">
        <div className="flex shrink-0 items-center gap-6 animate-marquee whitespace-nowrap">
          {[...marqueeAwards, ...marqueeAwards, ...marqueeAwards].map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={playHoverSound}
              onTouchStart={playHoverSound}
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#FAFAFD] border border-slate-200/80 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all cursor-pointer group shrink-0 shadow-sm"
            >
              <Award className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
              <div>
                <span className="block text-xs font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {item.name}
                </span>
                <span className="text-[11px] font-semibold text-slate-500">
                  {item.org} • <strong className="text-indigo-600">{item.year}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Loud Sound List: Awards for Digital Innovation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAFAFD] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
          
          <div className="flex items-center justify-between pb-6 border-b border-slate-200 text-xs font-black text-slate-600 uppercase tracking-wider hidden sm:flex">
            <span className="w-1/4">Institution</span>
            <span className="w-1/3">Project Showcase</span>
            <span className="w-1/4">Honor / Title</span>
            <span className="w-1/6 text-right">Date</span>
          </div>

          <div className="divide-y divide-slate-200/70">
            {innovationAwards.map((award) => {
              const isHovered = hoveredId === award.id;
              return (
                <div
                  key={award.id}
                  onMouseEnter={() => {
                    setHoveredId(award.id);
                    playHoverSound();
                  }}
                  onTouchStart={() => {
                    setHoveredId(award.id);
                    playHoverSound();
                  }}
                  onMouseLeave={() => setHoveredId(null)}
                  onTouchEnd={() => setHoveredId(null)}
                  className={`py-5 px-4 sm:px-6 rounded-2xl transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer ${
                    isHovered
                      ? 'bg-white shadow-xl shadow-indigo-500/15 border border-indigo-300 scale-[1.01] -translate-y-0.5'
                      : 'hover:bg-white/60'
                  }`}
                >
                  {/* Institution */}
                  <div className="sm:w-1/4 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-xs transition-colors ${
                      isHovered ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30' : 'bg-slate-200/80 text-slate-700'
                    }`}>
                      <Trophy className="w-5 h-5" />
                    </div>
                    <span className="font-extrabold text-base text-slate-900">
                      {award.organization}
                    </span>
                  </div>

                  {/* Project Showcase */}
                  <div className="sm:w-1/3 flex items-center gap-2">
                    <span className="text-lg font-black text-slate-900 tracking-tight group-hover:text-indigo-600">
                      {award.project}
                    </span>
                    <ArrowUpRight className={`w-4.5 h-4.5 transition-transform ${isHovered ? 'text-indigo-600 translate-x-1 -translate-y-1' : 'text-slate-400'}`} />
                  </div>

                  {/* Honor / Title */}
                  <div className="sm:w-1/4">
                    <span className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-black border ${award.badgeColor}`}>
                      {award.awardTitle}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="sm:w-1/6 sm:text-right font-mono text-xs font-extrabold text-slate-500">
                    {award.date}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
};
