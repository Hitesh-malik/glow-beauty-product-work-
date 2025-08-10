import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CertificationsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCertification, setSelectedCertification] = useState(null);

  const categories = [
    { id: 'all', name: 'All Certifications', count: 25 },
    { id: 'organic', name: 'Organic', count: 8 },
    { id: 'cruelty-free', name: 'Cruelty-Free', count: 5 },
    { id: 'environmental', name: 'Environmental', count: 7 },
    { id: 'quality', name: 'Quality & Safety', count: 5 }
  ];

  const certifications = [
    {
      id: 1,
      name: "USDA Organic",
      category: "organic",
      certifyingBody: "United States Department of Agriculture",
      validUntil: "December 2025",
      description: "Certified organic ingredients and production processes meeting strict USDA standards for organic agriculture and handling.",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop",
      benefits: [
        "No synthetic pesticides or fertilizers",
        "Non-GMO ingredients guaranteed",
        "Sustainable farming practices",
        "Regular third-party inspections"
      ],
      products: ["Organic Face Serums", "Natural Cleansers", "Botanical Moisturizers"],
      verificationUrl: "#"
    },
    {
      id: 2,
      name: "Leaping Bunny Certified",
      category: "cruelty-free",
      certifyingBody: "Cruelty Free International",
      validUntil: "March 2026",
      description: "The gold standard for cruelty-free certification, ensuring no animal testing at any stage of product development.",
      logo: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=200&h=200&fit=crop",
      benefits: [
        "No animal testing on finished products",
        "No animal testing on ingredients",
        "No third-party animal testing",
        "Ongoing monitoring and verification"
      ],
      products: ["All Beauty Glow Products"],
      verificationUrl: "#"
    },
    {
      id: 3,
      name: "EWG Verified",
      category: "quality",
      certifyingBody: "Environmental Working Group",
      validUntil: "June 2025",
      description: "Products meet EWG's strictest standards for ingredient transparency, safety, and environmental impact.",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop",
      benefits: [
        "Full ingredient transparency",
        "No ingredients of concern",
        "Manufacturing transparency",
        "Ongoing product monitoring"
      ],
      products: ["Sensitive Skin Line", "Baby & Kids Products", "Daily Essentials"],
      verificationUrl: "#"
    },
    {
      id: 4,
      name: "Carbon Trust Standard",
      category: "environmental",
      certifyingBody: "Carbon Trust",
      validUntil: "September 2025",
      description: "Certified carbon footprint measurement and reduction across our entire supply chain and operations.",
      logo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop",
      benefits: [
        "Verified carbon footprint reduction",
        "Supply chain transparency",
        "Renewable energy usage",
        "Continuous improvement commitment"
      ],
      products: ["All Product Lines"],
      verificationUrl: "#"
    },
    {
      id: 5,
      name: "Fair Trade Certified",
      category: "organic",
      certifyingBody: "Fair Trade USA",
      validUntil: "November 2025",
      description: "Ensures fair wages and working conditions for farmers and workers in our ingredient supply chain.",
      logo: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=200&fit=crop",
      benefits: [
        "Fair wages for farmers",
        "Safe working conditions",
        "Community development funds",
        "Environmental protection"
      ],
      products: ["Botanical Extracts", "Essential Oils", "Natural Butters"],
      verificationUrl: "#"
    },
    {
      id: 6,
      name: "B Corporation Certified",
      category: "environmental",
      certifyingBody: "B Lab",
      validUntil: "January 2026",
      description: "Meets rigorous standards of social and environmental performance, accountability, and transparency.",
      logo: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=200&h=200&fit=crop",
      benefits: [
        "Verified social impact",
        "Environmental responsibility",
        "Stakeholder governance",
        "Public transparency"
      ],
      products: ["Company-wide Certification"],
      verificationUrl: "#"
    }
  ];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications?.filter(cert => cert?.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Third-Party Certifications</h3>
        <p className="text-muted-foreground">
          Independent verification of our claims through rigorous third-party certifications and ongoing compliance monitoring.
        </p>
      </div>
      {/* Category Filter */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex flex-wrap gap-2 justify-center">
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
      {/* Certifications Grid */}
      <div className="grid gap-6">
        {filteredCertifications?.map((cert) => (
          <div key={cert?.id} className="bg-card rounded-xl border border-border overflow-hidden breathing-card">
            <div className="lg:flex">
              {/* Logo */}
              <div className="lg:w-1/4 p-6 bg-muted flex items-center justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <Image
                    src={cert?.logo}
                    alt={cert?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-3/4 p-6">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{cert?.name}</h4>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Icon name="Building" size={14} />
                        <span>{cert?.certifyingBody}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Calendar" size={14} />
                        <span>Valid until {cert?.validUntil}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="ExternalLink"
                      iconPosition="right"
                    >
                      Verify
                    </Button>
                    <Button
                      variant={selectedCertification === cert?.id ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedCertification(selectedCertification === cert?.id ? null : cert?.id)}
                      iconName={selectedCertification === cert?.id ? "ChevronUp" : "ChevronDown"}
                      iconPosition="right"
                    >
                      Details
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{cert?.description}</p>

                {/* Quick Benefits */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert?.benefits?.slice(0, 2)?.map((benefit, index) => (
                    <span key={index} className="px-3 py-1 bg-success/10 text-success text-sm rounded-full">
                      {benefit}
                    </span>
                  ))}
                  {cert?.benefits?.length > 2 && (
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                      +{cert?.benefits?.length - 2} more
                    </span>
                  )}
                </div>

                {/* Expanded Details */}
                {selectedCertification === cert?.id && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="grid lg:grid-cols-2 gap-6">
                      {/* All Benefits */}
                      <div>
                        <h5 className="font-medium text-foreground mb-3">Certification Benefits</h5>
                        <div className="space-y-2">
                          {cert?.benefits?.map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applicable Products */}
                      <div>
                        <h5 className="font-medium text-foreground mb-3">Applicable Products</h5>
                        <div className="space-y-2">
                          {cert?.products?.map((product, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Icon name="Package" size={16} className="text-primary" />
                              <span className="text-sm text-muted-foreground">{product}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Verification Link */}
                    <div className="mt-6 p-4 bg-muted rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h6 className="font-medium text-foreground mb-1">Independent Verification</h6>
                          <p className="text-sm text-muted-foreground">
                            Verify this certification directly with {cert?.certifyingBody}
                          </p>
                        </div>
                        <Button variant="outline" size="sm" iconName="ExternalLink" iconPosition="right">
                          Verify Now
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Certification Process */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-border">
        <div className="text-center max-w-3xl mx-auto">
          <Icon name="Award" size={48} className="mx-auto text-primary mb-4" />
          <h4 className="text-xl font-semibold text-foreground mb-4">Our Certification Process</h4>
          <p className="text-muted-foreground mb-6">
            We undergo rigorous third-party audits and continuous monitoring to maintain our certifications. 
            Each certification requires annual renewals and ongoing compliance verification.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Search" size={20} className="text-primary" />
              </div>
              <h5 className="font-medium text-foreground mb-2">Initial Audit</h5>
              <p className="text-sm text-muted-foreground">Comprehensive review of practices and documentation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="CheckCircle" size={20} className="text-accent" />
              </div>
              <h5 className="font-medium text-foreground mb-2">Certification</h5>
              <p className="text-sm text-muted-foreground">Official certification granted after meeting all standards</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="RefreshCw" size={20} className="text-success" />
              </div>
              <h5 className="font-medium text-foreground mb-2">Ongoing Monitoring</h5>
              <p className="text-sm text-muted-foreground">Regular audits and compliance checks to maintain certification</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;