import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pastelColors } from "@/lib/colors";

type RainbowButtonProps = React.ComponentProps<typeof Button> & {
  variant?: "primary" | "secondary";
};

export function RainbowButton({
  className,
  variant = "primary",
  ...props
}: RainbowButtonProps) {
  const getGradientStyle = () => {
    if (variant === "primary") {
      return {
        background: `linear-gradient(to right, ${pastelColors.lavender}, ${pastelColors.pink})`,
        color: "white",
        border: "none",
        transition: "all 0.3s ease",
        boxShadow: "0 2px 10px rgba(200, 171, 220, 0.5)"
      };
    } else {
      return {
        background: "white",
        color: pastelColors.mauve,
        border: `2px solid ${pastelColors.lavender}`,
        transition: "all 0.3s ease"
      };
    }
  };

  return (
    <Button
      className={cn(
        "font-medium relative overflow-hidden group", 
        className
      )}
      style={getGradientStyle()}
      {...props}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white" />
      )}
      {variant === "secondary" && (
        <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
          style={{ background: `linear-gradient(to right, ${pastelColors.lavender}, ${pastelColors.pink})` }} 
        />
      )}
      {props.children}
    </Button>
  );
}