"use client";

import { useFetchUser } from "@/utils/fetchUser";
import Nav from "./components/layout/Nav";
import { useUserStore } from "@/store/User";
import { useEffect } from "react";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {

  const { data } = useFetchUser();
  useEffect(() => {
    if (data) {
      const planningFormated = data.planning.map((day: any) =>
        day.exercises.map(({ id, exercise, sets, weight }: any) => ({
          id,
          exercise,
          sets,
          weight,
        }))
      );
      console.log(planningFormated);
      useUserStore.setState({ user: { ...data, planning: planningFormated } });
    }
  }, [data]);

  return (
    <>
      <Nav />
      {children}
    </>
  );
}
