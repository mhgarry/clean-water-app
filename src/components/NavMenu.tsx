"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavPage } from "@/schemas/navSchemas";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { cn } from "@/lib/utils";

type MenuProps = {
  pages: NavPage[];
};

const NavMenu: React.FC<MenuProps> = ({ pages }) => {
  return (
    <section className="w-full h-full hidden md:flex px-8">
      <MaxWidthWrapper>
        <NavigationMenu>
          <NavigationMenuList>
            {pages.map((page) => (
              <NavigationMenuItem asChild key={page.id}>
                {page.subPages ? (
                  <SubMenuTrigger page={page} />
                ) : (
                  <SingleLink page={page} />
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </MaxWidthWrapper>
    </section>
  );
};
const SingleLink: React.FC<{ page: NavPage }> = ({ page }) => (
  <Link href={page.href} passHref legacyBehavior>
    <NavigationMenuLink
      className={cn(
        navigationMenuTriggerStyle(),
        "px-3 py-2 flex items-center gap-2"
      )}
    >
      {page.icon}
      <span>{page.title}</span>
    </NavigationMenuLink>
  </Link>
);

const SubMenuTrigger: React.FC<{ page: NavPage }> = ({ page }) => (
  <>
    <Link href={page.href} passHref legacyBehavior>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <NavigationMenuTrigger className="gap-2">
          {page.icon}
          <span>{page.title}</span>
        </NavigationMenuTrigger>
      </NavigationMenuLink>
    </Link>

    <NavigationMenuContent>
      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
        <WaterCheckerLogo />
        {page.subPages?.map((subPage: NavPage) => (
          <Link key={subPage.id} href={subPage.href} passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <ListItem title={subPage.title}>{subPage.description}</ListItem>
            </NavigationMenuLink>
          </Link>
        ))}
      </ul>
    </NavigationMenuContent>
  </>
);

const WaterCheckerLogo: React.FC = () => (
  <li className="row-span-3">
    <Link href="/" passHref legacyBehavior>
      <NavigationMenuLink asChild>
        <a className="flex h-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline focus:shadow-md group transition-all duration-200">
          <Image
            className="rounded-md h-8 w-8 group-hover:opacity-80"
            src="/water-droplet-logo.svg"
            alt="Water Droplet Logo"
            width={512}
            height={512}
            objectFit="cover"
          />
          <div className="text-lg font-medium text-muted-foreground mb-2 mt-4 group-hover:text-foreground/80">
            Water Checker
          </div>
        </a>
      </NavigationMenuLink>
    </Link>
  </li>
);

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
));

ListItem.displayName = "ListItem";

export default NavMenu;
