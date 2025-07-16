"use client"

import { useEffect, useState } from "react"
import { day, planning } from "@/utils/types/planning"
import DaySelector from "./homeComponents/planningSection/DaySelector"
import RoutineDetails from "./homeComponents/planningSection/RoutineDetails"
import { useUserStore } from "@/store/User"

export default function Home() {
  const [selectedDay, setSelectedDay] = useState(1)
  const user = useUserStore((state) => state.user)
  const userplanning: planning = user?.planning || []
  const currentRoutine:day = userplanning[selectedDay - 1] || []

  useEffect(() => {
    console.log("userplanning", userplanning);  
  }, [userplanning])

  return (
    <div className="min-h-screen bg-black text-white p-4 pt-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Mi Rutina Semanal</h1>
          <p className="text-gray-400">Selecciona un día para ver tu entrenamiento</p>
        </div>

        {/* Day Selector */}
        <DaySelector userplanning={userplanning} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />

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
