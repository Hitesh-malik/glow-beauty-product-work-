import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const NewLaunches = () => {
  const [selectedLaunch, setSelectedLaunch] = useState(0);

  const launches = [
    {
      id: 1,
      name: "Quantum Glow Serum",
      brand: "Beauty Glow Labs",
      category: "Skincare",
      launchDate: "2025-01-15",
      status: "Coming Soon",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
      keyIngredients: ["Quantum Peptides", "Nano Hyaluronic Acid", "Bio-Retinol"],
      benefits: ["Instant hydration boost", "Reduces fine lines by 40%", "24-hour glow protection"],
      developmentStory: `Developed over 3 years in partnership with leading dermatologists, this revolutionary serum uses quantum-level molecular technology to deliver ingredients deeper than ever before.\n\nOur breakthrough nano-encapsulation process ensures maximum absorption while maintaining ingredient stability.`,
      expectedResults: "Visible improvement in skin texture and radiance within 7 days of consistent use.",
      price: "$89",
      isExclusive: true
    },
    {
      id: 2,
      name: "Chromatic Color Shift Foundation",
      brand: "Beauty Glow Pro",
      category: "Makeup",
      launchDate: "2025-02-01",
      status: "Beta Testing",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
      keyIngredients: ["Color-Adaptive Pigments", "Skin-Matching Technology", "SPF 30"],
      benefits: ["Adapts to skin tone changes", "16-hour wear", "Buildable coverage"],
      developmentStory: `Revolutionary color-shifting technology that adapts to your skin's natural undertones throughout the day.\n\nTested on over 1,000 skin tones to ensure perfect matching across all ethnicities and lighting conditions.`,
      expectedResults: "Perfect color match that evolves with your skin throughout the day.",
      price: "$65",
      isExclusive: false
    },
    {
      id: 3,
      name: "Probiotic Hair Revival System",
      brand: "Beauty Glow Wellness",
      category: "Haircare",
      launchDate: "2025-02-20",
      status: "In Development",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop",
      keyIngredients: ["Live Probiotics", "Scalp Microbiome Complex", "Growth Peptides"],
      benefits: ["Restores scalp health", "Increases hair density", "Reduces hair fall by 60%"],
      developmentStory: `First-of-its-kind probiotic system that treats hair loss at the root cause - scalp microbiome imbalance.\n\nDeveloped with trichologists and microbiome specialists to create a truly revolutionary approach to hair health.`,
      expectedResults: "Noticeable improvement in hair thickness and scalp health within 4 weeks.",
      price: "$120",
      isExclusive: true
    }
  ];

  const currentLaunch = launches?.[selectedLaunch];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Rocket" size={20} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">New Launches</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-accent mb-4">
            Revolutionary Beauty Innovations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be the first to discover breakthrough products that will define the future of beauty
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Product List */}
          <div className="space-y-4">
            {launches?.map((launch, index) => (
              <div
                key={launch?.id}
                onClick={() => setSelectedLaunch(index)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                  selectedLaunch === index
                    ? 'border-primary bg-primary/5 shadow-soft'
                    : 'border-border hover:border-primary/50 hover:bg-muted/50'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={launch?.image}
                      alt={launch?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-foreground text-sm truncate">
                        {launch?.name}
                      </h3>
                      {launch?.isExclusive && (
                        <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">
                          Exclusive
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{launch?.brand}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        launch?.status === 'Coming Soon' ? 'bg-warning/10 text-warning' :
                        launch?.status === 'Beta Testing'? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'
                      }`}>
                        {launch?.status}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(launch.launchDate)?.toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Details */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="space-y-4">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={currentLaunch?.image}
                      alt={currentLaunch?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-foreground">{currentLaunch?.price}</span>
                      {currentLaunch?.isExclusive && (
                        <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
                          Exclusive Access
                        </span>
                      )}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      currentLaunch?.status === 'Coming Soon' ? 'bg-warning/10 text-warning' :
                      currentLaunch?.status === 'Beta Testing'? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'
                    }`}>
                      {currentLaunch?.status}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-accent mb-2">
                      {currentLaunch?.name}
                    </h3>
                    <p className="text-muted-foreground">{currentLaunch?.brand} • {currentLaunch?.category}</p>
                  </div>

                  {/* Key Ingredients */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Ingredients</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentLaunch?.keyIngredients?.map((ingredient, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {currentLaunch?.benefits?.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Icon name="Check" size={16} color="var(--color-success)" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    {currentLaunch?.status === 'Beta Testing' ? (
                      <Button variant="default" fullWidth iconName="TestTube" iconPosition="left">
                        Join Beta Test
                      </Button>
                    ) : (
                      <Button variant="default" fullWidth iconName="Bell" iconPosition="left">
                        Get Launch Alert
                      </Button>
                    )}
                    <Button variant="outline" iconName="Heart" iconPosition="left">
                      Add to Wishlist
                    </Button>
                  </div>
                </div>
              </div>

              {/* Development Story */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">Development Story</h4>
                <p className="text-muted-foreground whitespace-pre-line mb-4">
                  {currentLaunch?.developmentStory}
                </p>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <Icon name="Target" size={16} color="var(--color-primary)" className="mt-0.5" />
                    <div>
                      <h5 className="font-medium text-foreground mb-1">Expected Results</h5>
                      <p className="text-sm text-muted-foreground">{currentLaunch?.expectedResults}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewLaunches;