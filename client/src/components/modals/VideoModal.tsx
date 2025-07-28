import { useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoId?: string; // YouTube video ID
  videoUrl?: string; // Direct video URL
}

export function VideoModal({ isOpen, onClose, title, videoId, videoUrl }: VideoModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen) return null;

  // Construct YouTube embed URL if videoId is provided
  const embedUrl = videoId 
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
    : videoUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-black rounded-2xl shadow-xl max-w-5xl mx-4 w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-slate-900">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Video Container */}
        <div className="relative aspect-video bg-black">
          {embedUrl ? (
            <>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-white">Loading video...</p>
                  </div>
                </div>
              )}
              <iframe
                src={embedUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                onLoad={() => setIsLoading(false)}
              />
            </>
          ) : (
            <div className="flex items-center justify-center h-full bg-slate-800">
              <div className="text-center">
                <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Demo Video</h3>
                <p className="text-slate-400 mb-6">
                  Experience the power of ADmyBRAND AI Suite in action.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 max-w-md mx-auto">
                  <div>• AI-powered campaign creation</div>
                  <div>• Real-time performance optimization</div>
                  <div>• Advanced audience targeting</div>
                  <div>• Automated A/B testing</div>
                </div>
                <Button 
                  className="mt-6"
                  onClick={() => {
                    onClose();
                    // In a real app, this would open trial signup
                  }}
                >
                  Start Your Free Trial
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}