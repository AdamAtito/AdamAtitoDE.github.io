import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

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
            <Card key={index} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="relative">
                {project.link ? (
                   <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full object-cover aspect-[16/10] cursor-pointer"
                      data-ai-hint={project.imageHint}
                    />
                  </Link>
                ) : (
                  project.isLocal ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full object-cover aspect-[16/10]"
                        data-ai-hint={project.imageHint}
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full object-cover aspect-[16/10]"
                      data-ai-hint={project.imageHint}
                    />
                  )
                )}
              </div>
              <div className="flex flex-col flex-grow p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="font-headline">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-0 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
