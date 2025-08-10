import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const GlowDiscoverySection = () => {
  const discoveryPaths = [
    {
      id: 1,
      title: "Find My Match",
      description: "AI-powered recommendations tailored to your unique skin type, concerns, and beauty goals.",
      icon: "Sparkles",
      color: "from-primary to-accent",
      features: ["Skin analysis", "Product matching", "Personalized routine"],
      cta: "Start Quiz",
      link: "/glow-profile-builder"
    },
    {
      id: 2,
      title: "Learn & Grow",
      description: "Expert tutorials, ingredient deep-dives, and masterclasses to elevate your beauty knowledge.",
      icon: "GraduationCap",
      color: "from-success to-trust-builder",
      features: ["Video tutorials", "Expert tips", "Ingredient guides"],
      cta: "Explore Academy",
      link: "/glow-academy"
    },
    {
      id: 3,
      title: "Join the Community",
      description: "Connect with beauty enthusiasts, share your journey, and discover inspiration from real people.",
      icon: "Users",
      color: "from-accent to-conversion",
      features: ["Beauty stories", "Peer advice", "Challenges"],
      cta: "Join Now",
      link: "/beauty-universe"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-accent">
            Your Glow Discovery Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your path to beauty empowerment. Whether you're seeking personalized recommendations, 
            expert knowledge, or community connection, we've got you covered.
          </p>
        </div>

        {/* Discovery Paths */}
        <div className="grid lg:grid-cols-3 gap-8">
          {discoveryPaths?.map((path, index) => (
            <div
              key={path?.id}
              className="relative group breathing-card"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${path?.color} rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative bg-card rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${path?.color} flex items-center justify-center mb-6`}>
                  <Icon name={path?.icon} size={28} color="white" />
                </div>

                {/* Content */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-card-foreground">{path?.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{path?.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {path?.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${path?.color}`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link to={path?.link} className="block">
                  <Button 
                    variant="outline" 
                    fullWidth
                    className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  >
                    {path?.cta}
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>

                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Not sure where to start?
            </h3>
            <p className="text-muted-foreground mb-6">
              Take our comprehensive beauty assessment to get personalized recommendations 
              and discover the perfect starting point for your glow journey.
            </p>
            <Link to="/glow-profile-builder">
              <Button variant="default" size="lg">
                Take Beauty Assessment
                <Icon name="Sparkles" size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlowDiscoverySection;