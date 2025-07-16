"use client";

import Nav from "./components/layout/Nav";
import { useFetchUser } from "@/utils/api/user";
import { useUserStore } from "@/store/User";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useFetchUser();
  const setUser = useUserStore((state) => state.setUser);
  const router = useRouter();

  useEffect(() => {
    if (data && !isLoading) {
      setUser(data);
    }
  }, [data, isLoading, router]);

  return (
    <>
      <Nav />
      {children}
    </>
  );
}
