import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const CommunityFeed = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const feedItems = [
    {
      id: 1,
      type: "transformation",
      user: {
        name: "Emma Rodriguez",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
        verified: true,
      },
      content: {
        title: "My 30-Day Glow Journey",
        description:
          "Finally found the perfect routine for my sensitive skin! The gentle approach really works.",
        image:
          "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?w=400&h=300&fit=crop",
        tags: ["Sensitive Skin", "Natural Glow", "30-Day Challenge"],
      },
      engagement: {
        likes: 342,
        comments: 28,
        shares: 15,
      },
      timeAgo: "2 hours ago",
    },
    {
      id: 2,
      type: "tip",
      user: {
        name: "Dr. Sarah Chen",
        avatar:
          "https://images.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.jpg?w=100&h=100&fit=crop",
        verified: true,
        badge: "Expert",
      },
      content: {
        title: "The Science Behind Vitamin C",
        description:
          "Understanding L-Ascorbic Acid vs. Magnesium Ascorbyl Phosphate and which one works best for your skin type.",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
        tags: ["Vitamin C", "Skincare Science", "Expert Tip"],
      },
      engagement: {
        likes: 1247,
        comments: 89,
        shares: 156,
      },
      timeAgo: "4 hours ago",
    },
    {
      id: 3,
      type: "review",
      user: {
        name: "Maya Patel",
        avatar:
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
        verified: false,
      },
      content: {
        title: "Honest Review: Retinol Serum",
        description:
          "After 8 weeks of consistent use, here's what I noticed. Spoiler: my skin texture has never been better!",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&crop=face&auto=format&q=80",
        tags: ["Product Review", "Retinol", "Anti-Aging"],
        rating: 5,
      },
      engagement: {
        likes: 567,
        comments: 43,
        shares: 22,
      },
      timeAgo: "6 hours ago",
    },
    {
      id: 4,
      type: "routine",
      user: {
        name: "Alex Kim",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
        verified: false,
      },
      content: {
        title: "My Minimalist Morning Routine",
        description:
          "5 steps, 10 minutes, maximum glow. Perfect for busy mornings when you still want to look put-together.",
        image:
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=300&fit=crop&crop=face&auto=format&q=80",
        tags: ["Morning Routine", "Minimalist", "Quick Routine"],
      },
      engagement: {
        likes: 892,
        comments: 67,
        shares: 134,
      },
      timeAgo: "8 hours ago",
    },
    {
      id: 5,
      type: "challenge",
      user: {
        name: "Beauty Glow",
        avatar:
          "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=100&h=100&fit=crop&auto=format&q=80",
        verified: true,
        badge: "Official",
      },
      content: {
        title: "7-Day Hydration Challenge",
        description:
          "Join thousands in our weekly hydration challenge! Track your water intake and see how it affects your skin's natural glow.",
        image:
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=300&fit=crop&crop=face&auto=format&q=80",
        tags: ["Challenge", "Hydration", "Community"],
      },
      engagement: {
        likes: 2156,
        comments: 234,
        shares: 445,
      },
      timeAgo: "12 hours ago",
    },
    {
      id: 6,
      type: "ingredient-spotlight",
      user: {
        name: "Ingredient Insider",
        avatar:
          "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
        verified: true,
        badge: "Expert",
      },
      content: {
        title: "Niacinamide: The Multi-Tasker",
        description:
          "Why this B3 vitamin deserves a spot in everyone's routine. From pore appearance to oil control, it does it all.",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&crop=face&auto=format&q=80",
        tags: ["Niacinamide", "Ingredient Spotlight", "Skincare Education"],
      },
      engagement: {
        likes: 1683,
        comments: 156,
        shares: 289,
      },
      timeAgo: "1 day ago",
    },
  ];

  const filters = [
    { id: "all", label: "All Posts", icon: "Grid3X3" },
    { id: "transformation", label: "Transformations", icon: "Sparkles" },
    { id: "tip", label: "Expert Tips", icon: "Lightbulb" },
    { id: "review", label: "Reviews", icon: "Star" },
    { id: "routine", label: "Routines", icon: "Clock" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? feedItems
      : feedItems?.filter((item) => item?.type === activeFilter);

  const getTypeIcon = (type) => {
    switch (type) {
      case "transformation":
        return "Sparkles";
      case "tip":
        return "Lightbulb";
      case "review":
        return "Star";
      case "routine":
        return "Clock";
      case "challenge":
        return "Trophy";
      case "ingredient-spotlight":
        return "FlaskConical";
      default:
        return "MessageCircle";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-accent">
            Community Glow Feed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories, expert insights, and beauty discoveries from our
            vibrant community. Get inspired and share your own glow journey.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters?.map((filter) => (
            <Button
              key={filter?.id}
              variant={activeFilter === filter?.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter?.id)}
              className="transition-all duration-300"
            >
              <Icon name={filter?.icon} size={16} className="mr-2" />
              {filter?.label}
            </Button>
          ))}
        </div>

        {/* Feed Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems?.map((item) => (
            <div
              key={item?.id}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 breathing-card"
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item?.content?.image}
                  alt={item?.content?.title}
                  className="w-full h-full object-cover"
                  fallbackSrc="/assets/images/beauty_placeholder.svg"
                />
                <div className="absolute top-3 left-3">
                  <div className="bg-black/70 backdrop-blur-sm rounded-full p-2">
                    <Icon
                      name={getTypeIcon(item?.type)}
                      size={16}
                      color="white"
                    />
                  </div>
                </div>
                {item?.content?.rating && (
                  <div className="absolute top-3 right-3 bg-warning text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Icon name="Star" size={12} />
                    <span>{item?.content?.rating}</span>
                  </div>
                )}
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* User Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src={item?.user?.avatar}
                    alt={item?.user?.name}
                    className="w-10 h-10 rounded-full object-cover"
                    fallbackSrc="/assets/images/beauty_placeholder.svg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-card-foreground text-sm">
                        {item?.user?.name}
                      </span>
                      {item?.user?.verified && (
                        <Icon
                          name="BadgeCheck"
                          size={14}
                          className="text-primary"
                        />
                      )}
                      {item?.user?.badge && (
                        <span className="bg-accent text-white text-xs px-2 py-0.5 rounded-full">
                          {item?.user?.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item?.timeAgo}
                    </div>
                  </div>
                </div>

                {/* Post Details */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-card-foreground line-clamp-2">
                    {item?.content?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {item?.content?.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item?.content?.tags?.slice(0, 2)?.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                    {item?.content?.tags?.length > 2 && (
                      <span className="text-xs text-muted-foreground">
                        +{item?.content?.tags?.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Engagement */}
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                        <Icon name="Heart" size={16} />
                        <span className="text-sm">
                          {item?.engagement?.likes}
                        </span>
                      </button>
                      <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                        <Icon name="MessageCircle" size={16} />
                        <span className="text-sm">
                          {item?.engagement?.comments}
                        </span>
                      </button>
                    </div>
                    <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                      <Icon name="Share" size={16} />
                      <span className="text-sm">
                        {item?.engagement?.shares}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Posts
            <Icon name="ChevronDown" size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunityFeed;
