import { experienceOptions } from "@/constants/optionsForm";
import { FormData } from "@/utils/types/formRoutineTypes";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import React from "react";
import { AlertCircle } from "lucide-react";

interface Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const ExperienceInput = ({ register, errors }: Props) => {
  return (
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
          {errors.experience?.message as string}
        </p>
      )}
    </div>
  );
};

export default ExperienceInput;
