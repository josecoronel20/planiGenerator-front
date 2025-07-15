"use client";

import {
  Calendar,
  Target,
  AlertCircle,
  Dumbbell,
  Activity,
  SquareMenu,
} from "lucide-react";
import { FormData } from "@/utils/types/formRoutineTypes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/utils/zodSchemas/formRoutineSchema";
import promptGenerator from "@/utils/promptGenerator";
import { useState } from "react";
import ModalRoutine from "./formRoutineComponents/ModalRoutine";

export default function FormRoutine() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      trainingDays: "",
      split: "random",
      experience: "",
      priority: "",
      injuries: "",
    },
    resolver: zodResolver(formSchema),
  });
  const [isRoutineOpen, setIsRoutineOpen] = useState(false);

  const experienceOptions = [
    { value: "beginner", label: "Principiante" },
    { value: "intermediate", label: "Intermedio" },
    { value: "advanced", label: "Avanzado" },
  ];

  const priorityOptions = [
    { value: "full", label: "Cuerpo completo" },
    { value: "ppl", label: "Push Pull Legs" },
    { value: "up-low", label: "Upper Lower" },
    { value: "bro", label: "Bro Split (1 musculo x dia)" },
    { value: "push", label: "Push (Pecho, hombros, tríceps)" },
    { value: "pull", label: "Pull (Espalda, bíceps)" },
    { value: "legs", label: "Piernas" },
  ];

  const splitOptions = [
    { value: "random", label: "Random" },
    { value: "ppl", label: "Push Pull Legs" },
    { value: "ul", label: "Upper / Lower" },
    { value: "arnold", label: "Arnold Split" },
    { value: "bro", label: "Bro Split" },
    { value: "fullbody", label: "Full Body" },
    { value: "tpb", label: "Torso / Pierna / Brazo" },
    { value: "tp", label: "Torso / Pierna clásico" },
    { value: "phul", label: "Power Hypertrophy Upper Lower" },
    { value: "phat", label: "Power Hypertrophy Adaptive Training" },
    { value: "pushpull", label: "Rotación empuje-tracción" },
  ];

  const onSubmit = (data: FormData) => {
    const prompt = promptGenerator(data);
    console.log(prompt);
  };

  return (
    <div className="min-h-screen bg-black p-4 pt-20">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-900 rounded-2xl shadow-2xl p-4 md:p-8 border border-gray-700">
          {/* Header */}
          <div className="text-center mb-8 flex flex-col gap-4">
            <div className="w-16 h-16 bg-[#e63946] rounded-full flex items-center justify-center mx-auto">
              <Activity className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">
              Configuración de Rutina
            </h1>
            <p className="text-gray-400">
              Completa tus datos para crear una rutina personalizada
            </p>
            <button
              className="border border-[#e63946] text-white px-4 py-2 rounded-md cursor-pointer flex items-center gap-2 w-full justify-center hover:bg-[#e63946]/80 transition-all duration-200"
              onClick={() => setIsRoutineOpen(true)}
            >
              <SquareMenu className="h-4 w-4" />
              <span>ver rutina actual</span>
            </button>
          </div>

          {isRoutineOpen && (
            <ModalRoutine onClose={() => setIsRoutineOpen(false)} />
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Training Days */}
              <div>
                <label
                  htmlFor="trainingDays"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Días de entrenamiento por semana *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="trainingDays"
                    type="number"
                    min="1"
                    max="7"
                    {...register("trainingDays")}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.trainingDays
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-600 focus:border-[#e63946] focus:ring-[#e63946]"
                    }`}
                    placeholder="Ej: 4"
                  />
                </div>
                {errors.trainingDays && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.trainingDays?.message}
                  </p>
                )}
              </div>

              {/* Split */}
              <div>
                <label
                  htmlFor="split"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Split
                </label>
                <select
                  id="split"
                  {...register("split")}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.split
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-600 focus:border-[#e63946] focus:ring-[#e63946]"
                  }`}
                >
                  <option value="">Selecciona el split</option>
                  {splitOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="bg-gray-800"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.split && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.split?.message}
                  </p>
                )}
              </div>

              {/* Experience */}
              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nivel de experiencia *
                </label>
                <select
                  id="experience"
                  {...register("experience")}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.experience
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-600 focus:border-[#e63946] focus:ring-[#e63946]"
                  }`}
                >
                  <option value="">Selecciona tu nivel</option>
                  {experienceOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="bg-gray-800"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.experience?.message}
                  </p>
                )}
              </div>

              {/* Priority */}
              <div>
                <label
                  htmlFor="priority"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Prioridad de entrenamiento *
                </label>
                <div className="relative">
                  <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    id="priority"
                    {...register("priority")}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.priority
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-600 focus:border-[#e63946] focus:ring-[#e63946]"
                    }`}
                  >
                    <option value="">Selecciona tu prioridad</option>
                    {priorityOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-gray-800"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.priority && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.priority?.message}
                  </p>
                )}
              </div>
            </section>

            {/* Injuries */}
            <div>
              <label
                htmlFor="injuries"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Lesiones o limitaciones (opcional)
              </label>
              <textarea
                id="injuries"
                rows={3}
                {...register("injuries")}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-[#e63946] focus:ring-[#e63946] transition-all duration-200 resize-none"
                placeholder="Describe cualquier lesión o limitación que debamos considerar..."
              />
              <p className="mt-1 text-xs text-gray-500">
                Ejemplo: dolor de rodilla, lesión en el hombro, problemas de
                espalda, etc.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#e63946] hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#e63946] focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-2"
            >
              <Dumbbell className="h-5 w-5" />
              Crear Mi Rutina
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-600">
            <p className="text-xs text-gray-400 text-center">
              * Campos obligatorios. La información proporcionada se utilizará
              para crear una rutina personalizada adaptada a tus necesidades y
              objetivos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
