import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import MaxWidthWrapper from "./MaxWidthWrapper";
import React from "react";
import Link from "next/link";
import type { SideNav, NavPage } from "@/schemas/navSchemas"; // Import the inferred type

interface SidebarNavProps {
  categories?: SideNav["pages"];
}

const SidebarNav: React.FC<SidebarNavProps> = ({ categories = [] }) => {
  return (
    <section className="w-full justify-center flex-center md:flex flex-col">
      <MaxWidthWrapper>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Water Advisories</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {categories.map((category) => (
                    <SidebarMenuButton key={category.title}>
                      <Link href={category.path}>
                        <a className="text-sm font-medium text-foreground hover:text-background hover:bg-foreground px-4 py-2 rounded-md flex items-center gap-2 ">
                          {category.icon}
                          {category.title}
                        </a>
                      </Link>
                    </SidebarMenuButton>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </MaxWidthWrapper>
    </section>
  );
};

export default SidebarNav;
