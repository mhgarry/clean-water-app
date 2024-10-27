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
    <div className="w-full bg-primary flex justify-center  px-12 md:px-4">
      {/* MaxWidthWrapper content centered using mx-auto */}
      <MaxWidthWrapper>
        <nav className="flex flex-row gap-4 justify-between items-center align-center w-full py-2 ">
          <div className="w-fit flex flex-row  rounded-md bg-background p-[0.25rem] hover:bg-accent cursor-pointer">
            <Link href="/" className="w-fit flex flex-row">
              <h2 className="ml-2 font-bold text-lg md:text-xl lg:text-2xl text-primary  rounded-md">
                Water Quality Reporter
              </h2>
              <Image
                src="/water-droplet-logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="object-cover rounded-md"
              />
            </Link>
          </div>
          <div className="w-fit flex flex-row justify-between gap-4">
            {pages.map((page) => (
              <Link
                href={page.path || page.title}
                className="text-md cursor-pointer hover:font-bold active:font-bold flex-row gap-1 items-center hover:border-b-2 hover:border-primary-foreground hover:box-border p-1 justify-center align-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:text-primary-foreground text-primary-foreground hidden md:flex"
                key={page.path || "#"}
              >
                {page.icon}
                {page.title}
              </Link>
            ))}
            <div className="w-full">
              <ModeToggle />
            </div>
          </div>
        </nav>
      </MaxWidthWrapper>
    </div>
  );
};

export default TopNav;
