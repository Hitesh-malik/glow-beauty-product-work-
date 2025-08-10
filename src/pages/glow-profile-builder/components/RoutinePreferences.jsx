import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const RoutinePreferences = ({ preferences, onPreferencesUpdate }) => {
  const [activeSection, setActiveSection] = useState('time');

  const timeCommitments = [
    {
      id: 'minimal',
      name: '5 Minutes or Less',
      description: 'Quick and simple routine',
      icon: 'Zap',
      steps: ['Cleanser', 'Moisturizer', 'SPF'],
      ideal: 'Busy lifestyle, beginner-friendly'
    },
    {
      id: 'moderate',
      name: '10-15 Minutes',
      description: 'Balanced routine with key steps',
      icon: 'Clock',
      steps: ['Cleanser', 'Toner', 'Serum', 'Moisturizer', 'SPF'],
      ideal: 'Most popular choice, effective results'
    },
    {
      id: 'extensive',
      name: '20+ Minutes',
      description: 'Comprehensive multi-step routine',
      icon: 'Star',
      steps: ['Double Cleanse', 'Toner', 'Essence', 'Serums', 'Eye Cream', 'Moisturizer', 'SPF'],
      ideal: 'Self-care enthusiast, maximum benefits'
    }
  ];

  const experienceLevels = [
    {
      id: 'beginner',
      name: 'Beginner',
      description: 'New to skincare routines',
      icon: 'Seedling',
      characteristics: ['Simple products', 'Clear instructions', 'Gentle formulas'],
      focus: 'Building healthy habits'
    },
    {
      id: 'intermediate',
      name: 'Intermediate',
      description: 'Some skincare experience',
      icon: 'TrendingUp',
      characteristics: ['Active ingredients', 'Targeted treatments', 'Routine flexibility'],
      focus: 'Addressing specific concerns'
    },
    {
      id: 'advanced',
      name: 'Advanced',
      description: 'Skincare enthusiast',
      icon: 'Award',
      characteristics: ['Complex routines', 'Ingredient layering', 'Professional-grade products'],
      focus: 'Optimizing and experimenting'
    }
  ];

  const beautyGoals = [
    {
      id: 'healthy-skin',
      name: 'Healthy Skin Foundation',
      description: 'Focus on skin barrier and overall health',
      icon: 'Heart',
      priority: 'Prevention and maintenance'
    },
    {
      id: 'problem-solving',
      name: 'Address Specific Issues',
      description: 'Target particular skin concerns',
      icon: 'Target',
      priority: 'Treatment and correction'
    },
    {
      id: 'anti-aging',
      name: 'Anti-Aging & Prevention',
      description: 'Prevent and reduce signs of aging',
      icon: 'Shield',
      priority: 'Long-term skin health'
    },
    {
      id: 'glow-enhancement',
      name: 'Radiance & Glow',
      description: 'Achieve luminous, glowing skin',
      icon: 'Sparkles',
      priority: 'Brightness and radiance'
    },
    {
      id: 'maintenance',
      name: 'Maintain Current Results',
      description: 'Keep skin looking its best',
      icon: 'CheckCircle',
      priority: 'Consistency and preservation'
    }
  ];

  const productPreferences = [
    {
      id: 'natural',
      name: 'Natural & Organic',
      description: 'Plant-based, minimal processing',
      icon: 'Leaf'
    },
    {
      id: 'scientific',
      name: 'Science-Backed',
      description: 'Clinically proven ingredients',
      icon: 'FlaskConical'
    },
    {
      id: 'luxury',
      name: 'Luxury & Premium',
      description: 'High-end, indulgent experience',
      icon: 'Crown'
    },
    {
      id: 'budget-friendly',
      name: 'Budget-Conscious',
      description: 'Effective yet affordable',
      icon: 'DollarSign'
    },
    {
      id: 'cruelty-free',
      name: 'Cruelty-Free',
      description: 'Ethically tested products',
      icon: 'Heart'
    },
    {
      id: 'sustainable',
      name: 'Eco-Friendly',
      description: 'Sustainable packaging and sourcing',
      icon: 'Recycle'
    }
  ];

  const updatePreference = (category, value) => {
    onPreferencesUpdate({
      ...preferences,
      [category]: value
    });
  };

  const toggleProductPreference = (prefId) => {
    const currentPrefs = preferences?.productPreferences || [];
    const updatedPrefs = currentPrefs?.includes(prefId)
      ? currentPrefs?.filter(id => id !== prefId)
      : [...currentPrefs, prefId];
    
    updatePreference('productPreferences', updatedPrefs);
  };

  const sections = [
    { id: 'time', name: 'Time Commitment', icon: 'Clock' },
    { id: 'experience', name: 'Experience Level', icon: 'User' },
    { id: 'goals', name: 'Beauty Goals', icon: 'Target' },
    { id: 'preferences', name: 'Product Preferences', icon: 'Settings' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-foreground mb-2">
          Tell Us About Your Routine Preferences
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Help us create a personalized routine that fits your lifestyle and beauty goals.
        </p>
      </div>
      {/* Section Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {sections?.map((section) => (
          <button
            key={section?.id}
            onClick={() => setActiveSection(section?.id)}
            className={`
              flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
              ${activeSection === section?.id
                ? 'bg-primary text-primary-foreground shadow-soft'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }
            `}
          >
            <Icon name={section?.icon} size={16} />
            <span>{section?.name}</span>
          </button>
        ))}
      </div>
      {/* Time Commitment Section */}
      {activeSection === 'time' && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground mb-4">
            How much time do you want to spend on your routine?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {timeCommitments?.map((option) => (
              <div
                key={option?.id}
                onClick={() => updatePreference('timeCommitment', option?.id)}
                className={`
                  cursor-pointer rounded-xl p-6 border transition-all duration-300 hover:shadow-soft-lg
                  ${preferences?.timeCommitment === option?.id
                    ? 'border-primary bg-primary/5 ring-2 ring-primary ring-offset-2 ring-offset-background' :'border-border bg-card hover:border-primary/50'
                  }
                `}
              >
                <div className="text-center">
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4
                    ${preferences?.timeCommitment === option?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                    }
                  `}>
                    <Icon name={option?.icon} size={20} />
                  </div>
                  <h5 className="font-semibold text-foreground mb-2">{option?.name}</h5>
                  <p className="text-sm text-muted-foreground mb-3">{option?.description}</p>
                  <p className="text-xs text-accent font-medium">{option?.ideal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Experience Level Section */}
      {activeSection === 'experience' && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground mb-4">
            What's your skincare experience level?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {experienceLevels?.map((level) => (
              <div
                key={level?.id}
                onClick={() => updatePreference('experienceLevel', level?.id)}
                className={`
                  cursor-pointer rounded-xl p-6 border transition-all duration-300 hover:shadow-soft-lg
                  ${preferences?.experienceLevel === level?.id
                    ? 'border-primary bg-primary/5 ring-2 ring-primary ring-offset-2 ring-offset-background' :'border-border bg-card hover:border-primary/50'
                  }
                `}
              >
                <div className="text-center">
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4
                    ${preferences?.experienceLevel === level?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                    }
                  `}>
                    <Icon name={level?.icon} size={20} />
                  </div>
                  <h5 className="font-semibold text-foreground mb-2">{level?.name}</h5>
                  <p className="text-sm text-muted-foreground mb-3">{level?.description}</p>
                  <p className="text-xs text-accent font-medium mb-2">{level?.focus}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {level?.characteristics?.slice(0, 2)?.map((char, index) => (
                      <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Beauty Goals Section */}
      {activeSection === 'goals' && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground mb-4">
            What's your primary beauty goal?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {beautyGoals?.map((goal) => (
              <div
                key={goal?.id}
                onClick={() => updatePreference('beautyGoal', goal?.id)}
                className={`
                  cursor-pointer rounded-xl p-6 border transition-all duration-300 hover:shadow-soft-lg
                  ${preferences?.beautyGoal === goal?.id
                    ? 'border-primary bg-primary/5 ring-2 ring-primary ring-offset-2 ring-offset-background' :'border-border bg-card hover:border-primary/50'
                  }
                `}
              >
                <div className="text-center">
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4
                    ${preferences?.beautyGoal === goal?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                    }
                  `}>
                    <Icon name={goal?.icon} size={20} />
                  </div>
                  <h5 className="font-semibold text-foreground mb-2">{goal?.name}</h5>
                  <p className="text-sm text-muted-foreground mb-2">{goal?.description}</p>
                  <p className="text-xs text-accent font-medium">{goal?.priority}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Product Preferences Section */}
      {activeSection === 'preferences' && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground mb-4">
            What matters most to you in beauty products? (Select all that apply)
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {productPreferences?.map((pref) => {
              const isSelected = (preferences?.productPreferences || [])?.includes(pref?.id);
              return (
                <div
                  key={pref?.id}
                  onClick={() => toggleProductPreference(pref?.id)}
                  className={`
                    cursor-pointer rounded-xl p-4 border transition-all duration-300 hover:shadow-soft-lg
                    ${isSelected
                      ? 'border-primary bg-primary/5 ring-2 ring-primary ring-offset-2 ring-offset-background' :'border-border bg-card hover:border-primary/50'
                    }
                  `}
                >
                  <div className="text-center">
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3
                      ${isSelected
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                      }
                    `}>
                      <Icon name={pref?.icon} size={18} />
                    </div>
                    <h5 className="font-medium text-foreground mb-1 text-sm">{pref?.name}</h5>
                    <p className="text-xs text-muted-foreground">{pref?.description}</p>
                    {isSelected && (
                      <div className="mt-2">
                        <Icon name="Check" size={16} className="text-success mx-auto" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* Progress Summary */}
      <div className="bg-brand-primary/20 border border-primary/20 rounded-lg p-4 mt-8">
        <div className="flex items-start space-x-3">
          <Icon name="CheckCircle" size={20} className="text-primary mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">Preferences Saved</h4>
            <p className="text-sm text-muted-foreground">
              We're using your preferences to create a personalized routine that fits your lifestyle and goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutinePreferences;