import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { apiRequest } from "@/lib/queryClient";

const trialSignupSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required")
});

interface TrialSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrialSignupModal({ isOpen, onClose }: TrialSignupModalProps) {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(trialSignupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof trialSignupSchema>) => {
      return apiRequest("POST", "/api/trial", data);
    },
    onSuccess: (response) => {
      toast({
        title: "Trial Created!",
        description: response.message || "Your free trial is ready to go!",
      });
      onClose();
      form.reset();
      
      // In a real app, redirect to onboarding
      setTimeout(() => {
        toast({
          title: "Next Steps",
          description: "Check your email for login credentials and setup instructions.",
        });
      }, 2000);
    },
    onError: (error) => {
      toast({
        title: "Signup Failed",
        description: "Unable to create your trial account. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: z.infer<typeof trialSignupSchema>) => {
    mutation.mutate(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Start Your Free Trial" size="md">
      <div className="mb-6">
        <p className="text-slate-600">
          Get started with ADmyBRAND AI Suite today. No credit card required.
        </p>
        <div className="flex items-center space-x-4 mt-4 text-sm text-slate-500">
          <div>✓ 14-day free trial</div>
          <div>✓ Full feature access</div>
          <div>✓ No commitment</div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John" 
                      {...field} 
                      disabled={mutation.isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Doe" 
                      {...field} 
                      disabled={mutation.isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="john@company.com" 
                    {...field} 
                    disabled={mutation.isPending}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your Company" 
                    {...field} 
                    disabled={mutation.isPending}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Creating your trial...
              </>
            ) : (
              "Start Free Trial"
            )}
          </Button>
          
          <p className="text-xs text-slate-500 text-center">
            By creating an account, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </Form>
    </Modal>
  );
}