import { Workout } from "./workout";

export type User = {
  id: number;
  email: string;
  password: string;
  username: string;
  workout: Workout | null;
};

export type UserUpdate = {
  id: number;
  workout: Workout;
};