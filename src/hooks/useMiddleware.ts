import { useFetchUser } from "@/utils/fetchUser";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const useMiddleware = () => {
  const router = useRouter();
  const { data, isLoading } = useFetchUser();
  const currentPath = usePathname();

  useEffect(() => {
    if (!isLoading && data === null && currentPath !== "/login") {
      router.push("/login");
    }
    if (!isLoading && data !== null && currentPath === "/login") {
      router.push("/");
    }
  }, [isLoading, data, router, currentPath]);
};