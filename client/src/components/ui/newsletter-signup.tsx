import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Mail } from "lucide-react";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address")
});

interface NewsletterSignupProps {
  placeholder?: string;
  buttonText?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function NewsletterSignup({ 
  placeholder = "Enter your email", 
  buttonText = "Subscribe",
  className = "",
  size = "md"
}: NewsletterSignupProps) {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof newsletterSchema>) => {
      return apiRequest("POST", "/api/subscribe", data);
    },
    onSuccess: (response) => {
      toast({
        title: "Subscribed!",
        description: response.message || "You've been added to our newsletter.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Subscription Failed",
        description: "Unable to subscribe. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: z.infer<typeof newsletterSchema>) => {
    mutation.mutate(data);
  };

  const sizeClasses = {
    sm: "flex-col space-y-2",
    md: "flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2",
    lg: "flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3"
  };

  const inputSizeClasses = {
    sm: "h-9",
    md: "h-11", 
    lg: "h-12"
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={`flex ${sizeClasses[size]} ${className}`}>
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
        <Input
          type="email"
          placeholder={placeholder}
          {...form.register("email")}
          disabled={mutation.isPending}
          className={`pl-10 ${inputSizeClasses[size]}`}
        />
        {form.formState.errors.email && (
          <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        disabled={mutation.isPending}
        className={`${inputSizeClasses[size]} px-6 whitespace-nowrap`}
      >
        {mutation.isPending ? (
          <>
            <LoadingSpinner size="sm" className="mr-2" />
            Subscribing...
          </>
        ) : (
          buttonText
        )}
      </Button>
    </form>
  );
}