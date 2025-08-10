import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';


const SustainabilitySection = () => {
  const [activeInitiative, setActiveInitiative] = useState('carbon-neutral');

  const sustainabilityMetrics = [
    {
      title: "Carbon Footprint Reduction",
      value: "75%",
      description: "Reduced since 2020",
      icon: "Leaf",
      color: "text-success"
    },
    {
      title: "Renewable Energy Usage",
      value: "100%",
      description: "All facilities powered by renewable energy",
      icon: "Zap",
      color: "text-warning"
    },
    {
      title: "Waste Reduction",
      value: "90%",
      description: "Packaging waste eliminated",
      icon: "Recycle",
      color: "text-primary"
    },
    {
      title: "Water Conservation",
      value: "60%",
      description: "Water usage reduced in production",
      icon: "Droplets",
      color: "text-accent"
    }
  ];

  const initiatives = [
    {
      id: 'carbon-neutral',
      title: 'Carbon Neutral Operations',
      description: 'Achieving net-zero carbon emissions across all operations by 2025',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
      details: [
        'Renewable energy transition completed in 2023',
        'Carbon offset programs for shipping and logistics',
        'Sustainable packaging materials sourced locally',
        'Employee carbon footprint reduction programs'
      ],
      impact: 'Eliminated 2,500 tons of CO2 emissions annually'
    },
    {
      id: 'zero-waste',
      title: 'Zero Waste Manufacturing',
      description: 'Eliminating waste through circular economy principles',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop',
      details: [
        'Closed-loop production systems implemented',
        'Byproduct upcycling into new product lines',
        'Compostable packaging materials only',
        'Partnership with local recycling facilities'
      ],
      impact: 'Diverted 95% of production waste from landfills'
    },
    {
      id: 'ethical-sourcing',
      title: 'Ethical Sourcing Program',
      description: 'Fair trade practices and community support initiatives',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
      details: [
        'Direct partnerships with farming communities',
        'Fair wage guarantees for all suppliers',
        'Educational programs for sustainable farming',
        'Community development fund contributions'
      ],
      impact: 'Supporting 1,200+ farming families globally'
    },
    {
      id: 'ocean-protection',
      title: 'Ocean Protection Initiative',
      description: 'Marine conservation and reef-safe formulations',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop',
      details: [
        'Reef-safe sunscreen formulations only',
        'Microplastic-free product development',
        'Ocean cleanup partnership programs',
        'Marine biodiversity research funding'
      ],
      impact: 'Protected 50,000 square meters of coral reef'
    }
  ];

  const certifications = [
    {
      name: "B Corporation Certified",
      description: "Verified social and environmental performance",
      icon: "Award",
      year: "2023"
    },
    {
      name: "Carbon Trust Standard",
      description: "Certified carbon footprint reduction",
      icon: "Leaf",
      year: "2023"
    },
    {
      name: "Cradle to Cradle Certified",
      description: "Circular economy product design",
      icon: "Recycle",
      year: "2022"
    },
    {
      name: "Fair Trade Certified",
      description: "Ethical sourcing and fair wages",
      icon: "Handshake",
      year: "2021"
    }
  ];

  const currentInitiative = initiatives?.find(init => init?.id === activeInitiative);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Sustainability Practices</h3>
        <p className="text-muted-foreground">
          Our commitment to environmental stewardship goes beyond compliance. We're building a regenerative business model that gives back more than it takes.
        </p>
      </div>
      {/* Sustainability Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {sustainabilityMetrics?.map((metric, index) => (
          <div key={index} className="bg-card rounded-xl p-6 border border-border text-center breathing-card">
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4 ${metric?.color}`}>
              <Icon name={metric?.icon} size={24} />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{metric?.value}</div>
            <div className="text-sm font-medium text-foreground mb-1">{metric?.title}</div>
            <div className="text-xs text-muted-foreground">{metric?.description}</div>
          </div>
        ))}
      </div>
      {/* Initiative Selector */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h4 className="text-xl font-semibold text-foreground mb-6">Sustainability Initiatives</h4>
        
        {/* Initiative Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
          {initiatives?.map((initiative) => (
            <button
              key={initiative?.id}
              onClick={() => setActiveInitiative(initiative?.id)}
              className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeInitiative === initiative?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
              }`}
            >
              {initiative?.title}
            </button>
          ))}
        </div>

        {/* Active Initiative Details */}
        {currentInitiative && (
          <div className="lg:flex gap-8">
            {/* Image */}
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <div className="aspect-video rounded-lg overflow-hidden">
                <Image
                  src={currentInitiative?.image}
                  alt={currentInitiative?.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2">
              <h5 className="text-xl font-semibold text-foreground mb-3">{currentInitiative?.title}</h5>
              <p className="text-muted-foreground mb-6">{currentInitiative?.description}</p>

              {/* Details List */}
              <div className="space-y-3 mb-6">
                {currentInitiative?.details?.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Impact */}
              <div className="bg-success/10 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="TrendingUp" size={16} className="text-success" />
                  <span className="text-sm font-medium text-success">Impact Achievement</span>
                </div>
                <p className="text-sm text-foreground">{currentInitiative?.impact}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Certifications */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h4 className="text-xl font-semibold text-foreground mb-6">Environmental Certifications</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certifications?.map((cert, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-muted rounded-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                <Icon name={cert?.icon} size={20} className="text-success" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-foreground">{cert?.name}</h5>
                  <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded">
                    {cert?.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{cert?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Future Goals */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-border">
        <div className="text-center max-w-2xl mx-auto">
          <Icon name="Target" size={48} className="mx-auto text-primary mb-4" />
          <h4 className="text-xl font-semibold text-foreground mb-4">2025 Sustainability Goals</h4>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">Net Zero</div>
              <div className="text-sm text-muted-foreground">Carbon emissions across entire supply chain</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Regenerative packaging materials</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success mb-2">$1M</div>
              <div className="text-sm text-muted-foreground">Community development fund</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilitySection;