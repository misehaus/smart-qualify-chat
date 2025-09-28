import React, { useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import QuizSection from '@/components/QuizSection';
import StickyCTA from '@/components/StickyCTA';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const quizRef = useRef<HTMLElement>(null);

  const scrollToQuiz = () => {
    quizRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  };

  const handleCallToAction = () => {
    // In a real app, this would initiate a phone call or redirect to a contact form
    toast({
      title: "Thank you for your interest!",
      description: "A licensed agent will contact you shortly to discuss your savings opportunities.",
    });
    
    // For demo purposes, show an alert
    alert("📞 Calling (555) 123-4567...\n\nIn a real implementation, this would initiate a phone call or redirect to a contact form.");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection onStartQuiz={scrollToQuiz} />
      
      {/* Quiz Section */}
      <section 
        ref={quizRef}
        className="py-20 px-6 bg-secondary/30"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Out if You Qualify
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Answer just 2 quick questions to discover your potential savings
            </p>
          </div>
          
          <QuizSection onCallToAction={handleCallToAction} />
        </div>
      </section>
      
      {/* Trust Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-2">Licensed & Insured</h4>
              <p className="text-primary-foreground/80 text-sm">
                All agents are fully licensed and certified in your state
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">A+ Rated Companies</h4>
              <p className="text-primary-foreground/80 text-sm">
                We only work with top-rated insurance providers
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">No Hidden Fees</h4>
              <p className="text-primary-foreground/80 text-sm">
                Our consultation is completely free with no obligations
              </p>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Insurance Savings Hub. All rights reserved. 
              Licensed insurance marketplace serving homeowners nationwide.
            </p>
          </div>
        </div>
      </footer>
      <StickyCTA />
    </div>
  );
};

export default Index;
