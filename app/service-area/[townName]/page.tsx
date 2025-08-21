import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TownPageContent from '../../components/TownPageContent';
import { getTownBySlug, allTowns } from '../../components/serviceAreaData';

export async function generateStaticParams() {
  return allTowns.map((town) => ({
    townName: town.slug,
  }));
}

export async function generateMetadata({ params }: { params: { townName: string } }): Promise<Metadata> {
  const town = getTownBySlug(params.townName);
  
  if (!town) {
    return {
      title: 'Town Not Found',
      description: 'The requested town page could not be found.',
    };
  }

  return {
    title: town.metaTitle,
    description: town.metaDescription,
  };
}

export default function TownPage({ params }: { params: { townName: string } }) {
  const town = getTownBySlug(params.townName);
  
  if (!town) {
    notFound();
  }

  return <TownPageContent town={town} />;
}