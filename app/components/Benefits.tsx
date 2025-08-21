'use client';

import React from 'react';
import { TrendingUp, Heart, DollarSign, Clock, Users, Star } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Property Value',
      description: 'Modern amenities that attract and retain quality tenants',
      color: 'text-mint'
    },
    {
      icon: Heart,
      title: 'Employee Wellness',
      description: 'Healthy food options that support workplace wellness programs',
      color: 'text-coral'
    },
    {
      icon: DollarSign,
      title: 'Zero Cost to You',
      description: 'We provide, install, and maintain all equipment at no charge',
      color: 'text-mint'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Employees spend less time traveling for food and more time being productive',
      color: 'text-coral'
    },
    {
      icon: Users,
      title: 'Boost Morale',
      description: 'Create gathering spaces that foster team collaboration and satisfaction',
      color: 'text-mint'
    },
    {
      icon: Star,
      title: 'Competitive Advantage',
      description: 'Stand out in the market with premium workplace amenities',
      color: 'text-coral'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-mint">
            Benefits for Your <span className="text-coral">Property</span>
          </h2>
          <p className="text-lg text-peach max-w-3xl mx-auto">
            Our solutions don't just feed people – they transform spaces into destinations 
            that employees and tenants love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-6 hover:shadow-glow transition-all group">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-navy/60 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-coral mb-2">{benefit.title}</h3>
                  <p className="text-peach text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-mint mb-4">Ready to Transform Your Space?</h3>
            <p className="text-peach mb-6">
              Join hundreds of satisfied property owners who have elevated their spaces with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-pastel text-navy px-8 py-3 rounded-full font-semibold hover:shadow-neon transition-all"
              >
                Get Free Consultation
              </a>
              <a
                href="/solutions"
                className="border-2 border-mint text-mint px-8 py-3 rounded-full hover:bg-mint/10 transition-all"
              >
                View Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;