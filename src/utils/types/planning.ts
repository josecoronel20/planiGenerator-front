export type Exercise = {
  id: string;
  exercise: string;
  sets: number[];
  weight: number;
};

export type day = Exercise[];
export type planning = day[];
