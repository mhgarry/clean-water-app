import React from "react";
import Link from "next/link";
import type { SideNav, NavPage } from "@/schemas/navSchemas"; // Import the inferred type

interface SideNavProps {
  categories?: SideNav["pages"];
}

const SideNav: React.FC<SideNavProps> = ({ categories = [] }) => {
  return (
    <aside>
      <div className="bg-card text-card-foreground flex flex-col p-4 space-y-4 border rounded-md shadow-xl h-[90vh] ">
        {categories.map((category: NavPage) => (
          <div key={category.title}>
            <h2 className="text-md font-bold text-foreground mb-2 ml-4">
              {category.title}
            </h2>
            <ul className="flex flex-col space-y-2">
              {category.pages.map((page: NavPage) => (
                <li key={page.path}>
                  <Link
                    href={page.path}
                    className="text-base
                    justify-start
                    items-center
                    font-medium text-foreground
                    hover:font-bold
                    hover:text-background hover:bg-foreground px-4 py-2 rounded-md flex flex-row gap-2
                    active:bg-foreground active:text-background active:font-bold
                    pointer-cursor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    {page.icon}
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideNav;
