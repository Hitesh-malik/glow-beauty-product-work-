import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PrivacySection = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [privacySettings, setPrivacySettings] = useState({
    dataCollection: true,
    marketing: false,
    analytics: true,
    thirdParty: false,
    location: false
  });

  const privacySections = [
    {
      id: 'data-collection',
      title: 'What Data We Collect',
      icon: 'Database',
      summary: 'Information we gather to provide and improve our services',
      details: {
        personal: [
          'Name and contact information',
          'Account credentials and preferences',
          'Purchase history and order details',
          'Beauty profile and skin concerns',
          'Product reviews and ratings'
        ],
        technical: [
          'Device information and browser type',
          'IP address and location data',
          'Website usage and navigation patterns',
          'Cookie and tracking data',
          'Performance and error logs'
        ],
        optional: [
          'Social media profile information',
          'Photos for virtual try-on features',
          'Survey responses and feedback',
          'Community forum participation',
          'Referral program activity'
        ]
      }
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Data',
      icon: 'Settings',
      summary: 'The purposes for which we process your information',
      details: {
        service: [
          'Process orders and manage your account',
          'Provide personalized product recommendations',
          'Enable virtual try-on and beauty tools',
          'Respond to customer service inquiries',
          'Send order confirmations and updates'
        ],
        improvement: [
          'Analyze website performance and usage',
          'Develop new features and services',
          'Conduct research and analytics',
          'Test and optimize user experience',
          'Prevent fraud and ensure security'
        ],
        communication: [
          'Send promotional emails (with consent)',
          'Share beauty tips and educational content',
          'Notify about new products and sales',
          'Conduct surveys and gather feedback',
          'Provide customer support'
        ]
      }
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing & Third Parties',
      icon: 'Share',
      summary: 'When and with whom we share your information',
      details: {
        never: [
          'Sell your personal data to third parties',
          'Share sensitive information without consent',
          'Provide data to unauthorized parties',
          'Use data for purposes not disclosed',
          'Share more data than necessary'
        ],
        partners: [
          'Payment processors for transaction security',
          'Shipping companies for order fulfillment',
          'Email service providers for communications',
          'Analytics services for website improvement',
          'Customer service platforms for support'
        ],
        legal: [
          'Comply with legal obligations',
          'Respond to valid legal requests',
          'Protect our rights and property',
          'Ensure user safety and security',
          'Prevent fraud and abuse'
        ]
      }
    },
    {
      id: 'user-rights',
      title: 'Your Privacy Rights',
      icon: 'Shield',
      summary: 'Control over your personal information',
      details: {
        access: [
          'View all data we have about you',
          'Download your data in portable format',
          'Understand how your data is processed',
          'Get copies of your information',
          'Review data accuracy and completeness'
        ],
        control: [
          'Update or correct your information',
          'Delete your account and data',
          'Opt out of marketing communications',
          'Restrict certain data processing',
          'Object to automated decision-making'
        ],
        portability: [
          'Export your data to another service',
          'Transfer account information',
          'Receive data in machine-readable format',
          'Move your beauty profile elsewhere',
          'Maintain data continuity'
        ]
      }
    }
  ];

  const privacyControls = [
    {
      id: 'dataCollection',
      title: 'Essential Data Collection',
      description: 'Required for basic website functionality and order processing',
      required: true
    },
    {
      id: 'marketing',
      title: 'Marketing Communications',
      description: 'Receive promotional emails, beauty tips, and product recommendations',
      required: false
    },
    {
      id: 'analytics',
      title: 'Analytics & Performance',
      description: 'Help us improve website performance and user experience',
      required: false
    },
    {
      id: 'thirdParty',
      title: 'Third-Party Integrations',
      description: 'Enable social media features and enhanced functionality',
      required: false
    },
    {
      id: 'location',
      title: 'Location Services',
      description: 'Provide location-based recommendations and store finder',
      required: false
    }
  ];

  const handlePrivacyToggle = (setting) => {
    setPrivacySettings(prev => ({
      ...prev,
      [setting]: !prev?.[setting]
    }));
  };

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Data Privacy & User Rights</h3>
        <p className="text-muted-foreground">
          Your privacy matters to us. We believe in complete transparency about how we collect, use, and protect your personal information. You have full control over your data.
        </p>
      </div>
      {/* Privacy Controls */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h4 className="text-xl font-semibold text-foreground mb-6">Privacy Settings</h4>
        <div className="space-y-4">
          {privacyControls?.map((control) => (
            <div key={control?.id} className="flex items-start justify-between p-4 bg-muted rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h5 className="font-medium text-foreground">{control?.title}</h5>
                  {control?.required && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Required</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{control?.description}</p>
              </div>
              <div className="ml-4">
                {control?.required ? (
                  <div className="w-12 h-6 bg-primary rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                ) : (
                  <button
                    onClick={() => handlePrivacyToggle(control?.id)}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                      privacySettings?.[control?.id] 
                        ? 'bg-primary justify-end' 
                        : 'bg-muted-foreground justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Button variant="default">Save Privacy Settings</Button>
        </div>
      </div>
      {/* Privacy Information Sections */}
      <div className="space-y-4">
        {privacySections?.map((section) => (
          <div key={section?.id} className="bg-card rounded-xl border border-border overflow-hidden">
            <button
              onClick={() => toggleSection(section?.id)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={section?.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">{section?.title}</h4>
                  <p className="text-sm text-muted-foreground">{section?.summary}</p>
                </div>
              </div>
              <Icon 
                name={expandedSection === section?.id ? "ChevronUp" : "ChevronDown"} 
                size={20} 
                className="text-muted-foreground" 
              />
            </button>

            {expandedSection === section?.id && (
              <div className="px-6 pb-6 border-t border-border">
                <div className="pt-6 space-y-6">
                  {Object.entries(section?.details)?.map(([category, items]) => (
                    <div key={category}>
                      <h5 className="font-medium text-foreground mb-3 capitalize">
                        {category === 'never' && 'We Never:'}
                        {category === 'personal' && 'Personal Information:'}
                        {category === 'technical' && 'Technical Information:'}
                        {category === 'optional' && 'Optional Information:'}
                        {category === 'service' && 'Service Delivery:'}
                        {category === 'improvement' && 'Service Improvement:'}
                        {category === 'communication' && 'Communication:'}
                        {category === 'partners' && 'Trusted Partners:'}
                        {category === 'legal' && 'Legal Requirements:'}
                        {category === 'access' && 'Access Rights:'}
                        {category === 'control' && 'Control Rights:'}
                        {category === 'portability' && 'Data Portability:'}
                      </h5>
                      <div className="space-y-2">
                        {items?.map((item, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Icon 
                              name={category === 'never' ? "X" : "Check"} 
                              size={14} 
                              className={`mt-1 flex-shrink-0 ${
                                category === 'never' ? 'text-error' : 'text-success'
                              }`} 
                            />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Data Request Actions */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h4 className="text-xl font-semibold text-foreground mb-6">Exercise Your Rights</h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
            <Icon name="Download" size={24} className="text-primary" />
            <div className="text-center">
              <div className="font-medium">Download My Data</div>
              <div className="text-xs text-muted-foreground">Get a copy of all your information</div>
            </div>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
            <Icon name="Edit" size={24} className="text-accent" />
            <div className="text-center">
              <div className="font-medium">Update Information</div>
              <div className="text-xs text-muted-foreground">Correct or modify your data</div>
            </div>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
            <Icon name="Trash2" size={24} className="text-error" />
            <div className="text-center">
              <div className="font-medium">Delete Account</div>
              <div className="text-xs text-muted-foreground">Remove all your information</div>
            </div>
          </Button>
        </div>
      </div>
      {/* Contact Information */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-border">
        <div className="text-center max-w-2xl mx-auto">
          <Icon name="Mail" size={48} className="mx-auto text-primary mb-4" />
          <h4 className="text-xl font-semibold text-foreground mb-4">Privacy Questions?</h4>
          <p className="text-muted-foreground mb-6">
            Our privacy team is here to help. Contact us with any questions about your data, privacy rights, or how we protect your information.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-background rounded-lg p-4">
              <h5 className="font-medium text-foreground mb-2">Privacy Officer</h5>
              <p className="text-sm text-muted-foreground">privacy@beautyglow.com</p>
            </div>
            <div className="bg-background rounded-lg p-4">
              <h5 className="font-medium text-foreground mb-2">Response Time</h5>
              <p className="text-sm text-muted-foreground">Within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySection;