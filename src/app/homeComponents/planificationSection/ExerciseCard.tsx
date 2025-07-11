import React, { useState } from "react";
import { Exercise } from "@/utils/types/planification";
import ExerciseModal from "./ExerciseModal";

const ExerciseCard = ({
  exercise,
  index,
}: {
  exercise: Exercise;
  index: number;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-600 hover:border-[#e63946] transition-all duration-200 cursor-pointer" onClick={() => setIsModalOpen(true)}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-2 md:mb-0">
          <h3 className="text-lg font-semibold text-white mb-1">
            {exercise.exercise}
          </h3>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-[#e63946] rounded-full"></span>
                {exercise.sets.length} series
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                {exercise.wheight === 0 ? "sin peso configurado" : `${exercise.wheight} kg`}
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className="inline-block bg-[#e63946] text-white text-xs font-semibold px-3 py-1 rounded-full">
            #{index + 1}
          </span>
        </div>
      </div>
      <ExerciseModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        exercise={exercise}
      />
    </div>
  );
};

export default ExerciseCard;
