import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronRight, Code2, Rocket, Layout, Terminal, Users, Cpu, FileJson, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b px-4 md:px-6 py-24 md:py-32 lg:py-40 bg-zinc-950 text-zinc-50 selection:bg-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="container relative z-10 mx-auto max-w-5xl flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-6 px-4 py-1 text-sm bg-zinc-900 border-zinc-800">
            <Rocket className="w-4 h-4 mr-2 text-primary" /> Building the future, today
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
            We build, launch and scale software products.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-[800px] leading-relaxed">
            Powerful software doesn't have to be complex or expensive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="#domains" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8 bg-zinc-50 hover:bg-zinc-200 text-zinc-950 font-medium group")}>
              Explore our domains <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="mailto:hello@devianlabs.com" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full px-8 border-zinc-800 text-white hover:bg-zinc-900")}>
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="px-4 md:px-6 py-20 md:py-28 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Our Approach</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe software should be <span className="text-foreground font-medium">simple, focused, and accessible.</span>
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Too many tools today are overloaded with features and high costs—when most users just need one thing done well.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At <strong className="text-foreground font-semibold">Devian Labs</strong>, we build lean, practical solutions that solve real problems without unnecessary complexity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 border p-4 rounded-2xl bg-muted/20">
              <div className="bg-background rounded-xl p-6 border shadow-sm flex flex-col justify-center items-center text-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full"><Layout className="w-6 h-6 text-primary" /></div>
                <h3 className="font-semibold text-sm">Lean</h3>
              </div>
              <div className="bg-background rounded-xl p-6 border shadow-sm flex flex-col justify-center items-center text-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full"><Terminal className="w-6 h-6 text-primary" /></div>
                <h3 className="font-semibold text-sm">Practical</h3>
              </div>
              <div className="bg-background rounded-xl p-6 border shadow-sm flex flex-col justify-center items-center text-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full"><Cpu className="w-6 h-6 text-primary" /></div>
                <h3 className="font-semibold text-sm">Focused</h3>
              </div>
              <div className="bg-background rounded-xl p-6 border shadow-sm flex flex-col justify-center items-center text-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full"><Globe className="w-6 h-6 text-primary" /></div>
                <h3 className="font-semibold text-sm">Accessible</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section id="domains" className="px-4 md:px-6 py-20 md:py-28 bg-muted/40 border-y">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Domains</h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              Our core focus areas spanning product creation, client services, and developer media.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Products Column */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b">
                <Code2 className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold">Products</h3>
              </div>
              <ProductCard 
                title="Devian Desktop"
                description="The control center for your dev machine. Built for developers, by developers."
                href="/products/devian-desktop"
                highlight
              />
              <ProductCard 
                title="Khaoo"
                description="Khaoo digitizes the Menu for small vendors. QR Menu & Table Ordering."
                href="/products/khaoo"
                highlight
              />
              <ProductCard 
                title="P2P Share"
                description="Share trip memories instantly without internet. Made for Group Trips."
                href="/products/p2p-share"
                highlight
              />
            </div>

            {/* Services Column */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b">
                <Cpu className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold">Services</h3>
              </div>
              <ServiceCard 
                title="Software Development"
                description="End-to-End software delivery based on the requirements of the client."
              />
              <ServiceCard 
                title="MVP from Idea"
                description="Quick MVP development based on the idea of the client."
              />
              <ServiceCard 
                title="Software Gigs"
                description="No structured plan or timeline."
              />
              <ServiceCard 
                title="Expose Business to the Internet"
                description="Helping small business to get online exposure."
              />
            </div>

            {/* Media Column */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b">
                <FileJson className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold">Media</h3>
              </div>
              <MediaCard 
                title="Agile Coder"
                description="For practical developers: Videos, tutorials, snippets, and digital tools."
              />
              <MediaCard 
                title="Artful Coding"
                description="For creative developers: Visual experiments, Simulations, Generative art."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="px-4 md:px-6 py-20 md:py-32 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm bg-muted text-foreground">
            <Users className="w-4 h-4 mr-2" /> Our Team
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">
            Engineers Building Value.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            We are a team of engineers who have built and delivered software across multiple domains—from MVPs to production systems. We focus on understanding your problem deeply, moving fast, and delivering clean, reliable solutions.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-muted/30 border p-6 rounded-2xl flex items-start gap-4 hover:border-primary/50 transition-colors">
              <div className="p-2 bg-background rounded-lg border shadow-sm"><Terminal className="w-5 h-5" /></div>
              <div>
                <h3 className="font-semibold mb-1">No black boxes</h3>
                <p className="text-sm text-muted-foreground">Complete clarity in our processes and implementations.</p>
              </div>
            </div>
            <div className="bg-muted/30 border p-6 rounded-2xl flex items-start gap-4 hover:border-primary/50 transition-colors">
              <div className="p-2 bg-background rounded-lg border shadow-sm"><Code2 className="w-5 h-5" /></div>
              <div>
                <h3 className="font-semibold mb-1">No over-engineering</h3>
                <p className="text-sm text-muted-foreground">Lean solutions designed to scale only as needed.</p>
              </div>
            </div>
            <div className="bg-muted/30 border p-6 rounded-2xl flex items-start gap-4 hover:border-primary/50 transition-colors">
              <div className="p-2 bg-background rounded-lg border shadow-sm"><Rocket className="w-5 h-5" /></div>
              <div>
                <h3 className="font-semibold mb-1">Quality output</h3>
                <p className="text-sm text-muted-foreground">Transparent work ensuring reliable, functional systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ title, description, href, highlight }: { title: string, description: string, href: string, highlight?: boolean }) {
  return (
    <Card className={`group flex flex-col h-full bg-card hover:border-primary/50 transition-all ${highlight ? "relative overflow-hidden border-border/70" : ""}`}>
      {highlight && (
        <div className="absolute top-0 right-0 p-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={href} className={cn(buttonVariants({ variant: "ghost" }), "w-full justify-between p-0 h-auto font-medium hover:bg-transparent")}>
          Learn more <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardFooter>
    </Card>
  )
}

function ServiceCard({ title, description }: { title: string, description: string }) {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function MediaCard({ title, description }: { title: string, description: string }) {
  return (
    <Card className="bg-card h-full">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
