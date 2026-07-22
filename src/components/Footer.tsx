import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Globe, Clock, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant ThewebAgency Brand Title */}
        <div className="mb-16 border-b border-slate-800 pb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/Nav Logo.webp"
                alt="ThewebAgency Logo"
                className="w-36 h-10 rounded-xl object-contain shadow-md shadow-indigo-500/10"
              />
              <span className="font-display font-extrabold text-3xl text-white tracking-tight uppercase">
                the<span className="text-indigo-400">web</span>agency
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md font-medium">
              Sri Lanka's digital agency building world-class digital experiences for startups, enterprises, and international organizations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm font-semibold text-slate-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span>Colombo Time: <strong className="text-white font-mono">{time || '12:00:00 PM'}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-indigo-400" />
              <span>Global Reach • Serving Globally</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm font-semibold text-slate-300">
              <li><a href="#cases" className="hover:text-indigo-400 transition-colors">Stories</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#stages" className="hover:text-indigo-400 transition-colors">Stages of Growth</a></li>
              <li><a href="#awards" className="hover:text-indigo-400 transition-colors">Awards</a></li>
              <li><a href="#testimonials" className="hover:text-indigo-400 transition-colors">What Clients Say</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm font-semibold text-slate-300">
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Software Engineering</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">AI & Custom Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Social & Portfolio</h4>
            <ul className="space-y-2.5 text-sm font-semibold text-slate-300">
              <li><a href="https://dribbble.com/thewebagency" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">Dribbble <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://behance.net/thewebagency" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">Behance <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://instagram.com/thewebagency" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">Instagram <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://linkedin.com/company/thewebagency" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">LinkedIn <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://x.com/thewebagency" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">X / Twitter <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Direct Contact</h4>
            <p className="text-sm font-bold text-white mb-2">hello@thewebagency.lk</p>
            <p className="text-xs text-slate-400 font-medium mb-4">
              Send us your RFP or project brief directly.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Accepting Global Clients
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-medium gap-4">
          <div>
            © {new Date().getFullYear()} ThewebAgency Private Limited · Colombo, Sri Lanka
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
