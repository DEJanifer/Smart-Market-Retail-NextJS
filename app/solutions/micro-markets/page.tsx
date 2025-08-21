import type { Metadata } from 'next';
import MicroMarketsPageContent from '../../components/MicroMarketsPageContent';

export const metadata: Metadata = {
  title: 'Micro Markets - Self-Service Convenience Stores | Smart Market Retail',
  description: 'Transform your breakroom with Smart Market Retail\'s Micro Markets. Open-concept self-service stores with fresh food, snacks, beverages, and contactless checkout. Serving Carroll & Baltimore County MD with 24/7 convenience.',
  keywords: 'micro markets, self-service stores, breakroom upgrade, fresh food vending, open concept retail, self-checkout kiosks, office convenience store, unattended retail markets',
};

export default function MicroMarketsPage() {
  return <MicroMarketsPageContent />;
}