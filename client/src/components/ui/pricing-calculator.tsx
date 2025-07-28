import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCalculatorProps {
  onBillingChange?: (billing: "monthly" | "annual") => void;
}

export function PricingCalculator({ onBillingChange }: PricingCalculatorProps) {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  const handleBillingChange = (newBilling: "monthly" | "annual") => {
    setBilling(newBilling);
    onBillingChange?.(newBilling);
  };

  return (
    <div className="inline-flex items-center glassmorphism p-1 rounded-xl">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleBillingChange("monthly")}
        className={cn(
          "px-6 py-2 rounded-lg font-medium transition-all",
          billing === "monthly" 
            ? "bg-primary text-primary-foreground" 
            : "text-slate-600 hover:bg-white/20"
        )}
      >
        Monthly
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleBillingChange("annual")}
        className={cn(
          "px-6 py-2 rounded-lg font-medium transition-all relative",
          billing === "annual" 
            ? "bg-primary text-primary-foreground" 
            : "text-slate-600 hover:bg-white/20"
        )}
      >
        Annual
        {billing === "annual" && (
          <span className="text-xs bg-success px-2 py-1 rounded-full ml-2 text-success-foreground">
            Save 20%
          </span>
        )}
      </Button>
    </div>
  );
}
