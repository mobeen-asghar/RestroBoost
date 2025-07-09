import React from 'react';
import { 
  ArrowRight, 
  BarChart3, 
  Package, 
  MessageSquare, 
  ShoppingCart,
  Star,
  TrendingUp,
  Users,
  CheckCircle,
  Play,
  Zap,
  Shield,
  Clock,
  Sparkles,
  Award,
  Target,
  Globe,
  ChevronRight
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const features = [
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Get real-time insights into your restaurant performance with AI-powered analytics.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Never run out of ingredients with intelligent stock tracking and automated alerts.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageSquare,
      title: 'Customer Feedback',
      description: 'Understand your customers better with sentiment analysis and review management.',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      icon: ShoppingCart,
      title: 'Online Ordering',
      description: 'Seamlessly integrate with all major delivery platforms from one dashboard.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Owner, Bella Vista Italian',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'RestroBoost increased our revenue by 42% in just 6 months. The inventory management alone saved us thousands.',
      rating: 5,
      company: 'Bella Vista Italian'
    },
    {
      name: 'James Chen',
      role: 'Owner, Golden Dragon',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The unified order management system transformed our chaotic kitchen into a well-oiled machine.',
      rating: 5,
      company: 'Golden Dragon'
    },
    {
      name: 'Sarah Johnson',
      role: 'Owner, Farm Table Bistro',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Finally, a platform that understands the unique challenges of running a local restaurant.',
      rating: 5,
      company: 'Farm Table Bistro'
    }
  ];

  const stats = [
    { number: '500+', label: 'Restaurants Served', icon: Users },
    { number: '35%', label: 'Average Revenue Increase', icon: TrendingUp },
    { number: '2M+', label: 'Orders Processed', icon: ShoppingCart },
    { number: '4.9/5', label: 'Customer Rating', icon: Star }
  ];

  const benefits = [
    'Increase revenue by up to 35%',
    'Reduce food waste by 25%',
    'Save 20+ hours per week',
    'Improve customer satisfaction',
    'Streamline operations',
    'Real-time insights and alerts'
  ];

  const integrations = [
    'DoorDash', 'Uber Eats', 'Grubhub', 'Postmates', 'Square', 'Toast',
    'Yelp', 'Google', 'Facebook', 'Instagram', 'QuickBooks', 'Stripe'
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-yellow-50 via-white to-orange-50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Sparkles className="w-4 h-4 mr-2" />
                Trusted by 500+ restaurants
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="block">Boost Your</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 animate-gradient-x">
                  Restaurant's
                </span>
                <span className="block">Success</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                The all-in-one platform that helps local restaurants 
                <span className="font-semibold text-yellow-600"> increase revenue by 35%</span>, 
                reduce waste, and delight customers with smart technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={onGetStarted}
                  className="group bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-yellow-500 hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </button>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Setup in minutes</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                    alt="Restaurant team using RestroBoost"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">+35%</div>
                    <div className="text-sm text-gray-600">Revenue Growth</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-float animation-delay-2000">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-8 bg-white p-3 rounded-xl shadow-lg border border-gray-100 animate-float animation-delay-4000">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">500+</div>
                    <div className="text-xs text-gray-600">Restaurants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-50 to-yellow-50 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Powerful Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500"> succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RestroBoost provides all the tools modern restaurants need to thrive in today's competitive market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center group-hover:text-yellow-600 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{feature.description}</p>
                  <div className="mt-6 flex justify-center">
                    <ChevronRight className="w-5 h-5 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Why Choose RestroBoost
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transform your restaurant with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500"> proven results</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join hundreds of successful restaurants that have transformed their operations with our platform.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={onGetStarted}
                className="group bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Restaurant dashboard"
                  className="rounded-3xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
              
              {/* Feature highlights */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-float">
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-900">Real-time Analytics</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-float animation-delay-2000">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-green-500" />
                  <span className="text-sm font-medium text-gray-900">Secure & Reliable</span>
                </div>
              </div>

              <div className="absolute top-1/2 -right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg animate-float animation-delay-4000">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  <span className="text-xs font-medium text-gray-900">Smart Insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Customer Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by restaurant 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500"> owners</span>
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about their experience with RestroBoost.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover ring-4 ring-yellow-100 group-hover:ring-yellow-200 transition-all duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-yellow-600 text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Seamless Integrations
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Connect with your 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500"> favorite tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RestroBoost integrates seamlessly with all the platforms you already use.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-100 group hover:border-yellow-200"
              >
                <span className="text-gray-600 font-medium text-center group-hover:text-yellow-600 transition-colors duration-300">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Join 500+ successful restaurants
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to boost your restaurant?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful restaurants using RestroBoost to increase revenue and streamline operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={onGetStarted}
              className="group bg-white text-yellow-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-yellow-600 transition-all duration-300 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Schedule Demo
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-yellow-100">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>500+ restaurants trust us</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;