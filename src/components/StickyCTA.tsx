import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const handleCall = () => {
    window.location.href = 'tel:8334871939';
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary border-t border-primary/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-primary-foreground">
            <p className="text-sm font-medium">Need Immediate Assistance?</p>
          </div>
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={handleCall}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-button"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call (833) 487-1939
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;