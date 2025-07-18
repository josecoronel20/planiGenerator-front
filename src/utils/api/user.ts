import useSWR, { mutate } from "swr";
import { User } from "../types/user";
import { Exercise, Planning } from "../types/planning";

export const useFetchUser = () => {
  const fetcher = (url: string) =>
    fetch(url, {
      credentials: "include",
    }).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/user/me`,
    fetcher
  );

  if (error) {
    return { data: null, isLoading: false };
  }

  return { data, isLoading };
};

export const updateUser = async (body: User) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/update`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body),
  });

  if (response.ok) {
    const updatedUser = await response.json();

    mutate("me", updatedUser, false);

  }


  return response;
};

export const createPlanning = async (planning:Planning, id:number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/createPlanning`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({planning, id}),
  });

  return response;
};

export const updateExercise = async (exercise:Exercise) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/updateExercise`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({exercise}),
  });

  return response;
};