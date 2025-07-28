import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className = ""
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const interval = duration * 1000 / (to - from);
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= to) {
          clearInterval(timer);
          return to;
        }
        return prev + Math.ceil((to - from) / (duration * 1000 / 50));
      });
    }, 50);

    return () => clearInterval(timer);
  }, [isInView, to, from, duration]);

  const displayValue = count > to ? to : count;

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}{displayValue.toLocaleString()}{suffix}
    </motion.span>
  );
}