"use client";

import { Mail, Lock, User } from "lucide-react";
import Link from "next/link";

export default function AuthForm({
  type,
  handlerSubmit,
  message,
}: {
  type: "login" | "register";
  handlerSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  message?: string;
}) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {type === "login" ? "Bienvenido de nuevo" : "Crea tu cuenta"}
            </h1>
            <p className="text-gray-400">
              {type === "login"
                ? "Inicia sesión para continuar"
                : "Regístrate para empezar"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handlerSubmit} className="space-y-6">
            {/* Name field (only for register) */}
            {type === "register" && (
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nombre de usuario
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200"
                    placeholder="Ingresa tu nombre de usuario"
                  />
                </div>
              </div>
            )}
            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Correo electrónico
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200"
                  placeholder="Ingresa tu correo electrónico"
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="w-full pl-10 pr-12 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200"
                  placeholder="Ingresa tu contraseña"
                />
              </div>
            </div>

            {/*Error Dialog */}
            {message && (
              <div className="mt-6 text-center">
                <p className="text-red-500">{message}</p>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-[#e63946] hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#e63946] focus:ring-offset-2 focus:ring-offset-gray-800 cursor-pointer"
            >
              {type === "login" ? "Iniciar sesión" : "Crear cuenta"}
            </button>
          </form>

          {/* Toggle auth mode */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              {type === "login"
                ? "No tienes una cuenta?"
                : "Ya tienes una cuenta?"}
              <Link
                href={type === "login" ? "/register" : "/login"}
                className="text-[#e63946] hover:text-red-400 font-semibold transition-colors"
              >
                {type === "login" ? "Registrarse" : "Iniciar sesión"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
