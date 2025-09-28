import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Home, UserCheck, Phone, CheckCircle, Clock } from 'lucide-react';

type QuizStep = 'homeownership' | 'loading' | 'result';
type HomeStatus = 'own' | 'rent' | null;

interface QuizSectionProps {
  onCallToAction: () => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ onCallToAction }) => {
  const [currentStep, setCurrentStep] = useState<QuizStep>('homeownership');
  const [homeStatus, setHomeStatus] = useState<HomeStatus>(null);

  const handleHomeSelection = (status: HomeStatus) => {
    setHomeStatus(status);
    setCurrentStep('loading');
    
    setTimeout(() => {
      setCurrentStep('result');
    }, 1500);
  };

  const LoadingScreen = () => (
    <div className="text-center py-12 animate-fade-in-up">
      <div className="loading-dots text-primary mb-4 justify-center">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
      <p className="text-lg text-muted-foreground">Checking local programs and reviewing your answers...</p>
    </div>
  );

  const StepIndicator = () => (
    <div className="flex justify-center mb-8">
      <div className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
        Step 1 of 1
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      {currentStep === 'homeownership' && <StepIndicator />}

      {currentStep === 'homeownership' && (
        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Do you currently own or rent your home?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Card 
              className="quiz-option p-6 cursor-pointer border-2 hover:border-gold bg-card transition-all"
              onClick={() => handleHomeSelection('own')}
            >
              <div className="text-center">
                <Home className="w-12 h-12 text-gold mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Own</h4>
              </div>
            </Card>
            <Card 
              className="quiz-option p-6 cursor-pointer border-2 hover:border-gold bg-card transition-all"
              onClick={() => handleHomeSelection('rent')}
            >
              <div className="text-center">
                <UserCheck className="w-12 h-12 text-gold mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Rent</h4>
              </div>
            </Card>
          </div>
        </div>
      )}

      {currentStep === 'loading' && <LoadingScreen />}

      {currentStep === 'result' && (
        <div className="animate-bounce-in text-center">
          <div className="bg-card p-8 rounded-2xl border shadow-card">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-gold" />
            <h3 className="text-3xl font-bold mb-4">You likely qualify for a discount.</h3>
            <p className="text-lg mb-6 text-card-foreground">
              Call now to lock in your rate before it expires.
            </p>
            <a href="tel:(833)487-1939" className="block">
              <Button 
                size="lg" 
                variant="gold"
                className="w-full md:w-auto shadow-button hover:scale-105 transition-transform"
              >
                📞 Tap to Call
              </Button>
            </a>
            <p className="text-sm mt-3 text-muted-foreground">
              No obligation. We respect your privacy.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizSection;