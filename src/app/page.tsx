import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronRight, Code2, Rocket, Layout, Terminal, Users, Cpu, FileJson, Globe, PlayCircle, ExternalLink, Laptop, QrCode, WifiOff } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b px-4 md:px-6 py-24 md:py-32 lg:py-40 bg-zinc-950 text-zinc-50 selection:bg-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="container relative z-10 mx-auto max-w-5xl flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-6 px-4 py-1 text-sm bg-zinc-900 border-zinc-800 text-zinc-300">
            <Rocket className="w-4 h-4 mr-2 text-primary" /> Building the future, today
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
            We build, launch and scale software products.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-[800px] leading-relaxed">
            Powerful software doesn't have to be complex or expensive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="#products" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8 bg-zinc-50 hover:bg-zinc-200 text-zinc-950 font-medium group")}>
              Explore our products <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="mailto:hello@devianlabs.com" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full px-8 border-zinc-800 text-white hover:bg-zinc-900")}>
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="px-4 md:px-6 py-20 md:py-28 bg-background border-b">
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

      {/* Products Section */}
      <section id="products" className="px-4 md:px-6 py-20 md:py-28 bg-muted/40 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Products</h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              Our core SAAS and tooling solutions built for modern users.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard 
              title="Devian Desktop"
              description="The control center for your dev machine. Built for developers, by developers."
              href="/products/devian-desktop"
              websiteUrl="https://devian.app"
              highlight
            />
            <ProductCard 
              title="Khaoo"
              description="Khaoo digitizes the Menu for small vendors. QR Menu & Table Ordering."
              href="/products/khaoo"
              websiteUrl="https://khaoo.vercel.app"
              highlight
            />
            <ProductCard 
              title="P2P Share"
              description="Share trip memories instantly without internet. Made for Group Trips."
              href="/products/p2p-share"
              highlight
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 md:px-6 py-20 md:py-28 bg-background border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Software Services</h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              We help build robust technological solutions catered strictly to your requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ServiceCard 
              title="Software Development"
              description="End-to-End software delivery based on the precise requirements of the client. Fully scalable architectures."
              href="/services/software-development"
            />
            <ServiceCard 
              title="MVP from Idea"
              description="Quick and lean MVP development based on your raw ideas, enabling fast market validation."
              href="/services/mvp-from-idea"
            />
          </div>
        </div>
      </section>


      {/* Team Section Placeholder */}
      <section className="px-4 md:px-6 py-20 md:py-32 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm bg-muted text-foreground">
            <Users className="w-4 h-4 mr-2" /> Leadership
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">
            Engineers Building Value.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            We are a dedicated team of engineers who have built and delivered software across multiple domains—from MVPs to production systems. We focus on understanding your problem deeply, moving fast, and delivering clean, reliable solutions.
          </p>
          
          <div className="flex justify-center">
             <Link href="/team" className={cn(buttonVariants({ size: "lg", variant: "default" }), "rounded-full px-8")}>
               Meet the Team <ArrowRight className="w-4 h-4 ml-2" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ title, description, href, highlight, websiteUrl }: { title: string, description: string, href: string, highlight?: boolean, websiteUrl?: string }) {
  return (
    <Card className={`group flex flex-col h-full bg-card/50 backdrop-blur-md border border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {highlight && (
        <div className="absolute top-4 right-4 z-20">
          <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20 text-xs px-2.5 py-0.5 rounded-full font-medium">Live</Badge>
        </div>
      )}
      
      <CardHeader className="relative z-10 pb-4">
        <CardTitle className="text-xl font-semibold tracking-tight pt-2">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 relative z-10">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
      
      <CardFooter className="flex flex-col gap-3 relative z-10 p-6 pt-2">
        {websiteUrl && (
          <Link href={websiteUrl} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "default" }), "w-full justify-center rounded-xl shadow-sm font-medium transition-all group-hover:shadow-md")}>
            Visit Website <ExternalLink className="w-4 h-4 ml-2 opacity-70" />
          </Link>
        )}
        <div className="w-full pt-3 border-t border-border/50 mt-2 flex justify-center">
           <Link href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center transition-colors mt-1">
             Read Case Study <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
           </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

function ServiceCard({ title, description, href }: { title: string, description: string, href: string }) {
  return (
    <Card className="group flex flex-col h-full bg-card hover:border-primary/50 transition-all">
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={href} className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
          Know more <ChevronRight className="w-4 h-4 ml-2" />
        </Link>
      </CardFooter>
    </Card>
  )
}
