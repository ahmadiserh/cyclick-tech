"use client"

import { useTheme } from "next-themes"

export function Logo({ className = "", size = "default" }) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const sizeClasses = {
    small: "h-6 w-6",
    default: "h-8 w-8",
    large: "h-12 w-12",
  }

  const sizeClass = sizeClasses[size] || sizeClasses.default

  return (
    <div className={`relative ${sizeClass} ${className}`}>
      <div className="absolute inset-0 bg-black dark:bg-white rounded-sm rotate-45 transform origin-center"></div>
      <div className="absolute inset-[15%] bg-white dark:bg-black rounded-sm rotate-45 transform origin-center"></div>
      <div className="absolute inset-[40%] bg-black dark:bg-white rounded-sm rotate-45 transform origin-center"></div>
    </div>
  )
}
