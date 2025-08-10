import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProgressIndicator from './components/ProgressIndicator';
import SkinToneSelector from './components/SkinToneSelector';
import SkinAnalysis from './components/SkinAnalysis';
import ConcernSelector from './components/ConcernSelector';
import RoutinePreferences from './components/RoutinePreferences';
import GlowProfileResults from './components/GlowProfileResults';

const GlowProfileBuilder = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [profileData, setProfileData] = useState({
    skinTone: '',
    skinAnalysis: null,
    concerns: [],
    preferences: {
      timeCommitment: '',
      experienceLevel: '',
      beautyGoal: '',
      productPreferences: []
    }
  });

  const totalSteps = 6;
  const stepTitles = ['Welcome', 'Skin Tone', 'Analysis', 'Concerns', 'Preferences', 'Results'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkinToneSelect = (tone) => {
    setProfileData(prev => ({ ...prev, skinTone: tone }));
  };

  const handleAnalysisUpdate = (analysisData) => {
    setProfileData(prev => ({ ...prev, skinAnalysis: analysisData }));
  };

  const handleConcernsUpdate = (concerns) => {
    setProfileData(prev => ({ ...prev, concerns }));
  };

  const handlePreferencesUpdate = (preferences) => {
    setProfileData(prev => ({ ...prev, preferences }));
  };

  const handleSaveProfile = () => {
    // Mock save functionality
    localStorage.setItem('beautyGlowProfile', JSON.stringify(profileData));
    alert('Profile saved successfully!');
  };

  const handleStartShopping = () => {
    navigate('/beauty-universe');
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return true;
      case 2:
        return profileData?.skinTone !== '';
      case 3:
        return profileData?.skinAnalysis !== null;
      case 4:
        return profileData?.concerns?.length > 0;
      case 5:
        return profileData?.preferences?.timeCommitment !== '' && 
               profileData?.preferences?.experienceLevel !== '' && 
               profileData?.preferences?.beautyGoal !== '';
      case 6:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Progress Indicator */}
          {currentStep <= totalSteps && (
            <ProgressIndicator 
              currentStep={currentStep}
              totalSteps={totalSteps}
              stepTitles={stepTitles}
            />
          )}

          {/* Step Content */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-soft-lg">
            {/* Step 1: Welcome */}
            {currentStep === 1 && (
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Sparkles" size={40} color="white" />
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Welcome to Your Glow Journey! ✨
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                    Let's create your personalized Beauty DNA through our interactive questionnaire. We'll analyze your skin, understand your concerns, and build a routine that's uniquely yours.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="text-center p-6 bg-brand-primary/10 rounded-lg">
                    <Icon name="Search" size={32} className="text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Discover</h3>
                    <p className="text-sm text-muted-foreground">
                      Identify your unique skin type, tone, and specific concerns
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-brand-primary/10 rounded-lg">
                    <Icon name="Target" size={32} className="text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Personalize</h3>
                    <p className="text-sm text-muted-foreground">
                      Get tailored product recommendations and routine suggestions
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-brand-primary/10 rounded-lg">
                    <Icon name="TrendingUp" size={32} className="text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Glow</h3>
                    <p className="text-sm text-muted-foreground">
                      Start your journey to healthier, more radiant skin
                    </p>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-4 max-w-md mx-auto">
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>Takes about 5-7 minutes</span>
                    <span>•</span>
                    <Icon name="Shield" size={16} />
                    <span>100% Private & Secure</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Skin Tone Selection */}
            {currentStep === 2 && (
              <SkinToneSelector 
                selectedTone={profileData?.skinTone}
                onToneSelect={handleSkinToneSelect}
              />
            )}

            {/* Step 3: Skin Analysis */}
            {currentStep === 3 && (
              <SkinAnalysis 
                analysisData={profileData?.skinAnalysis}
                onAnalysisUpdate={handleAnalysisUpdate}
              />
            )}

            {/* Step 4: Concern Selection */}
            {currentStep === 4 && (
              <ConcernSelector 
                selectedConcerns={profileData?.concerns}
                onConcernsUpdate={handleConcernsUpdate}
              />
            )}

            {/* Step 5: Routine Preferences */}
            {currentStep === 5 && (
              <RoutinePreferences 
                preferences={profileData?.preferences}
                onPreferencesUpdate={handlePreferencesUpdate}
              />
            )}

            {/* Step 6: Results */}
            {currentStep === 6 && (
              <GlowProfileResults 
                profileData={profileData}
                onSaveProfile={handleSaveProfile}
                onStartShopping={handleStartShopping}
              />
            )}
          </div>

          {/* Navigation Buttons */}
          {currentStep < 6 && (
            <div className="flex justify-between items-center mt-8">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                <Icon name="ChevronLeft" size={16} className="mr-2" />
                Previous
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Step {currentStep} of {totalSteps}
                </p>
              </div>

              <Button 
                variant="default" 
                onClick={handleNext}
                disabled={!canProceed()}
              >
                {currentStep === totalSteps - 1 ? 'View Results' : 'Next'}
                <Icon name="ChevronRight" size={16} className="ml-2" />
              </Button>
            </div>
          )}

          {/* Skip Option */}
          {currentStep > 1 && currentStep < 6 && (
            <div className="text-center mt-6">
              <button 
                onClick={() => setCurrentStep(6)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Skip to results with current data
              </button>
            </div>
          )}
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span>Your data is secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={16} />
              <span>Join 50K+ users</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} />
              <span>Expert-backed analysis</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            © {new Date()?.getFullYear()} Beauty Glow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GlowProfileBuilder;