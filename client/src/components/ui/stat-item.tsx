import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface StatItemProps {
  value: string;
  label: string;
}

export function StatItem({ value, label }: StatItemProps) {
  return (
    <motion.div 
      {...fadeInUp}
      className="text-center text-white"
    >
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className="text-primary-foreground/70">{label}</div>
    </motion.div>
  );
}
