"use client";

import type React from "react";

import AuthForm from "../../components/authForm/AuthForm";
import { login } from "@/api/auth";
import { useRouter } from "next/navigation";
import { useMiddleware } from "@/hooks/useMiddleware";
import { useState } from "react";

export default function LoginPage() {
  useMiddleware();
  const router = useRouter();
  const [response, setResponse] = useState<{ message: string, status: number } | undefined>(undefined);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const response = await login(email, password);

    if (response.status === 200) {
      router.push("/");
    } else {
      setResponse(response);
    }
  };

  return (
   
    <AuthForm type="login" handlerSubmit={handleSubmit} message={response?.message}/>
  );
}
