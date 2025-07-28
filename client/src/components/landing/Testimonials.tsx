import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { GradientText } from "@/components/ui/gradient-text";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "VP Marketing",
    company: "TechCorp",
    testimonial: "ADmyBRAND AI Suite completely transformed our marketing ROI. We saw a 250% increase in qualified leads within the first quarter. The AI optimization is incredibly smart.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CMO",
    company: "Growth Ventures",
    testimonial: "The predictive analytics feature is a game-changer. We can now forecast campaign performance with incredible accuracy and adjust strategies proactively.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Director of Digital",
    company: "StartupCo",
    testimonial: "Implementation was seamless and the support team is outstanding. We're now running campaigns across multiple channels effortlessly with their automation platform.",
    avatar: "https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Loved by <GradientText>Marketing Teams</GradientText> Worldwide
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how ADmyBRAND AI Suite has transformed marketing performance for companies of all sizes.
          </p>
        </motion.div>
        
        <motion.div 
          {...staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} {...fadeInUp}>
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
