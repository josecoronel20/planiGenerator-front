import { Dumbbell, Target } from "lucide-react";
import React from "react";
import ExerciseCard from "./ExerciseCard";
import { Exercise } from "@/types/workout";
import Link from "next/link";

const RoutineDetails = ({
  selectedDay,
  currentRoutine,
}: {
  selectedDay: number;
  currentRoutine: Exercise[];
}) => {
  return (
    <section className="bg-gray-900 rounded-2xl shadow-2xl p-4 md:p-8 border border-gray-700">
      {/* Routine Header */}
      <div className="flex  md:flex-row md:items-center justify-between mb-6">
       {currentRoutine.length > 0 && (
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#e63946] mb-2">
            Día {selectedDay}
          </h2>
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              {currentRoutine.length > 0 && (
                <span>{currentRoutine.length} ejercicios</span>
              )}
            </div>
          </div>
        </div>
        )}
        <div className="flex items-center justify-center w-16 h-16 bg-[#e63946] rounded-full">
          <Dumbbell className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Exercise List */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {currentRoutine.length > 0 ? (
          currentRoutine.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} index={index} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-gray-400 text-center">Aun no tienes una rutina, genera una para empezar a entrenar</p>
            <Link
              href="/formRoutine"
              className="bg-[#e63946] text-white px-4 py-2 rounded-md hover:bg-[#e63946]/80 transition-all duration-300 hover:scale-105"
            >
              Genera tu rutina
            </Link>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-600">
        <p className="text-sm text-gray-400 text-center">
          💡 <span className="text-[#e63946] font-semibold">Tip:</span> Descansa
          60-90 segundos entre series y mantén una buena forma en cada
          ejercicio.
        </p>
      </div>
    </section>
  );
};

export default RoutineDetails;
