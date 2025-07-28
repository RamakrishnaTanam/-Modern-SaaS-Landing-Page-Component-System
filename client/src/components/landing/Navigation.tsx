import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Glassmorphism } from "@/components/ui/glassmorphism";
import { SignInModal } from "@/components/modals/SignInModal";
import { TrialSignupModal } from "@/components/modals/TrialSignupModal";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <Glassmorphism>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-slate-900">ADmyBRAND</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-slate-700 hover:text-primary transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-slate-700 hover:text-primary transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-slate-700 hover:text-primary transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-slate-700 hover:text-primary transition-colors"
              >
                FAQ
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="text-slate-700 hover:text-primary"
                onClick={() => setIsSignInOpen(true)}
              >
                Sign In
              </Button>
              <Button onClick={() => setIsTrialOpen(true)}>
                Start Free Trial
              </Button>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="block px-3 py-2 text-slate-700 hover:text-primary transition-colors"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="block px-3 py-2 text-slate-700 hover:text-primary transition-colors"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="block px-3 py-2 text-slate-700 hover:text-primary transition-colors"
                >
                  Reviews
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="block px-3 py-2 text-slate-700 hover:text-primary transition-colors"
                >
                  FAQ
                </button>
                <div className="border-t border-slate-200 pt-4 pb-3">
                  <Button 
                    variant="ghost" 
                    className="w-full mb-2"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsSignInOpen(true);
                    }}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="w-full"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsTrialOpen(true);
                    }}
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Glassmorphism>
      
      <SignInModal 
        isOpen={isSignInOpen} 
        onClose={() => setIsSignInOpen(false)} 
      />
      
      <TrialSignupModal 
        isOpen={isTrialOpen} 
        onClose={() => setIsTrialOpen(false)} 
      />
    </nav>
  );
}
