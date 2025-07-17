"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFetchUser } from "@/utils/api/user";
import { useUserStore } from "@/store/User";

export const useGetMe = () => {
  const router = useRouter();
  const { data, isLoading } = useFetchUser();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (!isLoading && data === null) {
      router.push("/login");
    }
  }, [isLoading, data, router]);

  if (data) {
    const planningFormated = data.planning.map((day) =>
      day.exercises.map(({ id, exercise, sets, weight }) => ({
        id,
        exercise,
        sets,
        weight,
      }))
    );
    setUser({...data, planning: planningFormated});
  }
};
