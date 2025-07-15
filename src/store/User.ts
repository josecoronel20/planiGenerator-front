import { Exercise } from "@/utils/types/planning";
import { User } from "@/utils/types/user";
import { create } from "zustand";

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  updateExercise: (exerciseUpdated: Exercise) => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,

  setUser: (user) => set({ user }),

  updateExercise: (exerciseUpdated) => {
    const currentUser = get().user;
    if (!currentUser || !currentUser.planning) return;

    const updatedplanning = Object.fromEntries(
      Object.entries(currentUser.planning).map(([day, exercises]) => {
        const updatedExercises = exercises.map((exercise) =>
          exercise.id === exerciseUpdated.id ? exerciseUpdated : exercise
        );
        return [day, updatedExercises];
      })
    );

    set({
      user: {
        ...currentUser,
        planning: updatedplanning,
      },
    });
  },
}));
