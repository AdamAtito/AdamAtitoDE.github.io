import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { University, BookOpen } from 'lucide-react';

const educationData = [
  {
    icon: University,
    institution: 'Ain Shams University',
    degree: 'Bachelor of Computer and Information Science',
    duration: '2024 – 2028',
  },
  {
    icon: BookOpen,
    institution: 'DEPI Microsoft',
    degree: 'Data Engineer Program',
    duration: 'June – December 2025',
  },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
      {children}
    </h2>
);

export default function Education() {
  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <SectionTitle>Education</SectionTitle>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <edu.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-headline">{edu.institution}</CardTitle>
                  <CardDescription>{edu.degree}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{edu.duration}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
