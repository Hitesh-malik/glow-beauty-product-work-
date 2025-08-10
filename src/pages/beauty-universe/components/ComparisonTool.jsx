import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ComparisonTool = ({ compareList, onRemove, onClear, isOpen, onToggle }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })?.format(price);
  };

  const renderStars = (rating) => {
    return [...Array(5)]?.map((_, i) => (
      <Icon
        key={i}
        name="Star"
        size={12}
        className={i < Math.floor(rating) ? 'text-warning fill-current' : 'text-muted-foreground/30'}
      />
    ));
  };

  if (compareList?.length === 0) return null;

  return (
    <>
      {/* Floating Compare Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          variant="primary"
          onClick={onToggle}
          className="shadow-soft-lg"
        >
          <Icon name="BarChart3" size={16} className="mr-2" />
          Compare ({compareList?.length})
        </Button>
      </div>
      {/* Comparison Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end lg:items-center justify-center p-4">
          <div className="bg-background rounded-t-xl lg:rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">
                Product Comparison ({compareList?.length}/3)
              </h2>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={onClear}>
                  Clear All
                </Button>
                <Button variant="ghost" size="icon" onClick={onToggle}>
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </div>

            {/* Comparison Grid */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {compareList?.map((product) => (
                  <div key={product?.id} className="bg-card border border-border rounded-lg overflow-hidden">
                    {/* Product Image */}
                    <div className="relative aspect-square bg-muted">
                      <Image
                        src={product?.images?.[0]}
                        alt={product?.name}
                        className="w-full h-full object-cover"
                      />
                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={() => onRemove(product?.id)}
                        className="absolute top-2 right-2 w-6 h-6"
                      >
                        <Icon name="X" size={12} />
                      </Button>
                    </div>

                    {/* Product Info */}
                    <div className="p-4 space-y-4">
                      {/* Brand & Name */}
                      <div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                          {product?.brand}
                        </p>
                        <h3 className="text-sm font-medium text-foreground line-clamp-2">
                          {product?.name}
                        </h3>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-foreground">
                          {formatPrice(product?.price)}
                        </span>
                        {product?.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(product?.originalPrice)}
                          </span>
                        )}
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {renderStars(product?.rating)}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {product?.rating} ({product?.reviewCount})
                        </span>
                      </div>

                      {/* Key Ingredients */}
                      <div>
                        <h4 className="text-xs font-medium text-foreground mb-2">Key Ingredients</h4>
                        <div className="flex flex-wrap gap-1">
                          {product?.keyIngredients?.slice(0, 3)?.map((ingredient, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                            >
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Brand Values */}
                      <div>
                        <h4 className="text-xs font-medium text-foreground mb-2">Brand Values</h4>
                        <div className="flex flex-wrap gap-1">
                          {product?.brandValues?.slice(0, 3)?.map((value, index) => (
                            <div key={index} className="flex items-center gap-1 px-2 py-1 bg-success/10 text-success text-xs rounded-full">
                              <Icon
                                name={value === 'Cruelty-Free' ? 'Heart' : value === 'Vegan' ? 'Leaf' : 'Shield'}
                                size={10}
                              />
                              {value}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skin Type Compatibility */}
                      <div>
                        <h4 className="text-xs font-medium text-foreground mb-2">Best For</h4>
                        <div className="flex flex-wrap gap-1">
                          {product?.skinTypes?.slice(0, 2)?.map((type, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Glow Matches */}
                      <div>
                        <h4 className="text-xs font-medium text-foreground mb-2">Glow Matches</h4>
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-1">
                            {product?.glowMatches?.slice(0, 3)?.map((match, index) => (
                              <Image
                                key={index}
                                src={match?.avatar}
                                alt={match?.name}
                                className="w-4 h-4 rounded-full border border-background"
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {product?.glowMatches?.length}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-2 space-y-2">
                        <Button variant="default" size="sm" fullWidth>
                          <Icon name="ShoppingBag" size={14} className="mr-1" />
                          Add to Cart
                        </Button>
                        <Button variant="outline" size="sm" fullWidth>
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add More Placeholder */}
                {compareList?.length < 3 && (
                  <div className="bg-muted/50 border-2 border-dashed border-border rounded-lg flex items-center justify-center aspect-[3/4] min-h-[400px]">
                    <div className="text-center">
                      <Icon name="Plus" size={32} className="text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Add up to {3 - compareList?.length} more product{3 - compareList?.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ComparisonTool;