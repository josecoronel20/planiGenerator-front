export type Exercise = {
  id: string;
  exercise: string;
  sets: number[];
  weight: number;
};

export type PlanningDay = Exercise[];
export type Planning = PlanningDay[];
