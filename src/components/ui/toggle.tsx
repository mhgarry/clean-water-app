"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center  whitespace-nowrap bg-transparent rounded-md text-sm font-bold transition-colors  duration-500 ring-offset-background focus-visible:outline-none p-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disable:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 w-1/3",
  {
    variants: {
      variant: {
        default:
          "bg-muted text-muted-foreground/10 font-base  disable:opacity-20 ",
        safe: "bg-green-500 text-background font-bold hover:text-accent hover:font-bold hover:bg-green-500/80 ",
        caution:
          "bg-yellow-500 text-background font-bold hover:text-accent hover:font-bold hover:bg-yellow-500/80 ",
        danger:
          "bg-destructive text-background font-bold hover:text-accent hover:font-bold hover:bg-destructive",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    },
  }
);

export interface ToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof toggleVariants> {
  asChild?: boolean;
}

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = TogglePrimitive.Root;
  return (
    <Comp
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
});
Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
