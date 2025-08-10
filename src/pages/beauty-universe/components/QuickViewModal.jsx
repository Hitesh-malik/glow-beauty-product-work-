import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const QuickViewModal = ({ product, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0]);

  if (!isOpen || !product) return null;

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
        size={14}
        className={i < Math.floor(rating) ? 'text-warning fill-current' : 'text-muted-foreground/30'}
      />
    ));
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">Quick View</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <Image
                src={product?.images?.[currentImageIndex]}
                alt={product?.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image Thumbnails */}
            {product?.images?.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product?.images?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index ? 'border-primary' : 'border-border'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product?.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Brand & Name */}
            <div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-1">
                {product?.brand}
              </p>
              <h1 className="text-2xl font-semibold text-foreground">{product?.name}</h1>
            </div>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {renderStars(product?.rating)}
              </div>
              <span className="text-sm text-muted-foreground">
                {product?.rating} ({product?.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-foreground">
                {formatPrice(selectedVariant?.price || product?.price)}
              </span>
              {product?.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {formatPrice(product?.originalPrice)}
                </span>
              )}
              {product?.discount && (
                <span className="px-2 py-1 bg-error text-error-foreground text-sm font-medium rounded-full">
                  -{product?.discount}% OFF
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-medium text-foreground mb-2">Description</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product?.description}
              </p>
            </div>

            {/* Key Ingredients */}
            <div>
              <h3 className="font-medium text-foreground mb-2">Key Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product?.keyIngredients?.map((ingredient, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Variants */}
            {product?.variants && product?.variants?.length > 1 && (
              <div>
                <h3 className="font-medium text-foreground mb-2">Choose Shade</h3>
                <div className="flex flex-wrap gap-2">
                  {product?.variants?.map((variant, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                        selectedVariant?.id === variant?.id
                          ? 'border-primary bg-primary/10 text-primary' :'border-border text-muted-foreground hover:border-primary/50'
                      }`}
                    >
                      {variant?.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Brand Values */}
            {product?.brandValues?.length > 0 && (
              <div>
                <h3 className="font-medium text-foreground mb-2">Brand Values</h3>
                <div className="flex flex-wrap gap-2">
                  {product?.brandValues?.map((value, index) => (
                    <div key={index} className="flex items-center gap-1 px-2 py-1 bg-success/10 text-success text-xs rounded-full">
                      <Icon
                        name={value === 'Cruelty-Free' ? 'Heart' : value === 'Vegan' ? 'Leaf' : 'Shield'}
                        size={12}
                      />
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Glow Matches */}
            <div>
              <h3 className="font-medium text-foreground mb-2">Glow Matches</h3>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {product?.glowMatches?.slice(0, 5)?.map((match, index) => (
                    <Image
                      key={index}
                      src={match?.avatar}
                      alt={match?.name}
                      className="w-8 h-8 rounded-full border-2 border-background"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product?.glowMatches?.length} people with similar profiles loved this
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Button variant="default" fullWidth>
                <Icon name="ShoppingBag" size={16} className="mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline">
                <Icon name="Heart" size={16} />
              </Button>
              <Button variant="outline">
                <Icon name="Share" size={16} />
              </Button>
            </div>

            {/* Virtual Try-On */}
            {product?.category === 'makeup' && (
              <Button variant="secondary" fullWidth>
                <Icon name="Camera" size={16} className="mr-2" />
                Try On with AR
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;