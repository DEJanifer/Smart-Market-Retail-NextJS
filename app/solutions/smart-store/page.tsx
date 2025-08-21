import type { Metadata } from 'next';
import SmartStorePageContent from '../../components/SmartStorePageContent';

export const metadata: Metadata = {
  title: 'Smart Stores - AI-Powered Vending Machines | Smart Market Retail',
  description: 'Experience the future of vending with Smart Market Retail\'s Smart Stores. AI-powered vending machines with Tap, Grab & Go convenience, contactless payments, and real-time inventory management for Carroll & Baltimore County MD.',
  keywords: 'smart stores, AI vending machines, smart vending technology, contactless vending, tap grab go, intelligent vending, modern vending machines, automated retail, smart inventory management',
};

export default function SmartStorePage() {
  return <SmartStorePageContent />;
}