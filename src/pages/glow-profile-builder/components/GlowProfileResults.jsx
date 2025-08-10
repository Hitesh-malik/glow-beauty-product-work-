import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GlowProfileResults = ({ profileData, onSaveProfile, onStartShopping }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const mockProfileData = {
    profileName: 'Radiant Glow Profile',
    skinType: 'Combination',
    skinTone: 'Medium Warm',
    primaryConcerns: ['Enlarged Pores', 'Occasional Breakouts', 'Uneven Texture'],
    beautyGoal: 'Healthy Skin Foundation',
    experienceLevel: 'Intermediate',
    timeCommitment: 'moderate',
    colorPalette: {
      primary: '#D4A574',
      secondary: '#C17B5C',
      accent: '#A8B5A0',
      neutral: '#F4E6D9'
    },
    recommendedCategories: [
      {
        name: 'Cleansers',
        priority: 'High',
        reason: 'Essential for combination skin to balance oil production'
      },
      {
        name: 'Serums',
        priority: 'High',
        reason: 'Target specific concerns like pores and texture'
      },
      {
        name: 'Moisturizers',
        priority: 'Medium',
        reason: 'Maintain hydration without clogging pores'
      },
      {
        name: 'Sunscreen',
        priority: 'High',
        reason: 'Prevent further skin damage and aging'
      }
    ],
    starterProducts: [
      {
        id: 1,
        name: 'Gentle Foaming Cleanser',
        brand: 'GlowLab',
        price: 24,
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop',
        match: 95,
        reason: 'Perfect for combination skin, removes excess oil without over-drying',
        keyIngredients: ['Salicylic Acid', 'Niacinamide', 'Hyaluronic Acid']
      },
      {
        id: 2,
        name: 'Pore Refining Serum',
        brand: 'Beauty Glow',
        price: 42,
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop',
        match: 92,
        reason: 'Targets enlarged pores and improves skin texture',
        keyIngredients: ['Niacinamide', 'Zinc PCA', 'Witch Hazel']
      },
      {
        id: 3,
        name: 'Daily Hydrating Moisturizer',
        brand: 'GlowLab',
        price: 36,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
        match: 89,
        reason: 'Lightweight formula that hydrates without clogging pores',
        keyIngredients: ['Hyaluronic Acid', 'Ceramides', 'Green Tea']
      }
    ],
    learningPaths: [
      {
        name: 'Combination Skin Mastery',
        duration: '2 weeks',
        lessons: 8,
        description: 'Learn to balance your skin\'s different needs'
      },
      {
        name: 'Pore Care Essentials',
        duration: '1 week',
        lessons: 5,
        description: 'Understand and minimize the appearance of pores'
      },
      {
        name: 'Building Your Routine',
        duration: '3 weeks',
        lessons: 12,
        description: 'Create and maintain an effective skincare routine'
      }
    ]
  };

  const tabs = [
    { id: 'overview', name: 'Profile Overview', icon: 'User' },
    { id: 'products', name: 'Starter Kit', icon: 'ShoppingBag' },
    { id: 'learning', name: 'Learning Path', icon: 'GraduationCap' },
    { id: 'share', name: 'Share Profile', icon: 'Share2' }
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Beauty Glow Profile',
        text: 'Check out my personalized beauty profile!',
        url: window.location?.href
      });
    } else {
      navigator.clipboard?.writeText(window.location?.href);
      alert('Profile link copied to clipboard!');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Sparkles" size={32} color="white" />
        </div>
        <h3 className="text-3xl font-bold text-foreground mb-2">
          Your Glow Profile is Ready! ✨
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          We've analyzed your preferences and created a personalized beauty DNA just for you.
        </p>
      </div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`
              flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
              ${activeTab === tab?.id
                ? 'bg-primary text-primary-foreground shadow-soft'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }
            `}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.name}</span>
          </button>
        ))}
      </div>
      {/* Profile Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Profile Card */}
          <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl p-6 text-center">
            <h4 className="text-xl font-bold text-foreground mb-2">
              {mockProfileData?.profileName}
            </h4>
            <div className="flex justify-center space-x-6 text-sm">
              <div>
                <span className="text-muted-foreground">Skin Type:</span>
                <p className="font-semibold text-foreground">{mockProfileData?.skinType}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Skin Tone:</span>
                <p className="font-semibold text-foreground">{mockProfileData?.skinTone}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Experience:</span>
                <p className="font-semibold text-foreground">{mockProfileData?.experienceLevel}</p>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h5 className="font-semibold text-foreground mb-4 flex items-center">
              <Icon name="Palette" size={20} className="mr-2 text-primary" />
              Your Personalized Color Palette
            </h5>
            <div className="flex justify-center space-x-4">
              {Object.entries(mockProfileData?.colorPalette)?.map(([name, color]) => (
                <div key={name} className="text-center">
                  <div 
                    className="w-12 h-12 rounded-full border-2 border-border mx-auto mb-2"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-xs text-muted-foreground capitalize">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <h5 className="font-semibold text-foreground mb-3 flex items-center">
                <Icon name="Target" size={18} className="mr-2 text-primary" />
                Primary Concerns
              </h5>
              <div className="space-y-2">
                {mockProfileData?.primaryConcerns?.map((concern, index) => (
                  <div key={index} className="flex items-center">
                    <Icon name="AlertCircle" size={14} className="mr-2 text-warning" />
                    <span className="text-sm text-foreground">{concern}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <h5 className="font-semibold text-foreground mb-3 flex items-center">
                <Icon name="Star" size={18} className="mr-2 text-primary" />
                Beauty Goal
              </h5>
              <p className="text-sm text-foreground mb-2">{mockProfileData?.beautyGoal}</p>
              <p className="text-xs text-muted-foreground">
                Focus on building a strong foundation for healthy, glowing skin
              </p>
            </div>
          </div>

          {/* Recommended Categories */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h5 className="font-semibold text-foreground mb-4 flex items-center">
              <Icon name="ShoppingBag" size={20} className="mr-2 text-primary" />
              Recommended Product Categories
            </h5>
            <div className="space-y-3">
              {mockProfileData?.recommendedCategories?.map((category, index) => (
                <div key={index} className="flex items-start justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <h6 className="font-medium text-foreground">{category?.name}</h6>
                      <span className={`
                        ml-2 px-2 py-1 rounded-full text-xs font-medium
                        ${category?.priority === 'High' ?'bg-error/10 text-error' :'bg-warning/10 text-warning'
                        }
                      `}>
                        {category?.priority} Priority
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{category?.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Starter Products Tab */}
      {activeTab === 'products' && (
        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-foreground mb-2">
              Your Personalized Starter Kit
            </h4>
            <p className="text-muted-foreground">
              These products are specifically chosen based on your profile and will help you start your glow journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockProfileData?.starterProducts?.map((product) => (
              <div key={product?.id} className="bg-card border border-border rounded-xl p-6 hover:shadow-soft-lg transition-shadow duration-300">
                <div className="relative mb-4">
                  <div className="w-full h-48 rounded-lg overflow-hidden bg-muted">
                    <Image 
                      src={product?.image} 
                      alt={product?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-success text-success-foreground px-2 py-1 rounded-full text-xs font-semibold">
                    {product?.match}% Match
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-foreground">{product?.name}</h5>
                    <p className="text-sm text-muted-foreground">{product?.brand}</p>
                    <p className="text-lg font-bold text-primary">${product?.price}</p>
                  </div>

                  <p className="text-sm text-foreground">{product?.reason}</p>

                  <div>
                    <h6 className="text-xs font-medium text-muted-foreground mb-2">KEY INGREDIENTS</h6>
                    <div className="flex flex-wrap gap-1">
                      {product?.keyIngredients?.map((ingredient, index) => (
                        <span key={index} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" fullWidth>
                    <Icon name="Plus" size={16} className="mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="default" size="lg" onClick={onStartShopping}>
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Shop Complete Starter Kit - $102
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Save 15% when you buy all three products together
            </p>
          </div>
        </div>
      )}
      {/* Learning Path Tab */}
      {activeTab === 'learning' && (
        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-foreground mb-2">
              Your Personalized Learning Journey
            </h4>
            <p className="text-muted-foreground">
              Master your skincare routine with these curated learning paths designed for your profile.
            </p>
          </div>

          <div className="space-y-4">
            {mockProfileData?.learningPaths?.map((path, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-soft-lg transition-shadow duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                        <Icon name="GraduationCap" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground">{path?.name}</h5>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Icon name="Clock" size={14} className="mr-1" />
                            {path?.duration}
                          </span>
                          <span className="flex items-center">
                            <Icon name="BookOpen" size={14} className="mr-1" />
                            {path?.lessons} lessons
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{path?.description}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Start Learning
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Share Profile Tab */}
      {activeTab === 'share' && (
        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-foreground mb-2">
              Share Your Glow Profile
            </h4>
            <p className="text-muted-foreground">
              Show off your personalized beauty profile and inspire others on their glow journey.
            </p>
          </div>

          {/* Shareable Profile Card */}
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-6 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sparkles" size={24} />
              </div>
              <h5 className="text-xl font-bold mb-2">{mockProfileData?.profileName}</h5>
              <p className="text-white/80 mb-4">
                {mockProfileData?.skinType} • {mockProfileData?.skinTone}
              </p>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-sm">
                  "Just discovered my perfect beauty routine with Beauty Glow's AI analysis!"
                </p>
              </div>
            </div>
          </div>

          {/* Share Options */}
          <div className="flex justify-center space-x-4">
            <Button variant="outline" onClick={handleShare}>
              <Icon name="Share2" size={16} className="mr-2" />
              Share Profile
            </Button>
            <Button variant="outline">
              <Icon name="Download" size={16} className="mr-2" />
              Download Card
            </Button>
          </div>

          {/* Social Media Preview */}
          <div className="bg-card border border-border rounded-lg p-4">
            <h6 className="font-medium text-foreground mb-3">Social Media Preview</h6>
            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground">
                "Just completed my Beauty Glow profile analysis! 🌟 Discovered I'm a {mockProfileData?.skinType} skin type with {mockProfileData?.skinTone} undertones. Ready to start my personalized glow journey! #BeautyGlow #SkincareJourney"
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-6">
        <Button variant="outline" size="lg" onClick={onSaveProfile}>
          <Icon name="Save" size={20} className="mr-2" />
          Save Profile
        </Button>
        <Button variant="default" size="lg" onClick={onStartShopping}>
          <Icon name="ShoppingBag" size={20} className="mr-2" />
          Start Shopping
        </Button>
      </div>
    </div>
  );
};

export default GlowProfileResults;