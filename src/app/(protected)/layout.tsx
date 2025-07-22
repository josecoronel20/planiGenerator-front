"use client";

import Nav from "./components/layout/Nav";
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
      <Nav />
      {children}
    </>
  );
}
