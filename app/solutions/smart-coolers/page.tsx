import type { Metadata } from 'next';
import SmartCoolersPageContent from '../../components/SmartCoolersPageContent';

export const metadata: Metadata = {
  title: 'Smart Coolers - CoolSmart AI Market | Smart Market Retail',
  description: 'Experience the CoolSmart AI Market - next-generation smart cooler with computer vision, AI-powered security, and cashless convenience. NAMA Certified and Energy Star Rated cooling solutions from Smart Market Retail.',
  keywords: 'smart coolers, CoolSmart AI Market, computer vision vending, AI-powered coolers, smart cooling technology, energy efficient coolers, cashless coolers, intelligent vending',
};

export default function SmartCoolersPage() {
  return <SmartCoolersPageContent />;
}