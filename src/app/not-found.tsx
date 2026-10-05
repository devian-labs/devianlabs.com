import { ButtonLink, Container, Eyebrow, Heading } from "@/components/site/primitives";

export default function NotFound() {
  return (
    <Container className="flex min-h-[calc(100vh-4rem)] flex-col items-start justify-center py-24">
      <Eyebrow>Error 404</Eyebrow>
      <Heading as="h1" className="mb-6 md:text-6xl">This page <em>doesn&apos;t exist.</em></Heading>
      <p className="mb-10 max-w-md text-lg text-fg-2">It may have moved, or the link may be wrong.</p>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/products" variant="secondary">See our products</ButtonLink>
      </div>
    </Container>
  );
}
