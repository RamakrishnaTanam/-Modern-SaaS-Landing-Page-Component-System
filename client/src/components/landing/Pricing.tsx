import { useState } from "react";
import { motion } from "framer-motion";
import { PricingCard } from "@/components/ui/pricing-card";
import { PricingCalculator } from "@/components/ui/pricing-calculator";
import { GradientText } from "@/components/ui/gradient-text";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const pricingPlans = [
  {
    title: "Starter",
    description: "Perfect for small businesses getting started with AI marketing",
    price: "$49",
    annualPrice: "$39",
    period: "/month",
    features: [
      { name: "Up to 5,000 contacts", included: true },
      { name: "Basic AI optimization", included: true },
      { name: "Email & chat support", included: true },
      { name: "Advanced analytics", included: false }
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const
  },
  {
    title: "Professional",
    description: "Advanced AI features for growing marketing teams",
    price: "$149",
    annualPrice: "$119",
    period: "/month",
    features: [
      { name: "Up to 25,000 contacts", included: true },
      { name: "Advanced AI optimization", included: true },
      { name: "Predictive analytics", included: true },
      { name: "Priority support", included: true }
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    title: "Enterprise",
    description: "Custom solutions for large organizations",
    price: "Custom",
    annualPrice: "Custom",
    period: " pricing",
    features: [
      { name: "Unlimited contacts", included: true },
      { name: "Custom AI models", included: true },
      { name: "Dedicated success manager", included: true },
      { name: "24/7 phone support", included: true }
    ],
    buttonText: "Contact Sales",
    buttonVariant: "secondary" as const
  }
];

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent <GradientText>Pricing</GradientText>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our core AI features with 14-day free trial.
          </p>
          
          <PricingCalculator onBillingChange={setBilling} />
        </motion.div>
        
        <motion.div 
          {...staggerContainer}
          className="grid lg:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={index} {...fadeInUp}>
              <PricingCard {...plan} billing={billing} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
