import { AlertCircle, Calendar } from "lucide-react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "@/utils/types/formRoutineTypes";
import React from "react";

interface Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const TrainingDaysInput = ({ register, errors }: Props) => {
  return (
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
          {errors.trainingDays?.message as string}
        </p>
      )}
    </div>
  );
};

export default TrainingDaysInput;
