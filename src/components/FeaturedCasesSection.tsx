import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, ExternalLink, Filter, CheckCircle } from 'lucide-react';

interface CaseItem {
  id: string;
  title: string;
  category: string;
  filter: 'saas' | 'fintech' | 'branding' | 'mobile';
  metric: string;
  desc: string;
  image: string;
  deliverables: string[];
}

export const FeaturedCasesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);

  const cases: CaseItem[] = [
    {
      id: 'nordic',
      title: 'Nordic Ventures',
      category: 'Venture Capital & Brand System',
      filter: 'branding',
      metric: 'Top Partner Rating',
      desc: 'Rethinking the online presentation and digital ecosystem for a leading Norwegian venture capital firm.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      deliverables: ['Brand Strategy', 'Web Design', 'Figma Prototypes', 'Investor Pitch']
    },
    {
      id: 'gulf',
      title: 'Gulf Manufacturing',
      category: 'Industrial Enterprise Platform',
      filter: 'fintech',
      metric: 'Scale & Quality',
      desc: 'Custom web platform and digital branding for a premier manufacturing corporation in Dubai.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      deliverables: ['Web Development', 'UI/UX Design', 'Custom CMS', 'API Integration']
    },
    {
      id: 'techlaunch',
      title: 'TechLaunch US',
      category: 'SaaS Launch & App Design',
      filter: 'saas',
      metric: 'Global Market Ready',
      desc: 'Complete brand, website, and mobile app design from scratch for a San Francisco SaaS startup.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      deliverables: ['Mobile App', 'Web Design', 'React Native', 'Brand Strategy']
    },
    {
      id: 'eduglobal',
      title: 'EduGlobal NGO',
      category: 'NGO Portal & Global Systems',
      filter: 'mobile',
      metric: 'Trusted Platform',
      desc: 'Secure and accessible platform for an international NGO, connecting donors and beneficiaries across India.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      deliverables: ['UX Research', 'Web Development', 'Accessibility Audit', 'Growth Marketing']
    }
  ];

  const filteredCases = activeFilter === 'all'
    ? cases
    : cases.filter(item => item.filter === activeFilter);

  return (
    <section id="cases" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Selected Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our Stories
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {[
              { label: 'All Stories', value: 'all' },
              { label: 'SaaS & Tech', value: 'saas' },
              { label: 'Enterprises', value: 'fintech' },
              { label: 'NGOs & Gov', value: 'mobile' },
            ].map(f => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  activeFilter === f.value
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCase(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-indigo-200 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />

                {/* Floating Metric Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-extrabold text-indigo-600 border border-slate-200 shadow-lg">
                  ⚡ {item.metric}
                </div>

                {/* Category tag */}
                <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white">
                  {item.category}
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center text-slate-700 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.deliverables.map((d, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Details Popup Modal */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-slate-600"
            >
              ✕
            </button>

            <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold mb-3">
              {selectedCase.category}
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-2">{selectedCase.title}</h3>
            <p className="text-sm text-slate-600 mb-6">{selectedCase.desc}</p>

            <img
              src={selectedCase.image}
              alt={selectedCase.title}
              className="w-full h-64 object-cover rounded-2xl mb-6 border border-slate-200"
            />

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-indigo-600">Metric Impact: {selectedCase.metric}</span>
              <button
                onClick={() => setSelectedCase(null)}
                className="px-5 py-2.5 rounded-full bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
