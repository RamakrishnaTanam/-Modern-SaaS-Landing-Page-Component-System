import { motion } from "framer-motion";
import { StatItem } from "@/components/ui/stat-item";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { staggerContainer } from "@/lib/animations";

const stats = [
  { value: "10,000+", label: "Active Customers", numericValue: 10000, suffix: "+" },
  { value: "50M+", label: "Campaigns Optimized", numericValue: 50, suffix: "M+" },
  { value: "300%", label: "Average ROI Increase", numericValue: 300, suffix: "%" },
  { value: "99.9%", label: "Platform Uptime", numericValue: 99.9, suffix: "%" }
];

export function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          {...staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
