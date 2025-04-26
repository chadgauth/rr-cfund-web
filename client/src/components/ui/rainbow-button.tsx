import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pastelColors } from "@/lib/colors";

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
}

export function RainbowButton({
  className,
  variant = "primary",
  children,
  ...props
}: RainbowButtonProps) {
  // Define styles based on variant
  const isPrimary = variant === "primary";
  
  const buttonStyle = isPrimary 
    ? {
        background: `linear-gradient(to right, ${pastelColors.lavender}, ${pastelColors.pink})`,
        color: "white",
        border: "none",
        transition: "all 0.3s ease",
        boxShadow: "0 2px 10px rgba(200, 171, 220, 0.5)"
      }
    : {
        background: "white",
        color: pastelColors.mauve,
        border: `2px solid ${pastelColors.lavender}`,
        transition: "all 0.3s ease"
      };

  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-medium relative overflow-hidden group", 
        className
      )}
      style={buttonStyle}
      {...props}
    >
      {isPrimary ? (
        <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white" />
      ) : (
        <span 
          className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
          style={{ background: `linear-gradient(to right, ${pastelColors.lavender}, ${pastelColors.pink})` }} 
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}