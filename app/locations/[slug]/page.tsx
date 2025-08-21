import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationTemplateContent from '../../components/LocationTemplateContent';
import { getLocationBySlug } from '../../components/locationData';

export async function generateStaticParams() {
  // Import location data to generate static params
  const { locationTypes } = await import('../../components/locationData');
  
  return locationTypes.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const locationData = getLocationBySlug(params.slug);
  
  if (!locationData) {
    return {
      title: 'Location Not Found',
      description: 'The requested location page could not be found.',
    };
  }

  return {
    title: locationData.seo.title,
    description: locationData.seo.description,
    keywords: locationData.seo.keywords,
  };
}

export default function LocationTemplatePage({ params }: { params: { slug: string } }) {
  const locationData = getLocationBySlug(params.slug);
  
  if (!locationData) {
    notFound();
  }

  return <LocationTemplateContent locationData={locationData} />;
}