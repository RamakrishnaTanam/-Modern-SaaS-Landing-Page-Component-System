import { motion } from "framer-motion";
import { 
  Zap, 
  Lightbulb, 
  Users, 
  BarChart3, 
  Layers, 
  Shield 
} from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeader } from "@/components/ui/section-header";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "AI Campaign Optimization",
    description: "Automatically optimize your campaigns in real-time using machine learning algorithms that adapt to market changes.",
    gradient: "from-primary to-primary/80"
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    title: "Predictive Analytics",
    description: "Forecast campaign performance and customer behavior with 95% accuracy using advanced predictive models.",
    gradient: "from-accent to-accent/80"
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Smart Personalization",
    description: "Deliver personalized experiences at scale with AI-driven content recommendations and dynamic segmentation.",
    gradient: "from-success to-success/80"
  },
  {
    icon: <Layers className="w-6 h-6 text-white" />,
    title: "Multi-Channel Automation",
    description: "Orchestrate campaigns across email, social media, and digital ads from a single unified platform.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    title: "Real-Time Analytics",
    description: "Monitor performance with live dashboards and get actionable insights to improve your marketing ROI instantly.",
    gradient: "from-red-500 to-red-600"
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Enterprise Security",
    description: "Bank-grade security with SOC 2 compliance, end-to-end encryption, and advanced access controls.",
    gradient: "from-indigo-500 to-indigo-600"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Powerful AI Features That Drive Results"
          gradientWord="Drive Results"
          description="Our comprehensive AI suite provides everything you need to automate, optimize, and scale your marketing efforts."
        />
        
        <motion.div 
          {...staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} {...fadeInUp}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
