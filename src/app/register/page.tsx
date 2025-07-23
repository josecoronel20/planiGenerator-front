"use client";
import type React from "react";

import AuthForm from "../../components/authForm/AuthForm";
import { register } from "@/api/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMiddleware } from "@/hooks/useMiddleware";

export default function RegisterPage() {
  useMiddleware();
  const router = useRouter();
  const [response, setResponse] = useState<{ message: string } | null>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;
    const response = await register(email, password, username);

    if (response.message === "Usuario creado correctamente") {
      router.push("/login");
    } else {
      setResponse(response);
    }
  };

  return (
    <AuthForm type="register" handlerSubmit={handleSubmit} message={response?.message}/>
  );
}
