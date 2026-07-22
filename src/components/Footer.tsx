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
        
        {/* Giant Outcrowd Light Brand Title */}
        <div className="mb-16 border-b border-slate-800 pb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-xl text-white font-display">
                O
              </div>
              <span className="font-display font-extrabold text-3xl text-white tracking-tight">
                OUTCROWD
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold tracking-wider uppercase border border-indigo-500/30">
                Light Edition
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md font-medium">
              Digital creative agency for SaaS startups that designs and develops great digital products, brands, and interactive web experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm font-semibold text-slate-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span>Studio Time: <strong className="text-white font-mono">{time || '12:00:00 PM'}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-indigo-400" />
              <span>Global Reach • USA & Europe</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm font-semibold text-slate-300">
              <li><a href="#cases" className="hover:text-indigo-400 transition-colors">Cases</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#stages" className="hover:text-indigo-400 transition-colors">Stages of Startup</a></li>
              <li><a href="#awards" className="hover:text-indigo-400 transition-colors">Awards</a></li>
              <li><a href="#testimonials" className="hover:text-indigo-400 transition-colors">Client Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm font-semibold text-slate-300">
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Branding & Identity</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">SaaS UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">React & Webflow Dev</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">3D Motion Graphics</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Pitch Decks & Growth</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Social & Portfolio</h4>
            <ul className="space-y-2.5 text-sm font-semibold text-slate-300">
              <li><a href="https://dribbble.com/outcrowd" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">Dribbble <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://behance.net/outcrowd" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">Behance <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://instagram.com/outcrowd" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">Instagram <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://linkedin.com/company/outcrowd" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">LinkedIn <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://x.com/outcrowd" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">X / Twitter <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Direct Contact</h4>
            <p className="text-sm font-bold text-white mb-2">hello@outcrowd.io</p>
            <p className="text-xs text-slate-400 font-medium mb-4">
              Send us your RFP or project brief directly.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Accepting New SaaS Clients
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-medium gap-4">
          <div>
            © {new Date().getFullYear()} Outcrowd Design Agency. All Rights Reserved. (Light Theme Clone)
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
