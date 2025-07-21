export type Exercise = {
  id: number;
  exercise: string;
  sets: number[];
  weight: number;
};

export type WorkoutDay = Exercise[];
export type Workout = WorkoutDay[];
