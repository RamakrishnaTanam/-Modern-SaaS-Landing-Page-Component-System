import { motion } from "framer-motion";
import { AnimatedCounter } from "./animated-counter";
import { fadeInUp } from "@/lib/animations";

interface StatItemProps {
  value: string;
  label: string;
  numericValue?: number;
  suffix?: string;
  prefix?: string;
}

export function StatItem({ value, label, numericValue, suffix = "", prefix = "" }: StatItemProps) {
  return (
    <motion.div 
      {...fadeInUp}
      className="text-center text-white"
    >
      <div className="text-4xl font-bold mb-2">
        {numericValue ? (
          <AnimatedCounter 
            to={numericValue} 
            suffix={suffix} 
            prefix={prefix}
            className="text-white"
          />
        ) : (
          value
        )}
      </div>
      <div className="text-primary-foreground/70">{label}</div>
    </motion.div>
  );
}
