import React from "react";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "./Max-Width-Wrapper";
import { NavPage } from "../schemas/navSchemas";
import ModeToggle from "@/components/Mode-Toggle";
interface TopNavProps {
  pages: NavPage[];
}

const TopNav: React.FC<TopNavProps> = ({ pages }) => {
  return (
    // Apply the full-width background outside the MaxWidthWrapper
    <div className="w-full bg-primary flex justify-center">
      <MaxWidthWrapper>
        <nav className="flex py-3 px-4 items-center justify-start gap-8 w-full">
          <div className="flex flex-row justify-between items-center w-fit bg-card h-fit rounded-md md:justify-between dark:bg-background  dark:hover:bg-accent hover:bg-accent hover:transition-all">
            <Link
              href="/"
              className="flex flex-row gap-1 items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {" "}
              <h1 className="text-lg md:text-xl font-bold text-primary ml-3 max-h-8 h-8 lg:text-2xl dark:text-primary">
                Water Quality Reporter
              </h1>
              <Image
                src="/water-droplet-logo.png"
                alt="Logo"
                background-clip="border-box"
                background-color="transparent"
                width={32}
                height={32}
                className="object-cover rounded-md"
                alt-text="Water droplet logo for the navigation bar."
              />
            </Link>
          </div>
          {pages.map((page) => (
            <Link
              href={page.path || page.title}
              className=" text-md cursor-pointer hover:font-bold active:font-bold flex flex-row gap-1 items-center hover:border-b-2 hover:border-primary-foreground hover:box-border p-1 justify-center align-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:text-primary-foreground text-primary-foreground"
              key={page.path || "#"}
            >
              {page.icon}
              {page.title}
            </Link>
          ))}
          <ModeToggle />
        </nav>
      </MaxWidthWrapper>
    </div>
  );
};

export default TopNav;
