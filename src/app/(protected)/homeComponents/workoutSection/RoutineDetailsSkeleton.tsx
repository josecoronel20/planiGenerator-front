import { Dumbbell, Target } from "lucide-react";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const RoutineDetailsSkeleton = () => {
  return (
    <section className="bg-gray-900 rounded-2xl shadow-2xl p-4 md:p-8 border border-gray-700">
      {/* Routine Header */}
      <div className="flex  md:flex-row md:items-center justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-[#e63946] mb-2">
              Día 1
            </h2>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                <Skeleton className="w-20 h-4" />
              </div>
            </div>
          </div>
        <div className="flex items-center justify-center w-16 h-16 bg-[#e63946] rounded-full">
          <Dumbbell className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Exercise List */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        <Skeleton className="w-full h-20" />
        <Skeleton className="w-full h-20" />    
        <Skeleton className="w-full h-20" />
        <Skeleton className="w-full h-20" />
        <Skeleton className="w-full h-20" />
        <Skeleton className="w-full h-20" />
      </div>
    </section>
  );
};

export default RoutineDetailsSkeleton;
