import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InnovationSpotlight = () => {
  const [selectedInnovation, setSelectedInnovation] = useState(0);

  const innovations = [
    {
      id: 1,
      title: "Quantum Peptide Technology",
      category: "Ingredient Innovation",
      stage: "Research Phase",
      impact: "Revolutionary",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=300&fit=crop",
      description: "Breakthrough peptide delivery system that penetrates skin at the quantum level, delivering active ingredients 10x deeper than traditional methods.",
      keyBenefits: [
        "10x deeper penetration than traditional peptides",
        "Targets cellular repair at quantum level",
        "Visible results in 48 hours",
        "Compatible with all skin types"
      ],
      scientificBasis: `Quantum peptides utilize quantum tunneling effects to bypass traditional skin barriers.\n\nDeveloped in partnership with quantum physics researchers at MIT.\n\nClinical trials show 340% improvement in collagen synthesis.\n\nPatented nano-encapsulation technology protects peptides during delivery.`,
      timeline: "Expected in products by Q3 2025",
      applications: ["Anti-aging serums", "Repair treatments", "Preventive skincare", "Professional treatments"],
      expertQuote: {
        text: "This technology represents the biggest breakthrough in skincare delivery since retinol. We\'re literally changing how molecules interact with skin at the most fundamental level.",
        author: "Dr. Sarah Chen",
        title: "Lead Researcher, Beauty Glow Labs"
      },
      isBreakthrough: true
    },
    {
      id: 2,
      title: "Mood-Responsive Color Technology",
      category: "Smart Beauty",
      stage: "Beta Testing",
      impact: "Game-Changing",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop",
      description: "Revolutionary color-changing makeup that adapts to your emotional state through biometric sensors and micro-chemistry reactions.",
      keyBenefits: [
        "Real-time color adaptation to mood",
        "Biometric sensor integration",
        "24-hour color stability",
        "Hypoallergenic smart pigments"
      ],
      scientificBasis: `Smart pigments react to micro-changes in skin temperature and pH levels.\n\nIntegrated biosensors detect stress hormones through skin.\n\nAI algorithms translate biometric data into optimal color palettes.\n\nNano-encapsulated pigments ensure smooth color transitions.`,
      timeline: "Limited release Q1 2025",
      applications: ["Mood lipstick", "Adaptive foundation", "Emotional blush", "Smart nail polish"],
      expertQuote: {
        text: "We\'re not just creating makeup that changes color - we\'re creating makeup that understands you. It\'s the future of personalized beauty.",
        author: "Maria Rodriguez",
        title: "Innovation Director, Beauty Glow Tech"
      },
      isBreakthrough: false
    },
    {
      id: 3,
      title: "Microbiome Restoration Complex",
      category: "Biological Innovation",
      stage: "Clinical Trials",
      impact: "Revolutionary",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=300&fit=crop",
      description: "Advanced probiotic system that rebuilds and maintains optimal skin microbiome balance for long-term skin health and beauty.",
      keyBenefits: [
        "Restores natural skin microbiome",
        "Prevents future skin issues",
        "Strengthens skin barrier function",
        "Reduces inflammation by 70%"
      ],
      scientificBasis: `Contains 15 strains of beneficial bacteria specifically selected for skin health.\n\nPrebiotic complex feeds and maintains healthy bacteria populations.\n\nPostbiotic metabolites provide immediate skin benefits.\n\nClinically proven to restore microbiome diversity in 14 days.`,
      timeline: "Product launch Q2 2025",
      applications: ["Probiotic cleansers", "Microbiome serums", "Barrier repair creams", "Scalp treatments"],
      expertQuote: {
        text: "Understanding the skin microbiome is like discovering a new organ. This technology doesn't just treat symptoms - it addresses the root cause of skin health.",
        author: "Dr. James Park",
        title: "Microbiome Specialist, Beauty Glow Research"
      },
      isBreakthrough: true
    },
    {
      id: 4,
      title: "Neural Beauty Interface",
      category: "Tech Integration",
      stage: "Prototype",
      impact: "Futuristic",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
      description: "Brain-computer interface that reads neural patterns to automatically adjust makeup and skincare routines based on your subconscious preferences.",
      keyBenefits: [
        "Reads subconscious beauty preferences",
        "Automatic routine optimization",
        "Predictive beauty recommendations",
        "Seamless device integration"
      ],
      scientificBasis: `Non-invasive EEG sensors detect neural patterns related to aesthetic preferences.\n\nMachine learning algorithms interpret brainwave data.\n\nReal-time adjustment of smart beauty devices.\n\nPrivacy-first design with local data processing.`,
      timeline: "Concept testing 2026",
      applications: ["Smart mirrors", "Automated makeup devices", "Personalized formulations", "Beauty AI assistants"],
      expertQuote: {
        text: "We're moving beyond asking what you want to knowing what you need before you do. It's the ultimate personalization - your brain directly communicating with your beauty routine.",
        author: "Dr. Alex Kim",
        title: "Neurotechnology Lead, Beauty Glow Future Labs"
      },
      isBreakthrough: true
    }
  ];

  const currentInnovation = innovations?.[selectedInnovation];

  const getStageColor = (stage) => {
    switch (stage) {
      case 'Research Phase': return 'bg-muted text-muted-foreground';
      case 'Beta Testing': return 'bg-warning/10 text-warning';
      case 'Clinical Trials': return 'bg-primary/10 text-primary';
      case 'Prototype': return 'bg-accent/10 text-accent';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'Revolutionary': return 'text-error';
      case 'Game-Changing': return 'text-warning';
      case 'Futuristic': return 'text-primary';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Lightbulb" size={20} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Innovation Spotlight</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-accent mb-4">
            Breakthrough Beauty Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore cutting-edge innovations that will revolutionize how we think about beauty, from quantum-level skincare to AI-powered personalization.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Innovation List */}
          <div className="space-y-4">
            {innovations?.map((innovation, index) => (
              <div
                key={innovation?.id}
                onClick={() => setSelectedInnovation(index)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                  selectedInnovation === index
                    ? 'border-primary bg-primary/5 shadow-soft'
                    : 'border-border hover:border-primary/50 hover:bg-muted/50'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-foreground text-sm leading-tight">
                      {innovation?.title}
                    </h3>
                    {innovation?.isBreakthrough && (
                      <div className="w-2 h-2 bg-error rounded-full flex-shrink-0 mt-1"></div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-xs text-muted-foreground">{innovation?.category}</span>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full ${getStageColor(innovation?.stage)}`}>
                        {innovation?.stage}
                      </span>
                      <span className={`text-xs font-medium ${getImpactColor(innovation?.impact)}`}>
                        {innovation?.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Innovation Details */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              {/* Innovation Header */}
              <div className="relative h-64">
                <Image
                  src={currentInnovation?.image}
                  alt={currentInnovation?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${getStageColor(currentInnovation?.stage)}`}>
                      {currentInnovation?.stage}
                    </span>
                    <span className="px-3 py-1 bg-background/90 text-foreground text-sm rounded-full">
                      {currentInnovation?.category}
                    </span>
                    {currentInnovation?.isBreakthrough && (
                      <span className="px-3 py-1 bg-error/90 text-error-foreground text-sm rounded-full">
                        Breakthrough
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white font-accent mb-2">
                    {currentInnovation?.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    Impact Level: <span className={`font-medium ${getImpactColor(currentInnovation?.impact)}`}>
                      {currentInnovation?.impact}
                    </span>
                  </p>
                </div>
              </div>

              {/* Innovation Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Description & Benefits */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Innovation Overview</h4>
                      <p className="text-muted-foreground">{currentInnovation?.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {currentInnovation?.keyBenefits?.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Icon name="Check" size={16} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Timeline</h4>
                      <div className="flex items-center space-x-2 p-3 bg-primary/5 rounded-lg">
                        <Icon name="Calendar" size={16} color="var(--color-primary)" />
                        <span className="text-sm text-foreground font-medium">{currentInnovation?.timeline}</span>
                      </div>
                    </div>
                  </div>

                  {/* Scientific Basis & Applications */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Scientific Basis</h4>
                      <div className="bg-muted/30 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground whitespace-pre-line">
                          {currentInnovation?.scientificBasis}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Potential Applications</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {currentInnovation?.applications?.map((application, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2 p-2 bg-accent/5 rounded-lg"
                          >
                            <Icon name="Sparkles" size={14} color="var(--color-accent)" />
                            <span className="text-sm text-foreground">{application}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <Button variant="default" fullWidth iconName="Bell" iconPosition="left">
                        Get Launch Updates
                      </Button>
                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" iconName="BookOpen" iconPosition="left">
                          Learn More
                        </Button>
                        <Button variant="outline" iconName="Share" iconPosition="left">
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expert Quote */}
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <Icon name="Quote" size={24} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
                      <div>
                        <blockquote className="text-foreground font-medium mb-3">
                          "{currentInnovation?.expertQuote?.text}"
                        </blockquote>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <Icon name="User" size={16} color="white" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground text-sm">
                              {currentInnovation?.expertQuote?.author}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {currentInnovation?.expertQuote?.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Challenge CTA */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground font-accent mb-4">
                Have an Innovation Idea?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join our Innovation Challenge and help shape the future of beauty. Submit your breakthrough ideas and collaborate with our research team.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" iconName="Lightbulb" iconPosition="left">
                Submit Innovation Idea
              </Button>
              <Button variant="outline" iconName="Users" iconPosition="left">
                Join Innovation Community
              </Button>
              <Button variant="outline" iconName="FileText" iconPosition="left">
                View Research Papers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSpotlight;