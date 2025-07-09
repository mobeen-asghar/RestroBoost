import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Star, 
  DollarSign,
  Clock,
  ArrowRight,
  Quote,
  BarChart3,
  Target,
  Award
} from 'lucide-react';

interface CaseStudiesPageProps {
  onGetStarted: () => void;
}

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onGetStarted }) => {
  const caseStudies = [
    {
      restaurant: 'Bella Vista Italian',
      owner: 'Maria Rodriguez',
      location: 'San Francisco, CA',
      type: 'Fine Dining',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      ownerImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      challenge: 'Struggling with inventory waste and inconsistent customer experience across multiple locations.',
      solution: 'Implemented RestroBoost\'s inventory management and customer feedback systems.',
      results: [
        { metric: 'Revenue Increase', value: '42%', icon: DollarSign },
        { metric: 'Waste Reduction', value: '35%', icon: TrendingUp },
        { metric: 'Customer Rating', value: '4.8/5', icon: Star },
        { metric: 'Time Saved', value: '15hrs/week', icon: Clock }
      ],
      quote: 'RestroBoost transformed our operations completely. We went from struggling with waste to having the most efficient kitchen in our area. The customer insights alone increased our revenue by 42% in just 6 months.',
      timeline: '6 months',
      featured: true
    },
    {
      restaurant: 'Golden Dragon',
      owner: 'James Chen',
      location: 'New York, NY',
      type: 'Asian Fusion',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      ownerImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      challenge: 'Managing online orders from multiple platforms was chaotic and leading to customer complaints.',
      solution: 'Centralized order management and implemented real-time kitchen display systems.',
      results: [
        { metric: 'Order Accuracy', value: '98%', icon: Target },
        { metric: 'Delivery Time', value: '-25%', icon: Clock },
        { metric: 'Customer Complaints', value: '-80%', icon: Users },
        { metric: 'Revenue Growth', value: '28%', icon: DollarSign }
      ],
      quote: 'The unified order management system was a game-changer. We went from chaos to complete control, and our customers noticed immediately.',
      timeline: '4 months',
      featured: false
    },
    {
      restaurant: 'Farm Table Bistro',
      owner: 'Sarah Johnson',
      location: 'Austin, TX',
      type: 'Farm-to-Table',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      ownerImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      challenge: 'Seasonal menu changes and local sourcing made inventory management extremely complex.',
      solution: 'Used RestroBoost\'s advanced analytics to optimize menu based on seasonal availability and customer preferences.',
      results: [
        { metric: 'Menu Optimization', value: '90%', icon: BarChart3 },
        { metric: 'Food Cost Reduction', value: '22%', icon: DollarSign },
        { metric: 'Customer Satisfaction', value: '4.9/5', icon: Star },
        { metric: 'Profit Margin', value: '+18%', icon: TrendingUp }
      ],
      quote: 'RestroBoost helped us turn our seasonal challenges into our biggest advantage. Now we can predict demand and optimize our menu like never before.',
      timeline: '8 months',
      featured: false
    }
  ];

  const successMetrics = [
    {
      title: 'Average Revenue Increase',
      value: '35%',
      description: 'Restaurants see significant revenue growth within 6 months',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Customer Satisfaction',
      value: '4.7/5',
      description: 'Average rating improvement across all restaurants',
      icon: Star,
      color: 'yellow'
    },
    {
      title: 'Operational Efficiency',
      value: '40%',
      description: 'Reduction in time spent on administrative tasks',
      icon: Clock,
      color: 'blue'
    },
    {
      title: 'Waste Reduction',
      value: '30%',
      description: 'Average decrease in food waste and inventory costs',
      icon: TrendingUp,
      color: 'purple'
    }
  ];

  const industries = [
    { name: 'Fine Dining', count: 150, growth: '+45%' },
    { name: 'Fast Casual', count: 200, growth: '+38%' },
    { name: 'Food Trucks', count: 75, growth: '+52%' },
    { name: 'Cafes & Bakeries', count: 100, growth: '+41%' },
    { name: 'Pizza & Italian', count: 125, growth: '+35%' },
    { name: 'Asian Cuisine', count: 90, growth: '+48%' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-yellow-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Real Results from
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 block">
                Real Restaurants
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how restaurants like yours are using RestroBoost to increase revenue, 
              improve efficiency, and delight customers.
            </p>
            <button 
              onClick={onGetStarted}
              className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              Start Your Success Story
            </button>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Success Across the Industry
            </h2>
            <p className="text-lg text-gray-600">
              These are the average results our customers achieve within their first year.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                    metric.color === 'green' ? 'bg-green-100' :
                    metric.color === 'yellow' ? 'bg-yellow-100' :
                    metric.color === 'blue' ? 'bg-blue-100' : 'bg-purple-100'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      metric.color === 'green' ? 'text-green-500' :
                      metric.color === 'yellow' ? 'text-yellow-500' :
                      metric.color === 'blue' ? 'text-blue-500' : 'text-purple-500'
                    }`} />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.title}</h3>
                  <p className="text-gray-600 text-sm">{metric.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {caseStudies.filter(study => study.featured).map((study, index) => (
        <section key={index} className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Featured Success Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How {study.restaurant} Increased Revenue by {study.results[0].value}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src={study.image} 
                  alt={study.restaurant}
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <img 
                    src={study.ownerImage} 
                    alt={study.owner}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{study.owner}</h3>
                    <p className="text-gray-600">Owner, {study.restaurant}</p>
                    <p className="text-gray-500 text-sm">{study.location} • {study.type}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-yellow-500 opacity-50" />
                  <blockquote className="text-xl text-gray-700 italic leading-relaxed pl-6">
                    {study.quote}
                  </blockquote>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {study.results.map((result, resultIndex) => {
                const Icon = result.icon;
                return (
                  <div key={resultIndex} className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-yellow-500" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{result.value}</div>
                    <div className="text-gray-600 font-medium">{result.metric}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Other Case Studies */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Every restaurant has unique challenges. See how others overcame theirs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.filter(study => !study.featured).map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src={study.image} 
                  alt={study.restaurant}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src={study.ownerImage} 
                      alt={study.owner}
                      className="w-12 h-12 rounded-full mr-3 object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{study.restaurant}</h3>
                      <p className="text-gray-600 text-sm">{study.owner} • {study.location}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.slice(0, 2).map((result, resultIndex) => {
                      const Icon = result.icon;
                      return (
                        <div key={resultIndex} className="text-center p-4 bg-gray-50 rounded-lg">
                          <Icon className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{result.value}</div>
                          <div className="text-gray-600 text-sm">{result.metric}</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <blockquote className="text-gray-700 italic border-l-4 border-yellow-500 pl-4">
                    "{study.quote}"
                  </blockquote>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Results achieved in {study.timeline}</span>
                    <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-300 flex items-center">
                      Read Full Story
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Across All Restaurant Types
            </h2>
            <p className="text-xl text-gray-600">
              RestroBoost works for every type of restaurant, from food trucks to fine dining.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-yellow-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">{industry.count} restaurants</span>
                  <span className="text-green-600 font-semibold">{industry.growth} avg growth</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(100, (industry.count / 200) * 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Path to Success
            </h2>
            <p className="text-xl text-gray-600">
              Our proven implementation process ensures you see results quickly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Setup & Onboarding', description: 'We help you get started with personalized setup and training.', time: 'Week 1' },
              { step: '2', title: 'Data Integration', description: 'Connect your existing systems and import your data seamlessly.', time: 'Week 2' },
              { step: '3', title: 'Team Training', description: 'Your staff learns the system with our comprehensive training program.', time: 'Week 3-4' },
              { step: '4', title: 'Optimization', description: 'Fine-tune settings and start seeing measurable improvements.', time: 'Month 2+' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <span className="text-yellow-600 font-medium">{phase.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to write your success story?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful restaurants using RestroBoost to transform their operations and boost revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onGetStarted}
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-yellow-600 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          
          <div className="mt-8 text-yellow-100">
            <p>Join 500+ restaurants already growing with RestroBoost</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;