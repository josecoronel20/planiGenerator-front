import { Planification } from "@/utils/types/planification";
import React from "react";

const DaySelector = ({ userPlanification, selectedDay, setSelectedDay }: { userPlanification: Planification, selectedDay: number, setSelectedDay: (day: number) => void }) => {
  return (
    <section className="mb-8">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {Object.keys(userPlanification).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(parseInt(day))}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer transform hover:scale-105 ${
              selectedDay === parseInt(day)
                ? "bg-gray-800 border-2 border-[#e63946] text-[#e63946] shadow-lg"
                : "bg-gray-700 border-2 border-transparent text-gray-300 hover:bg-gray-600 hover:text-white"
            }`}
          >
            Día {day}
          </button>
        ))}
      </div>
    </section>
  );
};

export default DaySelector;
