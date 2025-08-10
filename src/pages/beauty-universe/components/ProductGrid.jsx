import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onQuickView, onCompare, compareList, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(12)]?.map((_, index) => (
          <div key={index} className="bg-card border border-border rounded-xl overflow-hidden animate-pulse">
            <div className="aspect-square bg-muted"></div>
            <div className="p-4 space-y-3">
              <div className="h-3 bg-muted rounded w-1/2"></div>
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="flex gap-2">
                <div className="h-6 bg-muted rounded-full w-16"></div>
                <div className="h-6 bg-muted rounded-full w-16"></div>
              </div>
              <div className="h-3 bg-muted rounded w-1/3"></div>
              <div className="flex justify-between items-center">
                <div className="h-4 bg-muted rounded w-16"></div>
                <div className="h-8 bg-muted rounded w-16"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products?.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
          <span className="text-2xl">🔍</span>
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2">No products found</h3>
        <p className="text-muted-foreground">Try adjusting your filters or search terms</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductCard
          key={product?.id}
          product={product}
          onQuickView={onQuickView}
          onCompare={onCompare}
          isComparing={compareList?.some(item => item?.id === product?.id)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;