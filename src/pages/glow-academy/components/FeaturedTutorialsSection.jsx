import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedTutorialsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: 'Grid3X3' },
    { id: 'skincare', name: 'Skincare', icon: 'Droplets' },
    { id: 'makeup', name: 'Makeup', icon: 'Palette' },
    { id: 'wellness', name: 'Wellness', icon: 'Heart' },
    { id: 'ingredients', name: 'Ingredients', icon: 'FlaskConical' }
  ];

  const tutorials = [
    {
      id: 1,
      title: "The Perfect 10-Step Korean Skincare Routine",
      instructor: "Dr. Sarah Kim",
      instructorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      thumbnail: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=400&fit=crop",
      duration: "24 min",
      difficulty: "Beginner",
      category: "skincare",
      views: "125K",
      rating: 4.9,
      isNew: true,
      description: "Learn the complete Korean skincare routine with step-by-step guidance from a certified dermatologist.",
      tags: ["K-Beauty", "Routine", "Hydration"]
    },
    {
      id: 2,
      title: "Smoky Eye Mastery: From Day to Night",
      instructor: "Maya Rodriguez",
      instructorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop",
      duration: "18 min",
      difficulty: "Intermediate",
      category: "makeup",
      views: "89K",
      rating: 4.8,
      isNew: false,
      description: "Master the art of smoky eyes with professional techniques for any occasion.",
      tags: ["Eye Makeup", "Blending", "Color Theory"]
    },
    {
      id: 3,
      title: "Understanding Retinoids: Science & Application",
      instructor: "Dr. James Chen",
      instructorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      thumbnail: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop",
      duration: "32 min",
      difficulty: "Advanced",
      category: "ingredients",
      views: "67K",
      rating: 4.9,
      isNew: true,
      description: "Deep dive into retinoids with scientific explanations and practical usage guidelines.",
      tags: ["Anti-Aging", "Science", "Active Ingredients"]
    },
    {
      id: 4,
      title: "Beauty Sleep: Nighttime Rituals for Glowing Skin",
      instructor: "Lisa Thompson",
      instructorImage: "https://images.unsplash.com/photo-1594824388853-2c5d0d1d6d28?w=400&h=400&fit=crop&crop=face",
      thumbnail: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop",
      duration: "15 min",
      difficulty: "Beginner",
      category: "wellness",
      views: "156K",
      rating: 4.7,
      isNew: false,
      description: "Discover how sleep affects your skin and create the perfect nighttime beauty routine.",
      tags: ["Sleep", "Wellness", "Night Routine"]
    },
    {
      id: 5,
      title: "Contouring for Every Face Shape",
      instructor: "Alex Rivera",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      thumbnail: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
      duration: "28 min",
      difficulty: "Intermediate",
      category: "makeup",
      views: "203K",
      rating: 4.8,
      isNew: false,
      description: "Learn professional contouring techniques tailored to different face shapes.",
      tags: ["Contouring", "Face Mapping", "Techniques"]
    },
    {
      id: 6,
      title: "Vitamin C: The Ultimate Brightening Guide",
      instructor: "Dr. Emily Watson",
      instructorImage: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face",
      thumbnail: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=400&fit=crop",
      duration: "22 min",
      difficulty: "Beginner",
      category: "ingredients",
      views: "178K",
      rating: 4.9,
      isNew: true,
      description: "Everything you need to know about Vitamin C in skincare, from selection to application.",
      tags: ["Vitamin C", "Brightening", "Antioxidants"]
    }
  ];

  const filteredTutorials = activeCategory === 'all' 
    ? tutorials 
    : tutorials?.filter(tutorial => tutorial?.category === activeCategory);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-success/10 text-success';
      case 'Intermediate': return 'bg-warning/10 text-warning';
      case 'Advanced': return 'bg-error/10 text-error';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-accent">
            Featured Tutorials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert-led video tutorials covering everything from basics to advanced techniques
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-background text-muted-foreground hover:text-foreground hover:bg-card'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Tutorials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutorials?.map((tutorial) => (
            <div
              key={tutorial?.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-soft-lg transition-all duration-300 breathing-card"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={tutorial?.thumbnail}
                  alt={tutorial?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Icon name="Play" size={24} className="text-foreground ml-1" />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                  {tutorial?.duration}
                </div>

                {/* New Badge */}
                {tutorial?.isNew && (
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                    New
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                  {tutorial?.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {tutorial?.description}
                </p>

                {/* Instructor */}
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src={tutorial?.instructorImage}
                    alt={tutorial?.instructor}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-foreground">{tutorial?.instructor}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tutorial?.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Icon name="Eye" size={12} />
                      <span>{tutorial?.views}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Star" size={12} />
                      <span>{tutorial?.rating}</span>
                    </span>
                  </div>
                  
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial?.difficulty)}`}>
                    {tutorial?.difficulty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" iconName="Plus" iconPosition="left">
            Load More Tutorials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTutorialsSection;