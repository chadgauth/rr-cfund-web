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
          "px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-md",
          "tracking-wide hover:-translate-y-0.5 focus:ring-2 focus:ring-opacity-50 focus:outline-none",
          "active:scale-95 active:shadow-inner transform-gpu",
          variant === "primary" 
            ? "bg-gradient-to-r from-[#E71D36] via-[#FF8C42] via-[#FFDD4A] via-[#70C1B3] via-[#3772FF] to-[#6A0DAD] text-white hover:shadow-lg hover:shadow-purple-500/20 focus:ring-purple-500" 
            : "bg-white text-primary border border-purple-100 hover:bg-purple-50 hover:border-purple-200 focus:ring-purple-300",
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
