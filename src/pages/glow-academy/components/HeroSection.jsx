import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-primary via-background to-brand-secondary py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/20 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-success/10 blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="GraduationCap" size={16} />
            <span>Learn • Grow • Glow</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-accent">
            Glow Academy
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Your journey to beauty mastery starts here
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover expert-led tutorials, ingredient science, and personalized learning paths designed to unlock your unique beauty potential.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="default" size="lg" iconName="Play" iconPosition="left">
              Start Learning
            </Button>
            <Button variant="outline" size="lg" iconName="BookOpen" iconPosition="left">
              Browse Courses
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Expert Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Beauty Experts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-success mb-1">100K+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-warning mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;