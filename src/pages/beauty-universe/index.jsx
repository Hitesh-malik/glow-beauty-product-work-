import React, { useState, useEffect } from "react";
import Header from "../../components/ui/Header";
import CategoryNavigation from "./components/CategoryNavigation";
import FilterSidebar from "./components/FilterSidebar";
import SearchAndSort from "./components/SearchAndSort";
import ProductGrid from "./components/ProductGrid";
import QuickViewModal from "./components/QuickViewModal";
import ComparisonTool from "./components/ComparisonTool";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";

const BeautyUniverse = () => {
  const [activeCategory, setActiveCategory] = useState("concern");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [compareList, setCompareList] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mock product data
  const mockProducts = [
    {
      id: 1,
      name: "Vitamin C Brightening Serum",
      brand: "Glow Essentials",
      price: 45.0,
      originalPrice: 60.0,
      discount: 25,
      rating: 4.8,
      reviewCount: 2847,
      category: "skincare",
      images: [
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=top",
      ],
      keyIngredients: ["Vitamin C", "Hyaluronic Acid", "Niacinamide"],
      description: `A powerful brightening serum that combines 15% Vitamin C with hyaluronic acid to deliver radiant, even-toned skin. This lightweight formula absorbs quickly and provides antioxidant protection while reducing the appearance of dark spots and fine lines.`,
      brandValues: ["Cruelty-Free", "Vegan", "Sustainable"],
      skinTypes: ["Normal", "Dry", "Combination"],
      isNew: false,
      isBestseller: true,
      glowMatches: [
        {
          name: "Sarah M.",
          avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
          name: "Emma K.",
          avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        {
          name: "Lisa R.",
          avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        },
        {
          name: "Maya P.",
          avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        },
      ],
      variants: [
        { id: 1, name: "15% Vitamin C", price: 45.0 },
        { id: 2, name: "20% Vitamin C", price: 55.0 },
      ],
    },
    {
      id: 2,
      name: "Retinol Renewal Night Treatment",
      brand: "Youth Revival",
      price: 78.0,
      rating: 4.6,
      reviewCount: 1923,
      category: "skincare",
      images: [
        "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400",
        "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center",
      ],
      keyIngredients: ["Retinol", "Peptides", "Ceramides"],
      description: `Advanced anti-aging night treatment featuring encapsulated retinol for gentle yet effective skin renewal. Formulated with peptides and ceramides to minimize irritation while maximizing results.`,
      brandValues: ["Dermatologist Tested", "Cruelty-Free"],
      skinTypes: ["Normal", "Mature", "Combination"],
      isNew: true,
      isBestseller: false,
      glowMatches: [
        {
          name: "Jennifer L.",
          avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        },
        {
          name: "Amanda S.",
          avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        },
        {
          name: "Rachel T.",
          avatar: "https://randomuser.me/api/portraits/women/7.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Hydrating Gel Moisturizer",
      brand: "Aqua Bloom",
      price: 32.0,
      rating: 4.7,
      reviewCount: 3456,
      category: "skincare",
      images: [
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400",
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&crop=center",
      ],
      keyIngredients: ["Hyaluronic Acid", "Aloe Vera", "Green Tea"],
      description: `Lightweight gel moisturizer that provides intense hydration without clogging pores. Perfect for oily and combination skin types seeking moisture without heaviness.`,
      brandValues: ["Vegan", "Sustainable", "Clean Beauty"],
      skinTypes: ["Oily", "Combination", "Sensitive"],
      isNew: false,
      isBestseller: true,
      glowMatches: [
        {
          name: "Olivia M.",
          avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        },
        {
          name: "Sophia K.",
          avatar: "https://randomuser.me/api/portraits/women/9.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Luminous Foundation SPF 30",
      brand: "Radiant Beauty",
      price: 52.0,
      rating: 4.5,
      reviewCount: 2134,
      category: "makeup",
      images: [
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
      ],
      keyIngredients: ["SPF 30", "Hyaluronic Acid", "Vitamin E"],
      description: `Full-coverage foundation with built-in SPF protection and skincare benefits. Provides a natural, luminous finish that lasts all day while nourishing your skin.`,
      brandValues: ["Cruelty-Free", "Inclusive Shades"],
      skinTypes: ["All Skin Types"],
      isNew: false,
      isBestseller: false,
      glowMatches: [
        {
          name: "Zoe R.",
          avatar: "https://randomuser.me/api/portraits/women/10.jpg",
        },
        {
          name: "Chloe B.",
          avatar: "https://randomuser.me/api/portraits/women/11.jpg",
        },
        {
          name: "Grace W.",
          avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        },
      ],
      variants: [
        { id: 1, name: "Fair", price: 52.0 },
        { id: 2, name: "Light", price: 52.0 },
        { id: 3, name: "Medium", price: 52.0 },
        { id: 4, name: "Deep", price: 52.0 },
      ],
    },
    {
      id: 5,
      name: "Niacinamide Pore Minimizer",
      brand: "Clear Skin Co",
      price: 28.0,
      rating: 4.4,
      reviewCount: 1876,
      category: "skincare",
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      ],
      keyIngredients: ["Niacinamide", "Zinc", "Salicylic Acid"],
      description: `Targeted treatment serum that minimizes the appearance of pores and controls excess oil production. Ideal for oily and acne-prone skin types.`,
      brandValues: ["Vegan", "Cruelty-Free"],
      skinTypes: ["Oily", "Acne-Prone"],
      isNew: true,
      isBestseller: false,
      glowMatches: [
        {
          name: "Mia C.",
          avatar: "https://randomuser.me/api/portraits/women/13.jpg",
        },
        {
          name: "Ava D.",
          avatar: "https://randomuser.me/api/portraits/women/14.jpg",
        },
      ],
    },
    {
      id: 6,
      name: "Gentle Cleansing Oil",
      brand: "Pure Botanics",
      price: 38.0,
      rating: 4.9,
      reviewCount: 4521,
      category: "skincare",
      images: [
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400",
      ],
      keyIngredients: ["Jojoba Oil", "Chamomile", "Vitamin E"],
      description: `Luxurious cleansing oil that gently removes makeup and impurities while nourishing the skin. Suitable for all skin types, including sensitive skin.`,
      brandValues: ["Organic", "Cruelty-Free", "Sustainable"],
      skinTypes: ["All Skin Types", "Sensitive"],
      isNew: false,
      isBestseller: true,
      glowMatches: [
        {
          name: "Isabella F.",
          avatar: "https://randomuser.me/api/portraits/women/15.jpg",
        },
        {
          name: "Charlotte G.",
          avatar: "https://randomuser.me/api/portraits/women/16.jpg",
        },
        {
          name: "Amelia H.",
          avatar: "https://randomuser.me/api/portraits/women/17.jpg",
        },
      ],
    },
    {
      id: 7,
      name: "Matte Liquid Lipstick Set",
      brand: "Bold Lips",
      price: 65.0,
      originalPrice: 85.0,
      discount: 24,
      rating: 4.3,
      reviewCount: 987,
      category: "makeup",
      images: [
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
      ],
      keyIngredients: ["Vitamin E", "Jojoba Oil", "Natural Waxes"],
      description: `Collection of 5 long-wearing matte liquid lipsticks in trending shades. Comfortable formula that doesn't dry out lips while providing full coverage color.`,
      brandValues: ["Cruelty-Free", "Vegan"],
      skinTypes: ["All Skin Types"],
      isNew: false,
      isBestseller: false,
      glowMatches: [
        {
          name: "Harper I.",
          avatar: "https://randomuser.me/api/portraits/women/18.jpg",
        },
        {
          name: "Evelyn J.",
          avatar: "https://randomuser.me/api/portraits/women/19.jpg",
        },
      ],
      variants: [
        { id: 1, name: "Nude Collection", price: 65.0 },
        { id: 2, name: "Bold Collection", price: 65.0 },
        { id: 3, name: "Berry Collection", price: 65.0 },
      ],
    },
    {
      id: 8,
      name: "Peptide Eye Cream",
      brand: "Age Defiance",
      price: 89.0,
      rating: 4.7,
      reviewCount: 1654,
      category: "skincare",
      images: [
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400",
      ],
      keyIngredients: ["Peptides", "Caffeine", "Hyaluronic Acid"],
      description: `Advanced eye cream targeting fine lines, puffiness, and dark circles. Formulated with powerful peptides and caffeine for visible anti-aging results.`,
      brandValues: ["Dermatologist Tested", "Cruelty-Free"],
      skinTypes: ["Mature", "All Skin Types"],
      isNew: true,
      isBestseller: false,
      glowMatches: [
        {
          name: "Victoria K.",
          avatar: "https://randomuser.me/api/portraits/women/20.jpg",
        },
        {
          name: "Natalie L.",
          avatar: "https://randomuser.me/api/portraits/women/21.jpg",
        },
      ],
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  // Filter and search logic
  useEffect(() => {
    let filtered = [...mockProducts];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered?.filter(
        (product) =>
          product?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
          product?.brand?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
          product?.keyIngredients?.some((ingredient) =>
            ingredient?.toLowerCase()?.includes(searchQuery?.toLowerCase())
          )
      );
    }

    // Apply category filters
    Object.entries(filters)?.forEach(([category, values]) => {
      if (values?.length > 0) {
        switch (category) {
          case "skinType":
            filtered = filtered?.filter((product) =>
              values?.some((value) => product?.skinTypes?.includes(value))
            );
            break;
          case "brandValues":
            filtered = filtered?.filter((product) =>
              values?.some((value) => product?.brandValues?.includes(value))
            );
            break;
          case "priceRange":
            filtered = filtered?.filter((product) => {
              return values?.some((range) => {
                const [min, max] = range
                  ?.split("-")
                  ?.map((v) => (v === "+" ? Infinity : parseInt(v)));
                return (
                  product?.price >= min &&
                  (max === undefined || product?.price <= max)
                );
              });
            });
            break;
          case "ratings":
            filtered = filtered?.filter((product) => {
              return values?.some((rating) => {
                const minRating = parseFloat(rating?.replace("+", ""));
                return product?.rating >= minRating;
              });
            });
            break;
          case "concerns":
            // This would be more complex in a real app with proper concern mapping
            break;
        }
      }
    });

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered?.sort((a, b) => a?.price - b?.price);
        break;
      case "price-high":
        filtered?.sort((a, b) => b?.price - a?.price);
        break;
      case "rating":
        filtered?.sort((a, b) => b?.rating - a?.rating);
        break;
      case "reviews":
        filtered?.sort((a, b) => b?.reviewCount - a?.reviewCount);
        break;
      case "newest":
        filtered?.sort((a, b) => b?.isNew - a?.isNew);
        break;
      case "bestseller":
        filtered?.sort((a, b) => b?.isBestseller - a?.isBestseller);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    setFilteredProducts(filtered);
  }, [searchQuery, filters, sortBy]);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleCompare = (product) => {
    if (compareList?.find((item) => item?.id === product?.id)) {
      setCompareList(compareList?.filter((item) => item?.id !== product?.id));
    } else if (compareList?.length < 3) {
      setCompareList([...compareList, product]);
    }
  };

  const handleRemoveFromCompare = (productId) => {
    setCompareList(compareList?.filter((item) => item?.id !== productId));
  };

  const handleClearCompare = () => {
    setCompareList([]);
    setIsCompareOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>Home</span>
              <Icon name="ChevronRight" size={14} />
              <span className="text-foreground">Beauty Universe</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Beauty Universe
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Discover your perfect beauty match through our innovative
              categorization system. Find products by concern, ingredient,
              lifestyle, or glow goal.
            </p>
          </div>

          {/* Category Navigation */}
          <CategoryNavigation
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Search and Sort */}
          <SearchAndSort
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onFilterToggle={() => setIsFilterOpen(true)}
            resultCount={filteredProducts?.length}
            isLoading={isLoading}
            filters={filters}
          />

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <FilterSidebar
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              filters={filters}
              onFiltersChange={setFilters}
            />

            {/* Product Grid */}
            <div className="flex-1 w-full">
              <ProductGrid
                products={filteredProducts}
                onQuickView={handleQuickView}
                onCompare={handleCompare}
                compareList={compareList}
                isLoading={isLoading}
              />

              {/* Load More */}
              {filteredProducts?.length > 0 && (
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Products
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => {
          setIsQuickViewOpen(false);
          setSelectedProduct(null);
        }}
      />
      {/* Comparison Tool */}
      <ComparisonTool
        compareList={compareList}
        onRemove={handleRemoveFromCompare}
        onClear={handleClearCompare}
        isOpen={isCompareOpen}
        onToggle={() => setIsCompareOpen(!isCompareOpen)}
      />

      {/* Floating Filter Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-30 lg:hidden">
        <Button
          onClick={() => setIsFilterOpen(true)}
          size="lg"
          className={`rounded-full shadow-lg h-14 w-14 p-0 transition-all duration-300 hover:scale-110 ${
            Object.values(filters).some((values) => values && values.length > 0)
              ? "bg-primary hover:bg-primary/90 text-primary-foreground animate-bounce"
              : "bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse hover:animate-none"
          }`}
        >
          <Icon name="Filter" size={24} />
          {Object.values(filters).some(
            (values) => values && values.length > 0
          ) && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
              {Object.values(filters).reduce(
                (total, values) => total + (values?.length || 0),
                0
              )}
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default BeautyUniverse;
