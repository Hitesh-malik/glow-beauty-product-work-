import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LearningPathsSection from './components/LearningPathsSection';
import FeaturedTutorialsSection from './components/FeaturedTutorialsSection';
import ExpertMasterclassSection from './components/ExpertMasterclassSection';
import ProgressTrackingSection from './components/ProgressTrackingSection';
import CommunityShowcaseSection from './components/CommunityShowcaseSection';

const GlowAcademy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <LearningPathsSection />
        <FeaturedTutorialsSection />
        <ExpertMasterclassSection />
        <ProgressTrackingSection />
        <CommunityShowcaseSection />
      </main>
    </div>
  );
};

export default GlowAcademy;