import { splitOptions } from "@/constants/optionsForm";
import { FormData } from "@/types/formRoutineTypes";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { AlertCircle } from "lucide-react";
import React from "react";

interface Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const SplitInput = ({ register, errors }: Props) => {
  return (
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
  );
};

export default SplitInput;
