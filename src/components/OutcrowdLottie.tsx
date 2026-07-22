import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface OutcrowdLottieProps {
  url: string;
  className?: string;
}

export const OutcrowdLottie: React.FC<OutcrowdLottieProps> = ({ url, className = "w-20 h-20" }) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setAnimationData(data);
      })
      .catch((err) => console.error('Failed to load Outcrowd Lottie JSON:', err));

    return () => {
      isMounted = false;
    };
  }, [url]);

  if (!animationData) {
    return (
      <div className={`rounded-xl bg-indigo-50/40 animate-pulse ${className}`} />
    );
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};
