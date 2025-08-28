import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Adam Atito
              </h1>
              <p className="text-xl text-primary font-medium font-headline">
                Computer Science Student & Aspiring Data Engineer
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Ambitious Computer Science student at Ain Shams University, currently enrolled in the DEPI Microsoft Data Engineer program. Passionate about data, security, and applying technical knowledge in real-world projects.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" /> Get in Touch
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="https://www.linkedin.com/in/adam-atito/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Link>
              </Button>
            </div>
          </div>
          <Image
            src="/images/adam-atito-profile.jpg"
            alt="Adam Atito"
            width={600}
            height={600}
            className="mx-auto aspect-square overflow-hidden rounded-full object-cover sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}
