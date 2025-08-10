import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningPathsSection = () => {
  const learningPaths = [
    {
      id: 1,
      title: "Skincare Fundamentals",
      description: "Master the basics of skincare with dermatologist-approved routines and ingredient knowledge.",
      icon: "Droplets",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-200",
      lessons: 24,
      duration: "6 weeks",
      level: "Beginner",
      students: "15.2K",
      rating: 4.9,
      topics: ["Skin Types", "Cleansing", "Moisturizing", "Sun Protection", "Active Ingredients"]
    },
    {
      id: 2,
      title: "Makeup Mastery",
      description: "From everyday looks to special occasions, learn professional makeup techniques step by step.",
      icon: "Palette",
      color: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-200",
      lessons: 32,
      duration: "8 weeks",
      level: "All Levels",
      students: "22.8K",
      rating: 4.8,
      topics: ["Color Theory", "Face Mapping", "Eye Techniques", "Contouring", "Special Effects"]
    },
    {
      id: 3,
      title: "Ingredient Intelligence",
      description: "Decode beauty labels and understand the science behind effective skincare ingredients.",
      icon: "FlaskConical",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-200",
      lessons: 18,
      duration: "4 weeks",
      level: "Intermediate",
      students: "8.9K",
      rating: 4.9,
      topics: ["Active Ingredients", "pH Balance", "Formulation", "Interactions", "Safety"]
    },
    {
      id: 4,
      title: "Wellness & Beauty Connection",
      description: "Explore the holistic approach to beauty through nutrition, lifestyle, and mental wellness.",
      icon: "Heart",
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-200",
      lessons: 20,
      duration: "5 weeks",
      level: "All Levels",
      students: "12.1K",
      rating: 4.7,
      topics: ["Nutrition", "Sleep", "Stress Management", "Exercise", "Mindfulness"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-accent">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Structured courses designed to take you from beginner to expert in your areas of interest
          </p>
        </div>

        {/* Learning Paths Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {learningPaths?.map((path) => (
            <div
              key={path?.id}
              className={`group relative bg-card border ${path?.borderColor} rounded-2xl p-8 hover:shadow-soft-lg transition-all duration-300 breathing-card`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${path?.color} rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon name={path?.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{path?.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <Icon name="BookOpen" size={14} />
                          <span>{path?.lessons} lessons</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Icon name="Clock" size={14} />
                          <span>{path?.duration}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 bg-warning/10 text-warning px-2 py-1 rounded-full text-xs font-medium">
                    <Icon name="Star" size={12} />
                    <span>{path?.rating}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {path?.description}
                </p>

                {/* Topics */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">What you'll learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {path?.topics?.map((topic, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Icon name="Users" size={14} />
                      <span>{path?.students} students</span>
                    </span>
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {path?.level}
                    </span>
                  </div>
                  
                  <Button variant="outline" size="sm" iconName="ArrowRight" iconPosition="right">
                    Start Path
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" iconName="Grid3X3" iconPosition="left">
            View All Learning Paths
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearningPathsSection;