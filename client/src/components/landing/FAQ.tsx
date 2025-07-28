import { motion } from "framer-motion";
import { FAQItem } from "@/components/ui/faq-item";
import { GradientText } from "@/components/ui/gradient-text";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const faqs = [
  {
    question: "How does the AI optimization actually work?",
    answer: "Our AI analyzes millions of data points including user behavior, market trends, and campaign performance to automatically optimize your marketing campaigns. It continuously learns and adapts, making real-time adjustments to improve ROI, targeting, and content personalization."
  },
  {
    question: "What integrations are available?",
    answer: "We integrate with 200+ marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, Shopify, and more. Our API allows custom integrations, and our support team helps with setup at no extra cost."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most customers see improvements within the first week, with significant results typically appearing within 30 days. The AI needs time to learn your specific audience and optimize campaigns, but initial optimizations begin immediately after setup."
  },
  {
    question: "Is my data secure and compliant?",
    answer: "Absolutely. We're SOC 2 Type II certified, GDPR compliant, and use enterprise-grade encryption. Your data is never shared with third parties, and we maintain strict privacy controls with regular security audits."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time with no penalties or hidden fees. We offer a 14-day free trial, and even after that, you can cancel with just one click from your account settings."
  },
  {
    question: "Do you offer training and support?",
    answer: "Yes! We provide comprehensive onboarding, video tutorials, webinar training sessions, and 24/7 support via chat and email. Professional and Enterprise plans include dedicated success managers and phone support."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked <GradientText>Questions</GradientText>
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </motion.div>
        
        <motion.div 
          {...staggerContainer}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} {...fadeInUp}>
              <FAQItem {...faq} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
