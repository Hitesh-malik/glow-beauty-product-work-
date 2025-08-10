import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import NavigationTabs from './components/NavigationTabs';
import IngredientSourcingSection from './components/IngredientSourcingSection';
import SustainabilitySection from './components/SustainabilitySection';
import CertificationsSection from './components/CertificationsSection';
import CleanBeautySection from './components/CleanBeautySection';
import SafetySection from './components/SafetySection';
import PrivacySection from './components/PrivacySection';

const TrustTransparencyCenter = () => {
  const [activeTab, setActiveTab] = useState('ingredients');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle tab changes and smooth scroll to content
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    // Smooth scroll to content section
    const contentSection = document.getElementById('trust-content');
    if (contentSection) {
      contentSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'ingredients':
        return <IngredientSourcingSection />;
      case 'sustainability':
        return <SustainabilitySection />;
      case 'certifications':
        return <CertificationsSection />;
      case 'clean-beauty':
        return <CleanBeautySection />;
      case 'safety':
        return <SafetySection />;
      case 'privacy':
        return <PrivacySection />;
      default:
        return <IngredientSourcingSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <HeroSection />
      {/* Navigation Tabs */}
      <NavigationTabs activeTab={activeTab} onTabChange={handleTabChange} />
      {/* Main Content */}
      <main id="trust-content" className="max-w-7xl mx-auto px-6 py-12">
        {renderActiveSection()}
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Transparency is Our Foundation
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We believe that informed consumers make better choices. Our commitment to transparency extends beyond compliance—it's about building lasting trust through radical honesty about our practices, ingredients, and impact.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>&copy; {new Date()?.getFullYear()} Beauty Glow. All rights reserved.</p>
              <p className="mt-2">
                Last updated: January {new Date()?.getFullYear()} | 
                <span className="ml-2">Questions? Contact our transparency team at trust@beautyglow.com</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrustTransparencyCenter;