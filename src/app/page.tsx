"use client"

import { useState } from "react"
import { Dumbbell, Clock, Target } from "lucide-react"

interface Exercise {
  name: string
  sets: number
  reps?: string
  duration?: string
}

interface DayRoutine {
  day: number
  title: string
  exercises: Exercise[]
  totalTime: string
}

export default function Home() {
  const [selectedDay, setSelectedDay] = useState(1)

  // Datos de ejemplo para las rutinas semanales
  const weeklyRoutines: DayRoutine[] = [
    {
      day: 1,
      title: "Pecho y Tríceps",
      totalTime: "45 min",
      exercises: [
        { name: "Press de banca", sets: 4, reps: "8-10" },
        { name: "Press inclinado con mancuernas", sets: 3, reps: "10-12" },
        { name: "Aperturas con mancuernas", sets: 3, reps: "12-15" },
        { name: "Fondos en paralelas", sets: 3, reps: "8-12" },
        { name: "Press francés", sets: 3, reps: "10-12" },
        { name: "Extensiones de tríceps en polea", sets: 3, reps: "12-15" },
      ],
    },
    {
      day: 2,
      title: "Espalda y Bíceps",
      totalTime: "50 min",
      exercises: [
        { name: "Dominadas", sets: 4, reps: "6-10" },
        { name: "Remo con barra", sets: 4, reps: "8-10" },
        { name: "Remo con mancuerna", sets: 3, reps: "10-12" },
        { name: "Jalones al pecho", sets: 3, reps: "10-12" },
        { name: "Curl con barra", sets: 3, reps: "10-12" },
        { name: "Curl martillo", sets: 3, reps: "12-15" },
      ],
    },
    {
      day: 3,
      title: "Piernas",
      totalTime: "55 min",
      exercises: [
        { name: "Sentadillas", sets: 4, reps: "8-12" },
        { name: "Peso muerto rumano", sets: 4, reps: "8-10" },
        { name: "Prensa de piernas", sets: 3, reps: "12-15" },
        { name: "Zancadas", sets: 3, reps: "10-12 c/u" },
        { name: "Curl femoral", sets: 3, reps: "12-15" },
        { name: "Extensiones de cuádriceps", sets: 3, reps: "12-15" },
        { name: "Elevaciones de gemelos", sets: 4, reps: "15-20" },
      ],
    },
    {
      day: 4,
      title: "Descanso Activo",
      totalTime: "30 min",
      exercises: [
        { name: "Caminata ligera", sets: 1, duration: "20 min" },
        { name: "Estiramientos", sets: 1, duration: "10 min" },
      ],
    },
    {
      day: 5,
      title: "Hombros y Abdomen",
      totalTime: "40 min",
      exercises: [
        { name: "Press militar", sets: 4, reps: "8-10" },
        { name: "Elevaciones laterales", sets: 3, reps: "12-15" },
        { name: "Elevaciones frontales", sets: 3, reps: "12-15" },
        { name: "Pájaros", sets: 3, reps: "12-15" },
        { name: "Plancha", sets: 3, duration: "30-60 seg" },
        { name: "Crunches", sets: 3, reps: "15-20" },
        { name: "Bicicleta", sets: 3, reps: "20 c/u" },
      ],
    },
    {
      day: 6,
      title: "Cardio y Core",
      totalTime: "35 min",
      exercises: [
        { name: "Burpees", sets: 4, reps: "10-15" },
        { name: "Mountain climbers", sets: 3, reps: "20 c/u" },
        { name: "Jumping jacks", sets: 3, duration: "30 seg" },
        { name: "Plancha lateral", sets: 3, duration: "20-30 seg c/u" },
        { name: "Russian twists", sets: 3, reps: "20 c/u" },
      ],
    },
    {
      day: 7,
      title: "Descanso Total",
      totalTime: "0 min",
      exercises: [{ name: "Día de descanso completo", sets: 1, duration: "Todo el día" }],
    },
  ]

  const currentRoutine = weeklyRoutines.find((routine) => routine.day === selectedDay) || weeklyRoutines[0]

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Mi Rutina Semanal</h1>
          <p className="text-gray-400">Selecciona un día para ver tu entrenamiento</p>
        </div>

        {/* Day Selector */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {weeklyRoutines.map((routine) => (
              <button
                key={routine.day}
                onClick={() => setSelectedDay(routine.day)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                  selectedDay === routine.day
                    ? "bg-gray-800 border-2 border-[#e63946] text-[#e63946] shadow-lg"
                    : "bg-gray-700 border-2 border-transparent text-gray-300 hover:bg-gray-600 hover:text-white"
                }`}
              >
                Día {routine.day}
              </button>
            ))}
          </div>
        </div>

        {/* Routine Details */}
        <div className="bg-gray-900 rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-700">
          {/* Routine Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-[#e63946] mb-2">{currentRoutine.title}</h2>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{currentRoutine.totalTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  <span>{currentRoutine.exercises.length} ejercicios</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-[#e63946] rounded-full">
              <Dumbbell className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Exercise List */}
          <div className="space-y-4">
            {currentRoutine.exercises.map((exercise, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-4 border border-gray-600 hover:border-[#e63946] transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-2 md:mb-0">
                    <h3 className="text-lg font-semibold text-white mb-1">{exercise.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-[#e63946] rounded-full"></span>
                        {exercise.sets} {exercise.sets === 1 ? "serie" : "series"}
                      </span>
                      {exercise.reps && (
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                          {exercise.reps} reps
                        </span>
                      )}
                      {exercise.duration && (
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                          {exercise.duration}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-[#e63946] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      #{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Info */}
          {currentRoutine.day !== 7 && (
            <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-600">
              <p className="text-sm text-gray-400 text-center">
                💡 <span className="text-[#e63946] font-semibold">Tip:</span> Descansa 60-90 segundos entre series y
                mantén una buena forma en cada ejercicio.
              </p>
            </div>
          )}
        </div>

        {/* Navigation Hint */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">Usa los botones de arriba para navegar entre los días de la semana</p>
        </div>
      </div>
    </div>
  )
}
