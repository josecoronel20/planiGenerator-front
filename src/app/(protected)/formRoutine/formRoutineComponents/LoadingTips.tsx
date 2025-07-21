import { loadingTips } from '@/constants/loadingTips';
import React, { useState } from 'react'

const LoadingTips = () => {
    const [currentTip, setCurrentTip] = useState(0);
    
    setInterval(() => {
        setCurrentTip(currentTip > loadingTips.length - 1 ? 0 : currentTip + 1);
    }, 7000);

  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='text-xs text-black text-center'>{loadingTips[currentTip]}</p>
    </div>
  )
}

export default LoadingTips