"use client"

import { useState } from "react"
import { Menu, X, User, LogOut, Dumbbell } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useGetMe } from "@/hooks/useGetMe"
import { logout } from "@/utils/api/auth"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const router = useRouter();
  const user = useGetMe();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const path = usePathname()
  console.log(path)

  const navigationLinks = [
    { name: "Inicio", href: "/" },
    { name: "Generar rutina", href: "/formRoutine" },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen)
  }

  const handleLogout = async () => {
    const response = await logout();
    if (response.message === "Logout successful") {
      router.push("/login");
    }
  }

  return (
    <nav className={`bg-gray-900 border-b border-gray-700 sticky top-0 z-40 ${path === "/login" || path === "/register" ? "hidden" : "block"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-[#e63946] rounded-lg flex items-center justify-center mr-3">
                <Dumbbell className="h-5 w-5 text-white" />
              </div>
              <span className="text-white text-xl font-bold">FitTracker</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-[#e63946] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-800"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Profile Menu */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <button
                  onClick={toggleProfileDropdown}
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#e63946] focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 hover:bg-gray-700"
                >
                  <span className="sr-only">Abrir menú de usuario</span>
                  <div className="h-8 w-8 rounded-full bg-[#e63946] flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                </button>

                {/* Profile Dropdown */}
                {isProfileDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 border border-gray-700 cursor-pointer">
                    <div className="py-1">
                      <div className="px-4 py-2 text-sm text-gray-400 border-b border-gray-700">
                        <p className="font-medium text-white">{user?.username}</p>
                        <p className="text-xs">{user?.email}</p>
                      </div>
                      
                      <Link
                        href="/login"
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-[#e63946] transition-colors duration-200 cursor-pointer"
                      >
                        <LogOut className="h-4 w-4 mr-3" />
                        Cerrar sesión
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#e63946] hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#e63946] transition-all duration-200"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMobileMenuOpen ? <X className="block h-6 w-6 cursor-pointer" /> : <Menu className="block h-6 w-6 cursor-pointer" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-gray-700">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#e63946] block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 hover:bg-gray-700"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Profile Section */}
          <div className="pt-4 pb-3 border-t border-gray-700 bg-gray-800">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-[#e63946] flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">{user?.username}</div>
                <div className="text-sm font-medium text-gray-400">{user?.email}</div>
              </div>
            </div>

              <Link
                href="/login"
                onClick={handleLogout}
                className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#e63946] hover:bg-gray-700 transition-colors duration-200 mt-3 mx-3"
              >
                <LogOut className="h-5 w-5 mr-3" />
                <span>Cerrar sesión</span>
              </Link>
          </div>
        </div>
      )}

    
    </nav>
  )
}
