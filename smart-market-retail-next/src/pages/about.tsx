import { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';
import ImageCarousel from '../components/ImageCarousel';
import FAQRotator from '../components/FAQRotator';
import { Users, Target, Award, Heart, Zap, Shield, Smartphone, Eye, CreditCard, Building, DollarSign, Palette, ShoppingBag, BarChart3, UserX, Cpu, ArrowRight, ChevronDown, ChevronUp, Search, Settings, Handshake } from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
  const [expandedValue, setExpandedValue] = useState<number | null>(null);
  const [expandedOffering, setExpandedOffering] = useState<number | null>(null);
  const [expandedProcess, setExpandedProcess] = useState<number | null>(null);

  const toggleValue = (index: number) => {
    setExpandedValue(expandedValue === index ? null : index);
  };

  const toggleOffering = (index: number) => {
    setExpandedOffering(expandedOffering === index ? null : index);
  };

  const toggleProcess = (index: number) => {
    setExpandedProcess(expandedProcess === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.fade-in').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Component implementation continues with the same logic as the original AboutPage
  // but using Next.js Link component instead of React Router Link
  
  return (
    <PageLayout
      title="About Smart Market Retail - Modern Unattended Retail Solutions | Carroll & Baltimore County MD"
      description="Learn about Smart Market Retail's mission to revolutionize vending with innovative Smart Stores and Micro Markets. Serving Carroll & Baltimore County Maryland with cutting-edge unattended retail technology and exceptional service."
      keywords="about smart market retail, unattended retail company, vending company Maryland, smart vending technology, micro market solutions, Carroll County vending, Baltimore County vending, modern vending services"
    >
      {/* Content will be the same as original AboutPage but with Next.js Link */}
      <div>About page content goes here...</div>
    </PageLayout>
  );
};

export default AboutPage;