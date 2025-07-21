import { FormData } from "@/types/formRoutineTypes";
import { UseFormRegister } from "react-hook-form";
import React from "react";

interface Props {
  register: UseFormRegister<FormData>;
}

const InjuriesInput = ({ register }: Props) => {
  return (
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
        Ejemplo: dolor de rodilla, lesión en el hombro, problemas de espalda,
        etc.
      </p>
    </div>  
  );
};

export default InjuriesInput;
