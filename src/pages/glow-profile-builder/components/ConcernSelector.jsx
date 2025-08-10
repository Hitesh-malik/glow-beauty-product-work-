import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ConcernSelector = ({ selectedConcerns, onConcernsUpdate }) => {
  const [hoveredConcern, setHoveredConcern] = useState(null);

  const skinConcerns = [
    {
      id: 'acne',
      name: 'Acne & Breakouts',
      icon: 'AlertCircle',
      description: 'Pimples, blackheads, whiteheads, and cystic acne',
      solutions: ['Salicylic Acid', 'Benzoyl Peroxide', 'Niacinamide'],
      severity: ['Mild', 'Moderate', 'Severe']
    },
    {
      id: 'aging',
      name: 'Signs of Aging',
      icon: 'Clock',
      description: 'Fine lines, wrinkles, and loss of elasticity',
      solutions: ['Retinol', 'Vitamin C', 'Peptides'],
      severity: ['Early Signs', 'Moderate', 'Advanced']
    },
    {
      id: 'hyperpigmentation',
      name: 'Dark Spots',
      icon: 'Sun',
      description: 'Age spots, melasma, and post-inflammatory hyperpigmentation',
      solutions: ['Vitamin C', 'Kojic Acid', 'Arbutin'],
      severity: ['Light', 'Moderate', 'Dark']
    },
    {
      id: 'dryness',
      name: 'Dryness & Dehydration',
      icon: 'Droplets',
      description: 'Tight, flaky, or rough skin texture',
      solutions: ['Hyaluronic Acid', 'Ceramides', 'Glycerin'],
      severity: ['Mild', 'Moderate', 'Severe']
    },
    {
      id: 'sensitivity',
      name: 'Sensitive Skin',
      icon: 'Heart',
      description: 'Redness, irritation, and reactive skin',
      solutions: ['Centella Asiatica', 'Aloe Vera', 'Chamomile'],
      severity: ['Occasional', 'Frequent', 'Constant']
    },
    {
      id: 'pores',
      name: 'Large Pores',
      icon: 'Circle',
      description: 'Visible pores, especially in T-zone area',
      solutions: ['Niacinamide', 'BHA', 'Clay Masks'],
      severity: ['Slightly Visible', 'Noticeable', 'Very Prominent']
    },
    {
      id: 'dullness',
      name: 'Dull Complexion',
      icon: 'Moon',
      description: 'Lack of radiance and uneven skin tone',
      solutions: ['AHA', 'Vitamin C', 'Exfoliating Acids'],
      severity: ['Slight Dullness', 'Moderate', 'Very Dull']
    },
    {
      id: 'oiliness',
      name: 'Excess Oil',
      icon: 'Zap',
      description: 'Shiny skin, especially in T-zone',
      solutions: ['Salicylic Acid', 'Clay', 'Niacinamide'],
      severity: ['Mild', 'Moderate', 'Very Oily']
    },
    {
      id: 'redness',
      name: 'Redness & Rosacea',
      icon: 'Flame',
      description: 'Persistent redness and visible blood vessels',
      solutions: ['Green Tea', 'Azelaic Acid', 'Zinc Oxide'],
      severity: ['Occasional', 'Frequent', 'Persistent']
    }
  ];

  const toggleConcern = (concernId) => {
    const updatedConcerns = selectedConcerns?.includes(concernId)
      ? selectedConcerns?.filter(id => id !== concernId)
      : [...selectedConcerns, concernId];
    
    onConcernsUpdate(updatedConcerns);
  };

  const isSelected = (concernId) => selectedConcerns?.includes(concernId);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-foreground mb-2">
          What Are Your Main Skin Concerns?
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Select all that apply. This helps us recommend targeted treatments and ingredients for your specific needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skinConcerns?.map((concern) => (
          <div
            key={concern?.id}
            className={`
              relative group cursor-pointer transition-all duration-300 transform hover:scale-105
              ${isSelected(concern?.id) 
                ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' :'hover:shadow-soft-lg'
              }
            `}
            onClick={() => toggleConcern(concern?.id)}
            onMouseEnter={() => setHoveredConcern(concern?.id)}
            onMouseLeave={() => setHoveredConcern(null)}
          >
            <div className={`
              bg-card rounded-xl p-6 border transition-all duration-300
              ${isSelected(concern?.id) 
                ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
              }
            `}>
              {/* Icon and Selection Indicator */}
              <div className="flex items-start justify-between mb-4">
                <div className={`
                  w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300
                  ${isSelected(concern?.id) 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                  }
                `}>
                  <Icon name={concern?.icon} size={20} />
                </div>
                
                {isSelected(concern?.id) && (
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={14} color="white" />
                  </div>
                )}
              </div>

              {/* Concern Info */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  {concern?.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {concern?.description}
                </p>
                
                {/* Key Solutions Preview */}
                <div className="flex flex-wrap gap-1">
                  {concern?.solutions?.slice(0, 2)?.map((solution, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                    >
                      {solution}
                    </span>
                  ))}
                  {concern?.solutions?.length > 2 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{concern?.solutions?.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Details */}
              {hoveredConcern === concern?.id && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg p-4 shadow-soft-lg z-10">
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-popover-foreground mb-2">Recommended Solutions:</h5>
                      <div className="flex flex-wrap gap-1">
                        {concern?.solutions?.map((solution, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-success/10 text-success text-xs rounded-full"
                          >
                            {solution}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-popover-foreground mb-2">Severity Levels:</h5>
                      <div className="flex flex-wrap gap-1">
                        {concern?.severity?.map((level, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                          >
                            {level}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Selection Summary */}
      {selectedConcerns?.length > 0 && (
        <div className="bg-brand-primary/20 border border-primary/20 rounded-lg p-4 mt-6">
          <div className="flex items-start space-x-3">
            <Icon name="Target" size={20} className="text-primary mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground mb-1">
                Selected Concerns ({selectedConcerns?.length})
              </h4>
              <p className="text-sm text-muted-foreground">
                We'll prioritize products and ingredients that address these specific concerns in your personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Educational Note */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-primary mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">Remember</h4>
            <p className="text-sm text-muted-foreground">
              It's normal to have multiple skin concerns. Our AI will help you prioritize and create a routine that addresses your most important needs first.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcernSelector;