import React, { useState, useRef } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkinAnalysis = ({ analysisData, onAnalysisUpdate }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const fileInputRef = useRef(null);

  const mockAnalysisResults = {
    skinType: 'Combination',
    concerns: ['Enlarged Pores', 'Occasional Breakouts', 'Uneven Texture'],
    hydrationLevel: 65,
    oilLevel: 45,
    sensitivity: 'Low',
    recommendedIngredients: ['Niacinamide', 'Hyaluronic Acid', 'Salicylic Acid'],
    skinAge: 'Well-maintained for your age',
    overallScore: 78
  };

  const handleImageUpload = (event) => {
    const file = event?.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e?.target?.result);
        simulateAnalysis();
      };
      reader?.readAsDataURL(file);
    }
  };

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      onAnalysisUpdate(mockAnalysisResults);
    }, 3000);
  };

  const triggerFileInput = () => {
    fileInputRef?.current?.click();
  };

  const retakePhoto = () => {
    setUploadedImage(null);
    setAnalysisComplete(false);
    setIsAnalyzing(false);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-foreground mb-2">
          AI Skin Analysis
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Upload a clear photo of your face in natural lighting for personalized skin analysis and recommendations.
        </p>
      </div>
      {!uploadedImage ? (
        <div className="space-y-6">
          {/* Upload Area */}
          <div 
            onClick={triggerFileInput}
            className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-primary transition-colors duration-300 bg-muted/30"
          >
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Camera" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Upload Your Photo</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Take or upload a clear, well-lit photo of your face
                </p>
                <Button variant="outline">
                  <Icon name="Upload" size={16} className="mr-2" />
                  Choose Photo
                </Button>
              </div>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />

          {/* Tips for Best Results */}
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-3 flex items-center">
              <Icon name="Info" size={16} className="mr-2 text-primary" />
              Tips for Best Results
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <Icon name="Check" size={14} className="mr-2 mt-0.5 text-success" />
                Use natural lighting (near a window is ideal)
              </li>
              <li className="flex items-start">
                <Icon name="Check" size={14} className="mr-2 mt-0.5 text-success" />
                Remove makeup for accurate analysis
              </li>
              <li className="flex items-start">
                <Icon name="Check" size={14} className="mr-2 mt-0.5 text-success" />
                Face the camera directly with a neutral expression
              </li>
              <li className="flex items-start">
                <Icon name="Check" size={14} className="mr-2 mt-0.5 text-success" />
                Ensure your entire face is visible and in focus
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Uploaded Image */}
          <div className="relative">
            <div className="w-64 h-64 mx-auto rounded-xl overflow-hidden border border-border">
              <Image 
                src={uploadedImage} 
                alt="Uploaded face photo" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {isAnalyzing && (
              <div className="absolute inset-0 bg-background/80 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-sm font-medium text-foreground">Analyzing your skin...</p>
                  <p className="text-xs text-muted-foreground mt-1">This may take a few moments</p>
                </div>
              </div>
            )}
          </div>

          {/* Analysis Results */}
          {analysisComplete && (
            <div className="space-y-4">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Your Skin Analysis Results
                </h4>
                <div className="inline-flex items-center px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
                  <Icon name="CheckCircle" size={16} className="mr-2" />
                  Analysis Complete
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Skin Type */}
                <div className="bg-card border border-border rounded-lg p-4">
                  <h5 className="font-medium text-foreground mb-2">Skin Type</h5>
                  <p className="text-lg font-semibold text-primary">{mockAnalysisResults?.skinType}</p>
                </div>

                {/* Overall Score */}
                <div className="bg-card border border-border rounded-lg p-4">
                  <h5 className="font-medium text-foreground mb-2">Skin Health Score</h5>
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-success mr-2">
                      {mockAnalysisResults?.overallScore}/100
                    </span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="bg-success h-2 rounded-full transition-all duration-500"
                        style={{ width: `${mockAnalysisResults?.overallScore}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Hydration Level */}
                <div className="bg-card border border-border rounded-lg p-4">
                  <h5 className="font-medium text-foreground mb-2">Hydration Level</h5>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-foreground mr-2">
                      {mockAnalysisResults?.hydrationLevel}%
                    </span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${mockAnalysisResults?.hydrationLevel}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Oil Level */}
                <div className="bg-card border border-border rounded-lg p-4">
                  <h5 className="font-medium text-foreground mb-2">Oil Production</h5>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-foreground mr-2">
                      {mockAnalysisResults?.oilLevel}%
                    </span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${mockAnalysisResults?.oilLevel}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Concerns */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h5 className="font-medium text-foreground mb-3">Key Concerns Detected</h5>
                <div className="flex flex-wrap gap-2">
                  {mockAnalysisResults?.concerns?.map((concern, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-warning/10 text-warning rounded-full text-sm"
                    >
                      {concern}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommended Ingredients */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h5 className="font-medium text-foreground mb-3">Recommended Ingredients</h5>
                <div className="flex flex-wrap gap-2">
                  {mockAnalysisResults?.recommendedIngredients?.map((ingredient, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-success/10 text-success rounded-full text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <Button variant="outline" onClick={retakePhoto}>
              <Icon name="RotateCcw" size={16} className="mr-2" />
              Retake Photo
            </Button>
            {analysisComplete && (
              <Button variant="default">
                <Icon name="Download" size={16} className="mr-2" />
                Save Results
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkinAnalysis;