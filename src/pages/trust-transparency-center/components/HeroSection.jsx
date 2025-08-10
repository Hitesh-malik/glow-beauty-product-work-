import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-primary via-background to-brand-secondary py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-accent"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-success"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Shield" size={16} />
            <span>Verified Transparency Standards</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-accent">
            Trust & Transparency
            <span className="block text-primary">Center</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
            Building confidence through radical transparency. Every ingredient sourced, every claim verified, every practice documented. Because your trust is the foundation of authentic beauty.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="default" size="lg" iconName="Search" iconPosition="left">
              Search Ingredients
            </Button>
            <Button variant="outline" size="lg" iconName="FileText" iconPosition="left">
              View Certifications
            </Button>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Ingredient Transparency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Verified Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-success mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Third-Party Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-warning mb-2">0</div>
              <div className="text-sm text-muted-foreground">Hidden Ingredients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;