"use client";

import { X, Plus, Minus, Info, LoaderPinwheel } from "lucide-react";
import { Exercise } from "@/types/workout";
import { useEffect, useState } from "react";
import { updateExercise } from "@/api/user";
import { useUserStore } from "@/store/User";
import Weight from "./Weight";

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
    weight: initialWeight,
  } = exercise;
  const user = useUserStore((state) => state.user);
  const [weight, setWeight] = useState(initialWeight);
  const [reps, setReps] = useState(initialReps);
  const [canProgressWeight, setCanProgressWeight] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  

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
  const handleSave = async () => {
    setSaving(true);
    if (!user || !user.workout) return;
    
    const exerciseUpdated = {
      ...exercise,
      sets: reps,
      weight: weight,
    };

    const response = await updateExercise(exerciseUpdated);

    //if response is 200, update the user on store
    if (response.status === 200) {
      setIsEditing(false);
      setSaving(false);

      const workoutUpdated = user.workout.map((day:Exercise[]) => {
        return day.map((exercise:Exercise) =>
          exercise.id === exerciseUpdated.id ? exerciseUpdated : exercise
        );
      });

      useUserStore.setState({ user: { ...user, workout: workoutUpdated } });
      console.log("usuario actualizado", response);
    } else{
      console.log("error al actualizar el ejercicio", response);
    }
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

        <div className="grid grid-cols-2 gap-2 px-4 py-2">
          <Weight weight={weight} setWeight={setWeight} setIsEditing={setIsEditing} />

          <div className="flex items-center gap-2 w-fit mx-auto">
            <button
              disabled={!isEditing || saving}
              onClick={handleSave}
              className={`
              bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm
              ${!isEditing || saving ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              Guardar
            </button>
            {saving && <LoaderPinwheel className="h-4 w-4 animate-spin" />}
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
