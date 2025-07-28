import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    setIsLoading(true);
    
    // Simulate authentication
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Welcome back!",
        description: "You've been successfully signed in.",
      });
      
      // In a real app, redirect to dashboard
      console.log("Sign in successful:", data.email);
      onClose();
      form.reset();
      
    } catch (error) {
      toast({
        title: "Sign in failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Welcome Back" size="sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    {...field} 
                    disabled={isLoading}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input 
                    type="password" 
                    placeholder="••••••••" 
                    {...field} 
                    disabled={isLoading}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <div className="flex items-center justify-between">
            <Button 
              type="button" 
              variant="ghost" 
              className="text-primary hover:text-primary/80"
              disabled={isLoading}
            >
              Forgot password?
            </Button>
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
          
          <div className="text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <Button 
              type="button" 
              variant="ghost" 
              className="text-primary hover:text-primary/80 p-0 h-auto"
              disabled={isLoading}
              onClick={() => {
                onClose();
                // In real app, open sign up modal
                toast({
                  title: "Sign Up",
                  description: "Click 'Start Free Trial' to create your account!",
                });
              }}
            >
              Start your free trial
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
}