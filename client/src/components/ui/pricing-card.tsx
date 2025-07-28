import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Glassmorphism } from "./glassmorphism";
import { TrialSignupModal } from "@/components/modals/TrialSignupModal";
import { DemoModal } from "@/components/modals/DemoModal";
import { cn } from "@/lib/utils";
import { scaleOnHover } from "@/lib/animations";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  annualPrice?: string;
  features: Array<{ name: string; included: boolean }>;
  buttonText: string;
  buttonVariant?: "default" | "outline" | "secondary";
  popular?: boolean;
  billing: "monthly" | "annual";
}

export function PricingCard({ 
  title, 
  description, 
  price, 
  period, 
  annualPrice, 
  features, 
  buttonText, 
  buttonVariant = "outline",
  popular = false,
  billing
}: PricingCardProps) {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  
  const displayPrice = billing === "annual" && annualPrice ? annualPrice : price;
  const displayPeriod = billing === "annual" ? "/month" : period;

  const handleButtonClick = () => {
    if (buttonText.toLowerCase().includes("trial") || buttonText.toLowerCase().includes("get started")) {
      setIsTrialOpen(true);
    } else if (buttonText.toLowerCase().includes("demo") || buttonText.toLowerCase().includes("contact")) {
      setIsDemoOpen(true);
    } else {
      setIsTrialOpen(true); // Default to trial signup
    }
  };

  return (
    <motion.div {...scaleOnHover} className="relative">
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
            Most Popular
          </div>
        </div>
      )}
      
      <Glassmorphism 
        className={cn(
          "p-8 rounded-2xl relative",
          popular && "border-2 border-primary"
        )}
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-600 mb-6">{description}</p>
          <div className="text-4xl font-bold text-slate-900 mb-2">
            {displayPrice}<span className="text-lg font-normal text-slate-600">{displayPeriod}</span>
          </div>
          {billing === "annual" && annualPrice && (
            <p className="text-sm text-slate-500">Billed annually ({annualPrice}/month)</p>
          )}
        </div>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature.included ? (
                <Check className="w-5 h-5 text-success mr-3" />
              ) : (
                <X className="w-5 h-5 text-slate-300 mr-3" />
              )}
              <span className={cn(
                feature.included ? "text-slate-700" : "text-slate-400"
              )}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={cn(
            "w-full py-3 rounded-xl font-semibold transition-colors",
            buttonVariant === "default" && "transform hover:scale-105"
          )}
          variant={buttonVariant}
          onClick={handleButtonClick}
        >
          {buttonText}
        </Button>
        
        <TrialSignupModal 
          isOpen={isTrialOpen} 
          onClose={() => setIsTrialOpen(false)} 
        />
        
        <DemoModal 
          isOpen={isDemoOpen} 
          onClose={() => setIsDemoOpen(false)} 
        />
      </Glassmorphism>
    </motion.div>
  );
}
