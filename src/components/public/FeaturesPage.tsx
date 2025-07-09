import React from 'react';
import { 
  BarChart3, 
  Package, 
  MessageSquare, 
  ShoppingCart,
  TrendingUp,
  Bell,
  Users,
  Clock,
  Star,
  Shield,
  Zap,
  Target,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface FeaturesPageProps {
  onGetStarted: () => void;
}

const FeaturesPage: React.FC<FeaturesPageProps> = ({ onGetStarted }) => {
  const mainFeatures = [
    {
      icon: BarChart3,
      title: 'Smart Analytics Dashboard',
      description: 'Get real-time insights into your restaurant performance with comprehensive analytics.',
      features: [
        'Revenue tracking and forecasting',
        'Customer behavior analysis',
        'Peak hours identification',
        'Profit margin optimization',
        'Custom reporting tools'
      ],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Package,
      title: 'Intelligent Inventory Management',
      description: 'Never run out of ingredients with smart stock tracking and automated alerts.',
      features: [
        'Real-time stock monitoring',
        'Automated reorder alerts',
        'Supplier management',
        'Cost tracking and optimization',
        'Waste reduction insights'
      ],
      image: 'https://images.pexels.com/photos/4481327/pexels-photo-4481327.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: MessageSquare,
      title: 'Customer Feedback Intelligence',
      description: 'Understand your customers better with AI-powered sentiment analysis.',
      features: [
        'Sentiment analysis and trends',
        'Review aggregation from all platforms',
        'Response management tools',
        'Customer satisfaction scoring',
        'Actionable improvement suggestions'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: ShoppingCart,
      title: 'Seamless Online Ordering',
      description: 'Integrate with all major delivery platforms and manage orders from one place.',
      features: [
        'Multi-platform order management',
        'Real-time order tracking',
        'Kitchen display integration',
        'Customer communication tools',
        'Delivery optimization'
      ],
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const additionalFeatures = [
    {
      icon: TrendingUp,
      title: 'Menu Optimization',
      description: 'Optimize your menu based on sales data and customer preferences.'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Get alerts for low stock, new orders, and important business metrics.'
    },
    {
      icon: Users,
      title: 'Staff Management',
      description: 'Manage schedules, track performance, and optimize labor costs.'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Everything syncs in real-time across all your devices and platforms.'
    },
    {
      icon: Star,
      title: 'Quality Control',
      description: 'Monitor food quality and consistency with built-in checklists.'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security keeps your business data safe and secure.'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Increase Revenue',
      description: 'Average 35% revenue increase within 6 months',
      stat: '35%'
    },
    {
      icon: Zap,
      title: 'Save Time',
      description: 'Reduce administrative tasks by up to 20 hours per week',
      stat: '20hrs'
    },
    {
      icon: TrendingUp,
      title: 'Improve Efficiency',
      description: 'Streamline operations and reduce waste by 25%',
      stat: '25%'
    },
    {
      icon: Star,
      title: 'Better Reviews',
      description: 'Improve customer satisfaction scores by 40%',
      stat: '40%'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-yellow-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 block">
                Restaurant Success
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Everything you need to run a successful restaurant, all in one comprehensive platform.
            </p>
            <button 
              onClick={onGetStarted}
              className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`mb-24 ${index === mainFeatures.length - 1 ? 'mb-0' : ''}`}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mr-4">
                        <Icon className="w-8 h-8 text-yellow-500" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{feature.title}</h2>
                    </div>
                    
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-300">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                  
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="relative">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              And so much more
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover all the tools and features designed to help your restaurant thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the measurable impact RestroBoost has on restaurants just like yours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{benefit.stat}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with all your favorite tools and platforms for a unified experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'DoorDash', 'Uber Eats', 'Grubhub', 'Postmates', 'Square', 'Toast',
              'Yelp', 'Google', 'Facebook', 'Instagram', 'QuickBooks', 'Stripe'
            ].map((integration, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
              >
                <span className="text-gray-600 font-medium text-center">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to transform your restaurant?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful restaurants using RestroBoost to streamline operations and boost revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onGetStarted}
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              Start Your Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-yellow-600 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;