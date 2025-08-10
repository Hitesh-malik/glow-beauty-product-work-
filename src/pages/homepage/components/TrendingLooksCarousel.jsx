import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const TrendingLooksCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const trendingLooks = [
    {
      id: 1,
      title: "Natural Dewy Glow",
      beforeImage:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=400&fit=crop&crop=face&auto=format&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=400&fit=crop&crop=face&auto=format&q=80",
      userName: "Sarah M.",
      skinConcern: "Dry Skin",
      productsUsed: ["Hydrating Serum", "Vitamin C Moisturizer", "Glow Primer"],
      likes: 1247,
      timeAgo: "2 days ago",
    },
    {
      id: 2,
      title: "Bold Evening Glam",
      beforeImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=face&auto=format&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=400&fit=crop&crop=face&auto=format&q=80",
      userName: "Maya P.",
      skinConcern: "Uneven Tone",
      productsUsed: [
        "Color Corrector",
        "Full Coverage Foundation",
        "Contour Kit",
      ],
      likes: 892,
      timeAgo: "1 day ago",
    },
    {
      id: 3,
      title: "Fresh Morning Look",
      beforeImage:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=400&fit=crop&crop=face&auto=format&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=400&fit=crop&crop=face&auto=format&q=80",
      userName: "Zoe K.",
      skinConcern: "Acne Prone",
      productsUsed: [
        "Gentle Cleanser",
        "Niacinamide Serum",
        "Light Moisturizer",
      ],
      likes: 2156,
      timeAgo: "3 hours ago",
    },
    {
      id: 4,
      title: "Radiant Skin Focus",
      beforeImage:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=400&fit=crop&auto=format&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop&crop=face&auto=format&q=80",
      userName: "Aisha L.",
      skinConcern: "Dullness",
      productsUsed: [
        "Exfoliating Toner",
        "Brightening Mask",
        "Illuminating Primer",
      ],
      likes: 1683,
      timeAgo: "5 hours ago",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(trendingLooks?.length / 2)
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(trendingLooks?.length / 2)) %
        Math.ceil(trendingLooks?.length / 2)
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-accent">
            Trending Glow Transformations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real people, real results. See how our community is discovering
            their unique glow with personalized beauty solutions.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({
                length: Math.ceil(trendingLooks?.length / 2),
              })?.map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    {trendingLooks
                      ?.slice(slideIndex * 2, slideIndex * 2 + 2)
                      ?.map((look) => (
                        <div
                          key={look?.id}
                          className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 breathing-card"
                        >
                          {/* User Info */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <span className="text-white font-semibold text-sm">
                                  {look?.userName?.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <div className="font-semibold text-card-foreground">
                                  {look?.userName}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {look?.timeAgo}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1 text-muted-foreground">
                              <Icon name="Heart" size={16} />
                              <span className="text-sm">{look?.likes}</span>
                            </div>
                          </div>

                          {/* Before/After Images */}
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="relative">
                              <Image
                                src={look?.beforeImage}
                                alt={`${look?.userName} before transformation`}
                                className="w-full h-48 object-cover rounded-xl"
                                fallbackSrc="/assets/images/beauty_placeholder.svg"
                              />
                              <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                Before
                              </div>
                            </div>
                            <div className="relative">
                              <Image
                                src={look?.afterImage}
                                alt={`${look?.userName} after transformation`}
                                className="w-full h-48 object-cover rounded-xl"
                                fallbackSrc="/assets/images/beauty_placeholder.svg"
                              />
                              <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
                                After
                              </div>
                            </div>
                          </div>

                          {/* Look Details */}
                          <div className="space-y-3">
                            <h3 className="font-semibold text-lg text-card-foreground">
                              {look?.title}
                            </h3>

                            <div className="flex items-center space-x-2">
                              <Icon
                                name="Target"
                                size={16}
                                className="text-accent"
                              />
                              <span className="text-sm text-muted-foreground">
                                Concern:{" "}
                                <span className="text-card-foreground font-medium">
                                  {look?.skinConcern}
                                </span>
                              </span>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <Icon
                                  name="Sparkles"
                                  size={16}
                                  className="text-primary"
                                />
                                <span className="text-sm font-medium text-card-foreground">
                                  Products Used:
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {look?.productsUsed?.map((product, index) => (
                                  <span
                                    key={index}
                                    className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                                  >
                                    {product}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background w-12 h-12"
          >
            <Icon name="ChevronLeft" size={20} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background w-12 h-12"
          >
            <Icon name="ChevronRight" size={20} />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(trendingLooks?.length / 2) })?.map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-primary" : "bg-muted"
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingLooksCarousel;
