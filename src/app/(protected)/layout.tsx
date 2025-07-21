"use client";

import Nav from "./components/layout/Nav";
import { useWorkoutFormated } from "@/hooks/useWorkoutFormated";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useWorkoutFormated();
  
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
