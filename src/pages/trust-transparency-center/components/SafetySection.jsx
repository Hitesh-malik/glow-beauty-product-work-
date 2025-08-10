import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';



const SafetySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('patch-testing');
  const [searchTerm, setSearchTerm] = useState('');

  const safetyCategories = [
    {
      id: 'patch-testing',
      name: 'Patch Testing Guide',
      icon: 'TestTube',
      description: 'How to safely test new products'
    },
    {
      id: 'ingredient-interactions',
      name: 'Ingredient Interactions',
      icon: 'AlertTriangle',
      description: 'Combinations to avoid'
    },
    {
      id: 'pregnancy-nursing',
      name: 'Pregnancy & Nursing',
      icon: 'Heart',
      description: 'Safe ingredients during pregnancy'
    },
    {
      id: 'sensitive-skin',
      name: 'Sensitive Skin',
      icon: 'Shield',
      description: 'Guidelines for reactive skin'
    },
    {
      id: 'age-considerations',
      name: 'Age Considerations',
      icon: 'Users',
      description: 'Safety by age group'
    }
  ];

  const patchTestingGuide = {
    steps: [
      {
        step: 1,
        title: "Choose Test Area",
        description: "Select a small area on your inner forearm or behind your ear",
        duration: "Day 1",
        tips: ["Clean the area thoroughly", "Choose an area that\'s not exposed to sun", "Avoid areas with cuts or irritation"]
      },
      {
        step: 2,
        title: "Apply Small Amount",
        description: "Apply a small dab of the product to the test area",
        duration: "Day 1",
        tips: ["Use about the size of a pinhead", "Don\'t rub in completely", "Mark the area with a pen if needed"]
      },
      {
        step: 3,
        title: "Wait and Observe",
        description: "Leave the product on for 24-48 hours without washing",
        duration: "Days 1-2",
        tips: ["Avoid getting the area wet", "Don\'t apply other products to the area", "Check periodically for reactions"]
      },
      {
        step: 4,
        title: "Evaluate Results",
        description: "Check for any signs of irritation, redness, or discomfort",
        duration: "Day 2-3",
        tips: ["Look for redness, swelling, or itching", "If reaction occurs, wash immediately", "Wait 48 hours before using on face"]
      }
    ],
    warningSigns: [
      "Redness or inflammation",
      "Itching or burning sensation",
      "Swelling or raised bumps",
      "Blistering or peeling",
      "Persistent discomfort"
    ]
  };

  const ingredientInteractions = [
    {
      ingredient1: "Retinol/Retinoids",
      ingredient2: "AHA/BHA Acids",
      riskLevel: "High",
      description: "Can cause severe irritation, peeling, and increased sensitivity",
      recommendation: "Use on alternating nights, never together",
      alternatives: "Start with lower concentrations or use a gentler retinol alternative"
    },
    {
      ingredient1: "Vitamin C",
      ingredient2: "Retinol",
      riskLevel: "Medium",
      description: "May reduce effectiveness of both ingredients",
      recommendation: "Use Vitamin C in morning, Retinol at night",
      alternatives: "Look for stable Vitamin C derivatives"
    },
    {
      ingredient1: "Benzoyl Peroxide",
      ingredient2: "Retinol",
      riskLevel: "High",
      description: "Can cause excessive dryness and irritation",
      recommendation: "Use at different times of day or alternate days",
      alternatives: "Consider salicylic acid instead of benzoyl peroxide"
    },
    {
      ingredient1: "Niacinamide",
      ingredient2: "Vitamin C",
      riskLevel: "Low",
      description: "May reduce effectiveness when used together",
      recommendation: "Wait 10-15 minutes between applications",
      alternatives: "Use at different times of day for best results"
    }
  ];

  const pregnancyGuidelines = {
    avoid: [
      {
        ingredient: "Retinoids (Tretinoin, Adapalene)",
        reason: "Potential birth defects",
        alternatives: ["Bakuchiol", "Vitamin C", "Azelaic Acid"]
      },
      {
        ingredient: "Salicylic Acid (High Concentrations)",
        reason: "Potential complications in high doses",
        alternatives: ["Lactic Acid", "Glycolic Acid (low %)", "Fruit Enzymes"]
      },
      {
        ingredient: "Hydroquinone",
        reason: "High absorption rate",
        alternatives: ["Vitamin C", "Kojic Acid", "Arbutin"]
      },
      {
        ingredient: "Essential Oils (Some)",
        reason: "Hormonal effects",
        alternatives: ["Fragrance-free products", "Gentle botanical extracts"]
      }
    ],
    safe: [
      {
        ingredient: "Hyaluronic Acid",
        benefits: "Hydration without absorption concerns"
      },
      {
        ingredient: "Glycerin",
        benefits: "Safe moisturizing ingredient"
      },
      {
        ingredient: "Ceramides",
        benefits: "Skin barrier support"
      },
      {
        ingredient: "Zinc Oxide",
        benefits: "Safe sun protection"
      }
    ]
  };

  const getRiskColor = (level) => {
    switch (level) {
      case 'High': return 'text-error bg-error/10';
      case 'Medium': return 'text-warning bg-warning/10';
      case 'Low': return 'text-success bg-success/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Safety Information</h3>
        <p className="text-muted-foreground">
          Your safety is our priority. Learn how to use beauty products safely with our comprehensive guidelines for patch testing, ingredient interactions, and special considerations.
        </p>
      </div>
      {/* Category Navigation */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
          {safetyCategories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`flex flex-col items-center space-y-2 p-4 rounded-lg text-center transition-all duration-200 ${
                selectedCategory === category?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <div>
                <div className="font-medium text-sm">{category?.name}</div>
                <div className="text-xs opacity-70">{category?.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Content Sections */}
      {selectedCategory === 'patch-testing' && (
        <div className="space-y-6">
          {/* Patch Testing Steps */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-6">Patch Testing Step-by-Step Guide</h4>
            <div className="grid gap-6">
              {patchTestingGuide?.steps?.map((step) => (
                <div key={step?.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">{step?.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-foreground">{step?.title}</h5>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                        {step?.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{step?.description}</p>
                    <div className="space-y-1">
                      {step?.tips?.map((tip, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Icon name="Check" size={14} className="text-success mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Warning Signs */}
          <div className="bg-error/5 rounded-xl p-6 border border-error/20">
            <h4 className="flex items-center space-x-2 text-xl font-semibold text-foreground mb-4">
              <Icon name="AlertTriangle" size={20} className="text-error" />
              <span>Stop Use Immediately If You Notice</span>
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {patchTestingGuide?.warningSigns?.map((sign, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="X" size={16} className="text-error flex-shrink-0" />
                  <span className="text-muted-foreground">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {selectedCategory === 'ingredient-interactions' && (
        <div className="space-y-6">
          <div className="bg-card rounded-xl p-6 border border-border">
            <h4 className="text-xl font-semibold text-foreground mb-6">Common Ingredient Interactions</h4>
            <div className="space-y-4">
              {ingredientInteractions?.map((interaction, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-3">
                    <div className="flex items-center space-x-3 mb-2 lg:mb-0">
                      <h5 className="font-medium text-foreground">
                        {interaction?.ingredient1} + {interaction?.ingredient2}
                      </h5>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(interaction?.riskLevel)}`}>
                        {interaction?.riskLevel} Risk
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{interaction?.description}</p>
                  <div className="grid lg:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-medium text-foreground mb-2">Recommendation:</h6>
                      <p className="text-sm text-muted-foreground">{interaction?.recommendation}</p>
                    </div>
                    <div>
                      <h6 className="font-medium text-foreground mb-2">Alternatives:</h6>
                      <p className="text-sm text-muted-foreground">{interaction?.alternatives}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {selectedCategory === 'pregnancy-nursing' && (
        <div className="space-y-6">
          {/* Ingredients to Avoid */}
          <div className="bg-error/5 rounded-xl p-6 border border-error/20">
            <h4 className="flex items-center space-x-2 text-xl font-semibold text-foreground mb-6">
              <Icon name="AlertTriangle" size={20} className="text-error" />
              <span>Ingredients to Avoid During Pregnancy</span>
            </h4>
            <div className="space-y-4">
              {pregnancyGuidelines?.avoid?.map((item, index) => (
                <div key={index} className="bg-background rounded-lg p-4">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-3">
                    <h5 className="font-medium text-foreground mb-2">{item?.ingredient}</h5>
                  </div>
                  <p className="text-muted-foreground mb-3">{item?.reason}</p>
                  <div>
                    <h6 className="font-medium text-foreground mb-2">Safe Alternatives:</h6>
                    <div className="flex flex-wrap gap-2">
                      {item?.alternatives?.map((alt, altIndex) => (
                        <span key={altIndex} className="px-3 py-1 bg-success/10 text-success text-sm rounded-full">
                          {alt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safe Ingredients */}
          <div className="bg-success/5 rounded-xl p-6 border border-success/20">
            <h4 className="flex items-center space-x-2 text-xl font-semibold text-foreground mb-6">
              <Icon name="CheckCircle" size={20} className="text-success" />
              <span>Generally Safe Ingredients</span>
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {pregnancyGuidelines?.safe?.map((item, index) => (
                <div key={index} className="bg-background rounded-lg p-4">
                  <h5 className="font-medium text-foreground mb-2">{item?.ingredient}</h5>
                  <p className="text-sm text-muted-foreground">{item?.benefits}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Emergency Contact */}
      <div className="bg-gradient-to-r from-error/5 to-warning/5 rounded-xl p-6 border border-border">
        <div className="text-center max-w-2xl mx-auto">
          <Icon name="Phone" size={48} className="mx-auto text-error mb-4" />
          <h4 className="text-xl font-semibold text-foreground mb-4">Emergency Contact Information</h4>
          <p className="text-muted-foreground mb-6">
            If you experience severe allergic reactions, difficulty breathing, or other serious symptoms, seek immediate medical attention.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-background rounded-lg p-4">
              <h5 className="font-medium text-foreground mb-2">Emergency Services</h5>
              <p className="text-2xl font-bold text-error">911</p>
            </div>
            <div className="bg-background rounded-lg p-4">
              <h5 className="font-medium text-foreground mb-2">Poison Control</h5>
              <p className="text-2xl font-bold text-warning">1-800-222-1222</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetySection;