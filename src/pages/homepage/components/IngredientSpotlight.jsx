import React from "react";
import Button from "../../../components/ui/Button";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const IngredientSpotlight = () => {
  const spotlightIngredients = [
    {
      id: 1,
      name: "Hyaluronic Acid",
      scientificName: "Sodium Hyaluronate",
      category: "Hydration",
      description:
        "A powerful humectant that can hold up to 1000 times its weight in water, providing intense hydration and plumping effects for all skin types.",
      benefits: [
        "Deep hydration",
        "Plumps fine lines",
        "Suitable for all skin types",
        "Non-comedogenic",
      ],
      howItWorks:
        "Draws moisture from the environment and deeper layers of skin to the surface, creating a moisture reservoir that keeps skin hydrated throughout the day.",
      bestFor: ["Dry Skin", "Dehydrated Skin", "Fine Lines", "All Ages"],
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&crop=face&auto=format&q=80",
      userTestimonial: {
        name: "Jessica M.",
        review:
          "My skin has never felt more hydrated! Fine lines around my eyes are visibly reduced.",
        rating: 5,
        skinType: "Combination",
      },
      scientificBacking:
        "Clinical studies show 30% improvement in skin hydration after 4 weeks of use.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: 2,
      name: "Niacinamide",
      scientificName: "Nicotinamide (Vitamin B3)",
      category: "Multi-Functional",
      description:
        "A versatile vitamin that regulates oil production, minimizes pore appearance, and strengthens the skin barrier while providing anti-inflammatory benefits.",
      benefits: [
        "Controls oil production",
        "Minimizes pore appearance",
        "Strengthens skin barrier",
        "Reduces inflammation",
      ],
      howItWorks:
        "Regulates sebum production by inhibiting the transfer of lipids to the skin surface, while also boosting ceramide production to strengthen the skin barrier.",
      bestFor: ["Oily Skin", "Large Pores", "Acne-Prone", "Sensitive Skin"],
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400&h=300&fit=crop",
      userTestimonial: {
        name: "David L.",
        review:
          "My pores look smaller and my skin is less oily throughout the day. Game changer!",
        rating: 5,
        skinType: "Oily",
      },
      scientificBacking:
        "Studies demonstrate 35% reduction in sebum production and improved skin texture.",
      color: "from-green-400 to-emerald-500",
    },
    {
      id: 3,
      name: "Retinol",
      scientificName: "Vitamin A",
      category: "Anti-Aging",
      description:
        "The gold standard in anti-aging, promoting cellular turnover and collagen production to reduce fine lines, wrinkles, and improve skin texture.",
      benefits: [
        "Reduces fine lines",
        "Improves skin texture",
        "Boosts collagen production",
        "Evens skin tone",
      ],
      howItWorks:
        "Converts to retinoic acid in the skin, accelerating cell turnover and stimulating collagen synthesis while helping to fade dark spots and improve overall skin texture.",
      bestFor: ["Mature Skin", "Fine Lines", "Uneven Texture", "Dark Spots"],
      image:
        "https://images.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg?w=400&h=300&fit=crop",
      userTestimonial: {
        name: "Maria S.",
        review:
          "After 3 months, my skin texture is smoother and my fine lines are less noticeable.",
        rating: 4,
        skinType: "Normal",
      },
      scientificBacking:
        "Clinical trials show 40% improvement in fine lines and 25% increase in collagen density.",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-accent">
            Ingredient Spotlight
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive deep into the science behind trending ingredients. Understand
            what works, why it works, and how to incorporate it into your
            routine for maximum results.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="space-y-12">
          {spotlightIngredients?.map((ingredient, index) => (
            <div
              key={ingredient?.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${ingredient?.color}`}
                    ></div>
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      {ingredient?.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">
                    {ingredient?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground italic">
                    {ingredient?.scientificName}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {ingredient?.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center space-x-2">
                    <Icon name="Sparkles" size={16} className="text-primary" />
                    <span>Key Benefits</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {ingredient?.benefits?.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center space-x-2"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${ingredient?.color}`}
                        ></div>
                        <span className="text-sm text-muted-foreground">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* How It Works */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center space-x-2">
                    <Icon
                      name="FlaskConical"
                      size={16}
                      className="text-accent"
                    />
                    <span>How It Works</span>
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ingredient?.howItWorks}
                  </p>
                </div>

                {/* Best For */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center space-x-2">
                    <Icon name="Target" size={16} className="text-success" />
                    <span>Best For</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {ingredient?.bestFor?.map((condition, conditionIndex) => (
                      <span
                        key={conditionIndex}
                        className="bg-card text-card-foreground text-xs px-3 py-1 rounded-full border"
                      >
                        {condition}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Scientific Backing */}
                <div className="bg-card rounded-xl p-4 border-l-4 border-primary">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Award"
                      size={16}
                      className="text-primary mt-0.5"
                    />
                    <div>
                      <h5 className="font-semibold text-card-foreground text-sm mb-1">
                        Scientific Evidence
                      </h5>
                      <p className="text-xs text-muted-foreground">
                        {ingredient?.scientificBacking}
                      </p>
                    </div>
                  </div>
                </div>

                {/* User Testimonial */}
                <div className="bg-card rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-sm">
                        {ingredient?.userTestimonial?.name?.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold text-card-foreground text-sm">
                          {ingredient?.userTestimonial?.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {ingredient?.userTestimonial?.skinType} Skin
                        </span>
                        <div className="flex items-center space-x-1">
                          {[...Array(ingredient?.userTestimonial?.rating)]?.map(
                            (_, i) => (
                              <Icon
                                key={i}
                                name="Star"
                                size={12}
                                className="text-warning fill-current"
                              />
                            )
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        "{ingredient?.userTestimonial?.review}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${ingredient?.color} rounded-3xl opacity-20`}
                  ></div>
                  <Image
                    src={ingredient?.image}
                    alt={ingredient?.name}
                    className="w-full h-48 object-cover rounded-xl"
                    fallbackSrc="/assets/images/beauty_placeholder.svg"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-soft">
                    <Icon
                      name="FlaskConical"
                      size={24}
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${ingredient?.color}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Want to Learn More?
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore our comprehensive ingredient database with detailed
              guides, product recommendations, and expert insights for every
              skin concern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default">
                Explore All Ingredients
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
              <Button variant="outline">
                Get Personalized Recommendations
                <Icon name="Sparkles" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientSpotlight;
