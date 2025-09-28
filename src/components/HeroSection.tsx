import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Shield, TrendingDown } from 'lucide-react';
import heroImage from '@/assets/hero-insurance.jpg';
interface HeroSectionProps {
  onStartQuiz: () => void;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  onStartQuiz
}) => {
  return <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pb-20 md:pb-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Professional home and auto insurance" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-primary-foreground py-4">
        {/* Trust Badge */}
        <div className="animate-fade-in-up mb-4 md:mb-8 mt-8 md:mt-16">
          <div className="inline-flex items-center bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm">
            <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            Trusted by 50,000+ homeowners nationwide
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="animate-fade-in-up text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-6 leading-tight">
          <span className="block sm:inline">Homeowners:</span> You Could Be{' '}
            <span className="text-gold">
              Missing Out
            </span>
          {' '}on a Major Auto Insurance Discount
        </h1>

        {/* Subheadline */}
        <p className="animate-slide-in-left text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
          Take this short quiz to see if you qualify. It takes less than 30 seconds.
        </p>

        {/* Value Proposition Points */}
        <div className="animate-bounce-in grid md:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-10 -ml-8 text-sm md:text-base">
          <div className="flex items-center justify-center text-center md:text-left">
            <TrendingDown className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 text-success-light" />
            <div>
              <div className="font-semibold">Save up to 25%</div>
              <div className="text-primary-foreground/80 text-xs md:text-sm">on your auto insurance</div>
            </div>
          </div>
          <div className="flex items-center justify-center text-center md:text-left">
            <Shield className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 text-success-light" />
            <div>
              <div className="font-semibold">No obligation</div>
              <div className="text-primary-foreground/80 text-xs md:text-sm">Free consultation</div>
            </div>
          </div>
          <div className="flex items-center justify-center text-center md:text-left">
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 text-success-light" />
            <div>
              <div className="font-semibold">Quick & Easy</div>
              <div className="text-primary-foreground/80 text-xs md:text-sm">2-minute process</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-bounce-in">
          <Button variant="gold" size="xl" onClick={onStartQuiz} className="mb-2 md:mb-4">
            Start Free Quiz Now
            <ChevronDown className="w-5 h-5 ml-2" />
          </Button>
          
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary-foreground/60" />
        </div>
      </div>
    </section>;
};
export default HeroSection;