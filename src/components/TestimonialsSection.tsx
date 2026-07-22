import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Outcrowd completely redefined our visual identity and SaaS platform UI. Their design execution directly enabled us to close a $50M Series B round within 4 months of launch.",
      name: "Marcus Vance",
      role: "Founder & CEO",
      company: "Zenith Health AI",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      result: "$50M Series B Closed"
    },
    {
      id: 2,
      quote: "The level of craftsmanship, speed, and motion detail Outcrowd brought to our mobile banking application was astounding. They operate like a top 1% internal product design team.",
      name: "Elena Rostova",
      role: "VP of Product",
      company: "Finova Banking",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      result: "+140% Mobile Conversion"
    },
    {
      id: 3,
      quote: "Working with Outcrowd was the single best decision we made for our SaaS MVP. Beautiful UI, intuitive UX, and absolute transparency throughout every sprint.",
      name: "David Sterling",
      role: "Co-Founder",
      company: "Nexa Flow",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      result: "2.4M Active Daily Users"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#FAFAFD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Clutch Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-800">5.0 Rating on Clutch</span>
            <span className="text-[11px] text-slate-500 font-semibold">(45+ Verified Reviews)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            What SaaS Founders Say
          </h2>
          <p className="text-base text-slate-600 font-medium">
            Hear directly from founders and executives who scaled their products with Outcrowd.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl relative">
          <Quote className="w-12 h-12 text-indigo-200 mb-6" />

          <p className="text-xl sm:text-2xl text-slate-800 font-semibold leading-relaxed mb-8">
            "{testimonials[currentIndex].quote}"
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-slate-100 gap-4">
            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-indigo-100 shadow-sm"
              />
              <div>
                <h4 className="text-base font-extrabold text-slate-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-xs font-semibold text-slate-500">
                  {testimonials[currentIndex].role} — <strong className="text-indigo-600">{testimonials[currentIndex].company}</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-4">
              <div className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-100 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {testimonials[currentIndex].result}
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
