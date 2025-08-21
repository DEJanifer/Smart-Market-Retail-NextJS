'use client';

import React from 'react';
import { ShoppingCart, Building2, Refrigerator, Coffee } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Smart Stores',
      description: 'AI-powered vending with Tap, Grab & Go convenience',
      icon: ShoppingCart,
      image: '/Smart Store 700 05.1_medium.webp',
      link: '/solutions/smart-store',
      features: ['Contactless payments', 'Real-time inventory', 'AI-powered security']
    },
    {
      title: 'Micro Markets',
      description: 'Open-concept convenience stores for your workplace',
      icon: Building2,
      image: '/Large Micro Market 15.1_medium.webp',
      link: '/solutions/micro-markets',
      features: ['Fresh food options', 'Self-checkout kiosks', 'Customizable layouts']
    },
    {
      title: 'Smart Coolers',
      description: 'High-capacity cooling with computer vision technology',
      icon: Refrigerator,
      image: '/CoolSmart_AI_Solo_Center_medium.webp',
      link: '/solutions/smart-coolers',
      features: ['Energy Star rated', 'Computer vision', 'Maximum capacity']
    },
    {
      title: 'Smart Traditional Vending',
      description: 'Enhanced reliability with modern payment options',
      icon: Coffee,
      image: '/Smart Store 600 05.1_medium.webp',
      link: '/solutions/smart-vending',
      features: ['Remote monitoring', 'Cashless payments', 'Reliable service']
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-mint">
            Our <span className="text-coral">Solutions</span>
          </h2>
          <p className="text-lg text-peach max-w-3xl mx-auto">
            From AI-powered Smart Stores to fresh food Micro Markets, we have the perfect solution for every space and need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg overflow-hidden hover:shadow-glow transition-all group">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-mint mr-3" />
                  <h3 className="text-xl font-semibold text-coral">{service.title}</h3>
                </div>
                <p className="text-peach mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-lavender">
                      <div className="w-2 h-2 bg-mint rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.link}
                  className="inline-block bg-gradient-pastel text-navy px-6 py-2 rounded-full font-semibold hover:shadow-neon transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;