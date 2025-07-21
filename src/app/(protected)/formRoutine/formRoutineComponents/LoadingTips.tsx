import React, { useState, useEffect } from 'react';
import { loadingTips } from '@/constants/loadingTips';

const LoadingTips = () => {
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % loadingTips.length);
    }, 7000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='text-xs text-black text-center'>{loadingTips[currentTip]}</p>
    </div>
  );
};

export default LoadingTips;
