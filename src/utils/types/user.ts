import { planning } from "./planning";

export type User = {
  id: number;
  email: string;
  password: string;
  username: string;
  planning: planning | null;
};

export type UserUpdate = {
  id: number;
  planning: planning;
};