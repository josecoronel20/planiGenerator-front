import { Planification } from "./planification";

export type User = {
  id: number;
  email: string;
  password: string;
  username: string;
  planification: Planification | null;
};

export type UserUpdate = {
  id: number;
  planification: Planification;
};