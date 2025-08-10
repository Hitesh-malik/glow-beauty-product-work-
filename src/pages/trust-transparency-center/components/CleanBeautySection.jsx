import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CleanBeautySection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTerm, setSelectedTerm] = useState(null);

  const beautyTerms = [
    {
      id: 1,
      term: "Natural",
      category: "ingredient-claims",
      realityCheck: "Marketing Buzzword",
      explanation: `The term "natural" is not regulated by the FDA and can be misleading. A product labeled as "natural" may contain only 1% natural ingredients while the rest are synthetic.`,
      whatToLookFor: [
        "Percentage of natural ingredients listed",
        "Specific natural ingredient names",
        "Third-party natural certifications",
        "Complete ingredient transparency"
      ],
      redFlags: [
        "No percentage specified",
        "Vague ingredient lists",
        "No certification backing",
        "Hidden synthetic preservatives"
      ],
      betterAlternatives: ["Certified Organic", "EWG Verified", "COSMOS Natural"]
    },
    {
      id: 2,
      term: "Chemical-Free",
      category: "ingredient-claims",
      realityCheck: "Scientifically Impossible",
      explanation: `Everything is made of chemicals, including water (H2O). This term is scientifically meaningless and often used to create fear around safe, well-tested ingredients.`,
      whatToLookFor: [
        "Specific ingredient safety data",
        "Concentration levels disclosed",
        "Clinical testing results",
        "Dermatologist recommendations"
      ],
      redFlags: [
        "Fear-based marketing language",
        "No scientific backing",
        "Demonizing safe ingredients",
        "Lack of ingredient education"
      ],
      betterAlternatives: ["Non-toxic", "Dermatologist-tested", "Clinically proven safe"]
    },
    {
      id: 3,
      term: "Hypoallergenic",
      category: "safety-claims",
      realityCheck: "Unregulated Term",
      explanation: `"Hypoallergenic" has no legal definition and doesn't guarantee a product won't cause allergic reactions. It simply suggests the product is less likely to cause allergies.`,
      whatToLookFor: [
        "Patch testing results",
        "Common allergen-free formulations",
        "Dermatologist testing documentation",
        "Specific allergen exclusion lists"
      ],
      redFlags: [
        "No testing documentation",
        "Contains known allergens",
        "No ingredient transparency",
        "Unrealistic safety promises"
      ],
      betterAlternatives: ["Dermatologist-tested", "Patch-tested", "Allergen-free certified"]
    },
    {
      id: 4,
      term: "Clinically Proven",
      category: "efficacy-claims",
      realityCheck: "Requires Verification",
      explanation: `While this can be legitimate, many brands use small, biased studies or test only one ingredient rather than the final product. Always ask for study details.`,
      whatToLookFor: [
        "Published peer-reviewed studies",
        "Independent third-party testing",
        "Adequate sample sizes (50+ participants)",
        "Placebo-controlled studies"
      ],
      redFlags: [
        "Unpublished internal studies",
        "Very small sample sizes",
        "No control groups",
        "Vague testing claims"
      ],
      betterAlternatives: ["Peer-reviewed studies", "Independent lab tested", "FDA-approved claims"]
    },
    {
      id: 5,
      term: "Paraben-Free",
      category: "ingredient-claims",
      realityCheck: "May Not Be Better",
      explanation: `Parabens are well-studied, effective preservatives. Some paraben alternatives may be less tested or more irritating. The absence of parabens doesn't automatically make a product safer.`,
      whatToLookFor: [
        "Alternative preservative safety data",
        "Product stability testing",
        "Shelf life information",
        "Microbial safety testing"
      ],
      redFlags: [
        "No preservative system disclosed",
        "Unrealistic shelf life claims",
        "Fear-mongering about parabens",
        "No alternative safety data"
      ],
      betterAlternatives: ["Preservative-system transparency", "Stability-tested", "Microbial-safe"]
    },
    {
      id: 6,
      term: "Dermatologist Recommended",
      category: "endorsement-claims",
      realityCheck: "Verify the Source",
      explanation: `This could mean one dermatologist recommended it, or it could be based on a survey. The credibility depends on the specific dermatologists and the nature of their recommendation.`,
      whatToLookFor: [
        "Named dermatologist endorsements",
        "Professional organization backing",
        "Clinical study involvement",
        "Specific recommendation context"
      ],
      redFlags: [
        "Anonymous recommendations",
        "Paid endorsements not disclosed",
        "No specific credentials mentioned",
        "Vague recommendation claims"
      ],
      betterAlternatives: ["Board-certified dermatologist tested", "Medical professional approved", "Clinical study backed"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Terms', count: beautyTerms?.length },
    { id: 'ingredient-claims', name: 'Ingredient Claims', count: beautyTerms?.filter(t => t?.category === 'ingredient-claims')?.length },
    { id: 'safety-claims', name: 'Safety Claims', count: beautyTerms?.filter(t => t?.category === 'safety-claims')?.length },
    { id: 'efficacy-claims', name: 'Efficacy Claims', count: beautyTerms?.filter(t => t?.category === 'efficacy-claims')?.length },
    { id: 'endorsement-claims', name: 'Endorsement Claims', count: beautyTerms?.filter(t => t?.category === 'endorsement-claims')?.length }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTerms = beautyTerms?.filter(term => {
    const matchesCategory = selectedCategory === 'all' || term?.category === selectedCategory;
    const matchesSearch = term?.term?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         term?.explanation?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getRealityColor = (realityCheck) => {
    switch (realityCheck) {
      case 'Marketing Buzzword':
        return 'text-warning';
      case 'Scientifically Impossible':
        return 'text-error';
      case 'Unregulated Term':
        return 'text-accent';
      case 'Requires Verification':
        return 'text-primary';
      case 'May Not Be Better':
        return 'text-muted-foreground';
      default:
        return 'text-foreground';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Clean Beauty Decoded</h3>
        <p className="text-muted-foreground">
          Navigate beauty marketing with confidence. We decode common terms, separate facts from fiction, and help you make informed decisions beyond the buzzwords.
        </p>
      </div>
      {/* Search and Filter */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-6">
          <div className="w-full lg:w-80">
            <Input
              type="search"
              placeholder="Search beauty terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="w-full"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
              }`}
            >
              <span>{category?.name}</span>
              <span className="text-xs opacity-70">({category?.count})</span>
            </button>
          ))}
        </div>
      </div>
      {/* Terms List */}
      <div className="space-y-4">
        {filteredTerms?.map((term) => (
          <div key={term?.id} className="bg-card rounded-xl border border-border overflow-hidden breathing-card">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h4 className="text-xl font-semibold text-foreground">"{term?.term}"</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRealityColor(term?.realityCheck)} bg-current/10`}>
                      {term?.realityCheck}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{term?.explanation}</p>
                </div>
                <Button
                  variant={selectedTerm === term?.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTerm(selectedTerm === term?.id ? null : term?.id)}
                  iconName={selectedTerm === term?.id ? "ChevronUp" : "ChevronDown"}
                  iconPosition="right"
                >
                  {selectedTerm === term?.id ? "Hide Details" : "Learn More"}
                </Button>
              </div>

              {/* Expanded Details */}
              {selectedTerm === term?.id && (
                <div className="pt-6 border-t border-border">
                  <div className="grid lg:grid-cols-2 gap-6 mb-6">
                    {/* What to Look For */}
                    <div>
                      <h5 className="flex items-center space-x-2 font-medium text-foreground mb-3">
                        <Icon name="CheckCircle" size={16} className="text-success" />
                        <span>What to Look For Instead</span>
                      </h5>
                      <div className="space-y-2">
                        {term?.whatToLookFor?.map((item, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Icon name="Check" size={14} className="text-success mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Red Flags */}
                    <div>
                      <h5 className="flex items-center space-x-2 font-medium text-foreground mb-3">
                        <Icon name="AlertTriangle" size={16} className="text-error" />
                        <span>Red Flags to Avoid</span>
                      </h5>
                      <div className="space-y-2">
                        {term?.redFlags?.map((flag, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Icon name="X" size={14} className="text-error mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{flag}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Better Alternatives */}
                  <div className="bg-success/5 rounded-lg p-4">
                    <h5 className="flex items-center space-x-2 font-medium text-foreground mb-3">
                      <Icon name="Lightbulb" size={16} className="text-success" />
                      <span>Better Alternatives to Look For</span>
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {term?.betterAlternatives?.map((alternative, index) => (
                        <span key={index} className="px-3 py-1 bg-success/10 text-success text-sm rounded-full">
                          {alternative}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* No Results */}
      {filteredTerms?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No terms found</h3>
          <p className="text-muted-foreground mb-4">Try adjusting your search or browse all terms</p>
          <Button variant="outline" onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
            Clear Filters
          </Button>
        </div>
      )}
      {/* Educational Footer */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-border">
        <div className="text-center max-w-3xl mx-auto">
          <Icon name="BookOpen" size={48} className="mx-auto text-primary mb-4" />
          <h4 className="text-xl font-semibold text-foreground mb-4">Become a Savvy Beauty Consumer</h4>
          <p className="text-muted-foreground mb-6">
            Knowledge is power when it comes to beauty products. Understanding marketing terms helps you make informed decisions based on science, not hype.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Search" size={20} className="text-primary" />
              </div>
              <h5 className="font-medium text-foreground mb-2">Research Claims</h5>
              <p className="text-sm text-muted-foreground">Always verify marketing claims with independent sources</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="FileText" size={20} className="text-accent" />
              </div>
              <h5 className="font-medium text-foreground mb-2">Read Ingredients</h5>
              <p className="text-sm text-muted-foreground">Focus on actual ingredients rather than marketing terms</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Award" size={20} className="text-success" />
              </div>
              <h5 className="font-medium text-foreground mb-2">Trust Certifications</h5>
              <p className="text-sm text-muted-foreground">Look for legitimate third-party certifications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleanBeautySection;