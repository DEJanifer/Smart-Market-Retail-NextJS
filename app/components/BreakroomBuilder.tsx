'use client';

import React, { useState } from 'react';
import { Users, MapPin, Coffee, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const BreakroomBuilder: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedType, setSelectedType] = useState('office');

  const sizeOptions = [
    { id: 'small', label: '1-50 People', description: 'Smart Store or Small Micro Market' },
    { id: 'medium', label: '51-200 People', description: 'Medium Micro Market with variety' },
    { id: 'large', label: '200+ People', description: 'Large Micro Market with full amenities' }
  ];

  const typeOptions = [
    { id: 'office', label: 'Office Building', icon: '🏢' },
    { id: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'warehouse', label: 'Warehouse', icon: '🏭' }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-mint">
            Build Your Perfect <span className="text-coral">Breakroom</span>
          </h2>
          <p className="text-lg text-peach max-w-3xl mx-auto">
            Tell us about your space and we'll recommend the ideal solution for your team.
          </p>
        </div>

        <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-coral mb-4 flex items-center">
                <Users className="mr-2" size={24} />
                How many people?
              </h3>
              <div className="space-y-3">
                {sizeOptions.map((option) => (
                  <label key={option.id} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      value={option.id}
                      checked={selectedSize === option.id}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="mr-3 text-mint"
                    />
                    <div>
                      <div className="text-mint font-semibold">{option.label}</div>
                      <div className="text-peach text-sm">{option.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-coral mb-4 flex items-center">
                <MapPin className="mr-2" size={24} />
                What type of location?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {typeOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedType(option.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-center ${
                      selectedType === option.id
                        ? 'border-mint bg-mint/10 text-mint'
                        : 'border-mint/20 text-peach hover:border-mint/40'
                    }`}
                  >
                    <div className="text-2xl mb-2">{option.icon}</div>
                    <div className="text-sm font-semibold">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-pastel text-navy px-8 py-3 rounded-full font-semibold hover:shadow-neon transition-all group"
            >
              <Coffee className="mr-2" size={20} />
              Get My Custom Solution
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakroomBuilder;