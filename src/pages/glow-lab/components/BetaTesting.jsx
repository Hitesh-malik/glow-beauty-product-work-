import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const BetaTesting = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: 'Grid3X3' },
    { id: 'skincare', name: 'Skincare', icon: 'Droplets' },
    { id: 'makeup', name: 'Makeup', icon: 'Palette' },
    { id: 'haircare', name: 'Haircare', icon: 'Scissors' },
    { id: 'fragrance', name: 'Fragrance', icon: 'Flower' }
  ];

  const betaProducts = [
    {
      id: 1,
      name: "Midnight Recovery Elixir",
      category: "skincare",
      brand: "Beauty Glow Labs",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop",
      description: "Revolutionary overnight serum with time-release peptides",
      testingPeriod: "4 weeks",
      spotsLeft: 23,
      totalSpots: 100,
      requirements: ["Dry/Combination skin", "Age 25-45", "No active retinol use"],
      commitment: "Daily use + weekly photos + detailed feedback",
      benefits: ["Free full-size product", "Early access to launch", "$50 store credit"],
      startDate: "2025-01-20",
      isUrgent: true
    },
    {
      id: 2,
      name: "Color-Shift Lip Lacquer",
      category: "makeup",
      brand: "Beauty Glow Pro",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop",
      description: "pH-reactive lip color that adapts to your natural tone",
      testingPeriod: "2 weeks",
      spotsLeft: 45,
      totalSpots: 75,
      requirements: ["All skin tones welcome", "Regular lip product user", "Social media active"],
      commitment: "Daily wear + before/after photos + social posts",
      benefits: ["Keep all 5 shades", "Launch day discount", "Influencer kit"],
      startDate: "2025-01-25",
      isUrgent: false
    },
    {
      id: 3,
      name: "Scalp Renewal Treatment",
      category: "haircare",
      brand: "Beauty Glow Wellness",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=300&h=300&fit=crop",
      description: "Probiotic scalp treatment for hair density and health",
      testingPeriod: "8 weeks",
      spotsLeft: 12,
      totalSpots: 50,
      requirements: ["Thinning hair concerns", "No scalp conditions", "Commitment to full period"],
      commitment: "3x weekly use + progress photos + detailed journal",
      benefits: ["Full treatment kit", "Personal consultation", "$100 voucher"],
      startDate: "2025-02-01",
      isUrgent: true
    },
    {
      id: 4,
      name: "Mood-Responsive Fragrance",
      category: "fragrance",
      brand: "Beauty Glow Scents",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop",
      description: "Adaptive fragrance that changes with your body chemistry",
      testingPeriod: "3 weeks",
      spotsLeft: 8,
      totalSpots: 30,
      requirements: ["Fragrance enthusiast", "No allergies", "Detailed scent vocabulary"],
      commitment: "Daily wear + scent diary + video reviews",
      benefits: ["Custom fragrance blend", "Perfumer consultation", "Launch event invite"],
      startDate: "2025-02-10",
      isUrgent: true
    },
    {
      id: 5,
      name: "Smart Foundation Primer",
      category: "makeup",
      brand: "Beauty Glow Tech",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",
      description: "AI-powered primer that adapts to environmental conditions",
      testingPeriod: "3 weeks",
      spotsLeft: 67,
      totalSpots: 80,
      requirements: ["Daily makeup wearer", "Various environments", "Tech-savvy"],
      commitment: "Daily use + app tracking + performance feedback",
      benefits: ["Smart beauty device", "App premium access", "Tech beta priority"],
      startDate: "2025-02-15",
      isUrgent: false
    },
    {
      id: 6,
      name: "Barrier Repair Cleanser",
      category: "skincare",
      brand: "Beauty Glow Labs",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop",
      description: "Gentle cleanser that rebuilds skin barrier while cleansing",
      testingPeriod: "6 weeks",
      spotsLeft: 34,
      totalSpots: 60,
      requirements: ["Sensitive/compromised skin", "No active treatments", "Consistent routine"],
      commitment: "2x daily use + skin analysis + weekly check-ins",
      benefits: ["Complete skincare routine", "Dermatologist consultation", "Lifetime discount"],
      startDate: "2025-02-20",
      isUrgent: false
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? betaProducts 
    : betaProducts?.filter(product => product?.category === selectedCategory);

  const getUrgencyColor = (spotsLeft, totalSpots) => {
    const percentage = (spotsLeft / totalSpots) * 100;
    if (percentage <= 20) return 'text-error';
    if (percentage <= 50) return 'text-warning';
    return 'text-success';
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="TestTube" size={20} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Beta Testing</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-accent mb-4">
            Shape the Future of Beauty
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our exclusive beta testing community and be the first to try revolutionary products before they launch
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-background text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Beta Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts?.map((product) => (
            <div key={product?.id} className="bg-card border border-border rounded-2xl p-6 breathing-card">
              {/* Product Image & Urgency Badge */}
              <div className="relative mb-6">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={product?.image}
                    alt={product?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {product?.isUrgent && (
                  <div className="absolute -top-2 -right-2 bg-error text-error-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Limited Spots
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{product?.name}</h3>
                  <p className="text-sm text-muted-foreground">{product?.brand}</p>
                </div>

                <p className="text-sm text-muted-foreground">{product?.description}</p>

                {/* Spots Available */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Spots Available</span>
                    <span className={`text-sm font-bold ${getUrgencyColor(product?.spotsLeft, product?.totalSpots)}`}>
                      {product?.spotsLeft}/{product?.totalSpots}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(product?.spotsLeft / product?.totalSpots) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Testing Details */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={14} color="var(--color-muted-foreground)" />
                    <span className="text-sm text-muted-foreground">
                      {product?.testingPeriod} testing period
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} color="var(--color-muted-foreground)" />
                    <span className="text-sm text-muted-foreground">
                      Starts {new Date(product.startDate)?.toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>

                {/* Requirements Preview */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Requirements</h4>
                  <ul className="space-y-1">
                    {product?.requirements?.slice(0, 2)?.map((req, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={12} color="var(--color-success)" />
                        <span className="text-xs text-muted-foreground">{req}</span>
                      </li>
                    ))}
                    {product?.requirements?.length > 2 && (
                      <li className="text-xs text-primary">+{product?.requirements?.length - 2} more</li>
                    )}
                  </ul>
                </div>

                {/* Benefits Preview */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">What You Get</h4>
                  <div className="flex flex-wrap gap-1">
                    {product?.benefits?.slice(0, 2)?.map((benefit, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-success/10 text-success text-xs rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                    {product?.benefits?.length > 2 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        +{product?.benefits?.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant={product?.spotsLeft <= 10 ? "default" : "outline"}
                  fullWidth
                  iconName="UserPlus"
                  iconPosition="left"
                  className="mt-6"
                >
                  {product?.spotsLeft <= 10 ? "Apply Now - Limited Spots!" : "Apply for Beta Test"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground font-accent mb-4">
              Don't See Your Perfect Match?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our beta testing waitlist to get notified about new opportunities that match your beauty profile and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" iconName="Bell" iconPosition="left">
                Join Beta Waitlist
              </Button>
              <Button variant="outline" iconName="MessageCircle" iconPosition="left">
                Suggest a Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaTesting;