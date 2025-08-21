import type { Metadata } from 'next';
import FAQPageContent from '../components/FAQPageContent';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Smart Market Retail | Micro Markets & Smart Stores in Carroll & Baltimore County, MD',
  description: 'Find answers about Smart Market Retail\'s Micro Markets, Smart Stores, vending, coffee service, installation, pricing, service, and payments. Serving Carroll & Baltimore County, MD.',
  keywords: 'FAQ, frequently asked questions, micro markets, smart stores, vending, office coffee, installation, service, cashless payments, Carroll County, Baltimore County',
};

export default function FAQPage() {
  return <FAQPageContent />;
}