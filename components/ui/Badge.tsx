import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export function Badge({ children, color, className = "" }: BadgeProps) {
  const style = color
    ? {
        backgroundColor: `${color}18`,
        color: color,
        borderColor: `${color}30`,
      }
    : {};

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-heading border transition-colors duration-200 ${
        !color
          ? "bg-coral-50 text-coral-600 border-coral-200"
          : ""
      } ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}
