import type { Metadata } from 'next';
import ServiceAreaPageContent from '../components/ServiceAreaPageContent';

export const metadata: Metadata = {
  title: 'Service Area | Smart Market Retail | Carroll & Baltimore County, MD',
  description: 'Smart Market Retail proudly serves businesses throughout Carroll County and parts of Baltimore County, Maryland. Find out if your town is in our service area.',
  keywords: 'service area, Carroll County, Baltimore County, Maryland, vending services, micro markets, smart stores, Westminster, Eldersburg, Reisterstown, Owings Mills',
};

export default function ServiceAreaPage() {
  return <ServiceAreaPageContent />;
}