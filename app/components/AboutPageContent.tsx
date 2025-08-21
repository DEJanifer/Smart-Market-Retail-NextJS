'use client';

import React from 'react';
import { Zap, Shield, Users, Award, Target, Heart, Star, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

const AboutPageContent: React.FC = () => {
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
                  About <span className="text-coral">Smart Market Retail</span>
                </h1>
                <p className="text-xl text-peach max-w-3xl mx-auto leading-relaxed">
                  We're revolutionizing the vending industry with cutting-edge technology and exceptional service, 
                  creating modern workplace experiences that employees love and businesses trust.
                </p>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-8">
                  <Target className="h-12 w-12 text-mint mb-6" />
                  <h2 className="text-2xl font-bold text-coral mb-4">Our Mission</h2>
                  <p className="text-peach leading-relaxed">
                    To enhance spaces with innovative unattended retail solutions that employees love and businesses trust. 
                    We're dedicated to providing an outstanding customer experience by leveraging cutting-edge technology 
                    and maintaining the highest standards of service.
                  </p>
                </div>

                <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-8">
                  <Heart className="h-12 w-12 text-coral mb-6" />
                  <h2 className="text-2xl font-bold text-mint mb-4">Our Vision</h2>
                  <p className="text-peach leading-relaxed">
                    To be the leading provider of smart vending solutions in Maryland, transforming every breakroom 
                    into a modern convenience destination that boosts employee satisfaction and creates value for 
                    property owners.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-mint">
                  Our <span className="text-coral">Core Values</span>
                </h2>
                <p className="text-lg text-peach max-w-3xl mx-auto">
                  These principles guide everything we do, from product selection to customer service.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-6 text-center hover:shadow-glow transition-all">
                  <Zap className="h-12 w-12 text-mint mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-coral mb-2">Innovation</h3>
                  <p className="text-peach text-sm">
                    Embracing cutting-edge AI and smart technology to deliver superior experiences
                  </p>
                </div>

                <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-6 text-center hover:shadow-glow transition-all">
                  <Shield className="h-12 w-12 text-mint mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-coral mb-2">Reliability</h3>
                  <p className="text-peach text-sm">
                    24/7 monitoring and maintenance ensuring consistent service you can count on
                  </p>
                </div>

                <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-6 text-center hover:shadow-glow transition-all">
                  <Users className="h-12 w-12 text-mint mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-coral mb-2">Service Excellence</h3>
                  <p className="text-peach text-sm">
                    Dedicated local support team committed to exceeding expectations
                  </p>
                </div>

                <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-6 text-center hover:shadow-glow transition-all">
                  <Award className="h-12 w-12 text-mint mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-coral mb-2">Quality</h3>
                  <p className="text-peach text-sm">
                    Premium products and brands that meet the highest standards
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-mint">
                  Why Choose <span className="text-coral">Smart Market Retail?</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-mint mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-coral mb-2">Zero Cost to You</h3>
                        <p className="text-peach">
                          We provide, install, and maintain all equipment at no charge to your business.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-mint mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-coral mb-2">Local Maryland Company</h3>
                        <p className="text-peach">
                          Based in Carroll County, we understand the local market and provide personalized service.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-mint mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-coral mb-2">Advanced Technology</h3>
                        <p className="text-peach">
                          AI-powered Smart Stores and modern Micro Markets with the latest payment options.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-mint mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-coral mb-2">Customized Solutions</h3>
                        <p className="text-peach">
                          Tailored product selection and layouts designed specifically for your space and needs.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-mint mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-coral mb-2">Full-Service Support</h3>
                        <p className="text-peach">
                          From installation to daily maintenance, we handle everything so you don't have to.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-8">
                  <Star className="h-12 w-12 text-coral mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-mint mb-4 text-center">
                    Chamber of Commerce Member
                  </h3>
                  <p className="text-peach text-center mb-6">
                    We're proud members of the Carroll County Chamber of Commerce, demonstrating our 
                    commitment to the local business community.
                  </p>
                  <div className="text-center">
                    <a
                      href="https://members.carrollcountychamber.org/memberdirectory/Details/smart-market-retail-4244419"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-pastel text-navy px-6 py-3 rounded-full font-semibold hover:shadow-neon transition-all"
                    >
                      View Our Membership
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-8 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-mint mb-6">
                  Ready to Transform Your <span className="text-coral">Breakroom?</span>
                </h2>
                <p className="text-peach mb-8 text-lg">
                  Join hundreds of satisfied customers who have elevated their workplace experience with our solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-gradient-pastel text-navy px-8 py-3 rounded-full font-semibold hover:shadow-neon transition-all"
                  >
                    Get Free Consultation
                  </Link>
                  <Link
                    href="/solutions"
                    className="border-2 border-mint text-mint px-8 py-3 rounded-full hover:bg-mint/10 transition-all"
                  >
                    View Our Solutions
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

export default AboutPageContent;