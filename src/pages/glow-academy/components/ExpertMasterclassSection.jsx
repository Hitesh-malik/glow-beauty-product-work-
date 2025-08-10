import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ExpertMasterclassSection = () => {
  const masterclasses = [
    {
      id: 1,
      title: "Advanced Anti-Aging Strategies",
      expert: "Dr. Jennifer Martinez",
      expertTitle: "Board-Certified Dermatologist",
      expertImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      thumbnail: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=500&fit=crop",
      duration: "90 min",
      date: "Dec 15, 2024",
      time: "2:00 PM EST",
      price: "Free for Members",
      originalPrice: "$49",
      attendees: 2847,
      rating: 4.9,
      isLive: true,
      description: "Comprehensive masterclass covering the latest in anti-aging science, from peptides to laser treatments.",
      topics: ["Peptide Therapy", "Retinoid Protocols", "Professional Treatments", "Prevention Strategies"],
      level: "Advanced"
    },
    {
      id: 2,
      title: "Editorial Makeup Techniques",
      expert: "Marcus Chen",
      expertTitle: "Celebrity Makeup Artist",
      expertImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=500&fit=crop",
      duration: "120 min",
      date: "Dec 18, 2024",
      time: "7:00 PM EST",
      price: "Free for Members",
      originalPrice: "$75",
      attendees: 1923,
      rating: 4.8,
      isLive: false,
      description: "Learn high-fashion makeup techniques used in editorial shoots and red carpet events.",
      topics: ["Color Theory", "Avant-Garde Looks", "Photography Makeup", "Creative Techniques"],
      level: "Professional"
    },
    {
      id: 3,
      title: "Holistic Beauty & Wellness",
      expert: "Dr. Priya Patel",
      expertTitle: "Integrative Wellness Expert",
      expertImage: "https://images.unsplash.com/photo-1594824388853-2c5d0d1d6d28?w=400&h=400&fit=crop&crop=face",
      thumbnail: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=500&fit=crop",
      duration: "75 min",
      date: "Dec 20, 2024",
      time: "12:00 PM EST",
      price: "Free for Members",
      originalPrice: "$39",
      attendees: 3156,
      rating: 4.9,
      isLive: true,
      description: "Explore the connection between inner wellness and outer beauty through nutrition and lifestyle.",
      topics: ["Beauty Nutrition", "Stress & Skin", "Sleep Optimization", "Mindful Beauty"],
      level: "All Levels"
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'All Levels': return 'bg-success/10 text-success';
      case 'Advanced': return 'bg-warning/10 text-warning';
      case 'Professional': return 'bg-error/10 text-error';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Crown" size={16} />
            <span>Exclusive Content</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-accent">
            Expert Masterclasses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn directly from industry leaders in intimate, interactive sessions designed for serious beauty enthusiasts
          </p>
        </div>

        {/* Masterclasses Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {masterclasses?.map((masterclass) => (
            <div
              key={masterclass?.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-soft-lg transition-all duration-300 breathing-card"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={masterclass?.thumbnail}
                  alt={masterclass?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Live Badge */}
                {masterclass?.isLive && (
                  <div className="absolute top-4 left-4 flex items-center space-x-2 bg-error text-error-foreground px-3 py-1 rounded-full text-xs font-medium">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>LIVE</span>
                  </div>
                )}

                {/* Duration */}
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {masterclass?.duration}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Icon name="Play" size={24} className="text-foreground ml-1" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Expert Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src={masterclass?.expertImage}
                    alt={masterclass?.expert}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{masterclass?.expert}</h4>
                    <p className="text-sm text-muted-foreground">{masterclass?.expertTitle}</p>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {masterclass?.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {masterclass?.description}
                </p>

                {/* Topics */}
                <div className="mb-4">
                  <h5 className="text-xs font-medium text-foreground mb-2">Topics Covered:</h5>
                  <div className="flex flex-wrap gap-1">
                    {masterclass?.topics?.slice(0, 3)?.map((topic, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                    {masterclass?.topics?.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        +{masterclass?.topics?.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-center justify-between mb-4 p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="flex items-center space-x-2 text-sm font-medium text-foreground">
                      <Icon name="Calendar" size={14} />
                      <span>{masterclass?.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
                      <Icon name="Clock" size={12} />
                      <span>{masterclass?.time}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(masterclass?.level)}`}>
                    {masterclass?.level}
                  </span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Icon name="Users" size={14} />
                      <span>{masterclass?.attendees?.toLocaleString()}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Star" size={14} />
                      <span>{masterclass?.rating}</span>
                    </span>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-primary">{masterclass?.price}</div>
                    <div className="text-sm text-muted-foreground line-through">{masterclass?.originalPrice}</div>
                  </div>
                  <Button variant="default" size="sm" iconName="Calendar" iconPosition="left">
                    Reserve Spot
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" iconName="Calendar" iconPosition="left">
            View All Masterclasses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExpertMasterclassSection;