import React from 'react';
import { Award, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const certificationsData = [
  {
    name: 'Python Developer',
    issuer: 'Sololearn',
    date: 'July 2025',
    link: 'https://www.sololearn.com/certificates/CC-7MSHDTUH',
  },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
      {children}
    </h2>
);

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <SectionTitle>Certifications</SectionTitle>
        <div className="mx-auto grid max-w-2xl items-start gap-6">
          {certificationsData.map((cert, index) => (
             <Link href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:border-primary/80 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <CardContent className="p-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Award className="h-8 w-8 text-accent" />
                      <div className="grid gap-1">
                        <p className="text-lg font-semibold font-headline">{cert.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer} &middot; {cert.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="group-hover:inline">Show Certificate</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
