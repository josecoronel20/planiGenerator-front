"use client";

import NavBar from "@/components/layout/Navbar";
import { useWorkoutFormated } from "@/hooks/useWorkoutFormated";
import { useMiddleware } from "@/hooks/useMiddleware";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useMiddleware();
  useWorkoutFormated();
  
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
