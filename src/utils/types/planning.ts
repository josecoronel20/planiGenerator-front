export type Exercise = {
  id: string;
  exercise: string;
  sets: number[];
  wheight: number;
};

export type day = Exercise[];
export type planning = day[];
