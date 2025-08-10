import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';

const SkinToneSelector = ({ selectedTone, onToneSelect }) => {
  const [hoveredTone, setHoveredTone] = useState(null);

  const skinTones = [
    {
      id: 'fair-cool',
      name: 'Fair Cool',
      description: 'Light skin with pink or blue undertones',
      color: '#F7E7CE',
      image: 'https://images.unsplash.com/photo-1594824804732-5f7c0c9e8b8c?w=150&h=150&fit=crop&crop=face',
      undertone: 'Cool',
      characteristics: ['Pink undertones', 'Burns easily', 'Rarely tans']
    },
    {
      id: 'fair-warm',
      name: 'Fair Warm',
      description: 'Light skin with yellow or golden undertones',
      color: '#F2D7A7',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
      undertone: 'Warm',
      characteristics: ['Golden undertones', 'May burn', 'Tans gradually']
    },
    {
      id: 'light-cool',
      name: 'Light Cool',
      description: 'Light to medium skin with cool undertones',
      color: '#E8C4A0',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
      undertone: 'Cool',
      characteristics: ['Neutral-cool undertones', 'Sometimes burns', 'Tans moderately']
    },
    {
      id: 'light-warm',
      name: 'Light Warm',
      description: 'Light to medium skin with warm undertones',
      color: '#DEB887',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face',
      undertone: 'Warm',
      characteristics: ['Warm golden undertones', 'Rarely burns', 'Tans well']
    },
    {
      id: 'medium-cool',
      name: 'Medium Cool',
      description: 'Medium skin with cool undertones',
      color: '#C8A882',
      image: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=150&h=150&fit=crop&crop=face',
      undertone: 'Cool',
      characteristics: ['Cool undertones', 'Rarely burns', 'Tans easily']
    },
    {
      id: 'medium-warm',
      name: 'Medium Warm',
      description: 'Medium skin with warm undertones',
      color: '#B8956A',
      image: 'https://images.unsplash.com/photo-1594824804732-5f7c0c9e8b8c?w=150&h=150&fit=crop&crop=face',
      undertone: 'Warm',
      characteristics: ['Warm undertones', 'Never burns', 'Tans very easily']
    },
    {
      id: 'deep-cool',
      name: 'Deep Cool',
      description: 'Deep skin with cool undertones',
      color: '#8B6914',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
      undertone: 'Cool',
      characteristics: ['Cool deep undertones', 'Never burns', 'Naturally dark']
    },
    {
      id: 'deep-warm',
      name: 'Deep Warm',
      description: 'Deep skin with warm undertones',
      color: '#654321',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
      undertone: 'Warm',
      characteristics: ['Warm deep undertones', 'Never burns', 'Rich golden tones']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-foreground mb-2">
          What's Your Skin Tone?
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Select the skin tone that best matches yours. This helps us recommend the perfect shades for your complexion.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skinTones?.map((tone) => (
          <div
            key={tone?.id}
            className={`
              relative group cursor-pointer transition-all duration-300 transform hover:scale-105
              ${selectedTone === tone?.id 
                ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' :'hover:shadow-soft-lg'
              }
            `}
            onClick={() => onToneSelect(tone?.id)}
            onMouseEnter={() => setHoveredTone(tone?.id)}
            onMouseLeave={() => setHoveredTone(null)}
          >
            <div className="bg-card rounded-xl p-4 border border-border">
              {/* Color Swatch */}
              <div className="relative mb-3">
                <div 
                  className="w-full h-20 rounded-lg border border-border"
                  style={{ backgroundColor: tone?.color }}
                />
                {selectedTone === tone?.id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Check" size={16} color="white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Tone Info */}
              <div className="text-center">
                <h4 className="font-medium text-foreground text-sm mb-1">
                  {tone?.name}
                </h4>
                <p className="text-xs text-muted-foreground mb-2">
                  {tone?.description}
                </p>
                <span className={`
                  inline-block px-2 py-1 rounded-full text-xs font-medium
                  ${tone?.undertone === 'Cool' ?'bg-blue-100 text-blue-800' :'bg-orange-100 text-orange-800'
                  }
                `}>
                  {tone?.undertone}
                </span>
              </div>

              {/* Hover Details */}
              {hoveredTone === tone?.id && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg p-3 shadow-soft-lg z-10">
                  <ul className="space-y-1">
                    {tone?.characteristics?.map((char, index) => (
                      <li key={index} className="text-xs text-popover-foreground flex items-center">
                        <Icon name="Dot" size={12} className="mr-1" />
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Educational Tip */}
      <div className="bg-brand-primary/20 border border-primary/20 rounded-lg p-4 mt-6">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} className="text-primary mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">Pro Tip</h4>
            <p className="text-sm text-muted-foreground">
              Look at your wrist in natural light. If your veins appear blue or purple, you likely have cool undertones. 
              If they appear green, you have warm undertones. Can't tell? You might have neutral undertones!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinToneSelector;