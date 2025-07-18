"use client";

import type React from "react";

import AuthForm from "../(protected)/components/authForm/AuthForm";
import { login } from "@/utils/api/auth";
import { useRouter } from "next/navigation";
import { useMiddleware } from "@/hooks/useMiddleware";

export default function LoginPage() {
  useMiddleware();
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const response = await login(email, password);
    if (response.message === "Login successful") {
      console.log(response);
      router.push("/");
    }
  };

  return (
   
    <AuthForm type="login" handlerSubmit={handleSubmit} />
  );
}
