"use client";

import { X, Plus, Minus, Info } from "lucide-react";
import { Exercise } from "@/utils/types/planification";
import { useEffect, useState } from "react";
import { useGetMe } from "@/hooks/useGetMe";
import { updateUser } from "@/utils/api/user";

interface ExerciseModalProps {
  onClose: () => void;
  exercise: Exercise;
  indexExercise: number;
}

export default function ExerciseModal({
  onClose,
  exercise,
}: ExerciseModalProps) {
  const {
    exercise: exerciseName,
    sets: initialReps,
    wheight: initialWeight,
  } = exercise;
  const data = useGetMe();
  const user = data;
  const [weight, setWeight] = useState(initialWeight);
  const [reps, setReps] = useState(initialReps);
  const [canProgressWeight, setCanProgressWeight] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Handle reps
  const handleReps = (index: number, value: number) => {
    const newReps = [...reps];
    newReps[index] = value;
    setReps(newReps);
    setIsEditing(true);
  };

  // Handle progress weight
  useEffect(() => {
    setCanProgressWeight(reps.every((rep) => rep >= 12));
  }, [reps]);

  // Handle save
  const handleSave = () => {
    const exerciseUpdated = {
      ...exercise,
      sets: reps,
      wheight: weight,
    };

    console.log(user);

    const userUpdated = {
      ...user,
      planification: user.planification ? Object.fromEntries(
        Object.entries(user.planification).map(([day, exercises]) => {
          const updatedExercises = (exercises as Exercise[]).map((exercise) =>
            exercise.id === exerciseUpdated.id ? exerciseUpdated : exercise
          )
          return [day, updatedExercises]
        })
      ) : user.planification,
    };

    updateUser(userUpdated);

    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70  flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-xl border border-gray-700 w-full max-w-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-white">{exerciseName}</h2>
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

        <div className="flex justify-evenly py-2">
          <div className="flex items-center gap-2 w-fit">
            <button
              onClick={() => {
                setWeight(weight - 1);
                setIsEditing(true);
              }}
              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span>{weight} kg</span>
            <button
              onClick={() => {
                setWeight(weight + 1);
                setIsEditing(true);
              }}
              className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 w-fit">
            <button
              disabled={!isEditing}
              onClick={handleSave}
              className={`
              bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm
              ${!isEditing ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              Guardar
            </button>
          </div>
        </div>

        {canProgressWeight && (
          <div className="p-4 border-t border-gray-700 flex gap-2">
            {/* Progress Weight */}
            <button
              onClick={() => {
                setWeight(weight + 2.5);
                setIsEditing(true);
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm "
            >
              Subir peso a {weight + 2.5} kg
            </button>

            {/* Reset reps*/}
            <button
              onClick={() => {
                setReps([8, 8, 8, 8]);
                setIsEditing(true);
              }}
              className="w-full bg-[#e63946] hover:bg-[#e63946]/80 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Resetear reps a 8
            </button>
          </div>
        )}

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
                    onClick={() => {
                      handleReps(index, rep - 1);
                    }}
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
                    onClick={() => {
                      handleReps(index, rep + 1);
                    }}
                    className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
                    disabled={rep >= 20}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
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
