import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CategoryNavigation = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    {
      id: 'concern',
      name: 'By Concern',
      icon: 'Target',
      description: 'Find solutions for specific skin concerns',
      subcategories: ['Acne & Blemishes', 'Anti-Aging', 'Sensitivity', 'Dryness', 'Oiliness', 'Dark Spots']
    },
    {
      id: 'ingredient',
      name: 'By Ingredient',
      icon: 'FlaskConical',
      description: 'Shop by active ingredients',
      subcategories: ['Retinol', 'Vitamin C', 'Niacinamide', 'Hyaluronic Acid', 'Salicylic Acid', 'Peptides']
    },
    {
      id: 'lifestyle',
      name: 'By Lifestyle',
      icon: 'Clock',
      description: 'Products that fit your routine',
      subcategories: ['5-Minute Routines', 'Travel-Friendly', 'Pregnancy-Safe', 'Sensitive Skin', 'Busy Professional', 'Minimalist']
    },
    {
      id: 'glow',
      name: 'By Glow Goal',
      icon: 'Sparkles',
      description: 'Achieve your desired finish',
      subcategories: ['Dewy Glow', 'Matte Finish', 'Natural Enhancement', 'Radiant Shine', 'Subtle Luminosity', 'Bold Statement']
    }
  ];

  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Categories */}
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => onCategoryChange(category?.id)}
              onMouseEnter={() => setHoveredCategory(category?.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={category?.icon} size={18} />
              <div className="text-left">
                <div className="font-medium">{category?.name}</div>
                <div className="text-xs opacity-80 hidden lg:block">{category?.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Subcategories */}
      {activeCategory && (
        <div className="mt-6 pt-6 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories?.find(cat => cat?.id === activeCategory)?.subcategories?.map((sub, index) => (
              <button
                key={index}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors text-left"
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryNavigation;