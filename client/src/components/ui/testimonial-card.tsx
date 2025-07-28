import { Star } from "lucide-react";
import { Glassmorphism } from "./glassmorphism";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string;
  rating: number;
}

export function TestimonialCard({ name, role, company, testimonial, avatar, rating }: TestimonialCardProps) {
  return (
    <Glassmorphism className="p-8 rounded-2xl">
      <div className="flex items-center mb-4">
        <div className="flex text-accent">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-slate-700 mb-6 italic">"{testimonial}"</p>
      <div className="flex items-center">
        <img 
          src={avatar} 
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <div className="font-semibold text-slate-900">{name}</div>
          <div className="text-slate-600 text-sm">{role}, {company}</div>
        </div>
      </div>
    </Glassmorphism>
  );
}
