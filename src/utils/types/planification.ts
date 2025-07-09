export interface Planification {
  [key: string]: Array<{
    exercise: string;
    sets: number;
  }>;
}
