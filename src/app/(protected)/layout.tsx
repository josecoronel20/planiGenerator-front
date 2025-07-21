"use client";

import Nav from "./components/layout/Nav";
import { usePlanningFormated } from "@/hooks/usePlanningFormated";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  usePlanningFormated();
  
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
