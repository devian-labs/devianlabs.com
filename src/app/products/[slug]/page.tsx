import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', 'products', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return { title: 'Product Not Found' };
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);

  return {
    title: `${data.title} | Devian Labs`,
    description: data.description,
  };
}

export async function generateStaticParams() {
  const productsDirectory = path.join(process.cwd(), 'content', 'products');
  if (!fs.existsSync(productsDirectory)) {
    return [];
  }
  const filenames = fs.readdirSync(productsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', 'products', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return (
    <div className="min-h-screen bg-background py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <Link href="/#domains" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to domains
        </Link>
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <div className="mb-12 border-b pb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{data.title}</h1>
            {data.description && (
              <p className="text-xl text-muted-foreground m-0">{data.description}</p>
            )}
            <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
              {data.date && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> <time dateTime={data.date}>{new Date(data.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                </div>
              )}
              {data.author && (
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" /> <span>{data.author}</span>
                </div>
              )}
            </div>
          </div>
          <div className="markdown-content">
            <Markdown>{content}</Markdown>
          </div>
        </article>
      </div>
    </div>
  );
}
