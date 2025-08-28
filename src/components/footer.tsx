import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:adamatito12@gmail.com',
    icon: Mail,
    text: 'adamatito12@gmail.com',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adam-atito/',
    icon: Linkedin,
    text: 'adam-atito',
  },
  {
    name: 'Location',
    href: '#',
    icon: MapPin,
    text: 'Obour, Cairo, Egypt',
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary">
      <div className="container mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="font-headline text-2xl font-bold">Contact Me</h2>
            <p className="mt-2 text-muted-foreground">
              Feel free to reach out. I'm always open to new opportunities and collaborations.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 md:items-end">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== 'Location' ? '_blank' : undefined}
                rel={link.name !== 'Location' ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <link.icon className="h-5 w-5" />
                <span>{link.text}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Adam Atito. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
