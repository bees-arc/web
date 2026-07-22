import React, { useEffect, useState } from 'react';

interface LottieWidgetProps {
  src: string;
  className?: string;
}

export const LottieWidget: React.FC<LottieWidgetProps> = ({ src, className = "w-16 h-16" }) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load Lottie JSON:', err));
  }, [src]);

  if (!animationData) {
    return (
      <div className={`rounded-xl bg-indigo-50/50 animate-pulse flex items-center justify-center ${className}`}>
        <div className="w-6 h-6 rounded-full border-2 border-indigo-400 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Dynamic Animated Indicator */}
      <img
        src="https://cdn.prod.website-files.com/667a7576e7e7ef3ba89b3f2a/66c8868efa543e643672fbac_favicon-logo.webp"
        alt="Widget Icon"
        className="w-12 h-12 object-contain animate-bounce"
        style={{ animationDuration: '3s' }}
      />
    </div>
  );
};
