import React from 'react';
import { 
  Users, 
  Target, 
  Award, 
  Heart,
  MapPin,
  Calendar,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react';

interface AboutPageProps {
  onGetStarted: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onGetStarted }) => {
  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Co-Founder',
      bio: 'Former restaurant owner with 15+ years in the industry. Built RestroBoost after experiencing the challenges firsthand.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO & Co-Founder',
      bio: 'Tech veteran with expertise in AI and data analytics. Previously led engineering teams at major tech companies.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Product',
      bio: 'Product strategist with deep understanding of restaurant operations and customer experience design.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Emily Davis',
      role: 'VP of Customer Success',
      bio: 'Dedicated to ensuring every restaurant achieves success with RestroBoost. Former operations consultant.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make is guided by what\'s best for our restaurant partners and their customers.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'We\'re constantly evolving our platform to stay ahead of industry trends and customer needs.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We build trust through honest communication, reliable service, and transparent business practices.'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'We believe in supporting local restaurants and the communities they serve across the country.'
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started with a simple idea: make restaurant management easier and more profitable.'
    },
    {
      year: '2020',
      title: 'First 100 Customers',
      description: 'Reached our first major milestone during a challenging year for the restaurant industry.'
    },
    {
      year: '2021',
      title: 'Series A Funding',
      description: 'Raised $10M to accelerate product development and expand our team.'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Launched advanced AI features for predictive analytics and customer insights.'
    },
    {
      year: '2023',
      title: '500+ Restaurants',
      description: 'Crossed 500 restaurant partners with an average 35% revenue increase.'
    },
    {
      year: '2024',
      title: 'National Expansion',
      description: 'Expanded to serve restaurants in all 50 states with 24/7 support.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Restaurant Partners' },
    { number: '50', label: 'States Served' },
    { number: '2M+', label: 'Orders Processed' },
    { number: '35%', label: 'Avg Revenue Increase' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-yellow-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Restaurants
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 block">
                Across America
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're on a mission to help local restaurants thrive in an increasingly competitive market 
              through innovative technology and unwavering support.
            </p>
            <button 
              onClick={onGetStarted}
              className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              Join Our Mission
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  RestroBoost was born from real frustration. Our founder, Alex Thompson, spent over a decade 
                  running restaurants and experiencing firsthand the challenges that keep restaurant owners 
                  up at night: unpredictable inventory, inconsistent customer feedback, and the constant 
                  struggle to stay profitable.
                </p>
                <p>
                  After selling his restaurant chain in 2018, Alex partnered with tech veteran Sarah Chen 
                  to build the solution he wished he'd had as a restaurant owner. Together, they assembled 
                  a team of restaurant industry experts and world-class engineers to create RestroBoost.
                </p>
                <p>
                  Today, we're proud to serve over 500 restaurants across all 50 states, helping them 
                  increase revenue by an average of 35% while reducing operational headaches. But we're 
                  just getting started.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Restaurant team working together"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower every restaurant owner with the tools, insights, and support they need to 
                build thriving, profitable businesses that serve their communities with excellence.
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A world where every local restaurant has access to enterprise-level technology and 
                insights, leveling the playing field and strengthening communities everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                    <Icon className="w-10 h-10 text-yellow-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From startup to industry leader, here's how we've grown.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-500 hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                          {milestone.year.slice(-2)}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                          <p className="text-yellow-600 font-medium">{milestone.year}</p>
                        </div>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a diverse team of restaurant industry veterans, engineers, and customer success experts 
              united by our passion for helping restaurants succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-yellow-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={member.linkedin} 
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors duration-300"
                    >
                      <Linkedin className="w-4 h-4 text-gray-600 hover:text-blue-600" />
                    </a>
                    <a 
                      href={member.twitter} 
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors duration-300"
                    >
                      <Twitter className="w-4 h-4 text-gray-600 hover:text-blue-400" />
                    </a>
                    <a 
                      href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@restroboost.com`} 
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4 text-gray-600" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're always looking for passionate people who want to make a difference in the restaurant industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Great Culture</h3>
              <p className="text-gray-600">Work with passionate people who care about making a real impact.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth Opportunities</h3>
              <p className="text-gray-600">Advance your career in a fast-growing company with endless possibilities.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Benefits</h3>
              <p className="text-gray-600">Comprehensive health coverage, equity, and flexible work arrangements.</p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl inline-flex items-center">
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Headquarters</h3>
              <p className="text-gray-600">
                123 Innovation Drive<br />
                San Francisco, CA 94105
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600">
                hello@restroboost.com<br />
                support@restroboost.com
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Schedule a Demo</h3>
              <p className="text-gray-600">
                Book a personalized demo<br />
                with our team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to join our mission?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Help us empower restaurants across America with the tools they need to succeed.
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
        </div>
      </section>
    </div>
  );
};

export default AboutPage;