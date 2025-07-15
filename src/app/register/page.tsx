"use client";
import type React from "react";

import AuthForm from "../(protected)/components/authForm/AuthForm";
import { register } from "@/utils/api/auth";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;
    const response = await register(email, password, username);
    if (response.message === "Usuario registrado correctamente") {
      console.log(response);
      router.push("/login");
    }
  };

  return (
    <AuthForm type="register" handlerSubmit={handleSubmit} />
  );
}
