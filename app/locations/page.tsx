import type { Metadata } from 'next';
import LocationPageContent from '../components/LocationPageContent';

export const metadata: Metadata = {
  title: 'Vending Locations - Office Buildings, Schools, Healthcare & More | Smart Market Retail',
  description: 'Smart Market Retail serves diverse locations across Carroll & Baltimore County MD: office buildings, colleges, healthcare facilities, hotels, warehouses, and more. Discover perfect vending solutions for your location type.',
  keywords: 'vending locations, office building vending, school vending, healthcare vending, hotel vending, warehouse vending, apartment vending, construction site vending, Carroll County locations, Baltimore County locations',
};

export default function LocationPage() {
  return <LocationPageContent />;
}