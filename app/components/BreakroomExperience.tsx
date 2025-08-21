'use client';

import React from 'react';
import { Coffee, Users, Clock, Star } from 'lucide-react';

const BreakroomExperience: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-mint">
            Transform Your <span className="text-coral">Breakroom Experience</span>
          </h2>
          <p className="text-lg text-peach max-w-3xl mx-auto">
            Gone are the days of stale vending machine snacks and limited options. 
            Our modern solutions create spaces where employees actually want to spend time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-6 hover:shadow-glow transition-all">
              <Coffee className="h-12 w-12 text-mint mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-coral mb-2">Fresh Options</h3>
              <p className="text-peach">
                Fresh salads, sandwiches, and healthy meals delivered daily
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-6 hover:shadow-glow transition-all">
              <Users className="h-12 w-12 text-mint mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-coral mb-2">Social Hub</h3>
              <p className="text-peach">
                Create gathering spaces that foster team collaboration
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-6 hover:shadow-glow transition-all">
              <Clock className="h-12 w-12 text-mint mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-coral mb-2">24/7 Access</h3>
              <p className="text-peach">
                Round-the-clock availability for all shifts and schedules
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-6 hover:shadow-glow transition-all">
              <Star className="h-12 w-12 text-mint mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-coral mb-2">Premium Quality</h3>
              <p className="text-peach">
                Curated selection of premium brands and local favorites
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakroomExperience;