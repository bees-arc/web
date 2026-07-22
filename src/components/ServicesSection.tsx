import React, { useState } from 'react';
import { Compass, Layout, Code, Sparkles, ArrowUpRight, Check, Plus, Layers } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      num: '01',
      title: 'UI/UX Design & Brand Identity',
      subtitle: 'Interfaces that feel inevitable. Strategy-first branding, visual systems, and guidelines to help you stand out in competitive markets.',
      icon: Compass,
      color: 'from-purple-500 to-indigo-600',
      badge: 'Design & Brand',
      deliverables: [
        'User Journey Mapping',
        'UI/UX Design & Prototyping',
        'Design System Architecture',
        'Brand Logos & Identity',
        'Visual Guidelines'
      ]
    },
    {
      id: 2,
      num: '02',
      title: 'Web & Mobile App Development',
      subtitle: 'Fast, accessible, and native-quality apps. Built with Next.js, React, React Native, and Flutter for maximum reach and performance.',
      icon: Layout,
      color: 'from-blue-500 to-indigo-600',
      badge: 'Web & Mobile',
      deliverables: [
        'React & Next.js Frontends',
        'iOS & Android Mobile Apps',
        'API & Systems Architecture',
        'Cross-Platform Development',
        'Performance Optimization'
      ]
    },
    {
      id: 3,
      num: '03',
      title: 'Software Engineering & AI Solutions',
      subtitle: 'Custom platforms, backend systems, and AI-powered product integrations or workflows that save hours of manual work.',
      icon: Code,
      color: 'from-indigo-500 to-violet-600',
      badge: 'AI & Custom Engineering',
      deliverables: [
        'Custom Platform Development',
        'Database & API Engineering',
        'AI Chatbots & Integrations',
        'Workflow Automation',
        'Intelligent Systems'
      ]
    },
    {
      id: 4,
      num: '04',
      title: 'Growth Marketing, Video & 3D',
      subtitle: 'Growth strategies, brand films, product demos, and stunning 3D visuals that capture attention and drive real business outcomes.',
      icon: Sparkles,
      color: 'from-pink-500 to-rose-600',
      badge: 'Marketing & Media',
      deliverables: [
        'SEO & Growth Strategies',
        'Brand Film & Video Production',
        '3D Modeling & Animation',
        'Landing Pages & Copywriting',
        'Social Media Creatives'
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
