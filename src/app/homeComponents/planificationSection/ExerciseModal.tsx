"use client";

import { useState } from "react";
import { X, Plus, Minus, Edit3, Info } from "lucide-react";
import { Exercise } from "@/utils/types/planification";

interface ExerciseModalProps {
  isOpen: boolean;
  onClose: () => void;
  exercise: Exercise;
}

export default function ExerciseModal({
  isOpen,
  onClose,
  exercise,
}: ExerciseModalProps) {
  const {
    exercise: exerciseName,
    sets: initialReps,
    wheight: initialWeight,
  } = exercise;
  const [weight, setWeight] = useState(initialWeight);
  const [reps, setReps] = useState(initialReps);
  const [isEditingWeight, setIsEditingWeight] = useState(false);
  const [tempWeight, setTempWeight] = useState(weight.toString());

  const updateReps = (seriesIndex: number, change: number) => {
    const newReps = [...reps];
    const newValue = Math.max(0, Math.min(20, newReps[seriesIndex] + change));
    newReps[seriesIndex] = newValue;
    setReps(newReps);
  };

  const handleWeightSave = () => {
    const newWeight = Number.parseFloat(tempWeight);
    if (!isNaN(newWeight) && newWeight > 0) {
      setWeight(newWeight);
    }
    setIsEditingWeight(false);
  };

  const handleWeightCancel = () => {
    setTempWeight(weight.toString());
    setIsEditingWeight(false);
  };

  const canProgressWeight = reps.every((rep) => rep >= 12);

  const handleProgressWeight = () => {
    setWeight(weight + 2.5);
    setReps([8, 8, 8, 8]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70  flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-xl border border-gray-700 w-full max-w-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-white">{exerciseName}</h2>
            <div className="flex items-center gap-2 mt-1">
              {isEditingWeight ? (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={tempWeight}
                    onChange={(e) => setTempWeight(e.target.value)}
                    className="w-16 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#e63946]"
                    step="0.5"
                    min="0"
                  />
                  <span className="text-sm text-gray-400">kg</span>
                  <button
                    onClick={handleWeightSave}
                    className="text-green-400 hover:text-green-300 text-xs"
                  >
                    ✓
                  </button>
                  <button
                    onClick={handleWeightCancel}
                    className="text-red-400 hover:text-red-300 text-xs cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-[#e63946] font-semibold">
                    {weight} kg
                  </span>
                  <button
                    onClick={() => setIsEditingWeight(true)}
                    className="text-gray-400 hover:text-[#e63946] transition-colors"
                  >
                    <Edit3 className="h-3 w-3" />
                  </button>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body - Series */}
        <div className="p-4">
          <div className="space-y-3">
            {reps.map((rep, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-800 rounded-lg p-3"
              >
                <span className="text-white font-medium">
                  Serie {index + 1}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateReps(index, -1)}
                    className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
                    disabled={rep <= 0}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span
                    className={`w-8 text-center font-bold ${
                      rep >= 12
                        ? "text-green-400"
                        : rep >= 10
                        ? "text-yellow-400"
                        : "text-white"
                    }`}
                  >
                    {rep}
                  </span>
                  <button
                    onClick={() => updateReps(index, 1)}
                    className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
                    disabled={rep >= 20}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Weight Button */}
          {canProgressWeight && (
            <div className="mt-4">
              <button
                onClick={handleProgressWeight}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                ¡Subir peso a {weight + 2.5} kg!
              </button>
            </div>
          )}
        </div>

        {/* Footer - Tip */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-start gap-2">
            <Info className="h-4 w-4 text-[#e63946] mt-0.5 flex-shrink-0" />
            <p className="text-xs text-gray-400 leading-relaxed">
              <span className="text-[#e63946] font-semibold">
                Sobrecarga progresiva:
              </span>{" "}
              Comenzá con 8 reps por serie. Aumentá las reps semanalmente hasta
              llegar a 12 en todas las series, luego subí 2.5kg y volvé a 8
              reps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
