import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Glassmorphism } from "./glassmorphism";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl"
};

export function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  className, 
  size = "md" 
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "relative w-full",
              sizeClasses[size],
              className
            )}
          >
            <Glassmorphism className="p-6 rounded-2xl">
              {title && (
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="hover:bg-white/20 rounded-full p-2"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              )}
              
              {children}
            </Glassmorphism>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}