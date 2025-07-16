import { planning } from "@/utils/types/planning";
import React from "react";

const DaySelector = ({
  userplanning,
  selectedDay,
  setSelectedDay,
}: {
  userplanning: planning;
  selectedDay: number;
  setSelectedDay: (day: number) => void;
}) => {
  

  return (
    <section className="mb-8">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {userplanning.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedDay(index + 1)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer transform hover:scale-105 ${
              selectedDay === index + 1
                ? "bg-gray-800 border-2 border-[#e63946] text-[#e63946] shadow-lg"
                : "bg-gray-700 border-2 border-transparent text-gray-300 hover:bg-gray-600 hover:text-white"
            }`}
          >
            Día {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default DaySelector;
