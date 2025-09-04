"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, MailOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const messages = [
  "Get in touch!",
  "Contact me!",
  "Let's connect!",
  "Open for work!",
];

export default function ContactFAB() {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setTooltipOpen(true);
    }, 2000);

    const interval = setInterval(() => {
      setTooltipOpen(true);
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);

      setTimeout(() => {
        setTooltipOpen(false);
      }, 4000);
    }, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <TooltipProvider>
      <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen}>
        <TooltipTrigger asChild>
          <Button
            asChild
            className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
            size="icon"
            onClick={(e) => {
              if (window.location.hash !== '#contact') {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                // Also update the URL hash
                history.pushState(null, '', '#contact');
              }
            }}
          >
            <Link href="#contact">
              {tooltipOpen ? <MailOpen className="h-6 w-6" /> : <Mail className="h-6 w-6" />}
              <span className="sr-only">Contact Me</span>
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" onPointerDownOutside={(e) => e.preventDefault()}>
          <p>{messages[messageIndex]}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
