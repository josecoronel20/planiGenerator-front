import { Minus, Plus } from "lucide-react";
import React, { useRef } from "react";

const Weight = ({
  weight,
  setWeight,
  setIsEditing,
}: {
  weight: number;
  setWeight: (weight: number | ((prev: number) => number)) => void;
  setIsEditing: (isEditing: boolean) => void;
}) => {
  // intervalo para incrementar/decrementar el peso
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  // timeout para esperar 1 segundo antes de empezar a incrementar/decrementar
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // funcion para incrementar/decrementar el peso
  const handleMouseDown = (direction: "up" | "down") => {
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setWeight((prev) => {
          const newWeight = direction === "up" ? prev + 0.5 : prev - 0.5;
          return Math.max(newWeight, 0);
        });
        setIsEditing(true);
      }, 50);
    }, 1000);
  };

  // funcion para detener el intervalo y el timeout
  const handleMouseUp = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div className="flex items-center gap-2 w-full justify-between px-2">
      <button
        onClick={() => setWeight(weight - 0.5)}
        onMouseDown={() => handleMouseDown("down")}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span>{weight} kg</span>
      <button
        onClick={() => setWeight(weight + 0.5)}
        onMouseDown={() => handleMouseDown("up")}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Weight;
