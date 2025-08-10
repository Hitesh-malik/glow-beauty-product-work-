import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProgressTrackingSection = () => {
  const [activeTab, setActiveTab] = useState('progress');

  const userProgress = {
    totalCourses: 12,
    completedCourses: 8,
    totalHours: 45,
    completedHours: 32,
    certificates: 5,
    currentStreak: 7,
    totalPoints: 2450,
    level: "Beauty Enthusiast",
    nextLevel: "Beauty Expert",
    pointsToNext: 550
  };

  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first tutorial",
      icon: "Award",
      earned: true,
      earnedDate: "Nov 15, 2024",
      points: 50
    },
    {
      id: 2,
      title: "Skincare Scholar",
      description: "Complete Skincare Fundamentals path",
      icon: "GraduationCap",
      earned: true,
      earnedDate: "Nov 28, 2024",
      points: 200
    },
    {
      id: 3,
      title: "Makeup Maven",
      description: "Complete 10 makeup tutorials",
      icon: "Palette",
      earned: true,
      earnedDate: "Dec 5, 2024",
      points: 150
    },
    {
      id: 4,
      title: "Ingredient Expert",
      description: "Master ingredient intelligence course",
      icon: "FlaskConical",
      earned: false,
      progress: 75,
      points: 300
    },
    {
      id: 5,
      title: "Community Leader",
      description: "Help 50 community members",
      icon: "Users",
      earned: false,
      progress: 32,
      points: 250
    },
    {
      id: 6,
      title: "Wellness Warrior",
      description: "Complete wellness & beauty connection",
      icon: "Heart",
      earned: false,
      progress: 0,
      points: 200
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "course_completed",
      title: "Completed: Advanced Contouring Techniques",
      date: "2 hours ago",
      points: 100,
      icon: "CheckCircle"
    },
    {
      id: 2,
      type: "achievement_earned",
      title: "Earned: Makeup Maven Badge",
      date: "1 day ago",
      points: 150,
      icon: "Award"
    },
    {
      id: 3,
      type: "tutorial_watched",
      title: "Watched: Understanding pH in Skincare",
      date: "2 days ago",
      points: 25,
      icon: "Play"
    },
    {
      id: 4,
      type: "quiz_passed",
      title: "Passed: Ingredient Safety Quiz",
      date: "3 days ago",
      points: 75,
      icon: "Brain"
    },
    {
      id: 5,
      type: "community_help",
      title: "Helped member with routine advice",
      date: "4 days ago",
      points: 20,
      icon: "MessageCircle"
    }
  ];

  const tabs = [
    { id: 'progress', name: 'My Progress', icon: 'TrendingUp' },
    { id: 'achievements', name: 'Achievements', icon: 'Award' },
    { id: 'activity', name: 'Recent Activity', icon: 'Activity' }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'course_completed': return 'CheckCircle';
      case 'achievement_earned': return 'Award';
      case 'tutorial_watched': return 'Play';
      case 'quiz_passed': return 'Brain';
      case 'community_help': return 'MessageCircle';
      default: return 'Activity';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'course_completed': return 'text-success';
      case 'achievement_earned': return 'text-warning';
      case 'tutorial_watched': return 'text-primary';
      case 'quiz_passed': return 'text-accent';
      case 'community_help': return 'text-purple-500';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-accent">
            Track Your Beauty Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor your progress, earn achievements, and celebrate your learning milestones
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Overview Cards */}
          <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {userProgress?.completedCourses}/{userProgress?.totalCourses}
              </div>
              <div className="text-sm text-muted-foreground">Courses Completed</div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {userProgress?.completedHours}h
              </div>
              <div className="text-sm text-muted-foreground">Learning Hours</div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-success" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {userProgress?.certificates}
              </div>
              <div className="text-sm text-muted-foreground">Certificates</div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Flame" size={24} className="text-warning" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {userProgress?.currentStreak}
              </div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </div>
          </div>

          {/* Level Progress */}
          <div className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Current Level</h3>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-primary">{userProgress?.level}</span>
                  <Icon name="ArrowRight" size={16} className="text-muted-foreground" />
                  <span className="text-lg text-muted-foreground">{userProgress?.nextLevel}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-foreground">{userProgress?.totalPoints}</div>
                <div className="text-sm text-muted-foreground">Total Points</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Progress to next level</span>
                <span>{userProgress?.pointsToNext} points to go</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
                  style={{ width: `${((3000 - userProgress?.pointsToNext) / 3000) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="lg:col-span-3">
            <div className="flex space-x-1 mb-8 bg-muted p-1 rounded-xl">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex-1 justify-center ${
                    activeTab === tab?.id
                      ? 'bg-background text-foreground shadow-soft'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.name}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'achievements' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements?.map((achievement) => (
                  <div
                    key={achievement?.id}
                    className={`bg-card border rounded-2xl p-6 ${
                      achievement?.earned 
                        ? 'border-success bg-success/5' :'border-border'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        achievement?.earned 
                          ? 'bg-success/20 text-success' :'bg-muted text-muted-foreground'
                      }`}>
                        <Icon name={achievement?.icon} size={24} />
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-primary">+{achievement?.points}</div>
                        <div className="text-xs text-muted-foreground">points</div>
                      </div>
                    </div>

                    <h4 className="font-semibold text-foreground mb-2">{achievement?.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{achievement?.description}</p>

                    {achievement?.earned ? (
                      <div className="flex items-center space-x-2 text-success text-sm">
                        <Icon name="CheckCircle" size={16} />
                        <span>Earned {achievement?.earnedDate}</span>
                      </div>
                    ) : (
                      <div>
                        <div className="flex justify-between text-sm text-muted-foreground mb-2">
                          <span>Progress</span>
                          <span>{achievement?.progress || 0}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${achievement?.progress || 0}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="space-y-4">
                  {recentActivity?.map((activity) => (
                    <div key={activity?.id} className="flex items-center space-x-4 p-4 bg-muted/50 rounded-xl">
                      <div className={`w-10 h-10 rounded-full bg-background flex items-center justify-center ${getActivityColor(activity?.type)}`}>
                        <Icon name={getActivityIcon(activity?.type)} size={18} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{activity?.title}</h4>
                        <p className="text-sm text-muted-foreground">{activity?.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-primary">+{activity?.points}</div>
                        <div className="text-xs text-muted-foreground">points</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'progress' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-6">Learning Paths Progress</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-foreground">Skincare Fundamentals</span>
                        <span className="text-muted-foreground">100%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-success h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-foreground">Makeup Mastery</span>
                        <span className="text-muted-foreground">75%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-foreground">Ingredient Intelligence</span>
                        <span className="text-muted-foreground">60%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-warning h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-foreground">Wellness & Beauty</span>
                        <span className="text-muted-foreground">25%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-6">Weekly Goals</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon name="Target" size={18} className="text-primary" />
                        <span className="text-sm text-foreground">Complete 3 tutorials</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">2/3</span>
                        <Icon name="CheckCircle" size={16} className="text-muted-foreground" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon name="Clock" size={18} className="text-success" />
                        <span className="text-sm text-foreground">Study 5 hours</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-success">5/5</span>
                        <Icon name="CheckCircle" size={16} className="text-success" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon name="Users" size={18} className="text-accent" />
                        <span className="text-sm text-foreground">Help 2 community members</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">1/2</span>
                        <Icon name="Clock" size={16} className="text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" iconName="TrendingUp" iconPosition="left">
            Continue Learning
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgressTrackingSection;