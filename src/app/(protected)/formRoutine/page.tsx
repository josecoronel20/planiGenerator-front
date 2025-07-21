"use client";

import { Dumbbell } from "lucide-react";
import { FormData } from "@/utils/types/formRoutineTypes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/utils/zodSchemas/formRoutineSchema";
import promptGenerator from "@/utils/promptGenerator";
import { useState } from "react";
import ModalRoutine from "./formRoutineComponents/ModalRoutine";
import { createPlanning } from "@/utils/api/user";
import { useUserStore } from "@/store/User";
import { User } from "@/utils/types/user";
import { useRouter } from "next/navigation";
import Header from "./formRoutineComponents/Header";
import TrainingDaysInput from "./formRoutineComponents/TrainingDaysInput";
import SplitInput from "./formRoutineComponents/SplitInput";
import ExperienceInput from "./formRoutineComponents/ExperienceInput";
import PriorityInput from "./formRoutineComponents/PriorityInput";
import InjuriesInput from "./formRoutineComponents/InjuriesInput";

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
  

  const onSubmit = async (data: FormData) => {
    const prompt = promptGenerator(data);
    console.log(prompt);

    const planning = [
      [
        {
          "id": "ex01",
          "exercise": "press inclinado con mancuernas",
          "sets": [
            14,
            12,
            14,
            10
          ],
          "weight": 33
        },
        {
          "id": "ex02",
          "exercise": "cruce de poleas alto a bajo",
          "sets": [
            11,
            8,
            8
          ],
          "weight": 0
        },
        {
          "id": "ex03",
          "exercise": "fondos asistidos en máquina",
          "sets": [
            8,
            8,
            8
          ],
          "weight": 38.5
        },
        {
          "id": "ex04",
          "exercise": "extensiones de tríceps con cuerda",
          "sets": [
            12,
            12,
            12,
            10
          ],
          "weight": 35
        },
        {
          "id": "ex05",
          "exercise": "elevaciones laterales con mancuernas sentado",
          "sets": [
            11,
            9,
            8
          ],
          "weight": 27.5
        }
      ],
      [
        {
          "id": "ex06",
          "exercise": "jalones al pecho con agarre neutro",
          "sets": [
            10,
            8,
            8,
            8
          ],
          "weight": 0
        },
        {
          "id": "ex07",
          "exercise": "remo en máquina Hammer Strength",
          "sets": [
            8,
            8,
            8
          ],
          "weight": 0
        },
        {
          "id": "ex08",
          "exercise": "face pulls con cuerda",
          "sets": [
            8,
            8,
            8
          ],
          "weight": 0
        },
        {
          "id": "ex09",
          "exercise": "curl bíceps barra Z",
          "sets": [
            8,
            8,
            8,
            8
          ],
          "weight": 0
        },
        {
          "id": "ex10",
          "exercise": "curl concentrado con mancuerna",
          "sets": [
            8,
            8,
            8
          ],
          "weight": 0
        }
      ],
      [
        {
          "id": "ex11",
          "exercise": "prensa de piernas",
          "sets": [
            8,
            8,
            8,
            8
          ],
          "weight": 0
        },
        {
          "id": "ex12",
          "exercise": "extensiones de cuádriceps",
          "sets": [
            8,
            8,
            8
          ],
          "weight": 0
        },
        {
          "id": "ex13",
          "exercise": "peso muerto rumano con mancuernas",
          "sets": [
            8,
            8,
            8
          ],
          "weight": 0
        },
        {
          "id": "ex14",
          "exercise": "elevación de talones sentado",
          "sets": [
            8,
            8,
            8
          ],
          "weight": 0
        },
        {
          "id": "ex15",
          "exercise": "abdominales en máquina",
          "sets": [
            8,
            8
          ],
          "weight": 0
        }
      ],
      [
        {
          "id": "ex16",
          "exercise": "press inclinado en máquina convergente",
          "sets": [
            8,
            8,
            8,
            8
          ],
          "weight": 0
        },
        {
          "id": "ex17",
          "exercise": "cruce de poleas desde banco inclinado",
          "sets": [
            8,
            8,
            8
          ],
          "weight": 0
        },
        {
          "id": "ex18",
          "exercise": "extensión de tríceps con barra recta en polea",
          "sets": [
            8,
            8,
            8,
            8
          ],
          "weight": 0
        },
        {
          "id": "ex19",
          "exercise": "patada de tríceps con mancuerna",
          "sets": [
            8,
            8,
            8
          ],
          "weight": 0
        },
        {
          "id": "ex20",
          "exercise": "elevaciones frontales con cuerda",
          "sets": [
            8,
            8
          ],
          "weight": 0
        }
      ],
      [
        {
          "id": "ex21",
          "exercise": "remo bajo con polea",
          "sets": [
            8,
            8,
            8,
            8
          ],
          "weight": 0
        },
        {
          "id": "ex22",
          "exercise": "jalones con cuerda al rostro (face pulls)",
          "sets": [
            8,
            8,
            8
          ],
          "weight": 0
        },
        {
          "id": "ex23",
          "exercise": "curl en polea baja con cuerda",
          "sets": [
            8,
            8,
            8,
            8
          ],
          "weight": 0
        },
        {
          "id": "ex24",
          "exercise": "curl martillo en banco inclinado",
          "sets": [
            8,
            8,
            8
          ],
          "weight": 0
        },
        {
          "id": "ex25",
          "exercise": "plancha abdominal con carga",
          "sets": [
            8,
            8,
            8
          ],
          "weight": 0
        }
      ]
    ]
    
    const user:User = useUserStore.getState().user as User;

    const response = await createPlanning(planning, user.id);

    if (response.status === 200) {
      useUserStore.setState({ user: { ...user, planning: planning } });
      router.push("/");
    } else {
      console.log("Error creating planning");
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
        </div>
      </div>
    </div>
  );
}
