import React from 'react';
import { Mail, Linkedin, MapPin, Github } from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.919 6.191l.426.633-1.072 3.911 3.996-1.044.64.416z" />
    </svg>
  );

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
    name: 'GitHub',
    href: 'https://github.com/AdamAtito',
    icon: Github,
    text: 'AdamAtito',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/+201029452432',
    icon: WhatsAppIcon,
    text: 'WhatsApp',
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