import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillsData = {
  "Programming": { icon: Code, skills: ["C++", "Python"] },
  "Data": { icon: Database, skills: ["SQL", "Data Processing", "EDA"] },
  "Cloud & Tools": { icon: Cloud, skills: ["Azure", "Git", "GitHub"] },
  "Linux": { icon: Terminal, skills: ["Intermediate", "Terminal", "File System", "Commands"] },
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
      {children}
    </h2>
);


export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skillsData).map(([category, { icon: Icon, skills }]) => (
            <Card key={category}>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                <CardTitle className="font-headline text-xl">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 pt-4">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
