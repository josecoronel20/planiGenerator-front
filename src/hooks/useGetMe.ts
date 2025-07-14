import { User } from "@/utils/types/user";
import { useFetchUser } from "@/utils/api/user";
import { useRouter } from "next/navigation";

export const useGetMe = () => {
  const router = useRouter();
  const { data, isLoading } = useFetchUser();

  if (data === null && !isLoading) {
    router.push("/login");
  }

  return data as User;
};
