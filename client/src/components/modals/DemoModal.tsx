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
import { Calendar } from "lucide-react";

const demoSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required")
});

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      name: "",
      email: "",
      company: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof demoSchema>) => {
      return apiRequest("POST", "/api/demo", data);
    },
    onSuccess: (response) => {
      toast({
        title: "Demo Scheduled!",
        description: response.message || "Check your email for the calendar invite.",
      });
      onClose();
      form.reset();
      
      // In a real app, this would open calendar booking
      setTimeout(() => {
        toast({
          title: "Calendar Link",
          description: "Opening calendar booking system...",
        });
      }, 1500);
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: "Unable to schedule demo. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: z.infer<typeof demoSchema>) => {
    mutation.mutate(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Schedule a Demo" size="md">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <Calendar className="w-5 h-5 text-primary mr-2" />
          <span className="font-medium">30-minute personalized demo</span>
        </div>
        <p className="text-slate-600">
          See how ADmyBRAND AI Suite can transform your marketing with a personalized demo tailored to your business needs.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
          <div className="text-slate-600">✓ Live product walkthrough</div>
          <div className="text-slate-600">✓ Custom use case examples</div>
          <div className="text-slate-600">✓ ROI calculations</div>
          <div className="text-slate-600">✓ Q&A with our experts</div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    {...field} 
                    disabled={mutation.isPending}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
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
                Scheduling demo...
              </>
            ) : (
              "Schedule Demo"
            )}
          </Button>
          
          <p className="text-xs text-slate-500 text-center">
            We respect your privacy. Your information will only be used to schedule and customize your demo.
          </p>
        </form>
      </Form>
    </Modal>
  );
}