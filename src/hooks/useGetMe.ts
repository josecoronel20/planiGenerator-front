"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFetchUser } from "@/utils/api/user";
import { User } from "@/utils/types/user";
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
    setUser(data as User);
  }
};
