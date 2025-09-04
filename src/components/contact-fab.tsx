"use client";

import Link from 'next/link';
import { MessageSquarePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function ContactFAB() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            className="fixed bottom-8 right-8 h-16 w-16 rounded-full shadow-lg"
            size="icon"
          >
            <Link href="#contact">
              <MessageSquarePlus className="h-8 w-8" />
              <span className="sr-only">Contact Me</span>
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Connect with me!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
