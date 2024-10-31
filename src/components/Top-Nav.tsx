"use client";
import React from "react";
import MaxWidthWrapper from "./Max-Width-Wrapper";
import Image from "next/image";
import { NavPage, SubPage } from "@/schemas/navSchemas";
import Link from "next/link";
import ModeToggle from "./Mode-Toggle";
import { HomeIcon, Info, Map, ListCheck, Server } from "lucide-react";
import { cn } from "@/lib/utils";
import NavMenu from "./Nav-Menu";
interface TopNavProps {
  pages: NavPage[];
  subPages?: SubPage[];
}

interface SubNavProps {
  pages: NavPage[];
  subPages: SubPage[];
}

const TopNavPages = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    title: "About",
    href: "/about",
    icon: <Info />,
  },
  {
    title: "Water Quality Map",
    href: "/water-quality-map",
    icon: <Map size={24} />,
    subPages: [
      {
        title: "Water Quality Map",
        href: "/water-quality-map",
      },
      {
        title: "State Maps",
        href: "/water-quality-map/state-maps",
      },
    ],
  },
  {
    title: "FAQ",
    href: "/faq",
    icon: <ListCheck size={24} />,
    subPages: [
      {
        title: "App Questions",
        href: "/faq/app-faq",
      },
      {
        title: "Water Safety Questions",
        href: "/faq/water-safety-faq",
      },
      {
        title: "Get In Touch",
        description: "Get in touch with us",
        href: "/contact",
      },
    ],
  },
];

const TopNav: React.FC<TopNavProps> = () => {
  return (
    <header className="h-16 max-h-16 px-4 bg-background/60 flex flex-col items-center justify-center sticky top-0 border-b border-border/40 w-full border py-10  ">
      <MaxWidthWrapper>
        <nav className="w-full flex  justify-start rounded-md shadow-md items-start px-4 bg-background/60 group flex-row py-2">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              {" "}
              <Link href="/">
                <div className="flex items-center flex-row justify-start  bg-background/40 rounded w-full max-w-full  transition-colors ease-in-out duration-500">
                  <div className="group-hover:opacity-80 flex flex-row items-center justify-center ">
                    <Image
                      src="/water-droplet-logo.svg"
                      alt="Logo"
                      width={512}
                      height={512}
                      layout="fit"
                      className={cn({
                        "flex justify-between h-8 w-8 md:w-12 md:h-12 items-center":
                          true,
                      })}
                    />
                    <h2 className="text-small sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-primary pr-4">
                      Water Quality Checker
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-row items-center">
              <NavMenu pages={TopNavPages} />
              <ModeToggle />
            </div>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default TopNav;
