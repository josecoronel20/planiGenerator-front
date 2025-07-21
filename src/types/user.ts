import { workout } from "./workout";

export type User = {
  id: number;
  email: string;
  password: string;
  username: string;
  workout: workout | null;
};

export type UserUpdate = {
  id: number;
  workout: workout;
};