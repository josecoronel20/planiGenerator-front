import { useUserStore } from '@/store/User'
import { Activity, SquareMenu } from 'lucide-react'
import React from 'react'

const Header = ({setIsRoutineOpen}:{setIsRoutineOpen: (isOpen: boolean) => void}) => {
  const { user } = useUserStore()

  if (!user) return null;

  return (
    <div className="text-center mb-8 flex flex-col gap-4">
            <div className="w-16 h-16 bg-[#e63946] rounded-full flex items-center justify-center mx-auto">
              <Activity className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">
              Configuración de Rutina
            </h1>
            <p className="text-gray-400">
              Completa tus datos para crear una rutina personalizada con <span className="text-[#e63946]">I.A</span>
            </p>
            {user.workout && user.workout.length > 0 && (
              <button
                className="border border-[#e63946] text-white px-4 py-2 rounded-md cursor-pointer flex items-center gap-2 w-full justify-center hover:bg-[#e63946]/80 transition-all duration-200"
                onClick={() => setIsRoutineOpen(true)}
              >
                <SquareMenu className="h-4 w-4" />
                <span>ver rutina actual</span>
              </button>
            )}
          </div>
  )
}

export default Header