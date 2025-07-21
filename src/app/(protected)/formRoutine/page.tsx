"use client";

import { Dumbbell, Loader2 } from "lucide-react";
import { FormData } from "@/types/formRoutineTypes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/zodSchemas/formRoutineSchema";
import { buildUserPrompt } from "@/utils/buildUserPrompt";
import { useState } from "react";
import ModalRoutine from "./formRoutineComponents/ModalRoutine";
import { useUserStore } from "@/store/User";
import { User } from "@/types/user";
import { useRouter } from "next/navigation";
import Header from "./formRoutineComponents/Header";
import TrainingDaysInput from "./formRoutineComponents/TrainingDaysInput";
import SplitInput from "./formRoutineComponents/SplitInput";
import ExperienceInput from "./formRoutineComponents/ExperienceInput";
import PriorityInput from "./formRoutineComponents/PriorityInput";
import InjuriesInput from "./formRoutineComponents/InjuriesInput";
import workoutGenerator from "@/api/workoutGenerator";
import LoadingTips from "./formRoutineComponents/LoadingTips";

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
  const router = useRouter();
  const [generatingWorkout, setGeneratingWorkout] = useState(false);

  const onSubmit = async (data: FormData) => {
    setGeneratingWorkout(true);
    const prompt = buildUserPrompt(data);
    const response = await workoutGenerator(prompt);


    const user:User = useUserStore.getState().user as User;
    if (response.data) {
      useUserStore.setState({ user: { ...user, workout: response.data } });
      console.log(response.data);
      setGeneratingWorkout(false);
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-black p-4 pt-20">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-900 rounded-2xl shadow-2xl p-4 md:p-8 border border-gray-700">
          {/* Header */}
          <Header setIsRoutineOpen={setIsRoutineOpen} />

          {isRoutineOpen && (
            <ModalRoutine onClose={() => setIsRoutineOpen(false)} />
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Training Days */}
              <TrainingDaysInput register={register} errors={errors} />

              {/* Split */}
              <SplitInput register={register} errors={errors} />

              {/* Experience */}
              <ExperienceInput register={register} errors={errors} />

              {/* Priority */}
              <PriorityInput register={register} errors={errors} />
            </section>

            {/* Injuries */}
            <InjuriesInput register={register} />

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

          {generatingWorkout && (
            <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-white/50 backdrop-blur-xs flex-col gap-4">
              <div className="flex items-center justify-center">
                <p className="text-sm text-[#e63946] font-semibold text-center">
                  Generando rutina...
                </p> 
                <Loader2 className="animate-spin text-[#e63946]" />
              </div>

              <LoadingTips />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
