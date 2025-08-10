import React from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const SocialProofSection = () => {
  const communityStats = [
    {
      id: 1,
      number: "500K+",
      label: "Glow Journeys Started",
      description: "Beauty enthusiasts discovering their unique glow",
      icon: "Sparkles",
      color: "text-primary",
    },
    {
      id: 2,
      number: "50K+",
      label: "Beauty Stories Shared",
      description: "Authentic transformations and experiences",
      icon: "Heart",
      color: "text-accent",
    },
    {
      id: 3,
      number: "1M+",
      label: "Products Discovered",
      description: "Personalized recommendations delivered",
      icon: "ShoppingBag",
      color: "text-success",
    },
    {
      id: 4,
      number: "98%",
      label: "Satisfaction Rate",
      description: "Users who found their perfect match",
      icon: "Star",
      color: "text-warning",
    },
  ];

  const userReviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, NY",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      rating: 5,
      review:
        "Beauty Glow completely transformed my skincare routine. The personalized recommendations were spot-on, and I finally found products that work for my sensitive skin. My confidence has never been higher!",
      skinType: "Sensitive",
      beforeAfter: {
        before:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
        after:
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
      },
      timeUsing: "6 months",
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      location: "Los Angeles, CA",
      avatar:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      rating: 5,
      review:
        "The community aspect is incredible! I've learned so much from other users and the expert tips. The ingredient education helped me make informed choices instead of just following trends.",
      skinType: "Combination",
      beforeAfter: {
        before:
          "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=200&h=200&fit=crop&auto=format&q=80",
        after:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
      },
      timeUsing: "4 months",
    },
    {
      id: 3,
      name: "Aisha Patel",
      location: "Chicago, IL",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      rating: 5,
      review:
        "As someone with darker skin, finding the right products was always challenging. Beauty Glow's inclusive approach and diverse community made me feel seen and supported in my beauty journey.",
      skinType: "Oily",
      beforeAfter: {
        before:
          "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop&auto=format&q=80",
        after:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face&auto=format&q=80",
      },
      timeUsing: "8 months",
    },
  ];

  const expertEndorsements = [
    {
      id: 1,
      name: "Dr. Emily Chen",
      title: "Board-Certified Dermatologist",
      credential: "MD, FAAD",
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      quote:
        "Beauty Glow's approach to personalized skincare is scientifically sound and refreshingly inclusive. Their ingredient education empowers consumers to make informed decisions.",
      specialization: "Clinical Dermatology",
    },
    {
      id: 2,
      name: "James Morrison",
      title: "Celebrity Makeup Artist",
      credential: "15+ years experience",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote:
        "I recommend Beauty Glow to all my clients. The platform's focus on enhancing natural beauty rather than masking it aligns perfectly with my philosophy.",
      specialization: "Editorial & Red Carpet",
    },
    {
      id: 3,
      name: "Lisa Thompson",
      title: "Licensed Esthetician",
      credential: "Certified Skin Specialist",
      avatar:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face",
      quote:
        "The community-driven approach and evidence-based recommendations make Beauty Glow a valuable resource for anyone serious about skincare.",
      specialization: "Holistic Skincare",
    },
  ];

  const mediaRecognition = [
    {
      id: 1,
      publication: "Vogue",
      award: "Best Beauty Platform 2024",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=120&h=60&fit=crop&auto=format&q=80",
    },
    {
      id: 2,
      publication: "Allure",
      award: "Innovation in Beauty Tech",
      logo: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=120&h=60&fit=crop&auto=format&q=80",
    },
    {
      id: 3,
      publication: "Harper's Bazaar",
      award: "Editor's Choice Award",
      logo: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=120&h=60&fit=crop&auto=format&q=80",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Community Stats */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-accent">
            Trusted by Beauty Enthusiasts Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Join a thriving community that celebrates authentic beauty and
            empowers personal growth.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats?.map((stat) => (
              <div key={stat?.id} className="text-center space-y-3">
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-muted to-card flex items-center justify-center mb-4`}
                >
                  <Icon name={stat?.icon} size={28} className={stat?.color} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground">
                  {stat?.number}
                </div>
                <div className="font-semibold text-foreground">
                  {stat?.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat?.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Reviews */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Real Stories, Real Results
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our community members have transformed their beauty
              routines and boosted their confidence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {userReviews?.map((review) => (
              <div
                key={review?.id}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300"
              >
                {/* User Info */}
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={review?.avatar}
                    alt={review?.name}
                    className="w-12 h-12 rounded-full object-cover"
                    fallbackSrc="/assets/images/beauty_placeholder.svg"
                  />
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {review?.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {review?.location}
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(review?.rating)]?.map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={14}
                          className="text-warning fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Before/After */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="relative">
                    <Image
                      src={review?.beforeAfter?.before}
                      alt={`${review?.name} before`}
                      className="w-full h-24 object-cover rounded-lg"
                      fallbackSrc="/assets/images/beauty_placeholder.svg"
                    />
                    <div className="absolute bottom-1 left-1 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={review?.beforeAfter?.after}
                      alt={`${review?.name} after`}
                      className="w-full h-24 object-cover rounded-lg"
                      fallbackSrc="/assets/images/beauty_placeholder.svg"
                    />
                    <div className="absolute bottom-1 left-1 bg-primary text-white text-xs px-2 py-0.5 rounded">
                      After
                    </div>
                  </div>
                </div>

                {/* Review */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  "{review?.review}"
                </p>

                {/* Details */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Skin Type: {review?.skinType}</span>
                  <span>Using for: {review?.timeUsing}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expert Endorsements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Expert Approved
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted and recommended by leading professionals in dermatology,
              makeup artistry, and skincare.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {expertEndorsements?.map((expert) => (
              <div
                key={expert?.id}
                className="bg-card rounded-2xl p-6 shadow-soft text-center"
              >
                <Image
                  src={expert?.avatar}
                  alt={expert?.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                  fallbackSrc="/assets/images/beauty_placeholder.svg"
                />
                <h4 className="font-semibold text-card-foreground mb-1">
                  {expert?.name}
                </h4>
                <p className="text-sm text-primary font-medium mb-1">
                  {expert?.title}
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  {expert?.credential}
                </p>
                <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">
                  "{expert?.quote}"
                </p>
                <div className="text-xs text-muted-foreground">
                  Specialization: {expert?.specialization}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Recognition */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Featured In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {mediaRecognition?.map((media) => (
              <div key={media?.id} className="text-center">
                <Image
                  src={media?.logo}
                  alt={media?.publication}
                  className="w-24 h-12 object-contain mx-auto mb-3"
                  fallbackSrc="/assets/images/beauty_placeholder.svg"
                />
                <div className="font-semibold text-card-foreground mb-1">
                  {media?.publication}
                </div>
                <div className="text-sm text-muted-foreground">
                  {media?.award}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
