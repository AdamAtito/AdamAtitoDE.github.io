import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const projectsData = [
  {
    title: 'Mega Man X Game',
    description: 'Developed a full 2D platformer game inspired by Mega Man X, including player movement, animation states, collision detection, parallax background, and camera logic. Led a team of 7 students and optimized architecture for scalability.',
    tags: ['C++', 'SFML'],
    image: '/images/mega-man-x.jpg',
    imageHint: 'retro gaming',
    isLocal: true,
    link: 'https://github.com/AdamAtito/MegaManX---SFML',
  },
  {
    title: 'SQL – Data Manipulation & DDL/DML/TCL',
    description: 'Implemented queries for database creation, insertion, update, transaction control (rollback/commit), and data retrieval. Gained hands-on experience with SQL fundamentals.',
    tags: ['SQL', 'Database'],
    image: '/images/sql.jpg',
    imageHint: 'server database',
  },
  {
    title: 'EDA on Student Mental Health Dataset',
    description: 'Performed Exploratory Data Analysis on student mental health data using Python, Pandas, and visualization techniques to uncover insights and patterns.',
    tags: ['Python', 'Pandas', 'EDA', 'Data Visualization'],
    image: '/images/analysis.jpg',
    imageHint: 'health chart',
  },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
      {children}
    </h2>
);

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <Card key={index} className="group flex flex-col overflow-hidden bg-background border border-border/50 hover:border-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full object-cover aspect-[16/10] transition-transform duration-500 ease-in-out group-hover:scale-105"
                  data-ai-hint={project.imageHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="flex flex-col flex-grow p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="font-headline">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-0 pt-4 flex-col items-start">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  {project.link && (
                     <Button asChild variant="ghost" className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                     </Button>
                  )}
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
