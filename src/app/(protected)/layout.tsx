"use client";

import Nav from "./components/layout/Nav";
import { useGetMe } from "@/hooks/useGetMe";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {

  useGetMe();


  return (
    <>
      <Nav />
      {children}
    </>
  );
}
