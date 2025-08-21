'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import { carrollCountyTowns, baltimoreCountyTowns } from './serviceAreaData';

const ServiceAreaPageContent: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-lavender font-sans">
      <div className="background-wrapper"></div>
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="container mx-auto px-4 md:px-6 py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-mint">
              Our <span className="text-coral">Service Area</span>
            </h1>
            <p className="text-lg text-peach max-w-3xl mx-auto">
              Smart Market Retail proudly serves businesses throughout Carroll County and parts of Baltimore County, Maryland with our comprehensive vending solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-coral mb-6 flex items-center">
                <MapPin className="mr-3" size={28} />
                Carroll County
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {carrollCountyTowns.map((town) => (
                  <Link
                    key={town.slug}
                    href={`/service-area/${town.slug}`}
                    className="block p-4 bg-navy/60 rounded-lg hover:bg-mint/10 transition-all hover:shadow-glow"
                  >
                    <h3 className="text-mint font-semibold mb-1">{town.name}</h3>
                    <p className="text-peach text-sm">{town.zipCodes.join(', ')}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-coral mb-6 flex items-center">
                <MapPin className="mr-3" size={28} />
                Baltimore County
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {baltimoreCountyTowns.map((town) => (
                  <Link
                    key={town.slug}
                    href={`/service-area/${town.slug}`}
                    className="block p-4 bg-navy/60 rounded-lg hover:bg-mint/10 transition-all hover:shadow-glow"
                  >
                    <h3 className="text-mint font-semibold mb-1">{town.name}</h3>
                    <p className="text-peach text-sm">{town.zipCodes.join(', ')}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-mint mb-6 text-center">
              Ready to Get Started?
            </h2>
            <p className="text-peach text-center mb-8">
              Contact us today for a free consultation and see how we can transform your breakroom experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="h-8 w-8 text-mint mx-auto mb-3" />
                <h3 className="text-coral font-semibold mb-2">Call Us</h3>
                <a href="tel:+14102205652" className="text-peach hover:text-mint transition-colors">
                  (410) 220-5652
                </a>
              </div>
              
              <div className="text-center">
                <Mail className="h-8 w-8 text-mint mx-auto mb-3" />
                <h3 className="text-coral font-semibold mb-2">Email Us</h3>
                <a href="mailto:info@smartmarketretail.com" className="text-peach hover:text-mint transition-colors">
                  info@smartmarketretail.com
                </a>
              </div>
              
              <div className="text-center">
                <Clock className="h-8 w-8 text-mint mx-auto mb-3" />
                <h3 className="text-coral font-semibold mb-2">Response Time</h3>
                <p className="text-peach">Within 24 hours</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-gradient-pastel text-navy px-8 py-3 rounded-full font-semibold hover:shadow-neon transition-all"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaPageContent;