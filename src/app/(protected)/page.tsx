"use client"

import { useState } from "react"
import { WorkoutDay, Workout } from "@/types/workout"
import DaySelector from "./homeComponents/workoutSection/DaySelector"
import RoutineDetails from "./homeComponents/workoutSection/RoutineDetails"
import { useUserStore } from "@/store/User"
import RoutineDetailsSkeleton from "./homeComponents/workoutSection/RoutineDetailsSkeleton"

export default function Home() {
  const [selectedDay, setSelectedDay] = useState(1)
  const user = useUserStore((state) => state.user)
  const userworkout: Workout = user?.workout || []
  const currentRoutine:WorkoutDay = userworkout[selectedDay - 1] || []

  return (
    <div className="min-h-screen bg-black text-white p-4 pt-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Mi Rutina Semanal</h1>
          <p className="text-gray-400">{user?.workout && user?.workout.length > 0 ? "Selecciona un día para ver tu entrenamiento" : "Cargando planificacion..."}</p>
        </div>

        {/* Day Selector */}
        <DaySelector userworkout={userworkout} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />

        {/* Routine Details */}
        {user?.workout && user?.workout.length > 0 ? (
          <RoutineDetails selectedDay={selectedDay} currentRoutine={currentRoutine} />
        ) : (
          <RoutineDetailsSkeleton />
        )}

        {/* Navigation Hint */}
        {user?.workout && user?.workout.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">Usa los botones de arriba para navegar entre los días de la semana</p>
          </div>
        )}
      </div>
    </div>
  )
}
