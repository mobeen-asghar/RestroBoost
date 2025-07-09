import React, { useState, useRef } from 'react';
import {
  MenuSquare,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

interface PublicLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  onGetStarted: () => void;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({
  children,
  currentPage,
  onNavigate,
  onGetStarted,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigation = [
    { name: 'Home', href: 'landing' },
    {
      name: 'Product',
      href: 'features',
      dropdown: [
        { name: 'Features', href: 'features' },
        { name: 'Pricing', href: 'pricing' },
      ],
    },
    { name: 'Case Studies', href: 'case-studies' },
    { name: 'About', href: 'about' },
  ];

  const footerLinks = {
    product: [
      { name: 'Features', href: 'features' },
      { name: 'Pricing', href: 'pricing' },
      { name: 'Integrations', href: '#' },
      { name: 'API', href: '#' },
    ],
    company: [
      { name: 'About Us', href: 'about' },
      { name: 'Case Studies', href: 'case-studies' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Status', href: '#' },
      { name: 'Documentation', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Security', href: '#' },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => onNavigate('landing')}
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
              >
                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <MenuSquare className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  RestroBoost
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        if (dropdownTimeoutRef.current) {
                          clearTimeout(dropdownTimeoutRef.current);
                        }
                        setIsProductDropdownOpen(true);
                      }}
                      onMouseLeave={() => {
                        dropdownTimeoutRef.current = setTimeout(() => {
                          setIsProductDropdownOpen(false);
                        }, 200);
                      }}
                    >
                      <button className="flex items-center text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium">
                        {item.name}
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>

                      {isProductDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                          {item.dropdown.map((dropdownItem) => (
                            <button
                              key={dropdownItem.name}
                              onClick={() => onNavigate(dropdownItem.href)}
                              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors duration-200"
                            >
                              {dropdownItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => onNavigate(item.href)}
                      className={`font-medium transition-colors duration-200 ${
                        currentPage === item.href
                          ? 'text-yellow-600'
                          : 'text-gray-700 hover:text-yellow-600'
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => onNavigate('login')}
                className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium"
              >
                Sign In
              </button>
              <button
                onClick={onGetStarted}
                className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation (omitted for brevity, keep yours unchanged) */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            {/* Your mobile nav structure remains the same */}
          </div>
        )}
      </header>

      <main className="pt-16">{children}</main>

      {/* Footer (unchanged, keep yours intact) */}
    </div>
  );
};

export default PublicLayout;
