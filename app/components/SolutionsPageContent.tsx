'use client';

import React from 'react';
import { ShoppingCart, Building2, Refrigerator, Coffee, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from './Header';
import Footer from './Footer';

const SolutionsPageContent: React.FC = () => {
  const solutions = [
    {
      title: 'Smart Stores',
      description: 'AI-powered vending with Tap, Grab & Go convenience',
      icon: ShoppingCart,
      image: '/Smart Store 700 05.1_medium.webp',
      link: '/solutions/smart-store',
      features: [
        'Contactless payments with Apple Pay, Google Pay, and credit cards',
        'Real-time inventory monitoring ensures products are always available',
        'AI-powered security with computer vision technology',
        'Sleek design that enhances any space aesthetic',
        'Customizable product selection based on preferences'
      ],
      benefits: [
        'Perfect for high-traffic areas',
        'No barriers - grab what you need',
        'Instant transactions',
        'Modern workplace amenity'
      ]
    },
    {
      title: 'Micro Markets',
      description: 'Open-concept convenience stores for your workplace',
      icon: Building2,
      image: '/Large Micro Market 15.1_medium.webp',
      link: '/solutions/micro-markets',
      features: [
        'Fresh salads, sandwiches, and healthy meal options',
        'Open shopping experience with no barriers',
        'Self-checkout kiosks for quick and easy transactions',
        'Customizable layout to fit any breakroom space',
        'Wide variety of snacks, beverages, and essentials'
      ],
      benefits: [
        'Transform any breakroom',
        'Fresh food daily',
        'Self-service convenience',
        'Boosts employee satisfaction'
      ]
    },
    {
      title: 'Smart Coolers',
      description: 'High-capacity cooling with computer vision technology',
      icon: Refrigerator,
      image: '/CoolSmart_AI_Solo_Center_medium.webp',
      link: '/solutions/smart-coolers',
      features: [
        'Highest capacity single unit for maximum variety',
        'Energy Star rated for efficient operation',
        'Computer vision technology for accurate transactions',
        'Perfect for corner installations and tight spaces',
        'NAMA Certified for reliability and performance'
      ],
      benefits: [
        'Maximum product capacity',
        'Energy efficient operation',
        'Space-saving design',
        'Advanced AI technology'
      ]
    },
    {
      title: 'Smart Traditional Vending',
      description: 'Enhanced reliability with modern payment options',
      icon: Coffee,
      image: '/Smart Store 600 05.1_medium.webp',
      link: '/solutions/smart-vending',
      features: [
        'Remote monitoring for proactive maintenance',
        'Cashless payments including mobile wallets',
        'Reliable service with guaranteed uptime',
        'Traditional vending with modern enhancements',
        'Customizable product selection'
      ],
      benefits: [
        'Proven reliability',
        'Modern payment options',
        'Remote monitoring',
        'Cost-effective solution'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen text-lavender font-sans">
      <div className="background-wrapper"></div>
      <div className="relative z-10 flex flex-col flex-grow">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-mint">
                  Our <span className="text-coral">Solutions</span>
                </h1>
                <p className="text-xl text-peach max-w-3xl mx-auto leading-relaxed">
                  From AI-powered Smart Stores to fresh food Micro Markets, we have the perfect solution 
                  for every space and need. Discover how our innovative vending solutions can transform 
                  your workplace experience.
                </p>
              </div>
            </div>
          </section>

          {/* Solutions Grid */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="space-y-16">
                {solutions.map((solution, index) => (
                  <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg overflow-hidden hover:shadow-glow transition-all">
                        <div className="relative h-64 md:h-80">
                          <Image
                            src={solution.image}
                            alt={solution.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-8">
                        <div className="flex items-center mb-6">
                          <solution.icon className="h-10 w-10 text-mint mr-4" />
                          <h2 className="text-3xl font-bold text-coral">{solution.title}</h2>
                        </div>
                        
                        <p className="text-peach text-lg mb-6 leading-relaxed">
                          {solution.description}
                        </p>
                        
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-mint mb-4">Key Features:</h3>
                          <ul className="space-y-2">
                            {solution.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start text-peach">
                                <CheckCircle className="h-5 w-5 text-mint mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-coral mb-4">Benefits:</h3>
                          <div className="grid grid-cols-2 gap-2">
                            {solution.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-center text-sm text-lavender">
                                <div className="w-2 h-2 bg-coral rounded-full mr-2 flex-shrink-0"></div>
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Link
                          href={solution.link}
                          className="inline-flex items-center bg-gradient-pastel text-navy px-6 py-3 rounded-full font-semibold hover:shadow-neon transition-all group"
                        >
                          Learn More
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Our Solutions */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-mint">
                  Why Choose Our <span className="text-coral">Solutions?</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-6 text-center hover:shadow-glow transition-all">
                  <div className="bg-mint/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-lg font-semibold text-coral mb-2">Zero Cost to You</h3>
                  <p className="text-peach text-sm">
                    We provide, install, and maintain all equipment at no charge to your business.
                  </p>
                </div>

                <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-6 text-center hover:shadow-glow transition-all">
                  <div className="bg-coral/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-lg font-semibold text-mint mb-2">Full Service Support</h3>
                  <p className="text-peach text-sm">
                    From installation to daily maintenance, we handle everything so you don't have to.
                  </p>
                </div>

                <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-6 text-center hover:shadow-glow transition-all">
                  <div className="bg-lavender/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-semibold text-coral mb-2">Customized Solutions</h3>
                  <p className="text-peach text-sm">
                    Tailored product selection and layouts designed specifically for your space and needs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-8 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-mint mb-6">
                  Ready to Transform Your <span className="text-coral">Workplace?</span>
                </h2>
                <p className="text-peach mb-8 text-lg">
                  Contact us today for a free consultation and discover which solution is perfect for your space.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-gradient-pastel text-navy px-8 py-3 rounded-full font-semibold hover:shadow-neon transition-all"
                  >
                    Get Free Consultation
                  </Link>
                  <Link
                    href="/locations"
                    className="border-2 border-mint text-mint px-8 py-3 rounded-full hover:bg-mint/10 transition-all"
                  >
                    View Locations We Serve
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default SolutionsPageContent;