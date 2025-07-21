export type Exercise = {
  id: string;
  exercise: string;
  sets: number[];
  weight: number;
};

export type WorkoutDay = Exercise[];
export type Workout = WorkoutDay[];
