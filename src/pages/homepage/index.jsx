import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TrendingLooksCarousel from './components/TrendingLooksCarousel';
import GlowDiscoverySection from './components/GlowDiscoverySection';
import CommunityFeed from './components/CommunityFeed';
import IngredientSpotlight from './components/IngredientSpotlight';
import SocialProofSection from './components/SocialProofSection';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <TrendingLooksCarousel />
        <GlowDiscoverySection />
        <CommunityFeed />
        <IngredientSpotlight />
        <SocialProofSection />
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✨</span>
                </div>
                <div>
                  <div className="text-xl font-bold font-accent">Beauty Glow</div>
                  <div className="text-sm text-background/70">Authentic Beauty Journey</div>
                </div>
              </div>
              <p className="text-background/80 max-w-md leading-relaxed">
                Empowering your unique beauty journey through personalized recommendations, 
                expert guidance, and an inclusive community that celebrates every glow.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <span className="text-background">📘</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <span className="text-background">📷</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <span className="text-background">🐦</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <span className="text-background">📺</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Discover</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="/glow-profile-builder" className="hover:text-background transition-colors">Glow Profile Builder</a></li>
                <li><a href="/beauty-universe" className="hover:text-background transition-colors">Beauty Universe</a></li>
                <li><a href="/glow-academy" className="hover:text-background transition-colors">Glow Academy</a></li>
                <li><a href="/glow-lab" className="hover:text-background transition-colors">Glow Lab</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Support</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="/trust-transparency-center" className="hover:text-background transition-colors">Trust Center</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Community Guidelines</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60">
              © {new Date()?.getFullYear()} Beauty Glow. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;