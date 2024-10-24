import React from "react";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "./Max-Width-Wrapper";

interface NavPage {
  title: string;
  path: string;
  icon?: React.ReactNode;
}

interface TopNavProps {
  pages: NavPage[];
}

const TopNav: React.FC<TopNavProps> = ({ pages }) => {
  return (
    // Apply the full-width background outside the MaxWidthWrapper
    <div className="w-full bg-primary flex justify-center">
      <MaxWidthWrapper>
        <nav className="flex py-3 px-4 items-center justify-start gap-8">
          <div className="flex flex-row justify-start items-center w-fit bg-background h-fit rounded-md">
            <Link href="/" className="flex flex-row gap-1 items-center">
              {" "}
              <h1 className="text-3xl font-bold text-primary ml-3 max-h-8 h-8">
                Water Quality Reporter
              </h1>
              <Image
                src="/water-droplet-logo.png"
                alt="Logo"
                width={54}
                height={98}
              />
            </Link>
          </div>
          {pages.map((page) => (
            <Link
              href={page.path}
              className="text-background text-md cursor-pointer hover:font-bold active:font-bold flex flex-row gap-1 items-center hover:border-b-2 hover:border-background hover:box-border p-1 justify-center align-center"
              key={page.path}
            >
              {page.icon}
              {page.title}
            </Link>
          ))}
        </nav>
      </MaxWidthWrapper>
    </div>
  );
};

export default TopNav;
