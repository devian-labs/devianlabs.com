import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services } from "@/lib/services";
import ServicePage, { serviceMetadata } from "@/components/site/ServicePage";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return service ? serviceMetadata(service) : { title: "Service not found" };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
