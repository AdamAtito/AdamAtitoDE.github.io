import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Handshake, Shield, Puzzle } from 'lucide-react';

const volunteeringData = [
  {
    icon: Shield,
    role: 'Technical Supporter, CYBERUS Workshops',
    description: 'Supported cybersecurity workshops on wireless technologies, cryptography, WiFi attacks, WPA2 security, and CTF challenges.',
  },
  {
    icon: Handshake,
    role: 'Network Penetration Testing, CYBERUS',
    description: 'Participated in penetration testing track, practicing Linux, network security, and ethical hacking.',
  },
  {
    icon: Puzzle,
    role: 'Problem Solver, ACM-ASCIS',
    description: 'Practiced algorithmic problem solving and competitive programming using C++.',
  },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
      {children}
    </h2>
);

export default function Volunteering() {
  return (
    <section id="volunteering" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <SectionTitle>Volunteering & Activities</SectionTitle>
        <div className="mx-auto grid max-w-4xl gap-6">
          {volunteeringData.map((item, index) => (
            <Card key={index} className="w-full">
              <CardHeader className="grid grid-cols-[auto_1fr] items-start gap-4 space-y-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="font-headline text-lg">{item.role}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
