'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Layers, ArrowRight, CheckCircle2, Rocket } from 'lucide-react';

interface StagesSectionProps {
  onSelectStage?: (stage: string) => void;
}

export const StagesSection: React.FC<StagesSectionProps> = ({ onSelectStage }) => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const stages = [
    {
      id: 'pre-seed',
      tag: 'Stage 01 — POC & Testing',
      title: 'Pre-seed Bootstrapped',
      desc: 'This is the POC stage. You have a hypothetical product idea, and you want it designed & tested properly to validate whether it is worth the time and resources before full development.',
      statHighlight: 'More than 40%',
      statDesc: 'of our clients on this stage get initial investment for MVPs within 90 days.',
      features: ['Rapid UX Wireframing', 'Interactive Pitch Deck', 'Clickable Prototype', 'User Testing Insights'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      badge: 'Proof of Concept Stage',
      rotation: 'rotate-[-6deg] translate-y-2 scale-[0.95]',
    },
    {
      id: 'seed',
      tag: 'Stage 02 — MVP Launch',
      title: 'Seed Stage',
      desc: 'This is an MVP stage. You approved product-market fit and want to start working with real users, launch initial marketing efforts, and scale acquisition seamlessly.',
      statHighlight: 'More than 25%',
      statDesc: 'of our clients get Series A investments to build a full-scale product.',
      features: ['Full SaaS Design System', 'Responsive Web App UI/UX', 'Conversion Marketing Landing', 'Analytics Integration'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      badge: 'MVP Launch Stage',
      rotation: 'rotate-[0deg] translate-y-0 scale-[1]',
    },
    {
      id: 'series-a',
      tag: 'Stage 03 — Scale & Optimize',
      title: 'Series A',
      desc: 'This is a product optimization stage. You raised investment and need to cut burn-rate, reduce churn, and scale user retention while expanding features rapidly.',
      statHighlight: '100% Success Rate',
      statDesc: 'helped every start-up at this stage cut dev costs & boost user retention by 38%.',
      features: ['Design System Architecture', 'Feature Velocity Sprints', 'Mobile & Web Apps', 'Performance Tuning'],
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      badge: 'Series A Growth',
      rotation: 'rotate-[6deg] -translate-y-2 scale-[1.03]',
    }
  ];

  return (
    <section id="stages" ref={containerRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" />
              Tailored Engagement Models
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Stages of startup development
            </h2>
          </div>
          <p className="text-sm md:text-base text-slate-600 max-w-md font-medium">
            Examples of our most common engagement models into early-stage start-ups on different stages of the lifecycle.
          </p>
        </div>

        {/* Stage Selector Pills */}
        <div className="flex overflow-x-auto no-scrollbar gap-3 p-1.5 bg-slate-200/60 rounded-2xl mb-12 max-w-2xl">
          {stages.map((stage, idx) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                activeStage === idx
                  ? 'bg-white text-indigo-600 shadow-md shadow-slate-900/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
              }`}
            >
              {stage.title}
            </button>
          ))}
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Stage Text */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-900/5">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-extrabold mb-4">
              {stages[activeStage].tag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              {stages[activeStage].title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
              {stages[activeStage].desc}
            </p>

            {/* Stat Pill */}
            <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 mb-6">
              <div className="text-xl font-extrabold text-indigo-700 mb-1">
                {stages[activeStage].statHighlight}
              </div>
              <div className="text-xs text-slate-700 font-semibold">
                {stages[activeStage].statDesc}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {stages[activeStage].features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onSelectStage && onSelectStage(stages[activeStage].id)}
              className="w-full py-3.5 rounded-full bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2"
            >
              <span>View Details & Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Outcrowd 3D Rotating Stacked Card Effect */}
          <div className="lg:col-span-7 relative h-[450px] flex items-center justify-center perspective-1000">
            {stages.map((stage, idx) => {
              const isCurrent = activeStage === idx;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`absolute w-full max-w-lg rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl transition-all duration-700 cursor-pointer ${
                    isCurrent
                      ? 'z-30 opacity-100 scale-100 rotate-0 shadow-indigo-500/15 ring-2 ring-indigo-500/30'
                      : idx < activeStage
                      ? 'z-10 opacity-40 scale-90 -rotate-6 -translate-x-8'
                      : 'z-20 opacity-70 scale-95 rotate-6 translate-x-8'
                  }`}
                >
                  <div className="relative aspect-[16/11]">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-300 block mb-1">
                          ThewebAgency Stage Showcase
                        </span>
                        <h4 className="text-lg font-bold">{stage.badge}</h4>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                        <Rocket className="w-5 h-5" />
                      </div>
                    </div>
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
