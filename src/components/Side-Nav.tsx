"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import type { SideNav, NavPage } from "@/schemas/navSchemas"; // Import the inferred type

interface SideNavProps {
  categories?: SideNav["pages"];
}

const SideNav: React.FC<SideNavProps> = ({ categories = [] }) => {
  return (
    <aside>
      <div className="bg-gradient-to-tr from-accent via-card to-background text-card-foreground  flex-col p-4 space-y-4 min-h-screen border  shadow h-screen sticky rounded-md hidden md:flex">
        {categories.map((category: NavPage) => (
          <div key={category.title}>
            <h2 className="lg:text-xs xl:text-base font-bold text-foreground mb-2 ml-4">
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
                    pointer-cursor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary "
                  >
                    <div className=""> {page.icon}</div>

                    <div className="hidden flex-col md:flex"> {page.title}</div>
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
