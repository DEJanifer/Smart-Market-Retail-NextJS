'use client';

import React from 'react';
import { Zap, Shield, Users, Award } from 'lucide-react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-mint">
              The Future of <span className="text-coral">Vending</span>
            </h2>
            <p className="text-lg text-peach mb-6">
              Smart Market Retail is revolutionizing the vending industry with cutting-edge technology 
              and exceptional service. We're not just a vending company – we're your partner in creating 
              modern workplace experiences.
            </p>
            <p className="text-peach mb-8">
              Our mission is to enhance spaces with innovative unattended retail solutions that employees 
              love and businesses trust. From AI-powered Smart Stores to fresh food Micro Markets, 
              we deliver convenience without compromise.
            </p>
            <Link
              href="/about"
              className="inline-block bg-gradient-pastel text-navy px-8 py-3 rounded-full font-semibold hover:shadow-neon transition-all"
            >
              Learn More About Us
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-6 text-center">
              <Zap className="h-12 w-12 text-mint mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-coral mb-2">Innovation</h3>
              <p className="text-sm text-peach">
                Cutting-edge AI and smart technology
              </p>
            </div>

            <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-6 text-center">
              <Shield className="h-12 w-12 text-mint mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-coral mb-2">Reliability</h3>
              <p className="text-sm text-peach">
                24/7 monitoring and maintenance
              </p>
            </div>

            <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-mint mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-coral mb-2">Service</h3>
              <p className="text-sm text-peach">
                Dedicated local support team
              </p>
            </div>

            <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-6 text-center">
              <Award className="h-12 w-12 text-mint mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-coral mb-2">Quality</h3>
              <p className="text-sm text-peach">
                Premium products and brands
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;