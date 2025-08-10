import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F4E6D9] via-[#E8B4A0] to-[#C17B5C]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20 blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 rounded-full bg-white/15 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-white/25 blur-lg"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white font-accent leading-tight">
                Your Glow,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                  Your Way
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed">
                Discover your unique beauty journey with personalized recommendations, expert guidance, and a community that celebrates every glow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/glow-profile-builder">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-white text-[#C17B5C] hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Discover Your Glow
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#C17B5C] px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Explore Community
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500K+</div>
                <div className="text-white/80 text-sm">Glow Journeys Started</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-white/80 text-sm">Beauty Stories Shared</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-white/80 text-sm">Products Discovered</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1594824388853-e0c8b8b0b6e5?w=600&h=800&fit=crop&crop=face"
                alt="Beautiful woman with natural glowing skin showcasing authentic beauty"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl object-cover h-[600px]"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="text-white text-sm font-medium">✨ Natural Glow</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="text-white text-sm font-medium">🌟 Confidence Boost</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;