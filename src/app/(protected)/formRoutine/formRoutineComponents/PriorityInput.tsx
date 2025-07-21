import { priorityOptions } from "@/constants/optionsForm";
import { FormData } from "@/types/formRoutineTypes";
    import { AlertCircle, Target } from "lucide-react";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const PriorityInput = ({ register, errors }: Props) => {
  return (
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
          {errors.priority?.message as string}
        </p>
      )}
    </div>  
  );
};

export default PriorityInput;
