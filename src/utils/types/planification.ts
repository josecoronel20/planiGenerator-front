export type Exercise = {
    id: string;
    exercise: string;
    sets: number[];
    wheight: number;
  };
  
  export type Planification = {
    [day: string]: Exercise[];
  };
  