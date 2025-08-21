export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  content: string;
  imageUrl?: string;
  metaTitle?: string;
  metaDescription?: string;
}