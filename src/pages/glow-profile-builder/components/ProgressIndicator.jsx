import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ currentStep, totalSteps, stepTitles }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-8">
      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden mb-6">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      {/* Step Indicators */}
      <div className="flex justify-between items-center">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div key={stepNumber} className="flex flex-col items-center">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300
                ${isCompleted 
                  ? 'bg-success text-success-foreground' 
                  : isCurrent 
                    ? 'bg-primary text-primary-foreground shadow-soft' 
                    : 'bg-muted text-muted-foreground'
                }
              `}>
                {isCompleted ? (
                  <Icon name="Check" size={16} />
                ) : (
                  stepNumber
                )}
              </div>
              <span className={`
                text-xs mt-2 text-center max-w-20 transition-colors duration-300
                ${isCurrent ? 'text-foreground font-medium' : 'text-muted-foreground'}
              `}>
                {stepTitles?.[index]}
              </span>
            </div>
          );
        })}
      </div>
      {/* Motivational Text */}
      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          {currentStep === 1 && "Let's discover your unique beauty profile..."}
          {currentStep === 2 && "Understanding your skin is the first step to glowing..."}
          {currentStep === 3 && "Your concerns help us personalize your journey..."}
          {currentStep === 4 && "Tell us about your beauty routine preferences..."}
          {currentStep === 5 && "Almost there! Let's finalize your glow profile..."}
          {currentStep === 6 && "Your personalized beauty DNA is ready!"}
        </p>
      </div>
    </div>
  );
};

export default ProgressIndicator;