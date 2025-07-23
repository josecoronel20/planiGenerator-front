import { z } from "zod"

export const formSchema = z.object({
    trainingDays: z.string().min(1, { message: "Los días de entrenamiento son obligatorios" }),
    split: z.string().min(1, { message: "El split es obligatorio" }),
    experience: z.string().min(1, { message: "El nivel de experiencia es obligatorio" }),
    priority: z.string().min(1, { message: "La prioridad de entrenamiento es obligatoria" }),
    injuries: z.string().optional(),
})