import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onQuickView, onCompare, isComparing }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageHover = (index) => {
    setCurrentImageIndex(index);
  };

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

  return (
    <div 
      className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-soft-lg transition-all duration-300 breathing-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product?.images?.[currentImageIndex]}
          alt={product?.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product?.isNew && (
            <span className="px-2 py-1 bg-success text-success-foreground text-xs font-medium rounded-full">
              New
            </span>
          )}
          {product?.isBestseller && (
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              Bestseller
            </span>
          )}
          {product?.discount && (
            <span className="px-2 py-1 bg-error text-error-foreground text-xs font-medium rounded-full">
              -{product?.discount}%
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button
            variant="secondary"
            size="icon"
            onClick={() => onQuickView(product)}
            className="w-8 h-8 shadow-soft"
          >
            <Icon name="Eye" size={16} />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="w-8 h-8 shadow-soft"
          >
            <Icon name="Heart" size={16} />
          </Button>
          <Button
            variant={isComparing ? "primary" : "secondary"}
            size="icon"
            onClick={() => onCompare(product)}
            className="w-8 h-8 shadow-soft"
          >
            <Icon name="BarChart3" size={16} />
          </Button>
        </div>

        {/* Image Thumbnails */}
        {product?.images?.length > 1 && isHovered && (
          <div className="absolute bottom-3 left-3 flex gap-1">
            {product?.images?.slice(0, 4)?.map((_, index) => (
              <button
                key={index}
                onClick={() => handleImageHover(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentImageIndex === index ? 'bg-primary' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Virtual Try-On for Makeup */}
        {product?.category === 'makeup' && (
          <div className={`absolute bottom-3 right-3 transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <Button variant="primary" size="sm" className="text-xs">
              <Icon name="Camera" size={14} className="mr-1" />
              Try On
            </Button>
          </div>
        )}
      </div>
      {/* Content Section */}
      <div className="p-4">
        {/* Brand & Name */}
        <div className="mb-2">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
            {product?.brand}
          </p>
          <h3 className="text-sm font-medium text-foreground line-clamp-2 leading-tight">
            {product?.name}
          </h3>
        </div>

        {/* Key Ingredients */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {product?.keyIngredients?.slice(0, 2)?.map((ingredient, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
              >
                {ingredient}
              </span>
            ))}
            {product?.keyIngredients?.length > 2 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                +{product?.keyIngredients?.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {renderStars(product?.rating)}
          </div>
          <span className="text-xs text-muted-foreground">
            {product?.rating} ({product?.reviewCount})
          </span>
        </div>

        {/* Glow Matches */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex -space-x-1">
            {product?.glowMatches?.slice(0, 3)?.map((match, index) => (
              <Image
                key={index}
                src={match?.avatar}
                alt={match?.name}
                className="w-5 h-5 rounded-full border border-background"
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {product?.glowMatches?.length} Glow Matches
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">
              {formatPrice(product?.price)}
            </span>
            {product?.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(product?.originalPrice)}
              </span>
            )}
          </div>
          
          {/* Quick Add */}
          <Button
            variant="outline"
            size="sm"
            className="text-xs px-3"
          >
            <Icon name="Plus" size={12} className="mr-1" />
            Add
          </Button>
        </div>

        {/* Brand Values */}
        {product?.brandValues?.length > 0 && (
          <div className="flex items-center gap-1 mt-2 pt-2 border-t border-border">
            {product?.brandValues?.slice(0, 3)?.map((value, index) => (
              <Icon
                key={index}
                name={value === 'Cruelty-Free' ? 'Heart' : value === 'Vegan' ? 'Leaf' : 'Shield'}
                size={12}
                className="text-success"
                title={value}
              />
            ))}
            {product?.brandValues?.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{product?.brandValues?.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;