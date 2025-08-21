'use client';

import React from 'react';
import { Building, GraduationCap, Heart, Car, Dumbbell, Warehouse, Home, Hammer, MapPin } from 'lucide-react';
import Link from 'next/link';

const Locations: React.FC = () => {
  const locationTypes = [
    {
      icon: Building,
      title: 'Office Buildings',
      description: 'Modern workplace amenities for corporate environments',
      link: '/locations/office-buildings'
    },
    {
      icon: GraduationCap,
      title: 'Educational Facilities',
      description: 'Schools, colleges, and universities',
      link: '/locations/colleges-universities'
    },
    {
      icon: Heart,
      title: 'Healthcare Facilities',
      description: 'Hospitals, clinics, and medical centers',
      link: '/locations/healthcare-facilities'
    },
    {
      icon: Car,
      title: 'Car Dealerships',
      description: 'Service areas and customer waiting rooms',
      link: '/locations/car-dealerships'
    },
    {
      icon: Dumbbell,
      title: 'Sports & Fitness',
      description: 'Gyms, recreation centers, and sports facilities',
      link: '/locations/sports-fitness'
    },
    {
      icon: Warehouse,
      title: 'Warehouse & Distribution',
      description: 'Industrial facilities and distribution centers',
      link: '/locations/warehouse-distribution'
    },
    {
      icon: Home,
      title: 'Multi-Family Housing',
      description: 'Apartments and residential communities',
      link: '/locations/apartments-multi-family'
    },
    {
      icon: Hammer,
      title: 'Construction Sites',
      description: 'Temporary and permanent construction facilities',
      link: '/locations/construction-sites'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-mint">
            Perfect for Any <span className="text-coral">Location</span>
          </h2>
          <p className="text-lg text-peach max-w-3xl mx-auto">
            Our flexible solutions adapt to any environment. From corporate offices to construction sites, 
            we have the perfect vending solution for your space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locationTypes.map((location, index) => (
            <Link
              key={index}
              href={location.link}
              className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-6 hover:shadow-glow transition-all group block"
            >
              <div className="text-center">
                <div className="bg-navy/60 rounded-lg p-4 inline-block mb-4 group-hover:scale-110 transition-transform">
                  <location.icon className="h-8 w-8 text-mint" />
                </div>
                <h3 className="text-lg font-semibold text-coral mb-2">{location.title}</h3>
                <p className="text-peach text-sm">{location.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-8 max-w-2xl mx-auto">
            <MapPin className="h-12 w-12 text-mint mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-coral mb-4">Serving Carroll & Baltimore County</h3>
            <p className="text-peach mb-6">
              We proudly serve businesses throughout Carroll County and parts of Baltimore County, Maryland 
              with our comprehensive vending solutions.
            </p>
            <Link
              href="/service-area"
              className="inline-block bg-gradient-pastel text-navy px-8 py-3 rounded-full font-semibold hover:shadow-neon transition-all"
            >
              View Service Area
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;