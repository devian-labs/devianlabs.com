import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', 'services', `${slug}.md`);

  if (!fs.existsSync(filePath)) return { title: 'Service Not Found' };

  const { data } = matter(fs.readFileSync(filePath, 'utf8'));
  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: `https://devianlabs.com/services/${slug}` },
    openGraph: {
      url: `https://devianlabs.com/services/${slug}`,
      title: data.title,
      description: data.description,
    },
  };
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content', 'services');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).map((f) => ({ slug: f.replace('.md', '') }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', 'services', `${slug}.md`);
  if (!fs.existsSync(filePath)) notFound();

  const { data, content } = matter(fs.readFileSync(filePath, 'utf8'));

  return (
    <div className="min-h-screen bg-zinc-950">

      {/* Page header */}
      <div className="relative overflow-hidden border-b border-white/[0.06] px-4 md:px-6 py-16 md:py-24">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-600/[0.14] blur-[100px] -top-40 -right-24 animate-orb-1 pointer-events-none will-change-transform" />
        <div className="absolute w-[350px] h-[350px] rounded-full bg-cyan-500/[0.10] blur-[80px] bottom-0 left-0 animate-orb-2 pointer-events-none will-change-transform" />
        <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />

        <div className="container relative z-10 mx-auto max-w-3xl">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-violet-400 mb-8 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to services
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-zinc-50">
            <span className="bg-[linear-gradient(90deg,#fff_0%,#c084fc_40%,#67e8f9_70%,#fff_100%)] bg-[size:200%_auto] bg-clip-text text-transparent animate-shimmer">
              {data.title}
            </span>
          </h1>

          {data.description && (
            <p className="text-lg text-zinc-400 leading-relaxed mb-6">{data.description}</p>
          )}

          {(data.date || data.author) && (
            <div className="flex items-center gap-5 text-sm text-zinc-600">
              {data.date && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <time dateTime={data.date}>
                    {new Date(data.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </time>
                </div>
              )}
              {data.author && (
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> {data.author}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Article body */}
      <div className="px-4 md:px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <article className="prose prose-zinc dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-zinc-100
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-p:text-zinc-400 prose-p:leading-relaxed
            prose-a:text-violet-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-zinc-200
            prose-code:text-violet-300 prose-code:bg-zinc-800/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/[0.07] prose-pre:rounded-2xl
            prose-blockquote:border-l-violet-500/50 prose-blockquote:text-zinc-400
            prose-hr:border-zinc-800
            prose-li:text-zinc-400
          ">
            <Markdown>{content}</Markdown>
          </article>
        </div>
      </div>

    </div>
  );
}
