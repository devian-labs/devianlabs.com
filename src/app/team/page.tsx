import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "Smruti Ranjan Badatya",
    role: "Founder",
    linkedin: "https://www.linkedin.com/in/iamsmruti/",
  },
  {
    name: "Biswajeet Dehuri",
    role: "Product Manager - App",
    linkedin: "https://www.linkedin.com/in/biswajeet-dehuri-7b1078224/",
  },
  {
    name: "Debesh Mohapatra",
    role: "Product Manager - Web",
    linkedin: "https://www.linkedin.com/in/debesh-mohapatra-650070205/",
  }
];

export const metadata = {
  title: "Team | Devian Labs",
  description: "Meet the team behind Devian Labs.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm bg-muted text-foreground">
          <Users className="w-4 h-4 mr-2" /> Leadership
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Meet Our Team
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
          We are a dedicated group of engineers and product managers building lean, practical software solutions. No black boxes, no over-engineering.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-card hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full mt-4")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" /> Connect on LinkedIn
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
