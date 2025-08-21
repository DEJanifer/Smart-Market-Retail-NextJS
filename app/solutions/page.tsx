import type { Metadata } from 'next';
import SolutionsPageContent from '../components/SolutionsPageContent';

export const metadata: Metadata = {
  title: 'Our Vending Solutions - Smart Stores, Micro Markets & Traditional Vending | Smart Market Retail',
  description: 'Discover Smart Market Retail\'s comprehensive vending solutions: Smart Stores with AI technology, Micro Markets for fresh food, and Smart Traditional Vending. Serving Carroll & Baltimore County MD with 24/7 unattended retail.',
  keywords: 'smart vending solutions, smart stores, micro markets, traditional vending, AI vending machines, unattended retail, office vending, contactless payments, fresh food vending, Carroll County, Baltimore County',
};

export default function SolutionsPage() {
  return <SolutionsPageContent />;
}