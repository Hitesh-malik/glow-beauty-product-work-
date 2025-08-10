import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TrendForecasting = () => {
  const [selectedTrend, setSelectedTrend] = useState(0);
  const [votedTrends, setVotedTrends] = useState(new Set());

  const trends = [
    {
      id: 1,
      name: "Bionic Beauty",
      category: "Technology",
      confidence: 95,
      timeframe: "Next 6 months",
      source: "Tech Fashion Week 2025",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=300&fit=crop",
      description: "Integration of wearable technology with beauty routines, featuring smart makeup that adapts to environmental conditions and biometric feedback.",
      keyElements: ["Smart color-changing makeup", "Biometric skin analysis", "Environmental adaptation", "Real-time adjustments"],
      howToAdopt: `Start with color-changing lip products that react to pH levels.\n\nIncorporate skin analysis apps into your routine.\n\nExperiment with temperature-responsive makeup.\n\nTry products with built-in SPF that adjusts to UV levels.`,
      culturalImpact: "Represents the merger of beauty and technology, appealing to tech-savvy consumers who want personalized, data-driven beauty solutions.",
      votes: 1247,
      isRising: true
    },
    {
      id: 2,
      name: "Neo-Minimalism",
      category: "Aesthetic",
      confidence: 88,
      timeframe: "Next 3 months",
      source: "Milan Fashion Week",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=300&fit=crop",
      description: "Ultra-refined minimalism with focus on skin perfection and strategic enhancement rather than coverage. Less is more, but better.",
      keyElements: ["Skin-first approach", "Strategic highlighting", "Invisible makeup", "Quality over quantity"],
      howToAdopt: `Focus on skincare as your foundation.\n\nUse tinted moisturizers instead of foundation.\n\nHighlight only your best features.\n\nInvest in fewer, higher-quality products.`,
      culturalImpact: "Reflects growing consciousness about authenticity and self-acceptance, moving away from heavy makeup trends.",
      votes: 892,
      isRising: false
    },
    {
      id: 3,
      name: "Chromatic Rebellion",
      category: "Color",
      confidence: 92,
      timeframe: "Next 4 months",
      source: "Street Style Analysis",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=300&fit=crop",
      description: "Bold, unexpected color combinations that challenge traditional beauty rules. Think neon greens with hot pinks, electric blues with warm oranges.",
      keyElements: ["Clashing color palettes", "Neon accents", "Unexpected combinations", "Statement eyes and lips"],
      howToAdopt: `Start with one bold color accent.\n\nExperiment with colored mascara or eyeliner.\n\nTry gradient lips with contrasting colors.\n\nMix warm and cool tones intentionally.`,
      culturalImpact: "Represents Gen Z\'s rejection of traditional beauty standards and embrace of individual expression through bold choices.",
      votes: 1456,
      isRising: true
    },
    {
      id: 4,
      name: "Wellness Glow",
      category: "Lifestyle",
      confidence: 90,
      timeframe: "Next 2 months",
      source: "Wellness Industry Report",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&h=300&fit=crop",
      description: "Beauty that emphasizes internal health and wellness, with products that nourish from within and create natural radiance.",
      keyElements: ["Adaptogenic ingredients", "Gut-skin connection", "Stress-relief formulas", "Natural radiance"],
      howToAdopt: `Incorporate adaptogens into your routine.\n\nFocus on products with probiotics.\n\nPrioritize sleep and stress management.\n\nUse makeup that enhances natural glow.`,
      culturalImpact: "Reflects the holistic wellness movement and understanding that true beauty comes from overall health and well-being.",
      votes: 1123,
      isRising: true
    },
    {
      id: 5,
      name: "Digital Nostalgia",
      category: "Retro-Future",
      confidence: 85,
      timeframe: "Next 8 months",
      source: "Social Media Trends",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=300&fit=crop",
      description: "Y2K meets 2025 - metallic finishes, holographic effects, and futuristic textures with a nostalgic twist from early digital aesthetics.",
      keyElements: ["Metallic finishes", "Holographic effects", "Digital-inspired colors", "Futuristic textures"],
      howToAdopt: `Add metallic eyeshadows to your collection.\n\nTry holographic highlighters.\n\nExperiment with chrome nail polishes.\n\nUse products with light-reflecting particles.`,
      culturalImpact: "Appeals to millennials' nostalgia while attracting Gen Z's love for futuristic aesthetics and digital culture.",
      votes: 734,
      isRising: false
    }
  ];

  const currentTrend = trends?.[selectedTrend];

  const handleVote = (trendId) => {
    if (!votedTrends?.has(trendId)) {
      setVotedTrends(new Set([...votedTrends, trendId]));
      // In a real app, this would update the vote count on the server
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return 'text-success';
    if (confidence >= 80) return 'text-warning';
    return 'text-muted-foreground';
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="TrendingUp" size={20} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Trend Forecasting</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-accent mb-4">
            Beauty Trends of Tomorrow
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover emerging beauty trends before they hit mainstream. Our AI analyzes runway shows, social media, and cultural shifts to predict what's next.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Trend List */}
          <div className="lg:col-span-1 space-y-4">
            {trends?.map((trend, index) => (
              <div
                key={trend?.id}
                onClick={() => setSelectedTrend(index)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                  selectedTrend === index
                    ? 'border-primary bg-primary/5 shadow-soft'
                    : 'border-border hover:border-primary/50 hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground text-sm">{trend?.name}</h3>
                  {trend?.isRising && (
                    <div className="flex items-center space-x-1">
                      <Icon name="TrendingUp" size={12} color="var(--color-success)" />
                      <span className="text-xs text-success">Rising</span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{trend?.category}</span>
                    <span className={`text-xs font-medium ${getConfidenceColor(trend?.confidence)}`}>
                      {trend?.confidence}% confidence
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{trend?.timeframe}</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={12} color="var(--color-muted-foreground)" />
                      <span className="text-xs text-muted-foreground">{trend?.votes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trend Details */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              {/* Trend Image */}
              <div className="relative h-64 lg:h-80">
                <Image
                  src={currentTrend?.image}
                  alt={currentTrend?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Trend Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 bg-background/90 text-foreground text-sm rounded-full">
                        {currentTrend?.category}
                      </span>
                      {currentTrend?.isRising && (
                        <span className="px-3 py-1 bg-success/90 text-success-foreground text-sm rounded-full">
                          Rising Trend
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-white text-sm">Confidence</div>
                        <div className="text-white text-lg font-bold">{currentTrend?.confidence}%</div>
                      </div>
                      
                      <Button
                        variant={votedTrends?.has(currentTrend?.id) ? "success" : "outline"}
                        size="sm"
                        onClick={() => handleVote(currentTrend?.id)}
                        iconName={votedTrends?.has(currentTrend?.id) ? "Heart" : "Heart"}
                        iconPosition="left"
                        className="bg-background/90 hover:bg-background"
                      >
                        {votedTrends?.has(currentTrend?.id) ? "Voted" : "Vote"}
                      </Button>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white font-accent mb-2">
                    {currentTrend?.name}
                  </h3>
                  <p className="text-white/90 text-sm">
                    Expected in {currentTrend?.timeframe} • Source: {currentTrend?.source}
                  </p>
                </div>
              </div>

              {/* Trend Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Description & Elements */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Trend Overview</h4>
                      <p className="text-muted-foreground">{currentTrend?.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Elements</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {currentTrend?.keyElements?.map((element, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2 p-2 bg-muted/50 rounded-lg"
                          >
                            <Icon name="Sparkles" size={14} color="var(--color-primary)" />
                            <span className="text-sm text-foreground">{element}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Cultural Impact</h4>
                      <p className="text-sm text-muted-foreground">{currentTrend?.culturalImpact}</p>
                    </div>
                  </div>

                  {/* How to Adopt */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">How to Adopt This Trend</h4>
                      <div className="bg-muted/30 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground whitespace-pre-line">
                          {currentTrend?.howToAdopt}
                        </p>
                      </div>
                    </div>

                    {/* Trend Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{currentTrend?.votes}</div>
                        <div className="text-sm text-muted-foreground">Community Votes</div>
                      </div>
                      <div className="text-center p-4 bg-accent/5 rounded-lg">
                        <div className="text-2xl font-bold text-accent">{currentTrend?.confidence}%</div>
                        <div className="text-sm text-muted-foreground">AI Confidence</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <Button variant="default" fullWidth iconName="ShoppingBag" iconPosition="left">
                        Shop Trend Products
                      </Button>
                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" iconName="Bookmark" iconPosition="left">
                          Save Trend
                        </Button>
                        <Button variant="outline" iconName="Share" iconPosition="left">
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Voting Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground font-accent mb-4">
                Help Shape Beauty's Future
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your votes help us identify which trends will truly take off. Join thousands of beauty enthusiasts in predicting the next big thing.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" iconName="Vote" iconPosition="left">
                Vote on All Trends
              </Button>
              <Button variant="outline" iconName="Plus" iconPosition="left">
                Submit Your Trend
              </Button>
              <Button variant="outline" iconName="BarChart" iconPosition="left">
                View Trend Analytics
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendForecasting;