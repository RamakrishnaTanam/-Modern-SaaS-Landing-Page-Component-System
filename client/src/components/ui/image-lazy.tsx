import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { LoadingSpinner } from "./loading-spinner";
import { cn } from "@/lib/utils";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function LazyImage({
  src,
  alt,
  className,
  width,
  height,
  placeholder,
  onLoad,
  onError
}: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  const handleInView = () => {
    setIsInView(true);
  };

  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      style={{ width, height }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={handleInView}
      viewport={{ once: true }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <LoadingSpinner />
        </div>
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-500">
          <div className="text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Failed to load image</div>
          </div>
        </div>
      )}

      {isInView && (
        <motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      )}
      
      {placeholder && isLoading && !hasError && (
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{ backgroundImage: `url(${placeholder})` }}
        />
      )}
    </motion.div>
  );
}