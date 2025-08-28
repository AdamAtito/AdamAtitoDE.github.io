import React from 'react';
import { Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const certificationsData = [
  {
    name: 'Python Developer',
    issuer: 'Sololearn',
    date: 'July 2025',
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
            <Card key={index}>
              <CardContent className="p-6 flex items-center gap-4">
                <Award className="h-8 w-8 text-accent" />
                <div className="grid gap-1">
                  <p className="text-lg font-semibold font-headline">{cert.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} &middot; {cert.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
