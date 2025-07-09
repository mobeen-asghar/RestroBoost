import React, { useState } from 'react';
import { 
  Check, 
  Star, 
  Zap, 
  Crown, 
  ArrowRight,
  Users,
  BarChart3,
  Shield,
  Clock,
  Phone,
  Mail
} from 'lucide-react';

interface PricingPageProps {
  onGetStarted: () => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onGetStarted }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for small restaurants just getting started',
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        'Basic analytics dashboard',
        'Inventory tracking for up to 100 items',
        'Customer feedback collection',
        'Email support',
        '1 restaurant location',
        'Basic reporting',
        'Mobile app access'
      ],
      limitations: [
        'Limited to 500 orders/month',
        'Basic integrations only'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Professional',
      icon: Star,
      description: 'Most popular choice for growing restaurants',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Advanced analytics & insights',
        'Unlimited inventory tracking',
        'AI-powered customer sentiment analysis',
        'Priority email & chat support',
        'Up to 3 restaurant locations',
        'Advanced reporting & forecasting',
        'All integrations included',
        'Staff management tools',
        'Menu optimization recommendations'
      ],
      limitations: [],
      popular: true,
      color: 'yellow'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'For restaurant chains and large operations',
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        'Everything in Professional',
        'Unlimited restaurant locations',
        'Custom analytics & reporting',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations',
        'Advanced security features',
        'Multi-location management',
        'White-label options',
        'API access',
        'Custom training sessions'
      ],
      limitations: [],
      popular: false,
      color: 'purple'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees. We believe in transparent pricing with no hidden costs.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and ACH bank transfers for annual plans.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required to start.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely. You can cancel your subscription at any time with no cancellation fees. Your access continues until the end of your billing period.'
    },
    {
      question: 'Do you provide training and onboarding?',
      answer: 'Yes, all plans include onboarding support. Professional and Enterprise plans include dedicated training sessions.'
    }
  ];

  const addOns = [
    {
      name: 'Advanced Analytics',
      description: 'Deep-dive analytics with custom dashboards',
      price: 29
    },
    {
      name: 'Additional Locations',
      description: 'Add more restaurant locations to your account',
      price: 19
    },
    {
      name: 'Priority Support',
      description: '24/7 phone support with dedicated account manager',
      price: 49
    },
    {
      name: 'Custom Integrations',
      description: 'Connect with your existing POS and other systems',
      price: 99
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const annualCost = plan.annualPrice * 12;
    return monthlyCost - annualCost;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-yellow-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 block">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your restaurant. Start with a 14-day free trial, no credit card required.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                  isAnnual ? 'bg-yellow-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="ml-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Save up to 20%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const price = getPrice(plan);
              const savings = getSavings(plan);
              
              return (
                <div 
                  key={index} 
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    plan.popular ? 'ring-2 ring-yellow-500 scale-105' : 'border border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                        plan.color === 'yellow' ? 'bg-yellow-100' :
                        plan.color === 'purple' ? 'bg-purple-100' : 'bg-blue-100'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          plan.color === 'yellow' ? 'text-yellow-500' :
                          plan.color === 'purple' ? 'text-purple-500' : 'text-blue-500'
                        }`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">${price}</span>
                        <span className="text-gray-600 ml-2">/{isAnnual ? 'month' : 'month'}</span>
                      </div>
                      {isAnnual && savings > 0 && (
                        <p className="text-green-600 text-sm mt-1">
                          Save ${savings}/year vs monthly billing
                        </p>
                      )}
                    </div>
                    
                    <button 
                      onClick={onGetStarted}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 mb-8 ${
                        plan.popular 
                          ? 'bg-yellow-500 text-white hover:bg-yellow-600 transform hover:-translate-y-1 hover:shadow-lg'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      Start Free Trial
                    </button>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">What's included:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {plan.limitations.length > 0 && (
                        <div className="pt-4 border-t border-gray-200">
                          <h5 className="text-sm font-medium text-gray-500 mb-2">Limitations:</h5>
                          <ul className="space-y-2">
                            {plan.limitations.map((limitation, limitIndex) => (
                              <li key={limitIndex} className="text-sm text-gray-500">
                                • {limitation}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Optional Add-ons
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your plan with additional features and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{addon.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">${addon.price}</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Need something custom?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              For large restaurant chains or unique requirements, we offer custom enterprise solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dedicated Support</h3>
              <p className="text-gray-600">Get a dedicated account manager and priority support for your team.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Analytics</h3>
              <p className="text-gray-600">Build custom dashboards and reports tailored to your specific needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">Advanced security features including SSO, audit logs, and compliance tools.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </button>
              <button className="flex items-center justify-center px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of restaurants already using RestroBoost to grow their business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onGetStarted}
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-yellow-600 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-yellow-100">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;