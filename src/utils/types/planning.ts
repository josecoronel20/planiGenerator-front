export type Exercise = {
    id: string;
    exercise: string;
    sets: number[];
    wheight: number;
  };
  
  export type planning = {
    [day: string]: Exercise[];
  };
  