import { create } from "zustand";

type Exercise = {
  id: string;
  name: string;
  series: number[];
  weight: number;
};

type PlanningState = {
  planning: Exercise[];
  setPlanning: (exercises: Exercise[]) => void;
  updateExercise: (updated: Exercise) => void;
};

export const usePlanningStore = create<PlanningState>((set) => ({
  planning: [],
  setPlanning: (exercises) => set({ planning: exercises }),
  updateExercise: (updated) =>
    set((state) => ({
      planning: state.planning.map((ex) =>
        ex.id === updated.id ? updated : ex
      ),
    })),
}));
