import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Glassmorphism } from "./glassmorphism";

interface HeroVideoProps {
  poster?: string;
  src?: string;
  title?: string;
  className?: string;
}

export function HeroVideo({ 
  poster = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  src = "",
  title = "Product Demo",
  className 
}: HeroVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    if (src) {
      setShowVideo(true);
      setIsPlaying(true);
    } else {
      // Fallback to demo modal or placeholder
      alert("Demo video coming soon!");
    }
  };

  return (
    <motion.div 
      className={`relative rounded-2xl overflow-hidden shadow-2xl ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {showVideo && src ? (
        <video
          className="w-full h-auto"
          controls
          autoPlay
          poster={poster}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="relative">
          <img 
            src={poster}
            alt={title}
            className="w-full h-auto"
            loading="lazy"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center">
            <Button
              onClick={handlePlayClick}
              size="lg"
              className="rounded-full w-20 h-20 bg-white/90 hover:bg-white text-primary hover:text-primary shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              <Play className="w-8 h-8 ml-1" />
            </Button>
          </div>
          
          <Glassmorphism className="absolute bottom-4 left-4 right-4 p-4">
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            <p className="text-white/80 text-sm">Click to watch our product demo</p>
          </Glassmorphism>
        </div>
      )}
    </motion.div>
  );
}