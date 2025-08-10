import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import Button from "../../../components/ui/Button";

const SearchAndSort = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  onFilterToggle,
  resultCount,
  isLoading,
  filters = {},
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Check if any filters are active
  const hasActiveFilters = Object.values(filters).some(
    (values) => values && values.length > 0
  );

  const sortOptions = [
    { value: "relevance", label: "Most Relevant" },
    { value: "rating", label: "Highest Rated" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "newest", label: "Newest First" },
    { value: "bestseller", label: "Best Sellers" },
    { value: "reviews", label: "Most Reviewed" },
  ];

  const popularSearches = [
    "Vitamin C Serum",
    "Retinol",
    "Hyaluronic Acid",
    "Niacinamide",
    "Sunscreen",
    "Moisturizer",
    "Cleanser",
    "Foundation",
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-4 lg:p-6 mb-6">
      <div className="flex flex-col gap-4">
        {/* Search Section */}
        <div className="flex-1">
          <div className="relative">
            <div className="relative">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              />
              <Input
                type="search"
                placeholder="Search products, brands, ingredients..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e?.target?.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="pl-10 pr-4 py-3 text-sm"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onSearchChange("")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
                >
                  <Icon name="X" size={14} />
                </Button>
              )}
            </div>

            {/* Search Suggestions */}
            {isSearchFocused && !searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-soft-lg z-50">
                <div className="p-4">
                  <h4 className="text-sm font-medium text-foreground mb-3">
                    Popular Searches
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches?.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => onSearchChange(search)}
                        className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Filter Toggle - Mobile First */}
          <Button
            variant={hasActiveFilters ? "default" : "outline"}
            onClick={onFilterToggle}
            className={`lg:hidden w-full sm:w-auto justify-center ${
              hasActiveFilters ? "bg-primary text-primary-foreground" : ""
            }`}
          >
            <Icon name="Filter" size={16} className="mr-2" />
            Filters
            {hasActiveFilters && (
              <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-foreground/20 text-xs font-medium">
                {Object.values(filters).reduce(
                  (total, values) => total + (values?.length || 0),
                  0
                )}
              </span>
            )}
          </Button>

          {/* Sort and Results - Stack on mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Results Count */}
            {!isLoading && (
              <span className="text-sm text-muted-foreground text-center sm:text-left">
                {resultCount?.toLocaleString()} products
              </span>
            )}

            {/* Sort Dropdown */}
            <div className="w-full sm:min-w-[180px]">
              <Select
                options={sortOptions}
                value={sortBy}
                onChange={onSortChange}
                placeholder="Sort by"
                className="text-sm w-full"
              />
            </div>
          </div>

          {/* View Toggle - Hidden on mobile */}
          <div className="hidden lg:flex items-center border border-border rounded-lg p-1">
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              data-active="true"
            >
              <Icon name="Grid3X3" size={16} />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Icon name="List" size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {searchQuery && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Searching for:
            </span>
            <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full">
              <span className="text-sm font-medium">"{searchQuery}"</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onSearchChange("")}
                className="w-4 h-4 ml-1"
              >
                <Icon name="X" size={12} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndSort;
