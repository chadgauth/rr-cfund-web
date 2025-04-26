import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface RainbowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const RainbowButton = forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "px-8 py-4 rounded-xl font-bold transition-transform hover:-translate-y-0.5 hover:shadow-lg",
          variant === "primary" 
            ? "bg-gradient-to-r from-[#E71D36] via-[#FF8C42] via-[#FFDD4A] via-[#70C1B3] via-[#3772FF] to-[#6A0DAD] text-white" 
            : "bg-white text-primary",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

RainbowButton.displayName = "RainbowButton";

export { RainbowButton };
