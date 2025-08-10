import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const NavigationTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: 'ingredients',
      name: 'Ingredient Sourcing',
      icon: 'Leaf',
      description: 'Supplier transparency & sourcing practices'
    },
    {
      id: 'sustainability',
      name: 'Sustainability',
      icon: 'Recycle',
      description: 'Environmental impact & green initiatives'
    },
    {
      id: 'certifications',
      name: 'Certifications',
      icon: 'Award',
      description: 'Third-party validations & compliance'
    },
    {
      id: 'clean-beauty',
      name: 'Clean Beauty Decoded',
      icon: 'BookOpen',
      description: 'Marketing terms explained & decoded'
    },
    {
      id: 'safety',
      name: 'Safety Information',
      icon: 'ShieldCheck',
      description: 'Usage guidelines & safety protocols'
    },
    {
      id: 'privacy',
      name: 'Data Privacy',
      icon: 'Lock',
      description: 'User rights & data protection policies'
    }
  ];

  return (
    <section className="bg-card border-b border-border sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1 py-4 overflow-x-auto">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => onTabChange(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeTab === tab?.id
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.name}</span>
            </button>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="lg:hidden py-4">
          <div className="relative">
            <button
              onClick={() => {
                const dropdown = document.getElementById('mobile-nav-dropdown');
                dropdown?.classList?.toggle('hidden');
              }}
              className="w-full flex items-center justify-between px-4 py-3 bg-muted rounded-lg text-sm font-medium"
            >
              <div className="flex items-center space-x-2">
                <Icon name={tabs?.find(tab => tab?.id === activeTab)?.icon || 'Menu'} size={16} />
                <span>{tabs?.find(tab => tab?.id === activeTab)?.name || 'Select Section'}</span>
              </div>
              <Icon name="ChevronDown" size={16} />
            </button>

            <div id="mobile-nav-dropdown" className="hidden absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-soft-lg z-50">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => {
                    onTabChange(tab?.id);
                    document.getElementById('mobile-nav-dropdown')?.classList?.add('hidden');
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left text-sm transition-colors first:rounded-t-lg last:rounded-b-lg ${
                    activeTab === tab?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-popover-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <div>
                    <div className="font-medium">{tab?.name}</div>
                    <div className="text-xs opacity-70">{tab?.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavigationTabs;