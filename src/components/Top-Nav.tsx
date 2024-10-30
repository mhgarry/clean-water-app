"use client";
import React from "react";
import MaxWidthWrapper from "./Max-Width-Wrapper";
import Image from "next/image";
import { NavPage, SubPage } from "@/schemas/navSchemas";
import Link from "next/link";
import ModeToggle from "./Mode-Toggle";
import { HomeIcon, Info, Map, ListCheckIcon, Server } from "lucide-react";
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
    subPages: [
      {
        title: "Service 1",
        href: "/home/service1",
        icon: <HomeIcon />,
      },
      {
        title: "Service 2",
        href: "/home/service2",
        icon: <Info />,
      },
      {
        title: "Service 3",
        href: "/home/service3",
        icon: <Map size={24} />,
      },
      {
        title: "Service 4",
        href: "/home/service4",
        icon: <ListCheckIcon size={24} />,
      },
    ],
  },
  {
    title: "About",
    href: "/about",
    icon: <Info />,
  },
  {
    title: "Map",
    href: "/map",
    icon: <Map size={24} />,
  },
  {
    title: "FAQ",
    href: "/faq",
    icon: <ListCheckIcon size={24} />,
    subPages: [
      {
        title: "Server",
        href: "/faq/server",
        icon: <Server />,
      },
    ],
  },
];

const subPages: SubPage[] = [
  {
    title: "Service 1",
    href: "/service1",
    icon: <HomeIcon />,
    description: `Eiusmod sunt excepteur consequat deserunt ex eu non reprehenderit in laborum laborum. Pariatur minim et eiusmod occaecat ullamco nostrud. Amet amet consectetur anim anim eu sint. Id ex ex commodo excepteur cillum velit deserunt id sint eiusmod exerciation ad. Ad ut reprehenderit incididunt irure ipsum minim. Cupidatat pariatur esse est fugiat eu velit in. Ex est consequat ad ut dolore eiusmod.

Aliqua nisi non exercitation amet id cillum. Adipisicing aute id magna sint anim mollit exercitation deserunt amet dolore. Minim id enim amet ea cillum laboris quis officia deserunt. Ea commodo et in sit velit proident qui nostrud. Qui magna velit fugiat pariatur Lorem amet ut exercitation consectetur sunt non. Elit duis occaecat duis deserunt amet id commodo EthernetPort.`,
  },

  { title: "Service 2", href: "/service2", icon: <Info /> },
  { title: "Service 3", href: "/service3", icon: <Map size={24} /> },
  { title: "Service 4", href: "/service4", icon: <ListCheckIcon size={24} /> },
];
const TopNav: React.FC<TopNavProps> = () => {
  return (
    <header className="h-14 max-h-14 px-4 bg-background/60 flex flex-col items-center justify-center sticky top-0 border-b border-border/40 w-full border">
      <MaxWidthWrapper>
        <nav className="w-full flex  justify-start rounded-md shadow-md items-start px-4 bg-background/60 group flex-row">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              {" "}
              <Link href="/">
                <div className="flex items-center flex-row justify-start  bg-background/40 rounded w-full max-w-full group transition-colors ease-in-out duration-500">
                  <Image
                    src="/water-droplet-logo.svg"
                    alt="Logo"
                    width={512}
                    height={512}
                    layout="fit"
                    className={cn({
                      "flex justify-between h-8 w-8 md:w-12 md:h-12 items-center   group-hover:opacity-80":
                        true,
                    })}
                  />
                  <h2 className="text-small sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-primary group-hover:text-primary/80 pr-4">
                    Water Quality Checker
                  </h2>
                  <div className="flex flex-row">
                    <NavMenu pages={TopNavPages} subPages={subPages} />
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-row items-center">
              {" "}
              <ModeToggle />
            </div>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default TopNav;
