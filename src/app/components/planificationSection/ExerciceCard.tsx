import React from "react";

const ExerciceCard = ({
  exercise,
  index,
}: {
  exercise: { exercise: string; sets: number };
  index: number;
}) => {
  console.log(exercise.exercise);
  console.log(exercise.sets);
  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-600 hover:border-[#e63946] transition-all duration-200">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-2 md:mb-0">
          <h3 className="text-lg font-semibold text-white mb-1">
            {exercise.exercise}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-[#e63946] rounded-full"></span>
              {exercise.sets} series
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
  );
};

export default ExerciceCard;
