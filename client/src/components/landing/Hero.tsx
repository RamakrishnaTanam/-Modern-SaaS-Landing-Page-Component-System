import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { Glassmorphism } from "@/components/ui/glassmorphism";
import { Badge } from "@/components/ui/badge";
import { HeroVideo } from "@/components/ui/hero-video";
import { TrialSignupModal } from "@/components/modals/TrialSignupModal";
import { DemoModal } from "@/components/modals/DemoModal";
import { fadeInUp, fadeIn } from "@/lib/animations";

export function Hero() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-slate-50 via-primary/5 to-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <Badge variant="outline" className="inline-flex items-center px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></span>
              New: AI-Powered Campaign Optimization
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Transform Your Marketing with{" "}
              <GradientText>AI Intelligence</GradientText>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              ADmyBRAND AI Suite revolutionizes digital marketing with intelligent automation, 
              predictive analytics, and personalized campaigns that drive 3x better results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => setIsTrialOpen(true)}
              >
                Start 14-Day Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glassmorphism hover:bg-white/20 transition-all duration-200"
                onClick={() => setIsDemoOpen(true)}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-success mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-success mr-2" />
                Setup in 5 minutes
              </div>
            </div>
          </motion.div>
          
          <motion.div {...fadeIn} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-30 animate-float"></div>
            <HeroVideo 
              poster="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              title="ADmyBRAND AI Suite Demo"
              className="relative"
            />
          </motion.div>
        </div>
      </div>
      
      <TrialSignupModal 
        isOpen={isTrialOpen} 
        onClose={() => setIsTrialOpen(false)} 
      />
      
      <DemoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </section>
  );
}
