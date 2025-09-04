"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section id="about" className="w-full py-24 md:py-32 lg:py-40 relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background to-secondary/30 z-0"></div>
       <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
       <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none glow">
                Adam Atito
              </h1>
              <div className="text-2xl text-primary font-medium font-headline">
                <TypeAnimation
                  sequence={[
                    'Computer Science Student',
                    2000,
                    'Aspiring Data Engineer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Ambitious Computer Science at Ain Shams University, enrolled in the DEPI Microsoft Data Engineer program. Passionate about data, security, and applying technical knowledge in real-world projects.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" /> Get in Touch
                </Link>
              </Button>
               <Button asChild variant="outline" size="lg" className="transition-transform duration-300 hover:scale-105">
                <Link href="https://drive.google.com/file/d/1hL1FSVWln8EF7zi-9VHopYbigLtM6izq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" /> Resume
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="transition-transform duration-300 hover:scale-105">
                <Link href="https://www.linkedin.com/in/adam-atito/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="transition-transform duration-300 hover:scale-105">
                <Link href="https://github.com/AdamAtito" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img
              src="/images/adam-atito-profile.jpg"
              alt="Adam Atito"
              width={600}
              height={600}
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover sm:w-full relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
