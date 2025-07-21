import { useUserStore } from "@/store/User";
import { useFetchUser } from "@/utils/fetchUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface WorkoutNoFormated {
  dayIndex: number;
  exercises: {
    id: string;
    exercise: string;
    sets: number[];
    weight: number;
  }[];
}

export const useWorkoutFormated = () => {
  const router = useRouter();
  const { data, isLoading } = useFetchUser();

  useEffect(() => {

    if (data === null && !isLoading) {
      router.push("/login");
      return;
    }

    if (data && !isLoading) {
      const workoutFormated = data.workout.map((day: WorkoutNoFormated) =>
        day.exercises.map(({ id, exercise, sets, weight }:{id:string, exercise:string, sets:number[], weight:number}) => ({
          id,
          exercise,
          sets,
          weight,
        }))
      );
      console.log(workoutFormated);
      useUserStore.setState({ user: { ...data, workout: workoutFormated } });
    }
  }, [data, isLoading, router]);
};