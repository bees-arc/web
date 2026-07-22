'use client';
import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if preloader already ran in session
    const preloaderClicked = sessionStorage.getItem('preloaderClicked');
    if (preloaderClicked === 'true') {
      setLoading(false);
      return;
    }

    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 1400);

    const timer2 = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('preloaderClicked', 'true');
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#FAFAFD] flex items-center justify-center transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Outcrowd Emblem Preloader Logo Mask */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 animate-spin-slow flex items-center justify-center shadow-xl shadow-indigo-500/30">
            <img
              src="/Nav Logo.webp"
              alt="Logo"
              className="w-14 h-10 object-contain"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-display font-extrabold text-2xl text-slate-900 tracking-tight">
            THEWEBAGENCY
          </span>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-100">
            Light Mode
          </span>
        </div>

        <div className="w-36 h-1 rounded-full bg-slate-200 overflow-hidden mt-2">
          <div className="h-full bg-indigo-600 rounded-full animate-[marquee_1.5s_linear_infinite] w-1/2" />
        </div>
      </div>
    </div>
  );
};
