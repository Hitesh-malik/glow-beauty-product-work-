import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Glow Profile', path: '/glow-profile-builder', icon: 'User' },
    { name: 'Beauty Universe', path: '/beauty-universe', icon: 'Sparkles' },
    { name: 'Glow Academy', path: '/glow-academy', icon: 'GraduationCap' },
    { name: 'Glow Lab', path: '/glow-lab', icon: 'FlaskConical' },
  ];

  const secondaryItems = [
    { name: 'Trust Center', path: '/trust-transparency-center', icon: 'Shield' },
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link to="/homepage" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon name="Sparkles" size={18} color="white" />
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground font-accent">Beauty Glow</span>
              <span className="text-xs text-muted-foreground -mt-1">Authentic Beauty Journey</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>
              
              {/* Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-soft-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {secondaryItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm transition-colors ${
                        isActivePath(item?.path)
                          ? 'bg-primary text-primary-foreground'
                          : 'text-popover-foreground hover:bg-muted'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Icon name="Search" size={16} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Heart" size={16} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="ShoppingBag" size={16} />
            </Button>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="default" size="sm">
              Start Your Glow
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-6 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {secondaryItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 mt-4 border-t border-border space-y-2">
                <Button variant="outline" fullWidth>
                  Sign In
                </Button>
                <Button variant="default" fullWidth>
                  Start Your Glow
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;