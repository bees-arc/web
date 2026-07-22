import React, { useState } from 'react';
import { Compass, Layout, Code, Sparkles, ArrowUpRight, Check, Plus, Layers } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      num: '01',
      title: 'Branding & Visual Identity',
      subtitle: 'Stand out with an iconic, memorable brand identity tailored for SaaS and digital products.',
      icon: Compass,
      color: 'from-purple-500 to-indigo-600',
      badge: 'Brand Strategy',
      deliverables: [
        'Logo & Visual Identity',
        'Brand Guidelines & Tone of Voice',
        'Typography & Color Palette',
        'Investor Pitch Decks',
        'Iconography & Design Tokens'
      ]
    },
    {
      id: 2,
      num: '02',
      title: 'Web & Product Design (UI/UX)',
      subtitle: 'Craft intuitive, high-converting digital product experiences users fall in love with.',
      icon: Layout,
      color: 'from-blue-500 to-indigo-600',
      badge: 'SaaS & App UX',
      deliverables: [
        'SaaS Dashboard & Web Apps',
        'Mobile App UX (iOS & Android)',
        'Design System Architecture',
        'Interactive Figma Prototypes',
        'UX Audit & Conversion Tuning'
      ]
    },
    {
      id: 3,
      num: '03',
      title: 'Web Development & Webflow',
      subtitle: 'Build blazing-fast, responsive, pixel-perfect websites with robust CMS and animations.',
      icon: Code,
      color: 'from-indigo-500 to-violet-600',
      badge: 'Frontend & CMS',
      deliverables: [
        'React & Next.js Frontend',
        'Framer & Webflow Development',
        'Interactive GSAP/Framer Motion',
        'SEO & Performance Tuning',
        'CMS Setup & Custom Integrations'
      ]
    },
    {
      id: 4,
      num: '04',
      title: '3D Motion & Growth Marketing',
      subtitle: 'Capture audience attention with stunning 3D graphics, motion explainers, and marketing collateral.',
      icon: Sparkles,
      color: 'from-pink-500 to-rose-600',
      badge: 'Motion & Assets',
      deliverables: [
        '3D Product Motion Graphics',
        'Explainer & Promotional Videos',
        'High-Converting Landing Pages',
        'Social & Ad Campaign Creatives',
        'Interactive WebGL Assets'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              Complex Solutions
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              Services
            </h2>
          </div>

          <div className="max-w-xl text-slate-600 text-sm sm:text-base leading-relaxed font-medium pl-4 border-l-2 border-indigo-500">
            Instead of a request like <i>"I need a website"</i>, we embrace: <i>"I want to market my product to acquire organic users"</i> — defining and executing the approved roadmap from A to Z.
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((serv, idx) => {
            const Icon = serv.icon;
            const isHovered = activeCard === idx;
            return (
              <div
                key={serv.id}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative rounded-3xl p-8 transition-all duration-300 border flex flex-col justify-between ${
                  isHovered
                    ? 'bg-slate-900 text-white border-slate-900 shadow-2xl shadow-slate-900/20 -translate-y-1.5'
                    : 'bg-[#FAFAFD] text-slate-900 border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className={`text-2xl font-extrabold font-mono ${isHovered ? 'text-indigo-400' : 'text-slate-400'}`}>
                      {serv.num}
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      isHovered ? 'bg-white/10 text-white' : 'bg-slate-200/60 text-slate-700'
                    }`}>
                      {serv.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isHovered ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-extrabold tracking-tight">{serv.title}</h3>
                  </div>

                  <p className={`text-sm mb-8 leading-relaxed font-medium ${isHovered ? 'text-slate-300' : 'text-slate-600'}`}>
                    {serv.subtitle}
                  </p>

                  {/* Deliverables tags */}
                  <div className="space-y-2 mb-8">
                    <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${isHovered ? 'text-slate-400' : 'text-slate-500'}`}>
                      Key Deliverables
                    </div>
                    {serv.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold">
                        <Check className={`w-4 h-4 shrink-0 ${isHovered ? 'text-indigo-400' : 'text-indigo-600'}`} />
                        <span className={isHovered ? 'text-slate-200' : 'text-slate-700'}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/20 flex items-center justify-between">
                  <span className={`text-xs font-bold ${isHovered ? 'text-indigo-300' : 'text-indigo-600'}`}>
                    Full Service Execution
                  </span>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform ${
                    isHovered ? 'bg-white text-slate-900 rotate-45' : 'bg-slate-200/80 text-slate-800'
                  }`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
