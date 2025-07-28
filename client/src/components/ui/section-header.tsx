import { motion } from "framer-motion";
import { GradientText } from "./gradient-text";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  gradientWord?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  gradientWord,
  centered = true,
  className
}: SectionHeaderProps) {
  const renderTitle = () => {
    if (!gradientWord) return title;
    
    const parts = title.split(gradientWord);
    return (
      <>
        {parts[0]}
        <GradientText>{gradientWord}</GradientText>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div 
      {...fadeInUp}
      className={cn(
        "mb-16",
        centered && "text-center",
        className
      )}
    >
      {subtitle && (
        <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
          {subtitle}
        </p>
      )}
      
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        {renderTitle()}
      </h2>
      
      {description && (
        <p className={cn(
          "text-xl text-slate-600",
          centered && "max-w-3xl mx-auto"
        )}>
          {description}
        </p>
      )}
    </motion.div>
  );
}