import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostContent from '../../components/BlogPostContent';
import fm from 'front-matter';

// Import all blog posts
const postModules = require.context('../../../posts', false, /\.md$/);

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  imageUrl: string;
  content: string;
}

function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];
  
  postModules.keys().forEach((key) => {
    const rawContent = postModules(key).default;
    const { attributes, body } = fm(rawContent);
    const slug = key.replace('./', '').replace('.md', '');
    
    posts.push({
      slug,
      title: attributes.title || '',
      date: attributes.date || '',
      author: attributes.author || '',
      summary: attributes.summary || '',
      metaTitle: attributes.metaTitle || attributes.title || '',
      metaDescription: attributes.metaDescription || attributes.summary || '',
      imageUrl: attributes.imageUrl || '',
      content: body
    });
  });
  
  return posts;
}

function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.imageUrl],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}