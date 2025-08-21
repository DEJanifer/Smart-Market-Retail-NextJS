import type { Metadata } from 'next';
import SmartVendingPageContent from '../../components/SmartVendingPageContent';

export const metadata: Metadata = {
  title: 'Smart Traditional Vending - Enhanced Vending Machines | Smart Market Retail',
  description: 'Upgrade to Smart Market Retail\'s Smart Traditional Vending machines. Enhanced reliability with modern payment options, remote monitoring, and customizable product selection for Carroll & Baltimore County MD locations.',
  keywords: 'smart traditional vending, enhanced vending machines, reliable vending, modern vending technology, cashless vending, remote monitoring vending, traditional vending upgrade',
};

export default function SmartVendingPage() {
  return <SmartVendingPageContent />;
}