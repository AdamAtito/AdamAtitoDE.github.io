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

export default function ContactFAB() {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setTooltipOpen(true);
    }, 2000);

    const interval = setInterval(() => {
      setTooltipOpen((open) => !open);
    }, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <TooltipProvider>
      <Tooltip open={tooltipOpen}>
        <TooltipTrigger asChild>
          <Button
            asChild
            className="fixed bottom-8 right-8 h-16 w-16 rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
            size="icon"
          >
            <Link href="#contact">
              {tooltipOpen ? <MailOpen className="h-8 w-8" /> : <Mail className="h-8 w-8" />}
              <span className="sr-only">Contact Me</span>
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" onPointerDownOutside={(e) => e.preventDefault()}>
          <p>Get in touch!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
