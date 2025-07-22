import React, { useState, useEffect } from "react";
import { loadingTips } from "@/constants/loadingTips";

const TipsComponent = () => {
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % loadingTips.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-600">
      <p className="text-sm text-gray-400 text-center">
        💡 <span className="text-[#e63946] font-semibold">Tip:</span>{" "}
        {loadingTips[currentTip]}
      </p>
    </div>
  );
};

export default TipsComponent;
