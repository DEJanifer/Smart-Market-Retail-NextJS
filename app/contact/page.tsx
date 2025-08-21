import type { Metadata } from 'next';
import ContactPageContent from '../components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Smart Market Retail - Free Vending Consultation | Carroll & Baltimore County MD',
  description: 'Contact Smart Market Retail for a free consultation on Smart Stores and Micro Markets. Serving Carroll & Baltimore County Maryland with zero-cost vending solutions, installation, and maintenance. Call (410) 220-5652.',
  keywords: 'contact smart market retail, free vending consultation, vending services Maryland, smart vending installation, micro market consultation, Carroll County, Baltimore County, (410) 220-5652',
};

export default function ContactPage() {
  return <ContactPageContent />;
}