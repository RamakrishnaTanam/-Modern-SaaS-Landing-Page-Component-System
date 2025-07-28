import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Glassmorphism } from "@/components/ui/glassmorphism";
import { SectionHeader } from "@/components/ui/section-header";
import { LazyImage } from "@/components/ui/image-lazy";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const blogPosts = [
  {
    title: "The Future of AI-Powered Marketing: 2025 Trends",
    excerpt: "Discover the latest AI marketing trends that will shape the industry in 2025 and beyond.",
    author: "Sarah Johnson",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    slug: "future-ai-marketing-2025"
  },
  {
    title: "Case Study: How TechCorp Increased ROI by 300%",
    excerpt: "Learn how our AI optimization helped TechCorp transform their marketing performance.",
    author: "Michael Chen",
    date: "Jan 12, 2025",
    readTime: "8 min read",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    slug: "techcorp-roi-case-study"
  },
  {
    title: "Complete Guide to Marketing Automation",
    excerpt: "Everything you need to know about setting up successful marketing automation workflows.",
    author: "Emily Rodriguez",
    date: "Jan 10, 2025",
    readTime: "12 min read",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    slug: "marketing-automation-guide"
  }
];

export function BlogSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Resources"
          title="Latest Insights and Updates"
          gradientWord="Insights"
          description="Stay ahead with the latest marketing trends, case studies, and actionable insights from our experts."
        />
        
        <motion.div 
          {...staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {blogPosts.map((post, index) => (
            <motion.article key={index} {...fadeInUp}>
              <Glassmorphism className="rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <LazyImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-600">
                      By {post.author}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary hover:text-primary/80"
                      onClick={() => {
                        // In a real app, this would navigate to the blog post
                        window.open(`https://blog.admybrand.com/${post.slug}`, '_blank');
                      }}
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </Glassmorphism>
            </motion.article>
          ))}
        </motion.div>
        
        <motion.div {...fadeInUp} className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="glassmorphism hover:bg-white/20"
            onClick={() => {
              // In a real app, this would navigate to the blog homepage
              window.open('https://blog.admybrand.com', '_blank');
            }}
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}