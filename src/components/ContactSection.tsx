'use client';
import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, Calendar, CheckCircle2, Sparkles, PhoneCall, Mail, MapPin } from 'lucide-react';

interface ContactSectionProps {
  onBookCallClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onBookCallClick }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['UI/UX Design']);
  const [budget, setBudget] = useState<string>('$25k - $50k');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    'UI/UX Design',
    'Web Development',
    'Mobile Apps',
    'Software Engineering',
    'AI Solutions',
    'Brand Identity'
  ];

  const budgetOptions = ['$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+'];

  const toggleService = (serv: string) => {
    if (selectedServices.includes(serv)) {
      setSelectedServices(selectedServices.filter(s => s !== serv));
    } else {
      setSelectedServices([...selectedServices, serv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Trigger celebratory confetti burst!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Text & Direct Contact info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Let's Build Something Great
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Have a project in mind? Let's talk.
            </h2>

            <p className="text-base text-slate-600 font-medium mb-8 leading-relaxed">
              Whether you are a startup, enterprise, or NGO looking to build world-class digital experiences, we respond within 24 hours.
            </p>

            {/* Quick Contact Box */}
            <div className="space-y-4 mb-8">
              <a
                href="mailto:hello@thewebagency.lk"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAFAFD] border border-slate-200/80 hover:border-indigo-300 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-semibold">Direct Email</span>
                  <span className="text-sm font-extrabold text-slate-900 group-hover:text-indigo-600">hello@thewebagency.lk</span>
                </div>
              </a>

              <button
                onClick={onBookCallClick}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 hover:border-indigo-300 transition-colors text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold group-hover:rotate-12 transition-transform">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-indigo-700 font-bold">Schedule Intro Call</span>
                    <span className="text-sm font-extrabold text-slate-900">Book 15-min Calendly Session</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-indigo-600 bg-white px-3 py-1 rounded-full shadow-xs">
                  Available Today →
                </span>
              </button>
            </div>

            {/* Location & Timezone */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>Based in Colombo, Sri Lanka · Serving Globally</span>
            </div>
          </div>

          {/* Right Column Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#FAFAFD] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Thank you for reaching out. A partner from ThewebAgency will review your project details and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Select Services */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                    1. What services do you need?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {servicesList.map(serv => {
                      const isSelected = selectedServices.includes(serv);
                      return (
                        <button
                          key={serv}
                          type="button"
                          onClick={() => toggleService(serv)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                            isSelected
                              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                              : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}{serv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Budget Range */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                    2. Estimated Project Budget
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map(b => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                          budget === b
                            ? 'bg-slate-900 text-white shadow-md'
                            : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-indigo-500 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@yourcompany.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-indigo-500 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Project Details / Goals</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your SaaS product, timeline, and key goals..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-indigo-500 font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-xl shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
