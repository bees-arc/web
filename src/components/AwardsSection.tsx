import React, { useState } from 'react';
import { Award, Volume2, VolumeX, ArrowUpRight, Trophy } from 'lucide-react';

interface InnovationAward {
  id: string;
  organization: string;
  project: string;
  awardTitle: string;
  date: string;
  badgeColor: string;
}

export const AwardsSection: React.FC = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const innovationAwards: InnovationAward[] = [
    {
      id: '1',
      organization: 'Awwwards',
      project: 'Fitonist',
      awardTitle: '★ Site of the Day',
      date: 'Aug 25, 2024',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      id: '2',
      organization: 'Awwwards',
      project: 'FinanceAble',
      awardTitle: '★ Honorable Mention',
      date: 'Mar 06, 2024',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      id: '3',
      organization: 'TheFWA',
      project: 'Deed Delivery',
      awardTitle: '★ FWA of the Day',
      date: 'Dec 30, 2023',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200'
    },
    {
      id: '4',
      organization: 'CssDA',
      project: 'EventBeds',
      awardTitle: '★ Website of the Day',
      date: 'Dec 29, 2023',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      id: '5',
      organization: 'Awwwards',
      project: 'Mota',
      awardTitle: '★ Honorable Mention',
      date: 'Nov 30, 2023',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      id: '6',
      organization: 'CssDA',
      project: 'Dstafin',
      awardTitle: '★ Website of the Day',
      date: 'Aug 18, 2023',
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200'
    },
    {
      id: '7',
      organization: 'CssDA',
      project: 'KMBCH',
      awardTitle: '★ Website of the Day',
      date: 'Feb 25, 2023',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
    }
  ];

  // Loud, crisp audio hover trigger (Volume increased to 0.85)
  const playHoverSound = () => {
    if (soundEnabled) {
      try {
        const audio = new Audio('https://dl.dropboxusercontent.com/s/03lxlbaek2ye22m/click_min.mp3');
        audio.volume = 0.85; // High volume audio output
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } catch (e) {
        // Audio error caught
      }
    }
  };

  const marqueeAwards = [
    { name: 'Red Dot Best Design', year: '2026', org: 'Red Dot Institute' },
    { name: 'Awwwards Site of the Day', year: '12x Honoree', org: 'Awwwards' },
    { name: 'FWA of the Month', year: '2025', org: 'FWA International' },
    { name: '#1 SaaS Agency on Clutch', year: 'Top 1%', org: 'Clutch Leaders' },
    { name: 'Behance Featured Project', year: '2026', org: 'Adobe Behance' },
    { name: 'Webby Awards Nominee', year: '2025', org: 'Webby International' },
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
              Awards for digital innovation
            </h2>
          </div>

          <button
            onClick={() => {
              const nextState = !soundEnabled;
              setSoundEnabled(nextState);
              if (nextState) playHoverSound();
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs font-extrabold hover:bg-indigo-100 transition-colors shadow-xs"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-indigo-600 animate-bounce" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            <span>Hover Sound: <strong>{soundEnabled ? 'LOUD (85%) 🔊' : 'MUTED 🔇'}</strong></span>
          </button>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex mb-20">
        <div className="flex shrink-0 items-center gap-6 animate-marquee whitespace-nowrap">
          {[...marqueeAwards, ...marqueeAwards, ...marqueeAwards].map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={playHoverSound}
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
                  onMouseLeave={() => setHoveredId(null)}
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
