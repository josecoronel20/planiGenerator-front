"use client"

import { useState } from "react"
import { useGetMe } from "@/hooks/useGetMe"
import { Planification } from "@/utils/types/planification"
import DaySelector from "./components/planificationSection/DaySelector"
import RoutineDetails from "./components/planificationSection/RoutineDetails"

export default function Home() {
  const [selectedDay, setSelectedDay] = useState(1)
  const user = useGetMe()
  const userPlanification: Planification = user?.planification || {}
  const currentRoutine = userPlanification[selectedDay] || []

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Mi Rutina Semanal</h1>
          <p className="text-gray-400">Selecciona un día para ver tu entrenamiento</p>
        </div>

        {/* Day Selector */}
        <DaySelector userPlanification={userPlanification} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />

        {/* Routine Details */}
        <RoutineDetails selectedDay={selectedDay} currentRoutine={currentRoutine} />

        {/* Navigation Hint */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">Usa los botones de arriba para navegar entre los días de la semana</p>
        </div>
      </div>
    </div>
  )
}
