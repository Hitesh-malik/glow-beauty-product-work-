import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InnovationHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-primary via-background to-brand-secondary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name="FlaskConical" size={18} color="white" />
                </div>
                <span className="text-sm font-medium text-primary uppercase tracking-wide">Innovation Lab</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground font-accent leading-tight">
                Where Beauty
                <span className="block text-primary">Meets Tomorrow</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Discover breakthrough innovations, test unreleased products, and shape the future of beauty with our exclusive innovation community.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" iconName="Sparkles" iconPosition="left">
                Join Beta Testing
              </Button>
              <Button variant="outline" size="lg" iconName="TrendingUp" iconPosition="left">
                Explore Trends
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">Beta Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">25K+</div>
                <div className="text-sm text-muted-foreground">Beta Testers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=500&fit=crop"
                alt="Beauty innovation laboratory with modern equipment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-background border border-border rounded-xl p-4 shadow-soft-lg">
              <div className="flex items-center space-x-2">
                <Icon name="Beaker" size={16} color="var(--color-primary)" />
                <span className="text-sm font-medium">New Formula</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">Launching Soon</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-xl p-4 shadow-soft-lg">
              <div className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={16} color="var(--color-accent)" />
                <span className="text-sm font-medium">Trend Alert</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">Glass Skin 2.0</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationHero;