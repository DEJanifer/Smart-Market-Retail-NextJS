'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, User, Building, MessageSquare } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const ContactPageContent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    location: '',
    solutions: '',
    helpWith: '',
    message: '',
    subject: 'General Inquiry'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessName: '',
          location: '',
          solutions: '',
          helpWith: '',
          message: '',
          subject: 'General Inquiry'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen text-lavender font-sans">
        <div className="background-wrapper"></div>
        <div className="relative z-10 flex flex-col flex-grow">
          <Header />
          
          <main className="flex-grow flex items-center justify-center">
            <div className="container mx-auto px-4 md:px-6 py-24">
              <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-8 max-w-2xl mx-auto text-center">
                <CheckCircle className="h-16 w-16 text-mint mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-mint mb-4">Thank You!</h1>
                <p className="text-peach text-lg mb-6">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-pastel text-navy px-8 py-3 rounded-full font-semibold hover:shadow-neon transition-all"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    );
  }

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
                  Contact <span className="text-coral">Smart Market Retail</span>
                </h1>
                <p className="text-xl text-peach max-w-3xl mx-auto leading-relaxed">
                  Ready to transform your breakroom? Get in touch for a free consultation and discover 
                  how our smart vending solutions can enhance your workplace experience.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form and Info */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-coral mb-6 flex items-center">
                    <Send className="mr-3" size={28} />
                    Get Your Free Consultation
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-mint font-semibold mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-navy/60 border border-mint/20 rounded-lg text-lavender placeholder-lavender/60 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/20"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-mint font-semibold mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-navy/60 border border-mint/20 rounded-lg text-lavender placeholder-lavender/60 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/20"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-mint font-semibold mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-navy/60 border border-mint/20 rounded-lg text-lavender placeholder-lavender/60 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/20"
                          placeholder="(410) 555-0123"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="businessName" className="block text-mint font-semibold mb-2">
                          Business Name
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-navy/60 border border-mint/20 rounded-lg text-lavender placeholder-lavender/60 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/20"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-mint font-semibold mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-navy/60 border border-mint/20 rounded-lg text-lavender placeholder-lavender/60 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/20"
                        placeholder="City, State"
                      />
                    </div>

                    <div>
                      <label htmlFor="solutions" className="block text-mint font-semibold mb-2">
                        Interested Solutions
                      </label>
                      <select
                        id="solutions"
                        name="solutions"
                        value={formData.solutions}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-navy/60 border border-mint/20 rounded-lg text-lavender focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/20"
                      >
                        <option value="">Select a solution</option>
                        <option value="Smart Stores">Smart Stores</option>
                        <option value="Micro Markets">Micro Markets</option>
                        <option value="Smart Coolers">Smart Coolers</option>
                        <option value="Smart Traditional Vending">Smart Traditional Vending</option>
                        <option value="Not Sure">Not Sure - Need Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-mint font-semibold mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-navy/60 border border-mint/20 rounded-lg text-lavender placeholder-lavender/60 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/20 resize-vertical"
                        placeholder="Tell us about your space, number of employees, and what you're looking for..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-pastel text-navy px-8 py-4 rounded-full font-semibold hover:shadow-neon transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-navy"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-mint mb-6">Get In Touch</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-coral font-semibold mb-1">Phone</h3>
                          <a href="tel:+14102205652" className="text-peach hover:text-mint transition-colors">
                            (410) 220-5652
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-coral font-semibold mb-1">Email</h3>
                          <a href="mailto:info@smartmarketretail.com" className="text-peach hover:text-mint transition-colors">
                            info@smartmarketretail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-coral font-semibold mb-1">Address</h3>
                          <div className="text-peach">
                            <p>SMART MARKET RETAIL LLC</p>
                            <p>405 North Center Street</p>
                            <p>STE 25 #1034</p>
                            <p>Westminster, MD 21157</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-coral mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-coral font-semibold mb-1">Response Time</h3>
                          <p className="text-peach">Within 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-8">
                    <h3 className="text-xl font-bold text-mint mb-4">Why Choose Us?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-coral mt-0.5 flex-shrink-0" />
                        <span className="text-peach text-sm">Zero cost installation and maintenance</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-coral mt-0.5 flex-shrink-0" />
                        <span className="text-peach text-sm">Local Maryland company with personalized service</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-coral mt-0.5 flex-shrink-0" />
                        <span className="text-peach text-sm">Advanced AI-powered technology</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-coral mt-0.5 flex-shrink-0" />
                        <span className="text-peach text-sm">24/7 monitoring and support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Area */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="bg-navy/40 backdrop-blur-sm border border-mint/20 rounded-lg p-8 max-w-4xl mx-auto text-center">
                <MapPin className="h-12 w-12 text-coral mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-mint mb-4">
                  Serving Carroll & Baltimore County
                </h2>
                <p className="text-peach mb-8 text-lg">
                  We proudly serve businesses throughout Carroll County and parts of Baltimore County, Maryland 
                  with our comprehensive smart vending solutions.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-lavender">
                  <div>Westminster</div>
                  <div>Eldersburg</div>
                  <div>Reisterstown</div>
                  <div>Owings Mills</div>
                  <div>Taneytown</div>
                  <div>Sykesville</div>
                  <div>Mount Airy</div>
                  <div>Manchester</div>
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

export default ContactPageContent;