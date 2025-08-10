import React from 'react';
import Header from '../../components/ui/Header';
import InnovationHero from './components/InnovationHero';
import NewLaunches from './components/NewLaunches';
import BetaTesting from './components/BetaTesting';
import TrendForecasting from './components/TrendForecasting';
import InnovationSpotlight from './components/InnovationSpotlight';
import ComingSoon from './components/ComingSoon';

const GlowLab = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <InnovationHero />
        <NewLaunches />
        <BetaTesting />
        <TrendForecasting />
        <InnovationSpotlight />
        <ComingSoon />
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">BG</span>
                </div>
                <span className="text-lg font-bold font-accent">Beauty Glow</span>
              </div>
              <p className="text-background/80 text-sm">
                Discover your authentic beauty journey with innovative products and inclusive community.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Innovation</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Glow Lab</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Beta Testing</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Trend Forecasting</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Research Papers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Beauty Universe</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Glow Academy</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Expert Network</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-background/60 text-sm">
              © {new Date()?.getFullYear()} Beauty Glow. All rights reserved. Empowering authentic beauty journeys worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GlowLab;