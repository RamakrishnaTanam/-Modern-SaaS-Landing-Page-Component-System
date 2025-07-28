import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Glassmorphism } from "./glassmorphism";
import { scaleOnHover } from "@/lib/animations";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <motion.div {...scaleOnHover}>
      <Glassmorphism className="p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
        <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <a href="#" className="text-primary font-medium hover:text-primary/80 inline-flex items-center">
          Learn more 
          <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </Glassmorphism>
    </motion.div>
  );
}
