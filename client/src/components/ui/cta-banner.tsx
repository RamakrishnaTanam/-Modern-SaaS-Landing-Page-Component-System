import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientText } from "./gradient-text";
import { Glassmorphism } from "./glassmorphism";
import { fadeInUp } from "@/lib/animations";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTABannerProps {
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  variant?: "default" | "gradient";
}

export function CTABanner({
  title,
  description,
  primaryAction,
  secondaryAction,
  onPrimaryClick,
  onSecondaryClick,
  variant = "default"
}: CTABannerProps) {
  const containerClass = variant === "gradient" 
    ? "bg-gradient-to-r from-primary to-accent text-white"
    : "bg-slate-50";

  return (
    <section className={`py-20 ${containerClass}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp}>
          <Glassmorphism className="p-12 rounded-3xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              {variant === "gradient" ? (
                <span className="text-white">{title}</span>
              ) : (
                <>
                  Ready to <GradientText>{title}</GradientText>?
                </>
              )}
            </h2>
            
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
              variant === "gradient" ? "text-white/90" : "text-slate-600"
            }`}>
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={onPrimaryClick}
                className="transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {primaryAction}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              {secondaryAction && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={onSecondaryClick}
                  className={`transition-all duration-200 ${
                    variant === "gradient" 
                      ? "border-white/30 text-white hover:bg-white/10" 
                      : "glassmorphism hover:bg-white/20"
                  }`}
                >
                  {secondaryAction}
                </Button>
              )}
            </div>
          </Glassmorphism>
        </motion.div>
      </div>
    </section>
  );
}