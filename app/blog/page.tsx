import type { Metadata } from 'next';
import BlogPageContent from '../components/BlogPageContent';

export const metadata: Metadata = {
  title: 'Smart Market Retail Blog',
  description: 'Stay updated with the latest news, tips, and insights on smart vending, micro markets, and workplace amenities from Smart Market Retail.',
};

export default function BlogPage() {
  return <BlogPageContent />;
}