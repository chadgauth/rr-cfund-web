import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  barColor?: string;
  animate?: boolean;
}

export function ProgressBar({
  value,
  max,
  className,
  barColor = "bg-primary",
  animate = true,
}: ProgressBarProps) {
  const [width, setWidth] = useState(animate ? 0 : (value / max) * 100);
  
  useEffect(() => {
    if (animate) {
      const timeoutId = setTimeout(() => {
        setWidth((value / max) * 100);
      }, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, [value, max, animate]);
  
  return (
    <div className={cn("w-full bg-gray-200 rounded-full h-2.5", className)}>
      <div
        className={cn(
          "h-2.5 rounded-full transition-all duration-1000 ease-out",
          barColor
        )}
        style={{ width: `${Math.min(width, 100)}%` }}
      />
    </div>
  );
}
