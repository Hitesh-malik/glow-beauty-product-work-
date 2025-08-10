import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ComingSoon = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribedProducts, setSubscribedProducts] = useState(new Set());

  const upcomingProducts = [
    {
      id: 1,
      name: "Quantum Glow Serum",
      brand: "Beauty Glow Labs",
      category: "Skincare",
      launchDate: "2025-01-15T10:00:00Z",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
      teaser: "Revolutionary quantum peptide technology that delivers results at the molecular level. The future of anti-aging is here.",
      keyFeatures: ["Quantum peptide delivery", "Instant absorption", "24-hour hydration", "Visible results in 7 days"],
      expectedPrice: "$89",
      limitedEdition: true,
      preOrderAvailable: true,
      exclusiveAccess: "Glow Profile members get 48-hour early access",
      developmentProgress: 95,
      betaTestResults: "97% of testers saw visible improvement in skin texture within one week",
      ingredients: ["Quantum Peptides", "Hyaluronic Acid", "Vitamin C", "Niacinamide"],
      subscribers: 12847
    },
    {
      id: 2,
      name: "Chromatic Foundation",
      brand: "Beauty Glow Pro",
      category: "Makeup",
      launchDate: "2025-02-01T14:00:00Z",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
      teaser: "Color-adaptive foundation that matches your skin tone perfectly throughout the day using smart pigment technology.",
      keyFeatures: ["Smart color matching", "16-hour wear", "SPF 30 protection", "All skin types"],
      expectedPrice: "$65",
      limitedEdition: false,
      preOrderAvailable: true,
      exclusiveAccess: "Beta testers get 20% launch discount",
      developmentProgress: 88,
      betaTestResults: "94% perfect color match across 1000+ skin tones tested",
      ingredients: ["Color-Adaptive Pigments", "Hyaluronic Acid", "SPF 30", "Antioxidants"],
      subscribers: 8934
    },
    {
      id: 3,
      name: "Probiotic Hair System",
      brand: "Beauty Glow Wellness",
      category: "Haircare",
      launchDate: "2025-02-20T12:00:00Z",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop",
      teaser: "Complete scalp microbiome restoration system that addresses hair loss at its root cause with live probiotics.",
      keyFeatures: ["Live probiotics", "Scalp microbiome balance", "60% hair fall reduction", "Density improvement"],
      expectedPrice: "$120",
      limitedEdition: true,
      preOrderAvailable: false,
      exclusiveAccess: "Invitation-only launch for select customers",
      developmentProgress: 78,
      betaTestResults: "Clinical trials show 60% reduction in hair fall within 4 weeks",
      ingredients: ["Live Probiotics", "Growth Peptides", "Biotin Complex", "Scalp Nutrients"],
      subscribers: 15623
    },
    {
      id: 4,
      name: "Mood Ring Lipstick",
      brand: "Beauty Glow Tech",
      category: "Makeup",
      launchDate: "2025-03-10T16:00:00Z",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
      teaser: "Revolutionary mood-responsive lipstick that changes color based on your emotional state and body chemistry.",
      keyFeatures: ["Mood-responsive color", "Biometric sensors", "8-hour wear", "Hydrating formula"],
      expectedPrice: "$45",
      limitedEdition: true,
      preOrderAvailable: true,
      exclusiveAccess: "First 1000 customers get exclusive collector\'s packaging",
      developmentProgress: 92,
      betaTestResults: "89% accuracy in mood detection with smooth color transitions",
      ingredients: ["Smart Pigments", "Mood Sensors", "Vitamin E", "Jojoba Oil"],
      subscribers: 6721
    }
  ];

  const currentProduct = upcomingProducts?.[selectedProduct];

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()?.getTime();
      const launchTime = new Date(currentProduct.launchDate)?.getTime();
      const difference = launchTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ expired: true });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentProduct?.launchDate]);

  const handleSubscribe = (productId) => {
    if (email) {
      setSubscribedProducts(new Set([...subscribedProducts, productId]));
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Clock" size={20} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Coming Soon</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-accent mb-4">
            Exclusive Product Launches
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be the first to experience revolutionary beauty products. Get early access, exclusive pricing, and limited edition packaging.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Product List */}
          <div className="space-y-4">
            {upcomingProducts?.map((product, index) => (
              <div
                key={product?.id}
                onClick={() => setSelectedProduct(index)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                  selectedProduct === index
                    ? 'border-primary bg-primary/5 shadow-soft'
                    : 'border-border hover:border-primary/50 hover:bg-muted/50'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={product?.image}
                      alt={product?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-foreground text-sm truncate">
                        {product?.name}
                      </h3>
                      {product?.limitedEdition && (
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">
                          Limited
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{product?.brand}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {new Date(product.launchDate)?.toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Icon name="Users" size={12} color="var(--color-muted-foreground)" />
                        <span className="text-xs text-muted-foreground">
                          {product?.subscribers?.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Details */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              {/* Product Header */}
              <div className="relative h-64">
                <Image
                  src={currentProduct?.image}
                  alt={currentProduct?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 bg-background/90 text-foreground text-sm rounded-full">
                      {currentProduct?.category}
                    </span>
                    {currentProduct?.limitedEdition && (
                      <span className="px-3 py-1 bg-accent/90 text-accent-foreground text-sm rounded-full">
                        Limited Edition
                      </span>
                    )}
                    {currentProduct?.preOrderAvailable && (
                      <span className="px-3 py-1 bg-success/90 text-success-foreground text-sm rounded-full">
                        Pre-Order Available
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white font-accent mb-2">
                    {currentProduct?.name}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {currentProduct?.brand} • Expected: {currentProduct?.expectedPrice}
                  </p>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10">
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-4">Launch Countdown</h4>
                  {timeLeft?.expired ? (
                    <div className="text-2xl font-bold text-success">Now Available!</div>
                  ) : (
                    <div className="grid grid-cols-4 gap-4">
                      {['days', 'hours', 'minutes', 'seconds']?.map((unit) => (
                        <div key={unit} className="text-center">
                          <div className="text-2xl lg:text-3xl font-bold text-foreground">
                            {timeLeft?.[unit] || 0}
                          </div>
                          <div className="text-sm text-muted-foreground capitalize">{unit}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Product Info */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Product Teaser</h4>
                      <p className="text-muted-foreground">{currentProduct?.teaser}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {currentProduct?.keyFeatures?.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <Icon name="Check" size={16} color="var(--color-success)" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Ingredients</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProduct?.ingredients?.map((ingredient, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Launch Details & Subscription */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Development Progress</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Completion</span>
                          <span className="text-sm font-medium text-foreground">
                            {currentProduct?.developmentProgress}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${currentProduct?.developmentProgress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Beta Test Results</h4>
                      <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                        <p className="text-sm text-success">{currentProduct?.betaTestResults}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Exclusive Access</h4>
                      <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                        <p className="text-sm text-accent">{currentProduct?.exclusiveAccess}</p>
                      </div>
                    </div>

                    {/* Subscription Form */}
                    <div className="bg-muted/30 rounded-lg p-6">
                      <h4 className="font-semibold text-foreground mb-4">Get Launch Alerts</h4>
                      {subscribedProducts?.has(currentProduct?.id) ? (
                        <div className="text-center py-4">
                          <Icon name="CheckCircle" size={24} color="var(--color-success)" className="mx-auto mb-2" />
                          <p className="text-success font-medium">You're subscribed!</p>
                          <p className="text-sm text-muted-foreground">We'll notify you when this product launches</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e?.target?.value)}
                          />
                          <Button
                            variant="default"
                            fullWidth
                            onClick={() => handleSubscribe(currentProduct?.id)}
                            iconName="Bell"
                            iconPosition="left"
                          >
                            Get Launch Alert
                          </Button>
                          <p className="text-xs text-muted-foreground text-center">
                            Join {currentProduct?.subscribers?.toLocaleString()} others waiting for this launch
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {currentProduct?.preOrderAvailable && (
                      <Button variant="default" iconName="ShoppingCart" iconPosition="left">
                        Pre-Order Now
                      </Button>
                    )}
                    <Button variant="outline" iconName="Heart" iconPosition="left">
                      Add to Wishlist
                    </Button>
                    <Button variant="outline" iconName="Share" iconPosition="left">
                      Share with Friends
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground font-accent mb-4">
                Never Miss a Launch
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Subscribe to our launch newsletter and be the first to know about new products, exclusive access, and special pre-order pricing.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1"
              />
              <Button variant="default" iconName="Bell" iconPosition="left">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;