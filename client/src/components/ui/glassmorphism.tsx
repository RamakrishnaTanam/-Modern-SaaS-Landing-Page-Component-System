import { cn } from "@/lib/utils";

interface GlassmorphismProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export function Glassmorphism({ children, className, variant = "light" }: GlassmorphismProps) {
  return (
    <div 
      className={cn(
        variant === "light" ? "glassmorphism" : "glassmorphism-dark",
        className
      )}
    >
      {children}
    </div>
  );
}
