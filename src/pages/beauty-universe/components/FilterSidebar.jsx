import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterSidebar = ({ isOpen, onClose, filters, onFiltersChange }) => {
  const [expandedSections, setExpandedSections] = useState({
    skinType: true,
    priceRange: true,
    brandValues: true,
    ratings: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev?.[section]
    }));
  };

  const handleFilterChange = (category, value) => {
    const currentValues = filters?.[category] || [];
    const newValues = currentValues?.includes(value)
      ? currentValues?.filter(v => v !== value)
      : [...currentValues, value];
    
    onFiltersChange({
      ...filters,
      [category]: newValues
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({});
  };

  const filterSections = [
    {
      id: 'skinType',
      title: 'Skin Type',
      options: ['Normal', 'Dry', 'Oily', 'Combination', 'Sensitive', 'Mature']
    },
    {
      id: 'brandValues',
      title: 'Brand Values',
      options: ['Cruelty-Free', 'Vegan', 'Sustainable', 'Clean Beauty', 'Indie Brand', 'Dermatologist Tested']
    },
    {
      id: 'concerns',
      title: 'Skin Concerns',
      options: ['Acne', 'Fine Lines', 'Dark Spots', 'Dullness', 'Large Pores', 'Uneven Texture']
    }
  ];

  const priceRanges = [
    { label: 'Under $25', value: '0-25' },
    { label: '$25 - $50', value: '25-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $200', value: '100-200' },
    { label: 'Over $200', value: '200+' }
  ];

  const ratings = [
    { label: '4.5+ Stars', value: '4.5+', stars: 5 },
    { label: '4+ Stars', value: '4+', stars: 4 },
    { label: '3.5+ Stars', value: '3.5+', stars: 4 },
    { label: '3+ Stars', value: '3+', stars: 3 }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div className={`fixed lg:sticky top-0 left-0 h-full lg:h-auto w-80 bg-background border-r lg:border border-border z-50 lg:z-auto transform transition-transform duration-300 overflow-y-auto ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Filters</h3>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-xs"
              >
                Clear All
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="lg:hidden"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
          </div>

          {/* Filter Sections */}
          <div className="space-y-6">
            {filterSections?.map((section) => (
              <div key={section?.id} className="border-b border-border pb-6">
                <button
                  onClick={() => toggleSection(section?.id)}
                  className="flex items-center justify-between w-full text-left mb-4"
                >
                  <h4 className="font-medium text-foreground">{section?.title}</h4>
                  <Icon 
                    name={expandedSections?.[section?.id] ? "ChevronUp" : "ChevronDown"} 
                    size={16} 
                  />
                </button>
                
                {expandedSections?.[section?.id] && (
                  <div className="space-y-3">
                    {section?.options?.map((option) => (
                      <label key={option} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={(filters?.[section?.id] || [])?.includes(option)}
                          onChange={() => handleFilterChange(section?.id, option)}
                          className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                        />
                        <span className="text-sm text-muted-foreground">{option}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Price Range */}
            <div className="border-b border-border pb-6">
              <button
                onClick={() => toggleSection('priceRange')}
                className="flex items-center justify-between w-full text-left mb-4"
              >
                <h4 className="font-medium text-foreground">Price Range</h4>
                <Icon 
                  name={expandedSections?.priceRange ? "ChevronUp" : "ChevronDown"} 
                  size={16} 
                />
              </button>
              
              {expandedSections?.priceRange && (
                <div className="space-y-3">
                  {priceRanges?.map((range) => (
                    <label key={range?.value} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={(filters?.priceRange || [])?.includes(range?.value)}
                        onChange={() => handleFilterChange('priceRange', range?.value)}
                        className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                      />
                      <span className="text-sm text-muted-foreground">{range?.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Ratings */}
            <div>
              <button
                onClick={() => toggleSection('ratings')}
                className="flex items-center justify-between w-full text-left mb-4"
              >
                <h4 className="font-medium text-foreground">Customer Ratings</h4>
                <Icon 
                  name={expandedSections?.ratings ? "ChevronUp" : "ChevronDown"} 
                  size={16} 
                />
              </button>
              
              {expandedSections?.ratings && (
                <div className="space-y-3">
                  {ratings?.map((rating) => (
                    <label key={rating?.value} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={(filters?.ratings || [])?.includes(rating?.value)}
                        onChange={() => handleFilterChange('ratings', rating?.value)}
                        className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                      />
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)]?.map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={12}
                              className={i < rating?.stars ? 'text-warning fill-current' : 'text-muted-foreground/30'}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">{rating?.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;