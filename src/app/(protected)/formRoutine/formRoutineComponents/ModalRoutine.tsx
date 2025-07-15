"use client";

import { useUserStore } from "@/store/User";
import { X } from "lucide-react";

export default function ModalRoutine({ onClose }: { onClose: () => void }) {
  const user = useUserStore((state) => state.user);
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black/70  flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-xl border border-gray-700 w-full max-w-xl p-2">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold text-white">Rutina actual</h2>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <section className="overflow-y-scroll max-h-[500px] flex flex-col gap-4 pr-2">
          {user.planning ?
            Object.entries(user.planning).map(([day, exercises]) => (
              <div key={day}>
                <h3 className="text-md font-bold text-[#e63946]">día {day}</h3>

                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-5 gap-2 justify-items-center">
                    <span className="text-sm text-white font-bold col-span-2">ejercicio</span>
                    <span className="text-sm text-white font-bold">peso</span>
                    <span className="text-sm text-white font-bold col-span-2">reps x serie</span>
                  </div>

                  {exercises.map((exercise) => (
                    <div key={exercise.id} className="grid grid-cols-5 gap-2 justify-items-center border border-gray-700 rounded-md p-2">
                      <span className="text-xs text-white col-span-2 my-auto">
                        {exercise.exercise}
                      </span>
                      <span className="text-xs text-white my-auto">
                        {exercise.wheight} kg
                      </span>
                      <span className="text-xs text-white col-span-2 my-auto">
                        {exercise.sets.map((set) => set).join(" - ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )): <div className="text-white text-center">Aún no hay rutina generada</div>}
        </section>
      </div>
    </div>
  );
}
