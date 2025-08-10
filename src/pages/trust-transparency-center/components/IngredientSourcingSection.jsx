import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const IngredientSourcingSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const suppliers = [
    {
      id: 1,
      name: "Organic Botanicals Co.",
      location: "Provence, France",
      specialties: ["Lavender", "Rose", "Chamomile"],
      certifications: ["Organic", "Fair Trade", "Sustainable"],
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
      description: `Family-owned farm specializing in organic botanical extracts for over 50 years. Located in the heart of Provence, they maintain traditional cultivation methods while implementing modern sustainable practices.`,
      keyIngredients: [
        {
          name: "Lavender Essential Oil",
          purity: "99.8%",
          processing: "Steam distillation within 24 hours of harvest",
          benefits: "Calming, anti-inflammatory, antimicrobial"
        },
        {
          name: "Rose Hip Oil",
          purity: "100% Pure",
          processing: "Cold-pressed extraction",
          benefits: "Vitamin C, anti-aging, skin regeneration"
        }
      ]
    },
    {
      id: 2,
      name: "Himalayan Herb Collective",
      location: "Nepal & Tibet",
      specialties: ["Sea Buckthorn", "Goji Berry", "Cordyceps"],
      certifications: ["Wild Harvested", "Fair Trade", "Community Supported"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: `Community-based collective working with local harvesters in the Himalayan region. Supports over 200 families while preserving traditional harvesting methods and protecting biodiversity.`,
      keyIngredients: [
        {
          name: "Sea Buckthorn Oil",
          purity: "99.5%",
          processing: "CO2 extraction at low temperatures",
          benefits: "Omega fatty acids, vitamin E, skin barrier repair"
        }
      ]
    },
    {
      id: 3,
      name: "Australian Marine Extracts",
      location: "Great Barrier Reef, Australia",
      specialties: ["Marine Collagen", "Algae", "Sea Minerals"],
      certifications: ["Marine Stewardship", "Sustainable Harvesting", "Reef Safe"],
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
      description: `Leading marine biotechnology company focused on sustainable ocean-derived ingredients. Partners with marine conservation organizations to ensure reef protection and regeneration.`,
      keyIngredients: [
        {
          name: "Marine Collagen Peptides",
          purity: "98.2%",
          processing: "Enzymatic hydrolysis, low-temperature drying",
          benefits: "Skin elasticity, hydration, anti-aging"
        }
      ]
    }
  ];

  const filteredSuppliers = suppliers?.filter(supplier =>
    supplier?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
    supplier?.specialties?.some(specialty => 
      specialty?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    )
  );

  return (
    <div className="space-y-8">
      {/* Search and Filter */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Ingredient Sourcing</h3>
            <p className="text-muted-foreground">Discover where our ingredients come from and how they're processed</p>
          </div>
          <div className="w-full lg:w-80">
            <Input
              type="search"
              placeholder="Search ingredients or suppliers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="w-full"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Verified Suppliers</div>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-accent mb-1">85%</div>
            <div className="text-sm text-muted-foreground">Organic Sources</div>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-success mb-1">40+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-warning mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Traceable</div>
          </div>
        </div>
      </div>
      {/* Supplier Showcase */}
      <div className="grid gap-6">
        {filteredSuppliers?.map((supplier) => (
          <div key={supplier?.id} className="bg-card rounded-xl border border-border overflow-hidden breathing-card">
            <div className="lg:flex">
              {/* Image */}
              <div className="lg:w-1/3 h-64 lg:h-auto overflow-hidden">
                <Image
                  src={supplier?.image}
                  alt={supplier?.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="lg:w-2/3 p-6">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{supplier?.name}</h4>
                    <div className="flex items-center space-x-2 text-muted-foreground mb-3">
                      <Icon name="MapPin" size={16} />
                      <span>{supplier?.location}</span>
                    </div>
                  </div>
                  <Button
                    variant={selectedSupplier === supplier?.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSupplier(selectedSupplier === supplier?.id ? null : supplier?.id)}
                    iconName={selectedSupplier === supplier?.id ? "ChevronUp" : "ChevronDown"}
                    iconPosition="right"
                  >
                    {selectedSupplier === supplier?.id ? "Hide Details" : "View Details"}
                  </Button>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-foreground mb-2">Specialties:</h5>
                  <div className="flex flex-wrap gap-2">
                    {supplier?.specialties?.map((specialty, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-foreground mb-2">Certifications:</h5>
                  <div className="flex flex-wrap gap-2">
                    {supplier?.certifications?.map((cert, index) => (
                      <span key={index} className="flex items-center space-x-1 px-3 py-1 bg-success/10 text-success text-sm rounded-full">
                        <Icon name="Award" size={12} />
                        <span>{cert}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm">{supplier?.description}</p>

                {/* Expanded Details */}
                {selectedSupplier === supplier?.id && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h5 className="text-lg font-medium text-foreground mb-4">Key Ingredients</h5>
                    <div className="space-y-4">
                      {supplier?.keyIngredients?.map((ingredient, index) => (
                        <div key={index} className="bg-muted rounded-lg p-4">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-3">
                            <h6 className="font-medium text-foreground">{ingredient?.name}</h6>
                            <span className="text-sm text-success font-medium">Purity: {ingredient?.purity}</span>
                          </div>
                          <div className="grid lg:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-foreground">Processing: </span>
                              <span className="text-muted-foreground">{ingredient?.processing}</span>
                            </div>
                            <div>
                              <span className="font-medium text-foreground">Benefits: </span>
                              <span className="text-muted-foreground">{ingredient?.benefits}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* No Results */}
      {filteredSuppliers?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No suppliers found</h3>
          <p className="text-muted-foreground">Try adjusting your search terms or browse all suppliers</p>
          <Button variant="outline" onClick={() => setSearchTerm('')} className="mt-4">
            Clear Search
          </Button>
        </div>
      )}
    </div>
  );
};

export default IngredientSourcingSection;