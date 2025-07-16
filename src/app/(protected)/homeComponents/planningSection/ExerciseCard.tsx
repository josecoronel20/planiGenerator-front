import React, { useState } from "react";
import { Exercise } from "@/utils/types/planning";
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
    <div
      className="bg-gray-800 rounded-lg p-2 border border-gray-600 hover:border-[#e63946] transition-all duration-200 cursor-pointer  hover:bg-gray-700"
      onClick={() => setIsModalOpen(true)}
    >
      <div className="flex flex-col ">
        <div className="mb-2 md:mb-0">
          <h3 className="text-lg font-semibold text-white mb-1">
            {exercise.exercise}
          </h3>

          <div className="flex justify-between gap-1">
            <div className="flex gap-2">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#e63946] rounded-full"></span>
                  {exercise.sets.length} series
                </span>
              </div>

              <div className="flex items-center gap-1 text-sm text-gray-400">
                <span className="w-2 h-2 bg-gray-400 rounded-full" />
                <span className="flex items-center gap-1 w-full">
                  {exercise.weight === 0
                    ? "sin peso configurado"
                    : `${exercise.weight} kg`}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="inline-block bg-[#e63946] text-white text-xs font-semibold px-3 py-1 rounded-full">
                #{index + 1}
              </span>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ExerciseModal
          onClose={() => {
            setIsModalOpen(false);
          }}
          exercise={exercise}
          indexExercise={index}
        />
      )}
    </div>
  );
};

export default ExerciseCard;
