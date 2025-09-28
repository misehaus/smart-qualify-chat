import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Shield, TrendingDown } from 'lucide-react';
import heroImage from '@/assets/hero-insurance.jpg';

interface HeroSectionProps {
  onStartQuiz: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartQuiz }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional home and auto insurance"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-primary-foreground">
        {/* Trust Badge */}
        <div className="animate-fade-in-up mb-8">
          <div className="inline-flex items-center bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 text-sm">
            <Shield className="w-4 h-4 mr-2" />
            Trusted by 50,000+ homeowners nationwide
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="animate-fade-in-up text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Homeowners: You Could Be{' '}
          <span className="relative">
            Missing Out
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-warning rounded-full"></div>
          </span>
          {' '}on a Major Auto Insurance Discount
        </h1>

        {/* Subheadline */}
        <p className="animate-slide-in-left text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
          Take this short quiz to see if you qualify. It takes less than 30 seconds.
        </p>

        {/* Value Proposition Points */}
        <div className="animate-bounce-in grid md:grid-cols-3 gap-6 mb-10">
          <div className="flex items-center justify-center text-center md:text-left">
            <TrendingDown className="w-8 h-8 mr-3 text-success-light" />
            <div>
              <div className="font-semibold text-lg">Save up to 25%</div>
              <div className="text-primary-foreground/80">on your auto insurance</div>
            </div>
          </div>
          <div className="flex items-center justify-center text-center md:text-left">
            <Shield className="w-8 h-8 mr-3 text-success-light" />
            <div>
              <div className="font-semibold text-lg">No obligation</div>
              <div className="text-primary-foreground/80">Free consultation</div>
            </div>
          </div>
          <div className="flex items-center justify-center text-center md:text-left">
            <ChevronDown className="w-8 h-8 mr-3 text-success-light" />
            <div>
              <div className="font-semibold text-lg">Quick & Easy</div>
              <div className="text-primary-foreground/80">2-minute process</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-bounce-in">
          <Button 
            variant="gold" 
            size="xl" 
            onClick={onStartQuiz}
            className="mb-4"
          >
            Start Free Quiz Now
            <ChevronDown className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-primary-foreground/70">
            Join thousands of homeowners already saving money
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;