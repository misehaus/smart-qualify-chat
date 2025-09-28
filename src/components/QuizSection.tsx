import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Home, UserCheck, Phone, CheckCircle, Clock } from 'lucide-react';

type QuizStep = 'initial' | 'homeownership' | 'loading1' | 'insurance' | 'loading2' | 'result';
type HomeStatus = 'own' | 'rent' | null;
type InsuranceStatus = 'current' | 'shopping' | 'none' | null;

interface QuizSectionProps {
  onCallToAction: () => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ onCallToAction }) => {
  const [currentStep, setCurrentStep] = useState<QuizStep>('homeownership');
  const [homeStatus, setHomeStatus] = useState<HomeStatus>(null);
  const [insuranceStatus, setInsuranceStatus] = useState<InsuranceStatus>(null);

  const handleHomeSelection = (status: HomeStatus) => {
    setHomeStatus(status);
    setCurrentStep('loading1');
    
    setTimeout(() => {
      setCurrentStep('insurance');
    }, 1500);
  };

  const handleInsuranceSelection = (status: InsuranceStatus) => {
    setInsuranceStatus(status);
    setCurrentStep('loading2');
    
    setTimeout(() => {
      setCurrentStep('result');
    }, 1800);
  };

  const getQualificationResult = () => {
    if (homeStatus === 'own' && (insuranceStatus === 'current' || insuranceStatus === 'shopping')) {
      return 'qualified';
    }
    return 'not-qualified';
  };

  const LoadingScreen = ({ message }: { message: string }) => (
    <div className="text-center py-12 animate-fade-in-up">
      <div className="loading-dots text-primary mb-4 justify-center">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
      <p className="text-lg text-muted-foreground">{message}</p>
    </div>
  );

  const StepIndicator = () => {
    const totalSteps = 2;
    const currentStepNumber = 
      currentStep === 'homeownership' || currentStep === 'loading1' ? 1 :
      currentStep === 'insurance' || currentStep === 'loading2' ? 2 : 2;

    return (
      <div className="flex justify-center mb-8">
        <div className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
          Step {currentStepNumber} of {totalSteps}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {(currentStep === 'homeownership' || currentStep === 'insurance') && <StepIndicator />}

      {currentStep === 'homeownership' && (
        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Do you own or rent your home?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Card 
              className="quiz-option p-6 cursor-pointer border-2 hover:border-primary bg-card"
              onClick={() => handleHomeSelection('rent')}
            >
              <div className="text-center">
                <UserCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">I rent / don't own</h4>
                <p className="text-muted-foreground">Other discounts may be available</p>
              </div>
            </Card>
            <Card 
              className="quiz-option p-6 cursor-pointer border-2 hover:border-primary bg-card"
              onClick={() => handleHomeSelection('own')}
            >
              <div className="text-center">
                <Home className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">I own my home</h4>
                <p className="text-muted-foreground">You may qualify for homeowner discounts</p>
              </div>
            </Card>
          </div>
        </div>
      )}

      {currentStep === 'loading1' && (
        <LoadingScreen message="Checking your eligibility..." />
      )}

      {currentStep === 'insurance' && (
        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-semibold text-center mb-8">
            What's your current auto insurance situation?
          </h3>
          <div className="grid gap-4">
            <Card 
              className="quiz-option p-6 cursor-pointer border-2 hover:border-primary bg-card"
              onClick={() => handleInsuranceSelection('current')}
            >
              <div className="flex items-center">
                <CheckCircle className="w-8 h-8 text-success mr-4" />
                <div>
                  <h4 className="text-lg font-semibold">I have current auto insurance</h4>
                  <p className="text-muted-foreground">Looking to save money on my current policy</p>
                </div>
              </div>
            </Card>
            <Card 
              className="quiz-option p-6 cursor-pointer border-2 hover:border-primary bg-card"
              onClick={() => handleInsuranceSelection('shopping')}
            >
              <div className="flex items-center">
                <Clock className="w-8 h-8 text-warning mr-4" />
                <div>
                  <h4 className="text-lg font-semibold">I'm shopping for insurance</h4>
                  <p className="text-muted-foreground">Need new coverage or comparing options</p>
                </div>
              </div>
            </Card>
            <Card 
              className="quiz-option p-6 cursor-pointer border-2 hover:border-primary bg-card"
              onClick={() => handleInsuranceSelection('none')}
            >
              <div className="flex items-center">
                <UserCheck className="w-8 h-8 text-primary mr-4" />
                <div>
                  <h4 className="text-lg font-semibold">I don't have auto insurance</h4>
                  <p className="text-muted-foreground">Need coverage for the first time</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {currentStep === 'loading2' && (
        <LoadingScreen message="Reviewing your answers and calculating savings..." />
      )}

      {currentStep === 'result' && (
        <div className="animate-bounce-in text-center">
          {getQualificationResult() === 'qualified' ? (
            <div className="bg-gradient-success p-8 rounded-2xl text-success-foreground shadow-card">
              <CheckCircle className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Great News!</h3>
              <p className="text-lg mb-6">
                You likely qualify for significant homeowner auto insurance discounts. 
                Call now to lock in your rate and start saving.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-success-foreground text-success hover:bg-success-foreground/90 shadow-button"
                onClick={onCallToAction}
              >
                <Phone className="w-5 h-5 mr-2" />
                Tap to Call 📞 (833) 487-1939
              </Button>
              <p className="text-sm mt-3 opacity-90">
                No obligation • Free consultation • Licensed agents
              </p>
            </div>
          ) : (
            <div className="bg-card p-8 rounded-2xl border shadow-card">
              <Clock className="w-16 h-16 mx-auto mb-4 text-warning" />
              <h3 className="text-3xl font-bold mb-4">Don't Worry!</h3>
              <p className="text-lg mb-6 text-card-foreground">
                You may not qualify for homeowner discounts, but you could be eligible 
                for other money-saving offers. Let us help you find the best rates.
              </p>
              <div className="space-y-3">
                <Button 
                  size="lg" 
                  variant="default"
                  className="w-full shadow-button"
                  onClick={onCallToAction}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get a Free Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full"
                >
                  Sign Up for Savings Alerts
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizSection;