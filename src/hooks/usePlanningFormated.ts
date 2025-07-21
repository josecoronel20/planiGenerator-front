import { useUserStore } from "@/store/User";
import { useFetchUser } from "@/utils/fetchUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface PlanningNoFormated {
  dayIndex: number;
  exercises: {
    id: string;
    exercise: string;
    sets: number[];
    weight: number;
  }[];
}

export const usePlanningFormated = () => {
  const router = useRouter();
  const { data, isLoading } = useFetchUser();

  useEffect(() => {

    if (data === null && !isLoading) {
      router.push("/login");
      return;
    }

    if (data && !isLoading) {
      const planningFormated = data.planning.map((day: PlanningNoFormated) =>
        day.exercises.map(({ id, exercise, sets, weight }:{id:string, exercise:string, sets:number[], weight:number}) => ({
          id,
          exercise,
          sets,
          weight,
        }))
      );
      console.log(planningFormated);
      useUserStore.setState({ user: { ...data, planning: planningFormated } });
    }
  }, [data, isLoading, router]);
};