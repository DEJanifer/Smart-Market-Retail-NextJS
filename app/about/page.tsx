import type { Metadata } from 'next';
import AboutPageContent from '../components/AboutPageContent';

export const metadata: Metadata = {
  title: 'About Smart Market Retail - Modern Unattended Retail Solutions | Carroll & Baltimore County MD',
  description: 'Learn about Smart Market Retail\'s mission to revolutionize vending with innovative Smart Stores and Micro Markets. Serving Carroll & Baltimore County Maryland with cutting-edge unattended retail technology and exceptional service.',
  keywords: 'about smart market retail, unattended retail company, vending company Maryland, smart vending technology, micro market solutions, Carroll County vending, Baltimore County vending, modern vending services',
};

export default function AboutPage() {
  return <AboutPageContent />;
}