"use client";

import * as React from "react";

import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
  NavigationMenuIndicator,
  NavigationMenuTrigger,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavPage, SubPage } from "@/schemas/navSchemas";
import MaxWidthWrapper from "./Max-Width-Wrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";

type NavPageProps = {
  pages: NavPage[];
  subPages?: NavPage[];
  icons?: React.ReactNode;
};

type SubMenuProps = {
  subPages?: SubPage[];
};

type MenuProps = {
  pages: NavPage[];
  subMenuProps: SubMenuProps;
  NavPageProps: NavPageProps;
};

const NavMenu: React.FC<MenuProps> = ({ pages }) => {
  return (
    <section className="w-full  flex-1 justify-center items-center hidden md:flex">
      <MaxWidthWrapper>
        <NavigationMenu>
          <NavigationMenuList>
            {pages.map((page) => (
              <NavigationMenuItem asChild key={page.id}>
                <>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link
                      href={page.href}
                      className="w-full"
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuTrigger>
                        <NavigationMenuIndicator />
                        {page.icon}
                        {page.title}
                      </NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <div className="group transition-all hover:opacity-80">
                            <Image
                              src="/water-droplet-logo.svg"
                              alt="Water Droplet Logo"
                              width={400}
                              height={200}
                              objectFit="cover"
                              className="rounded-md h-10 w-10"
                            />
                            <div className="text-lg font-bold text-primary mb-2 mt-4">
                              Water Checker
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Check the status of drinking water data by area.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuLink>
                </>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </MaxWidthWrapper>
    </section>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavMenu;
