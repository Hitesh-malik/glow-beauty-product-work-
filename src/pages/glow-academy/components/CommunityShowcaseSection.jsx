import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityShowcaseSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Posts', icon: 'Grid3X3' },
    { id: 'tutorials', name: 'User Tutorials', icon: 'Video' },
    { id: 'transformations', name: 'Transformations', icon: 'Sparkles' },
    { id: 'tips', name: 'Tips & Tricks', icon: 'Lightbulb' },
    { id: 'reviews', name: 'Product Reviews', icon: 'Star' }
  ];

  const communityPosts = [
    {
      id: 1,
      type: 'tutorial',
      title: "My 5-Minute Morning Glow Routine",
      author: "Sarah Chen",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      authorLevel: "Beauty Enthusiast",
      thumbnail: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=400&fit=crop",
      duration: "5 min",
      likes: 1247,
      comments: 89,
      shares: 156,
      timeAgo: "2 hours ago",
      description: "Quick and effective morning routine that gives me that natural glow before work. Perfect for busy mornings!",
      tags: ["Morning Routine", "Quick Tips", "Natural Glow"],
      featured: true
    },
    {
      id: 2,
      type: 'transformation',
      title: "6-Month Skincare Journey Results",
      author: "Maya Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      authorLevel: "Skincare Scholar",
      thumbnail: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop",
      likes: 2156,
      comments: 234,
      shares: 445,
      timeAgo: "5 hours ago",
      description: "Sharing my incredible transformation after following the Glow Academy skincare fundamentals course. The results speak for themselves!",
      tags: ["Transformation", "Skincare Journey", "Before & After"],
      featured: false
    },
    {
      id: 3,
      type: 'tips',
      title: "Color Correcting Hack That Changed My Life",
      author: "Alex Kim",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      authorLevel: "Makeup Maven",
      thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop",
      duration: "3 min",
      likes: 892,
      comments: 67,
      shares: 123,
      timeAgo: "8 hours ago",
      description: "This simple color correcting technique I learned from Marcus Chen\'s masterclass has completely transformed my makeup game!",
      tags: ["Color Correcting", "Makeup Tips", "Pro Techniques"],
      featured: false
    },
    {
      id: 4,
      type: 'review',
      title: "Honest Review: Vitamin C Serums Comparison",
      author: "Priya Patel",
      authorImage: "https://images.unsplash.com/photo-1594824388853-2c5d0d1d6d28?w=400&h=400&fit=crop&crop=face",
      authorLevel: "Ingredient Expert",
      thumbnail: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=400&fit=crop",
      likes: 1534,
      comments: 178,
      shares: 267,
      timeAgo: "12 hours ago",
      description: "After completing the Ingredient Intelligence course, I tested 8 different Vitamin C serums. Here are my honest thoughts and recommendations.",
      tags: ["Product Review", "Vitamin C", "Ingredient Analysis"],
      featured: true
    },
    {
      id: 5,
      type: 'tutorial',
      title: "DIY Face Mask Using Kitchen Ingredients",
      author: "Emma Thompson",
      authorImage: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face",
      authorLevel: "Wellness Warrior",
      thumbnail: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop",
      duration: "8 min",
      likes: 756,
      comments: 45,
      shares: 89,
      timeAgo: "1 day ago",
      description: "Natural DIY face mask recipe inspired by Dr. Priya\'s holistic beauty masterclass. All ingredients from your kitchen!",
      tags: ["DIY", "Natural Skincare", "Holistic Beauty"],
      featured: false
    },
    {
      id: 6,
      type: 'transformation',
      title: "Acne Journey: From Struggle to Confidence",
      author: "Jordan Lee",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      authorLevel: "Community Leader",
      thumbnail: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=400&fit=crop",
      likes: 3247,
      comments: 456,
      shares: 789,
      timeAgo: "2 days ago",
      description: "My 1-year journey dealing with adult acne and how the Glow Academy community helped me find confidence again. Thank you all! ❤️",
      tags: ["Acne Journey", "Mental Health", "Community Support"],
      featured: true
    }
  ];

  const filteredPosts = activeFilter === 'all' 
    ? communityPosts 
    : communityPosts?.filter(post => {
        switch (activeFilter) {
          case 'tutorials': return post?.type === 'tutorial';
          case 'transformations': return post?.type === 'transformation';
          case 'tips': return post?.type === 'tips';
          case 'reviews': return post?.type === 'review';
          default: return true;
        }
      });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'tutorial': return 'Video';
      case 'transformation': return 'Sparkles';
      case 'tips': return 'Lightbulb';
      case 'review': return 'Star';
      default: return 'Image';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'tutorial': return 'bg-primary/10 text-primary';
      case 'transformation': return 'bg-accent/10 text-accent';
      case 'tips': return 'bg-warning/10 text-warning';
      case 'review': return 'bg-success/10 text-success';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Users" size={16} />
            <span>Community Spotlight</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-accent">
            Community Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover inspiring tutorials, transformations, and tips shared by our amazing beauty community
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters?.map((filter) => (
            <button
              key={filter?.id}
              onClick={() => setActiveFilter(filter?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter?.id
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-background text-muted-foreground hover:text-foreground hover:bg-card border border-border'
              }`}
            >
              <Icon name={filter?.icon} size={16} />
              <span>{filter?.name}</span>
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts?.map((post) => (
            <div
              key={post?.id}
              className={`group bg-card border rounded-2xl overflow-hidden hover:shadow-soft-lg transition-all duration-300 breathing-card ${
                post?.featured ? 'border-primary/30 bg-primary/5' : 'border-border'
              }`}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post?.thumbnail}
                  alt={post?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Featured Badge */}
                {post?.featured && (
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}

                {/* Type Badge */}
                <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(post?.type)}`}>
                  <Icon name={getTypeIcon(post?.type)} size={12} className="inline mr-1" />
                  {post?.type?.charAt(0)?.toUpperCase() + post?.type?.slice(1)}
                </div>

                {/* Duration (for videos) */}
                {post?.duration && (
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                    {post?.duration}
                  </div>
                )}

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Icon name="Play" size={20} className="text-foreground ml-1" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Author Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src={post?.authorImage}
                    alt={post?.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{post?.author}</h4>
                    <p className="text-xs text-muted-foreground">{post?.authorLevel}</p>
                  </div>
                  <div className="ml-auto text-xs text-muted-foreground">
                    {post?.timeAgo}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                  {post?.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post?.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post?.tags?.slice(0, 2)?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {post?.tags?.length > 2 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{post?.tags?.length - 2}
                    </span>
                  )}
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Icon name="Heart" size={14} />
                      <span>{post?.likes?.toLocaleString()}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={14} />
                      <span>{post?.comments}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Share" size={14} />
                      <span>{post?.shares}</span>
                    </span>
                  </div>
                  
                  <Button variant="ghost" size="sm">
                    <Icon name="Bookmark" size={14} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More & CTA */}
        <div className="text-center mt-12 space-y-4">
          <Button variant="outline" size="lg" iconName="Plus" iconPosition="left">
            Load More Posts
          </Button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="default" size="lg" iconName="Upload" iconPosition="left">
              Share Your Tutorial
            </Button>
            <Button variant="ghost" size="lg" iconName="Users" iconPosition="left">
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityShowcaseSection;