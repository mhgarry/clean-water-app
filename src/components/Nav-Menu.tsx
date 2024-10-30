"use client";

import * as React from "react";

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

type NavPageProps = {
  pages: NavPage[];
  subPages?: NavPage[];
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
                  <Link
                    href={page.href}
                    className="w-full"
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <NavigationMenuTrigger>
                        <NavigationMenuIndicator />
                        {page.icon}
                        {page.title}
                      </NavigationMenuTrigger>
                    </NavigationMenuLink>
                  </Link>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        {page.subPages?.map((subPage) => (
                          <Link
                            href={subPage.href}
                            key={subPage.id}
                            passHref
                            legacyBehavior
                          >
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              {subPage.icon}
                              {subPage.title}
                            </NavigationMenuLink>
                          </Link>
                        ))}
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </MaxWidthWrapper>
    </section>
  );
};

export default NavMenu;
